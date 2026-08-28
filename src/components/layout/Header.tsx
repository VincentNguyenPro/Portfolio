import { Link, useLocation } from 'react-router-dom';
import { Menu, Linkedin, Briefcase, ArrowRight, LayoutDashboard, Car, PieChart, Truck, Calculator } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Parcours', path: '/parcours' },
  { name: 'Projets', path: '/projets' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const menuNavLinks = navLinks.filter((link) => link.path !== '/projets');

const projectShortTitles: Record<string, string> = {
  'saas-pilotage-dsi': 'SaaS pilotage DSI',
  'blablacar-first-ride': 'Premier trajet BlaBlaCar',
  'bartle-pilotage-dsi': 'Pilotage coûts DSI',
  'renault-supply-chain': 'Supply Chain Renault',
  'renault-costing': 'Costing Renault',
};

const projectIcons: Record<string, typeof Briefcase> = {
  'saas-pilotage-dsi': LayoutDashboard,
  'blablacar-first-ride': Car,
  'bartle-pilotage-dsi': PieChart,
  'renault-supply-chain': Truck,
  'renault-costing': Calculator,
};

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = false;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 md:h-16">
          <Link
            to="/"
            className={cn(
              'text-base font-semibold tracking-widest uppercase transition-colors',
              isTransparent ? 'text-white hover:text-white/80' : 'text-foreground hover:text-foreground/80'
            )}
          >
            Accueil
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative text-base font-medium tracking-wide transition-colors',
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
            <a
              href={photographerInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center size-11 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <a
              href={photographerInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center size-11 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-11', isTransparent && 'text-white hover:bg-white/10')}
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="rounded-t-3xl max-h-[85vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
              >
                <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-border" />
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Liens de navigation vers les différentes pages du site
                </SheetDescription>

                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">
                  Navigation
                </p>
                <nav className="flex flex-col">
                  {menuNavLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 text-base font-medium text-foreground border-b border-border last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <Link
                  to="/projets"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-foreground border-t border-border pt-3 mb-2 hover:text-blue-600 transition-colors"
                >
                  Projets
                </Link>
                <nav className="flex flex-col">
                  {projects.map((project) => {
                    const Icon = projectIcons[project.slug] ?? Briefcase;
                    return (
                      <Link
                        key={project.slug}
                        to={`/projet/${project.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2"
                      >
                        <span className="shrink-0 size-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
                          <Icon className="size-3.5 text-blue-600" />
                        </span>
                        <span className="flex-1 min-w-0 truncate text-sm font-medium text-foreground">
                          {projectShortTitles[project.slug] ?? project.title}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mt-6"
                >
                  Me contacter
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
