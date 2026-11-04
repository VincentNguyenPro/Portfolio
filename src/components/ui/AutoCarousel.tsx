import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

interface AutoCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
  /** Per-item classes: width, shrink and snap alignment (the width decides how many items are visible). */
  itemClassName: string;
  ariaLabel: string;
  intervalMs?: number;
}

/**
 * Endless scroll-snap carousel that keeps moving to the right on its own while it is on screen.
 *
 * The items are rendered three times (before, middle, after). The visitor always rests on the middle
 * copy: once a move settles on an outer copy, the track jumps by exactly one period to the identical
 * card in the middle copy, so the motion never rewinds. The outer copies are inert.
 *
 * Autoplay pauses while the pointer is actively moving over it, on keyboard focus, after a touch and
 * when the tab is hidden. A parked cursor does not stop it. Visitors who ask for reduced motion start
 * paused; the play/pause button lets anyone change that.
 */
export function AutoCarousel<T>({
  items,
  renderItem,
  keyExtractor,
  itemClassName,
  ariaLabel,
  intervalMs = 3500,
}: AutoCarouselProps<T>) {
  const n = items.length;
  const looping = n > 1;
  const copies = looping ? 3 : 1;
  const middleStart = looping ? n : 0;

  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const lastMoveRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const scrollingUntilRef = useRef(0);
  const settleTimerRef = useRef<number>();
  const logicalRef = useRef(0);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3,
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const paddingLeft = () => {
    const track = trackRef.current;
    return track ? parseFloat(window.getComputedStyle(track).paddingLeft) || 0 : 0;
  };

  /** Offset of the track's scroll position that puts rendered card `d` on the left edge. */
  const offsetTo = (d: number) => {
    const track = trackRef.current;
    const target = itemRefs.current[d];
    if (!track || !target) return null;
    return target.getBoundingClientRect().left - track.getBoundingClientRect().left - paddingLeft();
  };

  /** Rendered card closest to the left edge, read from the live scroll position. */
  const readDom = useCallback(() => {
    const track = trackRef.current;
    if (!track) return middleStart;
    const trackLeft = track.getBoundingClientRect().left + paddingLeft();
    let closest = middleStart;
    let closestDist = Infinity;
    itemRefs.current.forEach((el, d) => {
      if (!el) return;
      const dist = Math.abs(el.getBoundingClientRect().left - trackLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = d;
      }
    });
    return closest;
  }, [middleStart]);

  const jump = (left: number) => {
    trackRef.current?.scrollTo({ left, behavior: 'auto' });
  };

  /** Put the track back on the middle copy without any visible change. */
  const normalize = useCallback(() => {
    const track = trackRef.current;
    if (!track || !looping) return;
    const first = itemRefs.current[0];
    const second = itemRefs.current[n];
    if (!first || !second) return;
    const period = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
    const d = readDom();
    if (d < n) jump(track.scrollLeft + period);
    else if (d >= 2 * n) jump(track.scrollLeft - period);
  }, [looping, n, readDom]);

  const handleScroll = () => {
    const d = readDom();
    logicalRef.current = looping ? d % n : d;
    setActive(logicalRef.current);
    window.clearTimeout(settleTimerRef.current);
    settleTimerRef.current = window.setTimeout(normalize, 140);
  };

  // Start on the middle copy, and stay on it (same logical card) when the layout is resized.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const place = () => {
      const offset = offsetTo(middleStart + logicalRef.current);
      if (offset !== null) jump(track.scrollLeft + offset);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(track);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middleStart, n]);

  useEffect(() => () => window.clearTimeout(settleTimerRef.current), []);

  const scrollToDom = useCallback((d: number) => {
    const track = trackRef.current;
    const offset = offsetTo(d);
    if (!track || offset === null) return;
    scrollingUntilRef.current = Date.now() + 900;
    track.scrollTo({ left: track.scrollLeft + offset, behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = useCallback(() => scrollToDom(readDom() + 1), [readDom, scrollToDom]);
  const prev = useCallback(() => scrollToDom(readDom() - 1), [readDom, scrollToDom]);

  /** Dot click: go to logical card `k` through whichever copy is nearest. */
  const goTo = (k: number) => {
    const d = readDom();
    let best = middleStart + k;
    for (let c = 0; c < copies; c++) {
      const candidate = c * n + k;
      if (Math.abs(candidate - d) < Math.abs(best - d)) best = candidate;
    }
    scrollToDom(best);
  };

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    if (!inView || !playing || !looping) return;
    const id = window.setInterval(() => {
      const pointerBusy = hoveredRef.current && Date.now() - lastMoveRef.current < 2500;
      if (
        pointerBusy ||
        focusedRef.current ||
        document.hidden ||
        Date.now() < pausedUntilRef.current ||
        Date.now() < scrollingUntilRef.current
      )
        return;
      nextRef.current();
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [inView, playing, looping, intervalMs]);

  const pauseAfterTouch = () => {
    pausedUntilRef.current = Date.now() + 8000;
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label={ariaLabel}
      data-autoplay={playing ? 'on' : 'off'}
      onMouseEnter={() => {
        hoveredRef.current = true;
        lastMoveRef.current = Date.now();
      }}
      onMouseMove={() => (lastMoveRef.current = Date.now())}
      onMouseLeave={() => (hoveredRef.current = false)}
      onFocusCapture={() => (focusedRef.current = true)}
      onBlurCapture={() => (focusedRef.current = false)}
      onTouchStart={pauseAfterTouch}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-2 px-2 pt-1 pb-6 -mb-2 scroll-pl-2"
      >
        {Array.from({ length: copies * n }, (_, d) => {
          const item = items[d % n];
          const isClone = looping && (d < n || d >= 2 * n);
          return (
            <div
              key={isClone ? `${keyExtractor(item, d % n)}-clone-${d}` : keyExtractor(item, d % n)}
              ref={(el) => (itemRefs.current[d] = el)}
              className={itemClassName}
              {...(isClone ? { 'aria-hidden': true, inert: '' } : {})}
            >
              {renderItem(item, d % n)}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 flex-1">
          {Array.from({ length: n }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Aller à la diapositive ${i + 1}`}
              aria-current={i === active}
              onClick={() => {
                pauseAfterTouch();
                goTo(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-foreground' : 'w-1.5 bg-border hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={playing ? 'Mettre le défilement automatique en pause' : 'Lancer le défilement automatique'}
            aria-pressed={!playing}
            onClick={() => setPlaying((p) => !p)}
            className="size-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          <button
            type="button"
            aria-label="Projet précédent"
            onClick={() => {
              pauseAfterTouch();
              prev();
            }}
            className="size-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Projet suivant"
            onClick={() => {
              pauseAfterTouch();
              next();
            }}
            className="size-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
