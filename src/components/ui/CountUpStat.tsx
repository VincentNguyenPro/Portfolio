import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpStatProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function CountUpStat({ target, prefix = '', suffix = '', label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="group space-y-1 cursor-default"
      onClick={() => setTapped(true)}
      onTransitionEnd={() => setTapped(false)}
    >
      <div
        className={`text-2xl md:text-4xl font-semibold tracking-tight text-blue-600 origin-left transition-transform duration-300 ease-out group-hover:scale-110 ${
          tapped ? 'scale-110' : ''
        }`}
      >
        {prefix}
        {value.toLocaleString('fr-FR')}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-light">{label}</div>
    </div>
  );
}
