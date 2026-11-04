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
import synapsesCover from '@/assets/synapses-cover.webp';
import synapsesLogo from '@/assets/synapses-logo.svg';
import synapsesImport from '@/assets/synapses-import.webp';
import synapsesEntreprises from '@/assets/synapses-entreprises.webp';
import synapsesCollegues from '@/assets/synapses-collegues.webp';

export const projects: Project[] = [
  {
    id: '0',
    slug: 'saas-pilotage-dsi',
    order: 3,
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
        result: '9 modules construits et en ligne sur 10 prévus (captures sur données de démonstration)',
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
    scope: 'Plateforme web multi-métiers · captures et chiffres affichés sur données de démonstration',
    team: ['Solo — Founder & Product Manager (moi)'],
    missionTypes: ['Discovery', 'ITFM & FinOps', '0 → 1'],
    retro:
      "9 des 10 modules prévus sont déjà en ligne, avec un moteur de détection des coûts cachés fonctionnel sur données de démonstration. Prochaine étape : embarquer les premières organisations pilotes pour valider le rattachement Finance / IT / PMO / Achats sur de vraies données, puis finaliser le module Export COMEX.",
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    coverImage: dsiFinopsCover,
    badge: '🚧 En cours',
    link: { label: 'Voir le site kostbase.com', url: 'https://kostbase.com' },
  },
  {
    id: '1',
    slug: 'blablacar-first-ride',
    order: 4,
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
    order: 5,
    title: 'Outil de consolidation et pilotage des coûts DSI',
    company: 'Bartle',
    role: 'Product Manager - SI Finance & Pilotage budgétaire',
    period: '2023 - 2025',
    category: 'finance',
    summary:
      "Construire, piloter et optimiser le budget DSI dans un contexte de restructuration - MVP livré en 2 mois.",
    context:
      "Mission de Product Management chez Bartle pour un grand groupe en restructuration. Portefeuilles de projets DSI à 8 ou 9 chiffres (en €).",
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
        body: "Étude d'opportunité sur une solution SaaS du marché dédiée au pilotage financier DSI.",
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
      { value: '9 chiffres', label: 'portefeuille piloté (en €)' },
    ],
    stack: ['Power BI', 'Excel', 'SharePoint', 'Notion', 'Miro'],
    team: ['1 Product Manager (moi)', 'Sponsors : direction DSI & direction Finance', '+8 directeurs métiers impliqués'],
    missionTypes: ['Discovery', 'MVP', 'Recommandation stratégique'],
    retro:
      "Le MVP a été adopté par les 8 directions concernées et a permis -5 % de coûts DSI dès la première année. Prochaine étape : arbitrage sur l'opportunité d'une solution SaaS du marché pour industrialiser l'outil au-delà du MVP interne.",
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    coverImage: bartleCover,
  },
  {
    id: '3',
    slug: 'renault-supply-chain',
    order: 6,
    title: 'Consolidation financière Supply Chain monde',
    company: 'Renault',
    role: 'Product Owner Finance & Responsable Transformation',
    period: '2020 - 2023',
    category: 'transformation',
    summary:
      "Réduire les délais de livraison des tableaux de bord de coûts Supply Chain monde - clôture de J+10 à J+5.",
    context:
      "Outil de consolidation financière dédié à la Supply Chain Renault, équipe de 4 personnes (1 Tech Lead + 3 développeurs), budget à 7 chiffres (en €), +25 ETP contrôleurs utilisateurs dans le monde.",
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
        body: "Consolidation des coûts logistiques amont et aval (10 chiffres en €) avec recherche systématique d'optimisations.",
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
      { value: '10 chiffres', label: 'coûts consolidés (en €)' },
      { value: '7 chiffres', label: 'budget produit (en €)' },
    ],
    stack: ['SAP', 'Lumira', 'Power BI', 'Jira', 'Scrum'],
    scope: 'Budget à 7 chiffres (en €) · 1 Tech Lead + 3 développeurs · +25 ETP utilisateurs monde',
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
    order: 7,
    title: "Remplacement et déploiement mondial d'outils de Costing",
    company: 'Renault',
    role: 'Product Owner Outils Costing',
    period: '2016 - 2020',
    category: 'product',
    summary:
      "Remplacer, déployer et faire adopter de nouveaux outils de costing auprès de +250 utilisateurs dans 12 pays.",
    context:
      "Refonte des outils de costing Renault. Équipe de 4 personnes (1 Tech Lead + 3 développeurs), budget à 8 chiffres (en €), +250 ETP utilisateurs dans 12 pays.",
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
    scope: 'Budget à 8 chiffres (en €) · 1 Tech Lead + 3 développeurs · +250 ETP dans 12 pays',
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
    order: 2,
    title: 'Suivi de valeur pour collections de cartes TCG',
    company: 'CardoMint',
    role: 'Founder · Product Manager',
    period: '2026 - En cours',
    category: 'product',
    summary:
      "Application web (bientôt mobile) qui donne aux collectionneurs de cartes TCG la valeur de leur collection au jour le jour, sur un catalogue de plus de 270 000 cartes et produits scellés répartis sur sept licences.",
    context:
      "En tant que collectionneur, j'utilisais des applications existantes mais il leur manquait des fonctionnalités clés à mes yeux. Des amis collectionneurs m'ont remonté des besoins similaires. J'ai construit CardoMint pour y répondre, en commençant par le TCG Pokémon : le catalogue couvre aujourd'hui sept licences (Magic, Pokémon, Yu-Gi-Oh!, Dragon Ball, Lorcana, One Piece et Naruto).",
    problem:
      "Comment retrouver rapidement la valeur réelle de sa collection (cartes et scellés) sur plusieurs TCG, à partir de sources de prix fiables et à jour ?",
    approach: [
      {
        heading: "Conception de l'interface",
        body: "Travail sur l'expérience utilisateur avant la donnée : parcours de collection, ajout d'achats, vue de valorisation.",
        image: cardomintMesCartes,
      },
      {
        heading: 'Un catalogue de sept licences, sur trois marchés',
        body: "Sept licences dans un seul catalogue, et pour Pokémon trois marchés : l'international (25 743 cartes), le japonais (27 276 cartes) et le chinois (14 614 cartes) ne sont pas des traductions du même jeu mais d'autres extensions, avec d'autres cartes. Une zone par marché plutôt qu'un filtre de langue, qui les aurait mélangés. Pour Pokémon, les données viennent d'une base ouverte sous licence MIT (noms, raretés, illustrateurs, photos) et d'un relevé de prix Cardmarket par jour, daté par la source.",
        result: '272 521 produits catalogués (262 198 cartes, 10 323 scellés) sur 7 licences et 3 927 séries',
        image: cardomintCatalogue,
      },
      {
        heading: 'Le contenu des scellés',
        body: "Un différenciateur introuvable ailleurs : une boîte déclare, booster par booster, ce qu'elle contient. Ces déclarations croisent trois sources (fiches d'un revendeur, encyclopédie communautaire et, quand elles se contredisent, le verso de la boîte lu par reconnaissance de texte), avec un contrôle de somme à l'écriture : trente-huit pages annoncent un total que leur propre énumération ne fait pas, et aucune n'a été recopiée ; vingt-sept totaux se contredisent entre sources et ne sont pas arbitrés, faute d'une troisième source pour les départager.",
        result: '3 023 scellés Pokémon au contenu déclaré (sur 3 288), dont 2 154 cartes garanties',
      },
      {
        heading: 'Fonctionnalités avancées',
        body: "Valorisation quotidienne datée (un relevé par jour, jamais un chiffre sans sa date), lots d'achat, ventes et performance, grading sur 113 notes et six sociétés, classeurs, alertes de prix, export Excel, comparateur à 17 critères sur deux à quatre produits, et partage communautaire par code de dix symboles ou QR, sans création de compte et sans aucun montant partagé.",
        result: '164 945 cartes au prix du jour sur six licences (Naruto sans cote : aucune source publique)',
        image: cardomintDashboard,
      },
      {
        heading: "Dire ce que l'on ne sait pas",
        body: "Principe produit : une lacune nommée est un périmètre, une lacune tue se lit comme un défaut. Les 37 012 cartes Pokémon sans prix n'affichent rien plutôt qu'un zéro qui se lirait comme une valeur nulle (de même pour Naruto, dont aucune source publique ne publie les cotes), les 90 cartes sans photo n'empruntent pas l'image d'une autre carte, le scan annonce « Bientôt » dans un message visible et les offres Cardmarket sont marquées indisponibles, et non « bientôt », car la source ne les publie jamais.",
        result: 'Chaque chiffre du site vient d\'une requête sur la base, avec sa date de relevé',
      },
      {
        heading: 'Accès par invitation',
        body: "Lancement en accès gratuit sur invitation : lien à usage unique, cinq à la fois, valables sept jours, vingt par membre. Tout ce qui est livré est ouvert, sans palier ni limite. À l'étude : un historique long, les ventes conclues, le scan et une API, avec un prix qui sera daté.",
        result: "Premiers retours beta collectés : demande d'amélioration UI et de nouvelles fonctionnalités",
        image: cardomintPartage,
      },
    ],
    results: [
      '272 521 produits catalogués (262 198 cartes + 10 323 scellés) sur 7 licences et 3 927 séries, au 3 novembre 2026',
      'Prix du jour sur 164 945 cartes et 4 190 scellés cotés, chaque relevé daté',
      '3 023 scellés Pokémon au contenu déclaré, dont 2 154 cartes garanties',
      'Sept licences au catalogue (Magic, Pokémon, Yu-Gi-Oh!, Dragon Ball, Lorcana, One Piece, Naruto)',
      "Retours beta : demande d'amélioration UI et de nouvelles fonctionnalités",
    ],
    metrics: [
      { value: '272k', label: 'produits catalogués' },
      { value: '165k', label: 'cartes au prix du jour' },
      { value: '7', label: 'licences TCG' },
    ],
    stack: ['Next.js', 'Turso', 'Claude Code'],
    scope: 'Web (apps iOS et Android à venir) · accès gratuit sur invitation · 7 licences TCG',
    team: ['Solo — Founder & Product Builder (moi)'],
    missionTypes: ['0 → 1', 'Discovery', 'Beta'],
    retro:
      "Les premiers retours beta pointent vers deux priorités : améliorer l'interface et enrichir les fonctionnalités. Prochaine étape : le scan de carte, avec un choix à trancher entre un service externe de reconnaissance d'image et un modèle entraîné sur les 260 564 photos du catalogue, puis la complétion du catalogue scellé (1 154 produits déjà repérés chez un revendeur), les prix de vente réels, les notifications d'alerte, la lecture des factures et un quatrième marché, le coréen. Les dates seront annoncées quand elles seront tenables.",
    coverGradient: 'from-red-500 via-rose-500 to-pink-600',
    coverImage: cardomintCover,
    badge: '🚧 Beta',
    link: { label: 'Voir le site cardomint.com', url: 'https://cardomint.com' },
  },
  {
    id: '6',
    slug: 'synapses',
    order: 1,
    title: 'Visualisation de réseau LinkedIn en graphe neuronal',
    company: 'Synapses',
    role: 'Founder · Product Manager',
    period: '2026 - En cours',
    category: 'product',
    summary:
      "Outil gratuit, sans inscription, qui transforme l'export LinkedIn en graphe neuronal : secteurs, entreprises et séniorité d'un réseau se lisent d'un coup d'œil, sans que le fichier quitte le navigateur.",
    context:
      "Un réseau LinkedIn compte des centaines de contacts, mais LinkedIn n'en rend qu'une liste. Je voulais voir en un coup d'œil dans quels secteurs et quelles entreprises je connais du monde, à quel niveau, et par qui entrer avant un rendez-vous ou une candidature. J'ai construit Synapses avec Claude Code, puis je l'ai ouvert à tous.",
    problem:
      "Comment faire lire à un utilisateur la structure de son réseau (secteurs, entreprises, séniorité) à partir d'un simple export, sans compte à créer et sans que les noms de ses contacts ne quittent son appareil ?",
    approach: [
      {
        heading: 'La confidentialité avant la première ligne de code',
        body: "Un réseau professionnel est une donnée sensible. Principe posé dès le départ : le fichier est lu dans le navigateur, aucun nom, profil ou email de contact n'est envoyé où que ce soit, sans analytics ni ressource tierce traçante. Les exceptions (logos des entreprises, classement par IA, dictionnaire partagé, compteur anonyme) sont annoncées à l'écran et dans « Tes données », et ne portent jamais sur le nom d'un contact. Un panneau d'aide explique pas à pas comment obtenir l'export LinkedIn.",
        result: "Aucun nom de contact n'est envoyé",
        image: synapsesImport,
      },
      {
        heading: "Un graphe lisible d'un coup d'œil",
        body: "« Moi » au centre, une branche par groupe (secteur ou entreprise au choix), des contacts en grappes colorées par séniorité. Le poids d'un groupe se lit par la teinte, la jauge, l'épaisseur de la branche et le pourcentage. Regroupé par entreprise, chaque groupe devient un nœud avec son logo. Règle de design acquise : aucun chevauchement entre nœuds, grappes, jauges et noms de groupes, vérifiée après chaque changement de disposition.",
        image: synapsesEntreprises,
      },
      {
        heading: "Repérer ses portes d'entrée",
        body: "Un clic sur un contact rassemble ses collègues de la même entreprise autour de lui, classés du junior au dirigeant : de quoi savoir qui solliciter avant un rendez-vous ou une candidature. Les filtres (secteur, fonction, séniorité, année de connexion) se combinent, et le graphe se recompose et se recentre aussitôt.",
        image: synapsesCollegues,
      },
      {
        heading: 'Classer sans envoyer de noms',
        body: "Secteur, fonction et séniorité sont estimés dans le navigateur à partir de dictionnaires maintenus dans le projet, puis corrigeables contact par contact. Pour ce que le dictionnaire ne reconnaît pas, l'utilisateur peut faire classer entreprises et intitulés de poste par Claude, ChatGPT ou Gemini avec sa propre clé API : seuls ces intitulés partent chez le fournisseur choisi. Un dictionnaire partagé, alimenté par les corrections que les utilisateurs choisissent de partager, n'intègre une proposition qu'après ma validation.",
        result: 'Classification locale, IA et dictionnaire partagé en option',
      },
      {
        heading: 'Lancer sans gonfler les chiffres',
        body: "Mise en ligne gratuite sur GitHub Pages, avec une page de présentation et des captures sur un réseau fictif de 150 contacts, jamais de vraies données. Un compteur anonyme du nombre de réseaux visualisés affiche le total réel : aucun chiffre gonflé. L'outil est indépendant et non affilié à LinkedIn.",
      },
    ],
    results: [
      'Outil en ligne, gratuit et sans inscription, avec page de présentation et démonstration sur un réseau fictif de 150 contacts',
      "Fichier lu dans le navigateur : aucun nom de contact envoyé, pas d'analytics",
      'Secteur, fonction et séniorité estimés automatiquement et corrigeables, avec classement par IA en option (Claude, ChatGPT, Gemini)',
      'Un seul fichier HTML sans étape de compilation, trois bibliothèques (D3, PapaParse, JSZip)',
      'Mis en ligne le 2 novembre 2026, puis enrichi (dictionnaire partagé, logos, page de présentation, compteur)',
    ],
    metrics: [
      { value: '0', label: 'nom de contact envoyé' },
      { value: '3', label: 'IA au choix' },
      { value: '1', label: 'fichier, sans compilation' },
    ],
    stack: ['Claude Code', 'JavaScript', 'D3', 'Supabase', 'GitHub Pages'],
    scope: 'Web (ordinateur et mobile) · gratuit, sans inscription · données lues dans le navigateur',
    team: ['Solo — Founder & Product Builder (moi)'],
    missionTypes: ['0 → 1', 'Data viz', 'Privacy by design'],
    retro:
      "L'outil est en ligne et utilisable. Le compteur anonyme mesurera son adoption réelle. À suivre : les retours des premiers utilisateurs, l'enrichissement des dictionnaires par les corrections validées, et la mise à jour des modèles d'IA proposés quand les fournisseurs en retirent.",
    coverGradient: 'from-indigo-600 via-blue-600 to-sky-500',
    coverImage: synapsesCover,
    heroLogo: { src: synapsesLogo, name: 'Synapses' },
    coverVideo: { url: '/media/synapses-apercu.mp4', poster: '/media/synapses-apercu-affiche.webp' },
    badge: '🚧 En cours',
    link: { label: 'Essayer Synapses', url: 'https://vincentnguyenpro.github.io/synapses/' },
    video: {
      url: '/media/synapses-demo.mp4',
      poster: '/media/synapses-demo-affiche.webp',
      title: 'Vidéo de démonstration de Synapses',
      caption: 'Démonstration sur un réseau fictif, 1 min 48',
    },
  },
];

export function getProjectsNewestFirst(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

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
