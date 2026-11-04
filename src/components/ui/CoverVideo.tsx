import { useEffect, useRef, useState } from 'react';

interface CoverVideoProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Muted looping preview that replaces a tile's still image. It sits above the <img> (which stays
 * as the fallback), plays only while at least half of it is on screen, and stops when the page is
 * hidden or when an enclosing AutoCarousel is paused. Nothing is rendered for visitors who asked
 * for reduced motion, so they keep the still image.
 */
export function CoverVideo({ src, poster, className }: CoverVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    const carousel = ref.current?.closest<HTMLElement>('[data-autoplay]');
    if (!carousel) return;
    const sync = () => setCarouselPaused(carousel.dataset.autoplay === 'off');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(carousel, { attributes: true, attributeFilter: ['data-autoplay'] });
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const update = () => {
      if (visible && !carouselPaused && !document.hidden) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, [visible, carouselPaused, reduced]);

  if (reduced) return null;

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    />
  );
}
