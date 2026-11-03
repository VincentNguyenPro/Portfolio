import { photographerInfo } from '@/data/photographer';

export const SITE_URL = 'https://vincentnguyen.pro';

/** Share image used by every page that has no image of its own (see public/og/home.jpg). */
export const DEFAULT_OG_IMAGE = '/og/home.jpg';

/** Share images generated from the covers at build time (scripts/generate-static-pages.mjs). */
export const blogOgImage = (slug: string) => `/og/blog-${slug}.jpg`;
export const projectOgImage = (slug: string) => `/og/projet-${slug}.jpg`;

export interface PageMeta {
  exactTitle: string;
  description: string;
}

/**
 * Title and description of each fixed page. Read both by the pages (SEOHead) and by the build
 * step that writes one static HTML file per URL, so link previews and the app always agree.
 */
export const staticPageMeta: Record<string, PageMeta> = {
  '/': {
    exactTitle: 'Vincent Nguyen — Product Manager & Product Owner | Finance & SI | Paris',
    description:
      "Portfolio de Vincent Nguyen, Product Manager & Product Owner avec 10 ans d'expérience en SI Finance et transformation digitale. Basé à Paris, disponible immédiatement.",
  },
  '/parcours': {
    exactTitle: 'Parcours — Vincent Nguyen Product Manager',
    description:
      "10 ans d'expérience en Product Management : Renault, Bartle, BlaBlaCar. Expertise Finance & SI, transformation digitale.",
  },
  '/projets': {
    exactTitle: 'Projets — Vincent Nguyen Product Manager',
    description:
      'Découvrez les projets produit de Vincent Nguyen : BlaBlaCar, Bartle, Renault. Outils critiques, finance SI, supply chain.',
  },
  '/blog': {
    exactTitle: 'Blog — Vincent Nguyen | Product, IA & Innovation',
    description:
      "Carnets de bord Product Management, IA et Innovation. Conférences, hackathons, retours d'expérience terrain.",
  },
  '/contact': {
    exactTitle: 'Contact — Vincent Nguyen Product Manager',
    description: `Contactez Vincent Nguyen, Product Manager - ${photographerInfo.availability}.`,
  },
};
