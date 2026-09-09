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
import cardomintCover from '@/assets/cardomint-cover.webp';
import kostbaseShowback from '@/assets/kostbase-showback.webp';
import kostbaseFournisseurs from '@/assets/kostbase-fournisseurs.webp';
import cardomintMesCartes from '@/assets/cardomint-mes-cartes.webp';
import cardomintCatalogue from '@/assets/cardomint-catalogue.webp';
import cardomintDashboard from '@/assets/cardomint-dashboard.webp';
import cardomintPartage from '@/assets/cardomint-partage.webp';
import blablacarSponsorship from '@/assets/blablacar-sponsorship.webp';
import blablacarProfileReward from '@/assets/blablacar-profile-reward.webp';
import blablacarDepartureTime from '@/assets/blablacar-departure-time.webp';

export const projects: Project[] = [
  {
    id: '0',
    slug: 'saas-pilotage-dsi',
    title: 'Plateforme de gouvernance financière IT',
    company: 'Kostbase',
    role: 'Founder · Product Manager',
    period: '2026 - En cours',
    category: 'finance',
    summary:
      "Plateforme qui relie budgets, projets, contrats fournisseurs, ressources et empreinte carbone dans une seule source de vérité, pour arbitrer chaque euro dépensé en SI.",
    context:
      "Après plusieurs missions au cœur des directions Finance et IT, j'ai constaté que Finance, IT, Achats et PMO ne pilotent jamais la dépense IT avec les mêmes chiffres, faute de référentiel commun. Je construis Kostbase pour réconcilier ces données en une source unique de vérité, avec les outils IA modernes.",
    problem:
      "Comment donner à la DSI, la Finance, les Achats et le PMO une vision unique et fiable de la dépense IT - budgets, contrats, ressources, carbone - pour arbitrer et détecter les coûts cachés avant qu'ils ne deviennent des pertes ?",
    approach: [
      {
        heading: 'Pain point validé sur le terrain',
        body: "Plusieurs années passées à observer le même besoin chez des directions DSI / Finance de grands groupes.",
        result: 'Pain point validé auprès de directions DSI',
      },
      {
        heading: "Conception d'une plateforme multi-métiers",
        body: "Modélisation d'un référentiel commun reliant Finance (budget / réel), IT (cloud / assets), PMO (projets / ressources), Achats (contrats / fournisseurs) et RSE (carbone / CSRD).",
        result: '9 modules construits et en ligne sur 10 prévus',
        image: kostbaseShowback,
      },
      {
        heading: 'Moteur de détection des coûts cachés',
        body: "Construction d'un système d'alertes qui rattache chaque dérive à son impact financier, son urgence et son responsable - contrats à renouveler, sur-staffing, licences sous-utilisées, prestations sans projet actif.",
        result: 'Moteur d\'alerte opérationnel, illustré sur données de démonstration',
        image: kostbaseFournisseurs,
      },
    ],
    results: [
      '9 modules construits et en ligne sur 10 prévus (cockpit, budget & showback, arbitrage PMO, Gantt, validations, fournisseurs, temps, base de données, export COMEX)',
      'Moteur de détection des coûts cachés opérationnel (contrats, sur-staffing, licences, carbone)',
      'Architecture conçue native IA',
    ],
    metrics: [
      { value: '9', label: 'modules en ligne' },
      { value: '6', label: 'métiers réconciliés' },
      { value: '0 → 1', label: 'plateforme en construction' },
    ],
    stack: ['Lovable', 'Claude Code', 'React', 'Supabase', 'TypeScript'],
    team: ['Solo — Founder & Product Manager (moi)'],
    missionTypes: ['Discovery', 'ITFM & FinOps', '0 → 1'],
    retro:
      "9 des 10 modules prévus sont déjà en ligne, avec un moteur de détection des coûts cachés fonctionnel sur données de démonstration. Prochaine étape : embarquer les premières organisations pilotes pour valider le rattachement Finance / IT / PMO / Achats sur de vraies données, puis finaliser le module Export COMEX.",
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
      "Application mobile iOS BlaBlaCar. Sujet de discovery confié en équipe de 3, dans le cadre de la formation Product Management Noé, restitué au Lead PM de BlaBlaCar.",
    problem:
      "Comment améliorer le taux de réussite du premier trajet des nouveaux conducteurs (30 %) versus les conducteurs récurrents (50 %) ? Objectif visé : +10 pts chez les nouveaux conducteurs.",
    approach: [
      {
        heading: 'Analyse de données',
        body: "Étude de 100 000 lignes de trajets pour isoler les facteurs corrélés au taux de mise en relation des nouveaux conducteurs (vérification d'identité, photo de profil, nombre d'avis, prix, créneau...).",
        result: "Facteur le plus impactant identifié : la vérification d'identité (+12 % d'uplift, +3,8 pts d'impact final sur 31 % des newbies)",
      },
      {
        heading: 'Recherche utilisateur',
        body: "9 entretiens qualitatifs (6 conducteurs, 3 passagers) pour comprendre les critères de confiance et les frictions du premier trajet - limite assumée : aucun conducteur réellement newbie dans l'échantillon disponible.",
        result: "Insight clé : la note et les avis sont le premier critère de choix d'un conducteur pour les passagers",
      },
      {
        heading: 'Solution 1 - Parrainage communautaire',
        body: "Badge « Parrainé » affiché sur le profil dès que le nouveau conducteur a reçu 3 avis de membres vérifiés ayant déjà réalisé un trajet, puis retiré après son premier trajet complété.",
        result: "Test utilisateur : le libellé initial « Recommandé » prêtait à confusion - corrigé en « Parrainé »",
        image: blablacarSponsorship,
      },
      {
        heading: 'Solution 2 - Récompense de complétion de profil',
        body: "Bon de 10 € de carburant offert sur le premier trajet aux nouveaux conducteurs qui vérifient pièce d'identité, email, téléphone et ajoutent une photo de profil.",
        result: "Test utilisateur : le bon d'achat a un impact positif observé sur la complétion de profil",
        image: blablacarProfileReward,
      },
      {
        heading: 'Solution 3 - Créneau de départ recommandé',
        body: "Créneaux horaires suggérés au conducteur, calculés sur 60 jours glissants (volume > 15 réservations / trajet, part > 40 %, semaine et week-end distingués).",
        result: "Test utilisateur : le premier visuel laissait croire à une recommandation basée sur le trafic routier - wording et graphique retravaillés",
        image: blablacarDepartureTime,
      },
      {
        heading: 'Priorisation & prototypage final',
        body: "Solutions arbitrées sur une matrice impact / effort, puis itérées en prototype haute-fidélité jusqu'à validation en test utilisateur.",
        result: 'Prototype haute-fidélité validé en user-testing, restitué au Lead PM de BlaBlaCar',
      },
    ],
    results: [
      "Facteur d'impact n°1 identifié sur 100 000 trajets analysés : la vérification d'identité (+3,8 pts)",
      "3 solutions prototypées et testées : parrainage communautaire, récompense de profil, créneau de départ recommandé",
      "Prototype haute-fidélité validé en test utilisateur, restitué au Lead PM de BlaBlaCar",
    ],
    metrics: [
      { value: '100k', label: 'trajets analysés' },
      { value: '9', label: 'entretiens utilisateurs' },
      { value: '3', label: 'solutions prototypées' },
    ],
    stack: ['Figma', 'Notion', 'User testing', 'SQL'],
    team: [
      'Caroline - ex Project Manager (Octopus Energy)',
      'Clémence - ex Product Designer (AVIV group)',
      'Vincent - Responsable transformation finance & Product Owner (Renault), moi',
    ],
    missionTypes: ['Discovery', 'Recherche utilisateur', 'Prototypage'],
    retro:
      "Le prototype a été validé en test utilisateur et restitué au Lead PM de BlaBlaCar. Limite assumée de l'exercice : l'échantillon d'entretiens n'a pas inclus de conducteur réellement newbie. Prochaine étape (hors périmètre de la formation) : cadrer un A/B test en production sur les 3 pistes retenues, en recrutant spécifiquement des nouveaux conducteurs, pour confirmer le gain de +10 pts visé.",
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
  {
    id: '5',
    slug: 'cardomint',
    title: 'Suivi de valeur pour collections de cartes TCG',
    company: 'CardoMint',
    role: 'Founder · Product Manager',
    period: '2026 - En cours',
    category: 'product',
    summary:
      "Application web (bientôt mobile) qui donne aux collectionneurs Pokémon TCG la valeur de leur collection au jour le jour, sur un catalogue de plus de 69 000 cartes et scellés.",
    context:
      "En tant que collectionneur, j'utilisais des applications existantes mais il leur manquait des fonctionnalités clés à mes yeux. Des amis collectionneurs m'ont remonté des besoins similaires. J'ai construit CardoMint pour y répondre, en commençant par le TCG Pokémon avant d'étendre à d'autres jeux (One Piece et 6 autres licences prévues).",
    problem:
      "Comment retrouver rapidement la valeur réelle de sa collection (cartes et scellés) sur plusieurs TCG, à partir de sources de prix fiables et à jour ?",
    approach: [
      {
        heading: "Conception de l'interface",
        body: "Travail sur l'expérience utilisateur avant la donnée : parcours de collection, ajout d'achats, vue de valorisation.",
        image: cardomintMesCartes,
      },
      {
        heading: 'Base de données prix, cotes & scellés',
        body: "Agrégation de sources hétérogènes - APIs publiques et payantes, marketplaces (Cardmarket, eBay, Vinted, Le Bon Coin) pour les prix, bases de référence (Poképédia, Bulbapedia) pour les données cartes.",
        result: '69 220 produits catalogués sur 3 marchés (international, japonais, chinois)',
        image: cardomintCatalogue,
      },
      {
        heading: 'Fonctionnalités avancées',
        body: 'Valorisation quotidienne datée, comparateur à 17 critères, partage communautaire par code et QR sans création de compte.',
        result: '7 815 cartes tarifées avec un relevé de valeur quotidien',
        image: cardomintDashboard,
      },
      {
        heading: 'Accès par invitation',
        body: 'Lancement en accès gratuit sur invitation : liens à usage unique, cinq à la fois, valables sept jours.',
        result: "Premiers retours beta collectés : demande d'amélioration UI et de nouvelles fonctionnalités",
        image: cardomintPartage,
      },
    ],
    results: [
      '69 220 produits catalogués (67 248 cartes + 1 972 scellés)',
      'Valorisation quotidienne sur 7 815 cartes tarifées',
      "Retours beta : demande d'amélioration UI et de nouvelles fonctionnalités",
    ],
    metrics: [
      { value: '69k', label: 'produits catalogués' },
      { value: '3', label: 'marchés couverts' },
      { value: '7', label: 'licences TCG prévues' },
    ],
    stack: ['Next.js', 'Turso', 'Claude Code'],
    team: ['Solo — Founder & Product Builder (moi)'],
    missionTypes: ['0 → 1', 'Discovery', 'Beta'],
    retro:
      "Les premiers retours beta pointent vers deux priorités : améliorer l'interface et enrichir les fonctionnalités. Prochaine étape : lancer le scan de reconnaissance de carte, puis étendre la couverture aux 6 autres licences TCG prévues (One Piece en premier).",
    coverGradient: 'from-red-500 via-rose-500 to-pink-600',
    coverImage: cardomintCover,
    badge: '🚧 Beta',
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
