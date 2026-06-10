import type { PhotographerInfo, ExperienceItem, SkillGroup, Certification } from '@/types';
import portrait from '@/assets/vincent-nguyen.jpg.asset.json';

export const photographerInfo: PhotographerInfo = {
  name: 'Vincent Nguyen',
  tagline: 'Product Manager — Expertise Finance & SI',
  heroIntroduction:
    "Je transforme des besoins métier complexes en produits à impact mesurable, dans des contextes à fort enjeu technique et financier.",
  biography: `Product Manager — Product Owner avec 10 ans d'expérience en SI finance et transformation digitale. J'ai piloté des outils critiques (8 M€, 25+ ETP), réduit de 50 % les délais de clôture, et j'utilise l'IA au quotidien pour accélérer la discovery comme la delivery produit.

Diplômé ingénieur (ISAE-SUPMECA) avec une formation en finance d'entreprise (HEC Paris) et en Product Management (Noé), j'évolue à l'intersection du métier, de la donnée et de la tech.

Ma méthode repose sur trois convictions : commencer par la donnée et la voix utilisateur, prototyper vite pour apprendre, et déployer avec une conduite du changement qui transforme l'adoption en impact mesurable.

J'aime les sujets exigeants où la rigueur financière croise la créativité produit — et où l'IA devient un véritable copilote.`,
  approach: `Ma méthode repose sur trois convictions : commencer par la donnée et la voix utilisateur, prototyper vite pour apprendre, et déployer avec une conduite du changement qui transforme l'adoption en impact mesurable.

J'aime les sujets exigeants où la rigueur financière croise la créativité produit — et où l'IA devient un véritable copilote.`,
  awards: [
    'AI Product Manager — Microsoft',
    'Professional Scrum Product Owner I (PSPO I) — Scrum.org',
    'Product Management — Noé',
    'Claude AI (101, AI Fluency, Cowork, Code) — Anthropic',
  ],
  clients: ['Renault', 'BlaBlaCar', 'Bartle', 'F-Initiatives'],
  education: 'Ingénieur ISAE-SUPMECA · ICCF HEC Paris · Product Management Noé',
  location: 'Paris, Île-de-France',
  email: 'vincent.nguyen75020@gmail.com',
  phone: '06 31 30 02 42',
  availability: "Ouvert aux opportunités Product Manager / Product Owner",
  socialLinks: {
    linkedin: 'https://linkedin.com/in/vincentnguyenpro',
  },
  portraitImage: portrait.url,
};

export const experiences: ExperienceItem[] = [
  {
    company: 'BlaBlaCar (via formation Noé)',
    role: 'Product Manager',
    period: '2026',
    location: 'Paris',
    highlights: [
      "Analyse de 100 000 trajets et 9 entretiens utilisateurs pour comprendre l'écart de réussite entre nouveaux conducteurs (30 %) et récurrents (50 %)",
      "Priorisation des solutions via matrice impact/effort et itérations UX/UI sur 3 pistes à fort impact",
      "Prototype haute-fidélité validé en user-testing et présenté au Lead PM de BlaBlaCar",
    ],
  },
  {
    company: 'Bartle',
    role: 'Product Manager — SI Finance & Pilotage budgétaire',
    period: '2023 — 2025',
    location: 'Paris',
    highlights: [
      "Discovery avec +8 directeurs métiers pour cartographier les dépenses IT et besoins de reporting (portefeuille 50 M€ — 230 M€)",
      "MVP d'un outil de consolidation et de pilotage des coûts DSI livré en 2 mois",
      "Étude d'opportunité Abraxio et recommandation stratégique",
      "Résultat : -5 % de coûts DSI vs N-1 (CAPEX / OPEX / MS)",
    ],
  },
  {
    company: 'Renault',
    role: 'Product Owner Finance & Responsable Transformation Supply Chain monde',
    period: '2020 — 2023',
    location: 'Vélizy',
    highlights: [
      "Pilotage produit : roadmap, backlog, formation et support à +25 ETP contrôleurs monde",
      "Budget 8 M€ — équipe d'1 Tech Lead et 3 développeurs en Scrum",
      "Consolidation 1,1 Md€ de coûts logistiques amont et aval (-5 % vs N-1)",
      "Résultat : -50 % de délais de clôture (J+10 → J+5)",
    ],
  },
  {
    company: 'Renault',
    role: 'Product Owner Outils Costing',
    period: '2016 — 2020',
    location: 'Guyancourt',
    highlights: [
      "Remplacement, déploiement et adoption d'outils de costing pour +250 ETP dans 12 pays (budget 10 M€)",
      "Spécifications, tests fonctionnels et analyses statistiques d'usage pour prioriser les besoins",
      "Plan de conduite du changement à l'échelle de 250 collaborateurs",
      "Résultat : 95 % de taux d'adoption · +15 % de fiabilité et rapidité d'exécution des calculs",
    ],
  },
  {
    company: 'F-Initiatives',
    role: "Consultant en Financement de l'Innovation",
    period: '2014 — 2016',
    location: 'Puteaux',
    highlights: [
      "Audit et conseil R&D / innovation pour l'obtention de Crédit Impôt Recherche (CIR)",
      "Gestion d'un portefeuille clients industrie et NTIC (1 M€)",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Product Management',
    items: [
      'Discovery & Delivery',
      'Backlog & priorisation',
      'User Stories',
      'UX / UI',
      'KPI & Data',
      'Agile (Scrum, Kanban)',
      'Cycle en V',
    ],
  },
  {
    title: 'Gestion de projets SI',
    items: [
      'Conception & déploiement',
      'Conduite du changement',
      'Transformation organisationnelle',
      'Planification & suivi budgétaire',
    ],
  },
  {
    title: 'Outils Produit',
    items: ['Notion', 'Jira', 'Figma', 'Miro', 'Google Sheets', 'SQL', 'Fireflies', 'Postman'],
  },
  {
    title: 'Finance & Data',
    items: ['SAP', 'Lumira', 'Power BI', 'Excel', 'PowerPoint', 'SharePoint'],
  },
  {
    title: 'Intelligence Artificielle',
    items: ['Claude', 'Dust', 'AI-augmented discovery & delivery'],
  },
  {
    title: 'Soft Skills',
    items: ['Adaptabilité', 'Leadership', 'Communication', 'Pédagogie', 'Collaboration pluridisciplinaire'],
  },
];

export const certifications: Certification[] = [
  { label: 'Product Management', issuer: 'Noé' },
  { label: 'AI Product Manager', issuer: 'Microsoft' },
  { label: 'Professional Scrum Product Owner I (PSPO I)', issuer: 'Scrum.org' },
  { label: 'Claude AI — 101 · AI Fluency · Cowork · Code', issuer: 'Anthropic' },
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Courant' },
  { name: 'Espagnol', level: 'Intermédiaire' },
  { name: 'Chinois (Mandarin)', level: 'Intermédiaire' },
];

export const educationItems = [
  { title: 'Product Management', school: 'NOÉ, Paris', period: '2026' },
  { title: 'Corporate Finance — ICCF Executive Education', school: 'HEC Paris, Jouy-en-Josas', period: '2016 — 2017' },
  { title: 'Ingénieur Génie Industriel', school: 'ISAE-SUPMECA, Paris Saint-Ouen', period: '2011 — 2014' },
];
