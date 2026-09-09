import type { Project, ProjectCategory } from '@/types';

export const categoryLabels: Record<ProjectCategory, string> = {
  finance: 'Finance',
  mobile: 'Mobile',
  transformation: 'Transformation',
  product: 'Product',
};
import blablacarCover from '@/assets/blablacar-app.webp';
import bartleCover from '@/assets/bartle-cover.jpg';
import renaultSupplyCover from '@/assets/renault-supply-cover.webp';
import renaultCostingCover from '@/assets/renault-costing-cover.webp';
import dsiFinopsCover from '@/assets/dsi-finops-saas.webp';

export const projects: Project[] = [
  {
    id: '0',
    slug: 'saas-pilotage-dsi',
    title: 'SaaS de pilotage financier pour les DSI',
    company: 'Projet personnel',
    role: 'Founder · Product Manager',
    period: '2026 - En cours',
    category: 'finance',
    summary:
      "Application SaaS de pilotage du P&L DSI conçue pour piloter sérieusement un budget DSI au-delà d'Excel.",
    context:
      "Après plusieurs missions au cœur des directions Finance et IT, j'ai constaté qu'Excel ne suffisait plus pour piloter sérieusement un P&L DSI. Je construis une application SaaS dédiée, conçue avec les outils IA modernes.",
    problem:
      "Comment offrir aux DSI un outil de pilotage P&L moderne, simple et collaboratif, sans la lourdeur des ERP ni les limites d'Excel ?",
    approach: [
      {
        heading: 'Pain point validé sur le terrain',
        body: "Plusieurs années passées à observer le même besoin chez des directions DSI / Finance de grands groupes.",
        result: 'Pain point validé auprès de directions DSI',
      },
      {
        heading: 'Discovery & prototypage IA',
        body: "Itérations rapides sur les maquettes et le MVP en s'appuyant sur les outils IA modernes (Lovable, Claude Code, Cursor).",
        result: 'Architecture conçue native IA',
      },
      {
        heading: 'Build 0 → 1',
        body: "Construction d'une version alpha couvrant la consolidation budgétaire, le suivi CAPEX / OPEX / MS et la projection annuelle.",
        result: 'Version alpha en construction',
      },
    ],
    results: [
      "Pain point validé auprès de directions DSI",
      "Version alpha en construction",
      "Architecture conçue native IA",
    ],
    metrics: [
      { value: 'Pain point', label: 'validé terrain' },
      { value: 'IA', label: 'outils modernes' },
      { value: '0 → 1', label: 'en construction' },
    ],
    stack: ['Lovable', 'Claude Code', 'React', 'Supabase', 'TypeScript'],
    team: ['Solo — Founder & Product Manager (moi)'],
    missionTypes: ['Discovery', 'Prototypage IA', '0 → 1'],
    retro:
      "Le pain point est validé et l'architecture IA-native tient la route. Prochaine étape : finaliser la version alpha, recruter 3 à 5 DSI pilotes pour un test terrain, puis itérer sur le pricing avant une v1 commerciale.",
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    coverImage: dsiFinopsCover,
    badge: '🚧 En cours',
  },
  {
    id: '1',
    slug: 'blablacar-first-ride',
    title: 'Améliorer le taux de réussite du premier trajet',
    company: 'BlaBlaCar',
    role: 'Product Manager',
    period: '2026',
    category: 'mobile',
    summary:
      "Réduire l'écart entre nouveaux conducteurs (30 %) et conducteurs récurrents (50 %) sur le taux de réussite du premier trajet.",
    context:
      "Application mobile iOS BlaBlaCar. Sujet de discovery confié dans le cadre de la formation Product Management Noé, restitué au Lead PM de BlaBlaCar.",
    problem:
      "Comment améliorer le taux de réussite du premier trajet des nouveaux conducteurs (30 %) versus les conducteurs récurrents (50 %) ? Objectif visé : +10 pts chez les nouveaux conducteurs.",
    approach: [
      {
        heading: 'Analyse de données',
        body: "Étude de 100 000 trajets pour identifier les points de friction et les segments à fort potentiel d'amélioration.",
      },
      {
        heading: 'Recherche utilisateur',
        body: "9 entretiens qualitatifs avec des nouveaux conducteurs pour comprendre la perception du premier trajet et les frictions vécues.",
      },
      {
        heading: 'Priorisation',
        body: "Solutions classées sur une matrice impact / effort pour sélectionner 3 pistes à fort impact.",
      },
      {
        heading: 'Prototypage & user testing',
        body: "User testing modéré, itérations UX / UI et UX writing sur les 3 solutions retenues jusqu'au prototype haute-fidélité.",
        result: 'Prototype haute-fidélité validé en user-testing, restitué au Lead PM de BlaBlaCar',
      },
    ],
    results: [
      "Prototype haute-fidélité validé en user-testing",
      "Restitution au Lead PM de BlaBlaCar",
    ],
    metrics: [
      { value: '100k', label: 'trajets analysés' },
      { value: '9', label: 'entretiens utilisateurs' },
      { value: '3', label: 'solutions prototypées' },
    ],
    stack: ['Figma', 'Notion', 'User testing', 'SQL'],
    team: ['1 Product Manager (moi) — mission solo', 'Restitution au Lead PM BlaBlaCar'],
    missionTypes: ['Discovery', 'Recherche utilisateur', 'Prototypage'],
    retro:
      "Le prototype a été validé en test utilisateur et restitué au Lead PM de BlaBlaCar. Prochaine étape (hors périmètre de la formation) : cadrer un A/B test en production sur les 3 pistes retenues pour confirmer le gain de +10 pts visé chez les nouveaux conducteurs.",
    coverGradient: 'from-sky-500 via-indigo-500 to-violet-600',
    coverImage: blablacarCover,
  },
  {
    id: '2',
    slug: 'bartle-pilotage-dsi',
    title: 'Outil de consolidation et pilotage des coûts DSI',
    company: 'Bartle',
    role: 'Product Manager - SI Finance & Pilotage budgétaire',
    period: '2023 - 2025',
    category: 'finance',
    summary:
      "Construire, piloter et optimiser le budget DSI dans un contexte de restructuration - MVP livré en 2 mois.",
    context:
      "Mission de Product Management chez Bartle pour un grand groupe en restructuration. Portefeuille de projets DSI de 50 M€ à 230 M€.",
    problem:
      "Comment construire, piloter et optimiser le budget DSI dans un contexte de restructuration ?",
    approach: [
      {
        heading: 'Discovery',
        body: "Ateliers avec +8 directeurs métiers pour identifier les dépenses IT et formaliser les besoins en reporting.",
        result: '+8 directions métiers impliquées dans le cadrage',
      },
      {
        heading: 'Conception itérative',
        body: "Interviews des chefs de pôle DSI pour définir les axes analytiques prioritaires, prototypage en plusieurs itérations.",
      },
      {
        heading: 'Delivery & déploiement',
        body: "Développement du MVP livré en 2 mois et formation des directeurs de pôle à l'outil.",
        result: 'MVP livré en 2 mois',
      },
      {
        heading: 'Recommandation stratégique',
        body: "Étude d'opportunité sur Abraxio (SaaS dédié au pilotage financier DSI).",
        result: '-5 % de coûts DSI vs N-1 (CAPEX / OPEX / MS)',
      },
    ],
    results: [
      "MVP livré en 2 mois",
      "-5 % de coûts DSI vs N-1 (CAPEX / OPEX / MS)",
      "Adoption par +8 directions métiers",
    ],
    metrics: [
      { value: '2 mois', label: 'pour livrer le MVP' },
      { value: '-5 %', label: 'coûts DSI vs N-1' },
      { value: '230 M€', label: 'portefeuille piloté' },
    ],
    stack: ['Power BI', 'Excel', 'SharePoint', 'Notion', 'Miro'],
    team: ['1 Product Manager (moi)', 'Sponsors : direction DSI & direction Finance', '+8 directeurs métiers impliqués'],
    missionTypes: ['Discovery', 'MVP', 'Recommandation stratégique'],
    retro:
      "Le MVP a été adopté par les 8 directions concernées et a permis -5 % de coûts DSI dès la première année. Prochaine étape : arbitrage sur l'opportunité Abraxio pour industrialiser l'outil au-delà du MVP interne.",
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    coverImage: bartleCover,
  },
  {
    id: '3',
    slug: 'renault-supply-chain',
    title: 'Consolidation financière Supply Chain monde',
    company: 'Renault',
    role: 'Product Owner Finance & Responsable Transformation',
    period: '2020 - 2023',
    category: 'transformation',
    summary:
      "Réduire les délais de livraison des tableaux de bord de coûts Supply Chain monde - clôture de J+10 à J+5.",
    context:
      "Outil de consolidation financière dédié à la Supply Chain Renault, équipe de 4 personnes (1 Tech Lead + 3 développeurs), budget 8 M€, +25 ETP contrôleurs utilisateurs dans le monde.",
    problem:
      "Comment réduire les délais de livraison des tableaux de bord de coûts Supply Chain monde tout en améliorant leur fiabilité ?",
    approach: [
      {
        heading: 'Pilotage de la roadmap',
        body: "Priorisation, gestion du backlog, formation et support aux équipes controlling monde (+25 ETP).",
        result: '+25 ETP formés et accompagnés',
      },
      {
        heading: 'Delivery Scrum',
        body: "Écriture des spécifications, animation des cérémonies agiles, QA et communication des releases.",
        result: '-50 % de délais de clôture (J+10 → J+5)',
      },
      {
        heading: 'Consolidation des coûts',
        body: "Consolidation des coûts logistiques amont et aval (1,1 Md€) avec recherche systématique d'optimisations.",
        result: '-5 % de coûts Supply Chain monde vs N-1',
      },
    ],
    results: [
      "-50 % de délais de clôture (J+10 → J+5)",
      "-5 % de coûts Supply Chain monde vs N-1",
      "+25 ETP formés et accompagnés",
    ],
    metrics: [
      { value: '-50 %', label: 'délais de clôture' },
      { value: '1,1 Md€', label: 'coûts consolidés' },
      { value: '8 M€', label: 'budget produit' },
    ],
    stack: ['SAP', 'Lumira', 'Power BI', 'Jira', 'Scrum'],
    scope: 'Budget 8 M€ · 1 Tech Lead + 3 développeurs · +25 ETP utilisateurs monde',
    team: ['1 Product Owner Finance (moi)', '1 Tech Lead', '3 développeurs', '+25 ETP contrôleurs utilisateurs dans le monde'],
    missionTypes: ['Product roadmap', 'Delivery Scrum', 'Optimisation'],
    retro:
      "La clôture est passée de J+10 à J+5 et +25 contrôleurs ont été formés à l'outil. Prochaine étape : industrialiser la consolidation sur de nouveaux périmètres logistiques et automatiser davantage les contrôles de cohérence.",
    coverGradient: 'from-rose-500 via-orange-500 to-amber-500',
    coverImage: renaultSupplyCover,
  },
  {
    id: '4',
    slug: 'renault-costing',
    title: "Remplacement et déploiement mondial d'outils de Costing",
    company: 'Renault',
    role: 'Product Owner Outils Costing',
    period: '2016 - 2020',
    category: 'product',
    summary:
      "Remplacer, déployer et faire adopter de nouveaux outils de costing auprès de +250 utilisateurs dans 12 pays.",
    context:
      "Refonte des outils de costing Renault. Équipe de 4 personnes (1 Tech Lead + 3 développeurs), budget 10 M€, +250 ETP utilisateurs dans 12 pays.",
    problem:
      "Comment assurer le remplacement, le déploiement et l'adoption d'outils de costing critiques à l'échelle internationale ?",
    approach: [
      {
        heading: 'Spécifications & qualité',
        body: "Écriture des spécifications techniques et fonctionnelles, réalisation des tests de recette.",
        result: "+15 % de fiabilité et rapidité d'exécution des calculs",
      },
      {
        heading: 'Analyses statistiques',
        body: "Analyses d'usage des modèles de costing pour prioriser les évolutions à plus fort impact.",
      },
      {
        heading: 'Conduite du changement',
        body: "Conception et déploiement du plan de conduite du changement à 250 collaborateurs, dans 12 pays.",
        result: "95 % de taux d'adoption, déploiement réussi dans 12 pays",
      },
    ],
    results: [
      '95 % de taux d\'adoption',
      "+15 % de fiabilité et rapidité d'exécution des calculs",
      "Déploiement réussi dans 12 pays",
    ],
    metrics: [
      { value: '95 %', label: "taux d'adoption" },
      { value: '+15 %', label: 'fiabilité & vitesse' },
      { value: '12', label: 'pays déployés' },
    ],
    stack: ['SAP', 'Excel', 'SQL', 'Cycle en V'],
    scope: 'Budget 10 M€ · 1 Tech Lead + 3 développeurs · +250 ETP dans 12 pays',
    team: ['1 Product Owner Costing (moi)', '1 Tech Lead', '3 développeurs', '+250 utilisateurs formés dans 12 pays'],
    missionTypes: ['Refonte', 'Déploiement international', 'Conduite du changement'],
    retro:
      "95 % d'adoption et un déploiement réussi dans 12 pays, avec des calculs 15 % plus fiables et rapides. Prochaine étape : capitaliser sur ce référentiel costing pour l'étendre à de nouveaux périmètres produits.",
    coverGradient: 'from-slate-700 via-slate-900 to-zinc-900',
    coverImage: renaultCostingCover,
  },
];

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNavigation(currentSlug: string) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
