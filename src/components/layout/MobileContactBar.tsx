import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function MobileContactBar() {
  const location = useLocation();

  if (location.pathname === '/contact') return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Link
        to="/contact"
        className="group flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
      >
        Me contacter
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
