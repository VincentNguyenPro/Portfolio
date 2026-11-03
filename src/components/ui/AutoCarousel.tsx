import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
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
 * Scroll-snap carousel that advances on its own while it is on screen.
 * It pauses while the pointer is actively moving over it, on keyboard focus and after a touch,
 * and when the tab is hidden. A parked cursor does not stop it. Visitors who ask for reduced
 * motion start paused; the play/pause button lets anyone change that.
 */
export function AutoCarousel<T>({
  items,
  renderItem,
  keyExtractor,
  itemClassName,
  ariaLabel,
  intervalMs = 3500,
}: AutoCarouselProps<T>) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const lastMoveRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const scrollingUntilRef = useRef(0);
  const [active, setActive] = useState(0);
  const [pageCount, setPageCount] = useState(items.length);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (query.matches) setPlaying(false);
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

  const maxScroll = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth - track.clientWidth : 0;
  }, []);

  /** Index of the page the track is on, read from the live scroll position (never from stale state). */
  const readIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const lastPage = Math.max(0, pageCount - 1);
    if (maxScroll() > 0 && track.scrollLeft >= maxScroll() - 4) return lastPage;
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let closestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.getBoundingClientRect().left - trackLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return Math.min(closest, lastPage);
  }, [maxScroll, pageCount]);

  const updateActive = useCallback(() => setActive(readIndex()), [readIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const first = itemRefs.current[0];
      if (!first) return;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap) || 0;
      const visible = Math.max(1, Math.round((track.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) + gap) / (first.offsetWidth + gap)));
      setPageCount(Math.max(1, items.length - visible + 1));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [items.length]);

  useEffect(() => {
    updateActive();
  }, [updateActive]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const target = itemRefs.current[index];
    if (!track || !target) return;
    const paddingLeft = parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
    const offset = target.getBoundingClientRect().left - track.getBoundingClientRect().left - paddingLeft;
    scrollingUntilRef.current = Date.now() + 900;
    track.scrollTo({ left: track.scrollLeft + offset, behavior: 'smooth' });
  }, []);

  const next = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = maxScroll() > 0 && track.scrollLeft >= maxScroll() - 4;
    scrollToIndex(atEnd ? 0 : Math.min(readIndex() + 1, items.length - 1));
  }, [items.length, maxScroll, readIndex, scrollToIndex]);

  const prev = useCallback(() => {
    scrollToIndex(Math.max(0, readIndex() - 1));
  }, [readIndex, scrollToIndex]);

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    if (!inView || !playing) return;
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
  }, [inView, playing, intervalMs]);

  const pauseAfterTouch = () => {
    pausedUntilRef.current = Date.now() + 8000;
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label={ariaLabel}
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
        onScroll={updateActive}
        className="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-2 px-2 pt-1 pb-6 -mb-2 scroll-pl-2"
      >
        {items.map((item, i) => (
          <div
            key={keyExtractor(item, i)}
            ref={(el) => (itemRefs.current[i] = el)}
            className={itemClassName}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 flex-1">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Aller à la diapositive ${i + 1}`}
              aria-current={i === active}
              onClick={() => {
                pauseAfterTouch();
                scrollToIndex(i);
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
            disabled={active === 0}
            className="size-9 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
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
