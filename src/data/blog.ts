import dustCover from '@/assets/blog/dust-cover.webp.asset.json';
import dustRoom from '@/assets/blog/dust-room.jpeg.asset.json';
import dustFlyer from '@/assets/blog/dust-flyer.jpeg.asset.json';
import webshopCover from '@/assets/blog/webshop-cover.avif.asset.json';
import iaPmCover from '@/assets/blog/ia-pm-cover.webp.asset.json';
import iaPmRoom from '@/assets/blog/ia-pm-room.jpeg.asset.json';
import iaDemainCover from '@/assets/blog/ia-demain-cover.webp.asset.json';
import iaDemainRoom from '@/assets/blog/ia-demain-room.jpeg.asset.json';
import lovableCover from '@/assets/blog/lovable-cover.avif.asset.json';
import lovableRoom from '@/assets/blog/lovable-room.jpeg.asset.json';

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  image?: { url: string; alt: string; caption?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  order: number; // for sorting
  category: 'Product' | 'IA' | 'Data' | 'Formation' | 'Événement';
  url?: string; // external reference
  cover: { url: string; alt: string };
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'webshop-mollie-codex',
    order: 1,
    title: 'Build Your Webshop with Mollie & Codex',
    description:
      "Atelier Le Wagon : construire une boutique en ligne fonctionnelle en s'appuyant sur Codex et Mollie pour les paiements — démo end-to-end et lessons learned.",
    date: 'Juin 2026',
    category: 'Product',
    url: 'https://luma.com/0ivqgaik?tk=hNsezQ',
    cover: { url: webshopCover.url, alt: 'Build Your Webshop with Mollie & Codex' },
    sections: [
      {
        paragraphs: [
          "Atelier organisé par Le Wagon autour d'un cas concret : construire un webshop fonctionnel de bout en bout, en combinant Codex pour générer le code et Mollie pour gérer les paiements.",
          "L'objectif : montrer qu'on peut passer d'une idée e-commerce à un MVP encaissant de vrais paiements en quelques heures, sans monter une équipe tech complète.",
        ],
      },
    ],
  },
  {
    slug: 'hackathon-lovable-join-lion',
    order: 2,
    title: 'Hackathon Lovable chez Join Lion',
    description:
      "48h pour prototyper une application from scratch avec Lovable : ce que j'ai appris du build IA-first, du time-to-MVP et du nouveau rôle du PM dans la delivery.",
    date: 'Juin 2026',
    category: 'Événement',
    url: 'https://luma.com/jybxjxu4?locale=fr&tk=Aimmjv',
    cover: { url: lovableCover.url, alt: 'De l’idée à l’app en 3h avec Lovable — Meetup IA Lion x Paatch' },
    sections: [
      {
        paragraphs: [
          "On n'avance pas en théorisant une idée pendant des mois. On avance en se lançant.",
          "Concrètement : si tu rêves de lancer une app ou un site sans savoir coder, ça passe par ouvrir un outil IA, commencer à prompter, à converser avec, à bricoler ta vraie idée. C'est souvent le moment que beaucoup repoussent encore.",
          "Avec la Jungle IA 🌴, on offre à chacun un endroit pour franchir ce pas : un cadre, un outil, des facilitateurs experts à côté de soi pour accompagner. Et 70 autres personnes qui se lancent en même temps.",
        ],
      },
      {
        image: { url: lovableRoom.url, alt: 'Salle pleine pendant le meetup Lovable x Paatch' },
      },
      {
        heading: 'Une édition spéciale Lovable, énergie au rendez-vous',
        paragraphs: [
          "Hier soir, c'était l'édition spéciale Lovable. Quelques retours à chaud des participants :",
        ],
        bullets: [
          "🩷 « J'adore les hackathons ! L'ambiance, les projets, l'endroit… »",
          "🩷 « Le format, la compétence des formateurs, la gestion des temps, la qualité de l'accompagnement… Tout était génial ! »",
          "🩷 « Un atelier interactif et très instructif. Ça m'a permis d'avoir des leviers actionnables derrière, j'en suis très content. »",
          "🩷 « J'ai beaucoup appris et même découvert un outil que je ne connaissais pas. »",
        ],
      },
      {
        paragraphs: [
          "Voir que ces meetups apportent de la vraie valeur à chaque fois est un vrai plaisir.",
          "Merci à Lovable, à Paatch et à tous les facilitateurs. Bravo aux participants venus se challenger — peut-être qu'on en verra certains naître bientôt 😉",
          "Rendez-vous en septembre pour la prochaine édition. 🦁",
        ],
      },
    ],
  },
  {
    slug: 'construire-ia-demain',
    order: 3,
    title: "Construire l'IA de demain : défis et opportunités",
    description:
      "Table ronde Le Wagon x Women in Tech France : pourquoi l'IA est avant tout une révolution de société et comment construire une IA inclusive, représentative et équitable.",
    date: 'Juin 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/construire-l-ia-de-demain-defis-et-opportunites-SsjIsz',
    cover: { url: iaDemainCover.url, alt: "Construire l'IA de demain — Défis et Opportunités" },
    sections: [
      {
        paragraphs: [
          "Ravi d'avoir participé à la table ronde organisée par Le Wagon autour d'un sujet qui façonne déjà notre avenir : l'IA ✨",
          "Un immense merci à Jasky Sor pour l'organisation, ainsi qu'à mes brillant·e·s co-intervenant·e·s Zena El Kurdi, Jaafar Elalamy et Héloïse Bertoux, avec qui j'ai eu le plaisir d'échanger sur les défis et les opportunités de cette révolution sans précédent.",
        ],
      },
      {
        image: { url: iaDemainRoom.url, alt: 'Table ronde Construire l’IA de demain au Wagon Paris' },
      },
      {
        heading: 'Une conviction est ressortie de nos échanges',
        paragraphs: [
          "L'IA n'est pas seulement une révolution technologique. C'est une révolution de société. Elle transformera nos métiers, notre accès à la connaissance, notre système éducatif, notre santé, nos services publics, nos économies et même nos relations internationales.",
          "La question n'est plus de savoir si l'IA va transformer nos sociétés. La vraie question est : comment allons-nous accompagner cette transformation ?",
          "Car l'IA ne remplacera pas les humains. En revanche, les professionnels qui sauront utiliser l'IA transformeront profondément les organisations de demain.",
        ],
      },
      {
        heading: 'Une responsabilité collective',
        paragraphs: [
          "Nous avons donc une responsabilité collective : construire une IA plus inclusive, plus représentative et plus équitable.",
          "L'IA est aussi devenue un enjeu stratégique pour l'Europe, au même titre que l'énergie ou la défense.",
          "L'avenir de l'IA ne doit pas être construit par quelques-uns pour tous, mais par tous pour tous. 🙌",
        ],
      },
    ],
  },
  {
    slug: 'claude-code-pms',
    order: 4,
    title: 'Formation Claude Code chez Noé',
    description:
      "Quatre modules pour transformer la pratique des Product Managers avec Claude Code : MCP, code, prototype publié en ligne, et système de travail personnel et collectif augmenté par l'IA.",
    date: 'Mai 2026',
    category: 'IA',
    url: 'https://www.noe.pm/claude-code-pour-pms',
    cover: { url: dustCover.url, alt: 'Formation Claude Code chez Noé' },
    sections: [
      {
        paragraphs: [
          "Une formation centrée sur Claude Code, l'outil qui transforme le travail des équipes produit. Autour de lui, deux outils pour aller jusqu'au bout : publier ses prototypes et contribuer au code.",
        ],
        bullets: [
          "💻 Claude Code : l'agent au cœur de la formation, du prototype au fix.",
          "🚀 Vercel : vos prototypes en ligne, utilisables par vos stakeholders.",
          "🐙 GitHub : collaborer avec vos devs et pousser vos PR.",
        ],
      },
      {
        heading: 'Module 1 — Maîtriser Claude Code',
        bullets: [
          'Connexion de Claude Code à vos outils via MCP',
          'Gestion du contexte pour des résultats précis et fiables',
          'Skills pour standardiser vos livrables récurrents',
          'Plan mode : un plan validé avant toute exécution',
        ],
        paragraphs: ['🎯 Résultat : un environnement Claude Code configuré et sous contrôle.'],
      },
      {
        heading: "Module 2 — Savoir coder à l'ère de l'IA",
        bullets: [
          'GitHub et pull requests via Claude Code',
          'Bug fix de bout en bout, du diagnostic au correctif',
          'Améliorations produit poussées en prod',
        ],
        paragraphs: ['🎯 Résultat : vos premières contributions au code en autonomie.'],
      },
      {
        heading: 'Module 3 — Du besoin au prototype',
        bullets: [
          'Spec-driven development : specs et prototype articulés sur Claude Code',
          'Prototypage d’une feature testable, sans cycle de dev',
          'Publication du proto sur Vercel, utilisable par stakeholders et users',
        ],
        paragraphs: ['🎯 Résultat : un prototype en ligne, prêt à être testé.'],
      },
      {
        heading: 'Module 4 — Claude Code dans votre organisation',
        bullets: [
          'Personal OS : un contexte persistant sur vos projets et votre façon de travailler',
          "Team OS : contexte et standards partagés à l'échelle de l'équipe",
          "Évolution de l'organisation des équipes produit et tech",
        ],
        paragraphs: ['🎯 Résultat : un système de travail personnel et collectif augmenté par Claude Code.'],
      },
    ],
  },
  {
    slug: 'ia-transforme-pm',
    order: 5,
    title: "Comment l'IA transforme le Product Management",
    description:
      "Tech Talk Le Wagon x Welcome to the Jungle : comment le métier de PM a changé en 18 mois, ce qui s'automatise, les compétences qui comptent en 2026 et comment shipper des features IA.",
    date: 'Mai 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/comment-l-ia-transforme-le-product-management-HPFVtl',
    cover: { url: iaPmCover.url, alt: "Comment l'IA transforme le Product Management" },
    sections: [
      {
        paragraphs: [
          "The PM job description hasn't changed in 5 years. The PM job itself did completely in 18 months.",
          "Le 27 mai à Paris, Le Wagon a réuni des profils qui vivent ce shift en temps réel.",
        ],
      },
      {
        image: { url: iaPmRoom.url, alt: 'Tech Talk Comment l’IA transforme le Product Management — Le Wagon Paris' },
      },
      {
        heading: 'Les intervenants',
        bullets: [
          "Louis Comte (STATION F) — voit chaque jour des centaines de startups construire avec l'IA",
          "Leslie Malem (Welcome to the Jungle) — observe les équipes produit naviguer cette transformation de l'intérieur",
          "Emmanuel Hosanski (Head of Product, Pennylane) — embarque l'IA dans des produits comptables",
          "Anne Dumas (Le Wagon) — modératrice, pour porter les questions de la communauté",
        ],
      },
      {
        heading: 'Les questions creusées',
        bullets: [
          'Quelles parties du job de PM s’automatisent (et ce que ça veut dire pour les juniors) ?',
          'Quelles nouvelles compétences comptent vraiment en 2026 ?',
          'Quels produits peut-on construire aujourd’hui qui étaient impossibles il y a 18 mois ?',
          'Comment shipper des features IA quand les modèles hallucinent et que les utilisateurs ne font pas confiance ?',
        ],
      },
    ],
  },
  {
    slug: 'noe-formation-pm',
    order: 6,
    title: 'Fin de ma formation Product Management — Noé promo 33',
    description:
      "Retour d'expérience sur 4 semaines intensives de Product Management chez Noé : strategy, discovery, priorisation, prototypage, delivery et restitution finale au Lead PM de BlaBlaCar.",
    date: 'Mai 2026',
    category: 'Formation',
    url: 'https://www.noe.pm/formation-product-manager-la-formation-pm-en-4-semaines-noe',
    cover: { url: iaPmCover.url, alt: 'Diplôme Product Management — Noé' },
    sections: [
      {
        paragraphs: [
          "J'ai le plaisir de vous annoncer que j'ai obtenu mon diplôme de Product Management à Noé ! 🔥",
          "Pendant 4 semaines, j'ai travaillé en tant que PM pour BlaBlaCar, accompagné par des intervenants senior PM, Head of ou CPO.",
        ],
      },
      {
        heading: 'Ce que j’ai pu pratiquer',
        bullets: [
          "🎯 Product Strategy : explorer la problématique et le positionnement de BlaBlaCar vis-à-vis d'autres acteurs en France",
          '🔎 Product Discovery : interviews utilisateurs, recherches data (SQL, Excel), tests produit…',
          '⚡ Priorisation : KPIs impactés — RICE, MoSCoW',
          '💻 Prototypage et testing itératif avec de vrais users, sur Figma',
          "👨‍💻 Delivery : rédaction des specs pour l'équipe tech (user stories, workflow, edge cases)",
          '🎤 Préparation et présentation devant le Lead PM de BlaBlaCar !',
        ],
      },
    ],
  },
  {
    slug: 'dust-ai-agent',
    order: 7,
    title: 'Atelier Dust — Build Your First AI Agent',
    description:
      "Soirée Eria x Le Wagon x Dust : théorie + pratique pour repartir avec son propre agent IA opérationnel, connecté à Google Drive et aux emails, sans une seule ligne de code.",
    date: 'Avril 2026',
    category: 'IA',
    url: 'https://www.lewagon.com/fr/events/atelier-dust-build-your-first-ai-agent-5CkQZn',
    cover: { url: dustCover.url, alt: 'Build Your First AI Agent — Eria x Le Wagon x Dust' },
    sections: [
      {
        paragraphs: [
          "Hier j'étais à l'événement « Build Your First AI Agent » co-organisé par Eria x Le Wagon x Dust.",
          'Au programme : théorie + pratique, grâce à trois acteurs complémentaires.',
        ],
      },
      {
        image: { url: dustRoom.url, alt: 'Salle pleine pour l’atelier Build Your First AI Agent au Wagon Paris' },
      },
      {
        bullets: [
          "Eria — l'agence cofondée par Tifany Clemenceau et Melvin Duveau, spécialisée dans la création d'agents IA sur-mesure pour les TPE/PME",
          "Dust — la plateforme française d'agents IA, fondée par d'anciens d'OpenAI et de Stripe, déjà adoptée par +5 000 organisations (Doctolib, Qonto, Alan…)",
          "Le Wagon — l'école tech de référence qui rend la tech accessible à tous",
        ],
      },
      {
        image: { url: dustFlyer.url, alt: 'Flyer Eria — Build Your First AI Agent' },
      },
      {
        paragraphs: [
          "Résultat : j'ai quitté la salle avec mon propre agent IA opérationnel, connecté à mon Google Drive et mes emails. Zéro ligne de code. Juste du langage naturel.",
          "Merci à Tifany Clemenceau, Melvin Duveau et à l'équipe Le Wagon pour cette soirée alliant théorie, cas concrets et mise en pratique immédiate.",
        ],
      },
    ],
  },
];
