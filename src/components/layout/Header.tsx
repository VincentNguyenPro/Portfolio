import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Parcours', path: '/about' },
  { name: 'Projets', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={cn(
              'text-sm font-semibold tracking-widest uppercase transition-colors',
              isTransparent ? 'text-white hover:text-white/80' : 'text-foreground hover:text-foreground/80'
            )}
          >
            {photographerInfo.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative text-sm font-medium tracking-wide transition-colors',
                    isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className={cn(
                        'absolute -bottom-1.5 left-0 right-0 h-px',
                        isTransparent ? 'bg-white' : 'bg-foreground'
                      )}
                    />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-9', isTransparent && 'text-white hover:bg-white/10')}
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium tracking-wide text-foreground hover:text-foreground/80"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
