import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface MobileCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
  /** Full track classes, including the responsive overrides that switch back to a grid on desktop. */
  trackClassName: string;
  /** Full per-item classes (width/shrink/snap), including the responsive overrides. */
  itemClassName: string;
  /** Class that hides the dots/prev-next nav once the desktop grid kicks in, e.g. "sm:hidden" or "md:hidden". */
  navClassName: string;
}

export function MobileCarousel<T>({
  items,
  renderItem,
  keyExtractor,
  trackClassName,
  itemClassName,
  navClassName,
}: MobileCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActive = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closest = 0;
      let closestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    updateActive();
    track.addEventListener('scroll', updateActive, { passive: true });
    return () => track.removeEventListener('scroll', updateActive);
  }, [items.length]);

  const scrollToIndex = useCallback((index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  return (
    <div>
      <div ref={trackRef} className={trackClassName}>
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

      <div className={navClassName}>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 flex-1">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-6 bg-foreground' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium tabular-nums shrink-0">
            {active + 1} / {items.length}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ArrowLeft className="size-4" />
            Précédent
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            disabled={active === items.length - 1}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            Suivant
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
