import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MobileContactSheet } from './MobileContactSheet';

export function MobileContactBar() {
  const location = useLocation();
  const [ctaVisible, setCtaVisible] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const isAnyCtaVisible = () =>
      Array.from(document.querySelectorAll('[data-contact-cta]')).some((el) => {
        const r = el.getBoundingClientRect();
        return r.bottom > 0 && r.top < window.innerHeight;
      });

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      if (Math.abs(delta) > 8) {
        setHiddenByScroll(delta > 0 && y > 120);
        lastScrollY.current = y;
      }
      setCtaVisible(isAnyCtaVisible());
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const id = window.setInterval(update, 500);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.clearInterval(id);
    };
  }, [location.pathname]);

  if (location.pathname === '/contact' || ctaVisible) return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ease-out ${
        hiddenByScroll ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <MobileContactSheet>
        <button
          type="button"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Me contacter
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </MobileContactSheet>
    </div>
  );
}
