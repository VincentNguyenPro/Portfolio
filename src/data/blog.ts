export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string; // "Mois AAAA"
  category: 'Product' | 'IA' | 'Data' | 'Formation' | 'Événement';
  url: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'noe-formation-pm',
    title: 'Fin de ma formation Product Management — Noé promo 33',
    description:
      "Retour d'expérience sur 4 semaines intensives de formation Product Manager chez Noé : discovery, delivery, prototypage, restitution finale au Lead PM de BlaBlaCar.",
    date: 'Juin 2026',
    category: 'Formation',
    url: 'https://www.noe.pm/formation-product-manager-la-formation-pm-en-4-semaines-noe',
  },
  {
    id: 'claude-code-pms',
    title: 'Formation Claude Code chez Noé',
    description:
      "Comment Claude Code transforme la pratique des Product Managers : automatiser la discovery, accélérer le prototypage et la spec — une nouvelle boîte à outils IA-first.",
    date: 'Mai 2026',
    category: 'IA',
    url: 'https://www.noe.pm/claude-code-pour-pms',
  },
  {
    id: 'ia-transforme-pm',
    title: "Comment l'IA transforme le Product Management",
    description:
      "Conférence Le Wagon : retour sur les nouveaux workflows PM augmentés par l'IA — recherche utilisateur, écriture de specs, prototypes haute-fidélité en quelques heures.",
    date: 'Avril 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/comment-l-ia-transforme-le-product-management-HPFVtl',
  },
  {
    id: 'dust-ai-agent',
    title: "Atelier Dust — Build Your First AI Agent",
    description:
      "Atelier Dust x Eria chez Le Wagon : construire son premier agent IA, brancher des sources internes, orchestrer des actions — premières intuitions produit sur le design d'agents.",
    date: 'Mars 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/atelier-dust-build-your-first-ai-agent-5CkQZn',
  },
  {
    id: 'construire-ia-demain',
    title: "Construire l'IA de demain : défis et opportunités",
    description:
      "Conférence Le Wagon : panorama des défis techniques, produits et éthiques de la prochaine vague d'applications IA — entre LLM, agents et nouveaux UX.",
    date: 'Février 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/construire-l-ia-de-demain-defis-et-opportunites-SsjIsz',
  },
  {
    id: 'hackathon-lovable-join-lion',
    title: 'Hackathon Lovable chez Join Lion',
    description:
      "48h pour prototyper une application from scratch avec Lovable : ce que j'ai appris du build IA-first, du time-to-MVP et du nouveau rôle du PM dans la delivery.",
    date: 'Février 2026',
    category: 'Événement',
    url: 'https://luma.com/jybxjxu4?locale=fr&tk=Aimmjv',
  },
  {
    id: 'webshop-mollie-codex',
    title: 'Build Your Webshop with Mollie & Codex',
    description:
      "Atelier Le Wagon : construire une boutique en ligne fonctionnelle en s'appuyant sur Codex et Mollie pour les paiements — démo end-to-end et lessons learned.",
    date: 'Janvier 2026',
    category: 'Product',
    url: 'https://luma.com/0ivqgaik?tk=hNsezQ',
  },
];
