import dustCover from '@/assets/blog/dust-cover.webp';
import dustRoom from '@/assets/blog/dust-room.jpeg';
import dustFlyer from '@/assets/blog/dust-flyer.jpeg';
import webshopCover from '@/assets/blog/webshop-cover.avif';
import iaPmCover from '@/assets/blog/ia-pm-cover.webp';
import iaPmRoom from '@/assets/blog/ia-pm-room.jpeg';
import iaDemainCover from '@/assets/blog/ia-demain-cover.webp';
import iaDemainRoom from '@/assets/blog/ia-demain-room.jpeg';
import lovableCover from '@/assets/blog/lovable-cover.avif';
import lovableRoom from '@/assets/blog/lovable-room.jpeg';
import lovableTalk from '@/assets/blog/lovable-talk.jpeg';
import lovableGroups from '@/assets/blog/lovable-groups.jpeg';
import claudeCodeCover from '@/assets/blog/claude-code-cover.webp';
import claudeCodeRoom from '@/assets/blog/claude-code-room.jpeg';
import noePmPromo from '@/assets/blog/noe-pm-promo.jpeg';
import data5vCover from '@/assets/blog/data-5v-cover.jpeg';
import data5vIaeCover from '@/assets/blog/data-5v-iae-cover.webp';
import vivatechCover from '@/assets/blog/vivatech-cover.png';
import productPartnersCover from '@/assets/blog/product-partners-cover.png';
import productPartnersRoom from '@/assets/blog/product-partners-room.jpeg';
import betterCallClaudeCover from '@/assets/blog/better-call-claude-cover.jpeg';
import betterCallClaudeDemo from '@/assets/blog/better-call-claude-demo.jpg';
import betterCallClaudeWorkflow from '@/assets/blog/better-call-claude-workflow.jpg';
import vivatechEntree from '@/assets/blog/vivatech-entree.jpg';
import vivatechIbmQuantum from '@/assets/blog/vivatech-ibm-quantum.jpg';
import vivatechLifepods from '@/assets/blog/vivatech-lifepods.jpg';
import vivatechTetmet from '@/assets/blog/vivatech-tetmet.jpg';
import pokemonProduct from '@/assets/blog/pokemon-product.png';
import pokemonCheckout from '@/assets/blog/pokemon-checkout.png';
import spotifyWrappedDark from '@/assets/blog/spotify-wrapped-dark.png';
import spotifyWrappedLight from '@/assets/blog/spotify-wrapped-light.png';
import roofoodMenu from '@/assets/blog/roofood-menu.png';
import roofoodCheckout from '@/assets/blog/roofood-checkout.png';
import portfolioHome from '@/assets/blog/lovable-portfolio-home.png';
import portfolioParcours from '@/assets/blog/lovable-portfolio-parcours.png';
import portfolioProjets from '@/assets/blog/lovable-portfolio-projets.png';
import portfolioBlog from '@/assets/blog/lovable-portfolio-blog.png';
import portfolioContact from '@/assets/blog/lovable-portfolio-contact.png';

export interface BlogImage {
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  objectPosition?: string;
  width?: 'sm' | 'md' | 'lg' | 'full';
}

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  fullWidth?: boolean;
  image?: BlogImage;
  gallery?: {
    images: BlogImage[];
    columns?: number;
    aspectRatio?: string;
  };
}

export type BlogCategory =
  | 'Product'
  | 'IA'
  | 'Data'
  | 'Formation'
  | 'Communauté';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  eventDate?: string;
  order: number;
  categories: BlogCategory[];
  url?: string;
  cover: { url: string; alt: string };
  coverFit?: 'cover' | 'contain';
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'product-partners-retrospective',
    order: 1,
    title: 'Rétrospective Product Partners : documenter pour performer',
    description:
      "Bilan à mi-année chez Lucca avec Product Partners : comment transformer la documentation en levier de performance et en carburant pour les agents IA.",
    date: '25 juin 2026',
    eventDate: '25/06/2026',
    categories: ['Product', 'Communauté'],
    cover: { url: productPartnersCover, alt: "Product Partners - Rétrospective avant l'été chez Lucca" },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Les événements entre pairs, comme la session Product Partners organisée le 25 juin dernier chez Lucca, sont essentiels pour affiner nos pratiques quotidiennes de Product Management. Lors de cette « Rétrospective avant l'été », nous avons réalisé un bilan à mi-année pour confronter nos défis respectifs.",
          "Une problématique centrale a dominé les échanges : comment garantir aux équipes Produit un accès simple à une documentation de confiance ?",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: productPartnersRoom,
          alt: "Session Product Partners - Rétrospective avant l'été chez Lucca Paris 13ème",
          aspectRatio: '16 / 9',
          caption: 'La session Product Partners chez Lucca (Paris 13ème) : ateliers en groupes, post-its et échanges entre pairs PM.',
        },
      },
      {
        fullWidth: true,
        heading: 'Le constat : la documentation, angle mort de la vélocité',
        paragraphs: [
          "La documentation est trop souvent la pièce oubliée du cycle de développement. Au-delà du manque d'écrits, c'est le coût de la dépendance qui pèse sur nos organisations. Lorsque peu de personnes détiennent la connaissance fiable du produit, cela crée des frictions invisibles qui limitent silencieusement notre vitesse d'exécution.",
        ],
      },
      {
        fullWidth: true,
        heading: "Les 3 leviers pour une documentation « source de vérité »",
        paragraphs: [
          "Notre groupe a convergé vers trois approches concrètes pour réconcilier documentation et agilité :",
        ],
        bullets: [
          "Responsabilisation claire : Chaque document doit avoir un propriétaire identifié. Nous devons traiter la relecture de documents comme une revue de code : celui qui construit, maintient. Pas de propriétaire, pas de document.",
          "La base de code comme socle : Utiliser la base de code comme source de vérité pour alimenter des agents IA capables de générer une documentation structurée, partageable et versionnée.",
          "Industrialisation documentaire : Intégrer la documentation directement dans le pipeline de publication, avec des agents rédigeant des journaux de modifications qui assurent une mise à jour constante des documents.",
        ],
      },
      {
        fullWidth: true,
        heading: "La documentation comme moteur pour l'IA",
        paragraphs: [
          "La conclusion de nos échanges est claire : une documentation de qualité n'est plus un simple « confort », c'est un levier stratégique. Des documents propres et à jour constituent le carburant indispensable pour les agents IA qui soutiennent désormais les équipes Produit. En leur donnant un contexte rapide et fiable, nous multiplions la capacité d'action de nos équipes.",
          "À l'heure où je développe Kostbase.com, ces réflexions sur la structuration de la connaissance et l'automatisation par l'IA résonnent avec mes propres défis. Maîtriser la documentation, c'est avant tout maîtriser la scalabilité de son produit.",
          "📅 Date de l'événement : 25/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'better-call-claude-arynor',
    order: 2,
    title: "Better Call Claude : l'IA au service de l'efficacité métier",
    description:
      "Premier meetup Better Call Claude par Arynor : deux démos live sur la consolidation de données et la préparation prospect — du concret applicable dès le lendemain.",
    date: '24 juin 2026',
    eventDate: '24/06/2026',
    categories: ['IA', 'Communauté'],
    cover: { url: betterCallClaudeCover, alt: "Better Call Claude - Communauté Claude IA Paris par Arynor" },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Oubliez les conférences théoriques et les promesses abstraites sur « le futur de l'IA ». J'ai récemment assisté au premier meetup Better Call Claude, et ce fut une plongée pragmatique dans ce que l'IA peut réellement accomplir pour un professionnel dès demain.",
        ],
      },
      {
        fullWidth: true,
        heading: "L'approche : démos réelles, cas concrets",
        paragraphs: [
          "Organisé par Nicolas Camilli et Djeli Agbadou (Arynor), le format est clair : pas de slides interminables, mais deux processus métier démontrés en live, du début à la fin. L'objectif est simple : que chaque participant reparte avec les prompts et la méthode pour tester ces solutions dès le lendemain.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: betterCallClaudeDemo,
          alt: "Démonstration live lors du meetup Better Call Claude - Arynor Paris",
          aspectRatio: '16 / 9',
          caption: "Une démo en conditions réelles : l'audience suit le processus d'automatisation pas à pas, sans slides théoriques.",
        },
      },
      {
        fullWidth: true,
        heading: 'Deux démonstrations marquantes',
        paragraphs: [
          "Lors de la session, deux cas d'usage ont particulièrement illustré la puissance de Claude comme collaborateur :",
        ],
        bullets: [
          "Pilotage de données (Excel > Consolidation > Dashboard) : Cette démo a montré comment transformer des données chiffrées brutes en insights stratégiques. C'est une problématique que je connais bien : passer du temps sur le nettoyage de données au lieu de se concentrer sur l'analyse. Claude permet ici d'automatiser cette consolidation pour obtenir un dashboard prêt à l'emploi.",
          "Automatisation de la préparation client : Nous avons vu comment préparer un premier échange prospect en automatisant la collecte d'informations multi-sources (Emails, CRM, Calendrier, Web, LinkedIn, Sirene). Le processus transforme ces données dispersées en un rapport structuré, synchronisé directement dans HubSpot. Ce flux, qui pouvait prendre jusqu'à deux heures par appel, est désormais réduit à une fraction du temps.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: betterCallClaudeWorkflow,
          alt: "Slide Arynor - workflow de préparation d'un premier échange avec un prospect",
          aspectRatio: '16 / 9',
          caption: "Le workflow de préparation prospect démontré par Arynor : de la collecte multi-sources (HubSpot, LinkedIn, data.gouv.fr) à la fiche contact synchronisée en 30 min contre 2h auparavant.",
        },
      },
      {
        fullWidth: true,
        heading: 'Pourquoi ça résonne avec Kostbase.com',
        paragraphs: [
          "Ces échanges, portés par une communauté de freelances, fondateurs et dirigeants, soulignent une réalité : l'IA n'est performante que lorsqu'elle est intégrée dans un processus métier rigoureux.",
          "Pour Kostbase.com, ces démonstrations sur l'automatisation des tâches complexes renforcent ma conviction : la valeur d'un SaaS ne réside pas seulement dans ses fonctionnalités, mais dans sa capacité à faire gagner un temps précieux à l'utilisateur final en supprimant la friction de la donnée. Comprendre comment les agents IA peuvent « interroger » des sources multiples pour générer des comptes-rendus automatisés est une brique essentielle que je compte bien intégrer à ma roadmap.",
          "Si vous êtes sur Paris et que vous cherchez à passer du stade de « curieux de l'IA » à celui d'utilisateur quotidien, je vous recommande vivement de suivre les prochains rendez-vous d'Arynor.",
          "📅 Date de l'événement : 24/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'vivatech-2026',
    order: 3,
    title: 'VivaTech 2026 - 10ᵉ édition',
    description:
      "Immersion dans les ruptures technologiques de VivaTech 2026 : IBM Quantum System Two, Lifepods, TETMET, et un focus SaaS pour nourrir Kostbase.com.",
    date: '20 juin 2026',
    eventDate: '20/06/2026',
    categories: ['IA', 'Data', 'Product'],
    url: 'https://vivatechnology.com/',
    cover: { url: vivatechCover, alt: 'VivaTech 2026 - Paris' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Vivatech 2026 a été le terrain d'une immersion fascinante dans les ruptures technologiques qui façonneront les produits de demain. Voici une analyse détaillée des innovations qui ont marqué cette édition, ainsi qu'un focus sur l'écosystème SaaS que j'ai scruté pour nourrir le développement de Kostbase.com.",
        ],
      },
      {
        fullWidth: true,
        image: { url: vivatechEntree, alt: 'Installation gonflable VivaTech 2026 - Porte de Versailles', aspectRatio: '16 / 9', caption: "L'installation gonflable emblématique de VivaTech à l'entrée de la Porte de Versailles." },
      },
      {
        fullWidth: true,
        heading: '1. La puissance brute du calcul : IBM Quantum System Two',
        paragraphs: [
          "La visite du stand IBM a été une véritable claque technique. Face au Quantum System Two, on mesure les défis colossaux de l'ingénierie matérielle.",
        ],
        bullets: [
          "L'enjeu technique : Il s'agit d'une prouesse de miniaturisation et de gestion thermique. Pour qu'un ordinateur quantique fonctionne, ses processeurs doivent être maintenus à des températures proches du zéro absolu.",
          "La prouesse : La structure en « lustre » que l'on observe permet de filtrer le bruit thermique et les interférences électromagnétiques, conditions sine qua non pour préserver la décohérence des qubits et permettre des calculs d'une puissance exponentielle par rapport aux machines classiques.",
        ],
      },
      {
        fullWidth: true,
        image: { url: vivatechIbmQuantum, alt: 'IBM Quantum System Two - VivaTech 2026', aspectRatio: '3 / 4', width: 'sm', caption: 'IBM Quantum System Two : la structure en lustre permet de maintenir les qubits proches du zéro absolu.' },
      },
      {
        fullWidth: true,
        heading: '2. Mobilité et confort : La capsule Lifepods',
        paragraphs: [
          "L'innovation Lifepods répond aux enjeux de la mobilité urbaine saturée.",
        ],
        bullets: [
          "La vision : Plutôt que de simplement augmenter la vitesse de déplacement, Lifepods se concentre sur la qualité du temps passé en transit.",
          "L'approche produit : C'est un design résolument human-centric. L'idée est de transformer un environnement contraint (le transport) en une bulle de sérénité, offrant sécurité et confort ergonomique. C'est une leçon de design produit : répondre à un besoin émotionnel dans un contexte utilitaire.",
        ],
      },
      {
        fullWidth: true,
        image: { url: vivatechLifepods, alt: 'Capsule Lifepods - VivaTech 2026', aspectRatio: '3 / 4', width: 'sm', caption: 'La capsule Lifepods : transformer le transit urbain en bulle de sérénité ergonomique.' },
      },
      {
        fullWidth: true,
        heading: '3. La révolution industrielle : Le savoir-faire TETMET',
        paragraphs: [
          "L'innovation industrielle la plus impressionnante provenait de TETMET.",
        ],
        bullets: [
          "La technologie : La machine utilise un bras robotisé six axes équipé d'une tête de soudage laser. Ce système permet une fabrication additive métallique de haute précision.",
          "L'impact : En concevant des structures au plus proche des contraintes mécaniques réelles, on obtient des pièces ultra-légères tout en maximisant la résistance. Pour la durabilité, c'est un game-changer : on réduit drastiquement la consommation de matière première pour un gain de performance structurelle, ouvrant la voie à une industrie plus légère et moins énergivore.",
        ],
      },
      {
        fullWidth: true,
        image: { url: vivatechTetmet, alt: 'Stand TETMET - bras robotisé à soudage laser - VivaTech 2026', aspectRatio: '16 / 9', caption: 'TETMET : fabrication additive métallique par bras robotisé six axes à soudage laser.' },
      },
      {
        fullWidth: true,
        heading: 'Focus SaaS : Un œil aiguisé pour Kostbase.com',
        paragraphs: [
          "Au-delà des innovations matérielles, Vivatech a été une véritable mine d'or pour ma User Research dans le cadre du développement de Kostbase.com. Analyser ces solutions SaaS m'a permis d'aiguiser mon œil de Product Manager en observant comment elles résolvent des problématiques de complexité, d'automatisation et de transparence financière :",
        ],
        bullets: [
          "Odoo : Une architecture open-source remarquable qui centralise la gestion d'entreprise. La force d'Odoo réside dans son approche « tout-en-un » : une base unique qui couvre la comptabilité, les ventes, les stocks et les RH, permettant une scalabilité cohérente des TPE vers les grands groupes grâce à son système de modules interconnectés.",
          "Deel : Solution SI RH de référence, Deel simplifie la gestion globale des talents. Ses fonctionnalités incluent l'automatisation de la conformité légale dans plus de 150 pays, la gestion des contrats internationaux, ainsi que le traitement de la paie automatisé pour des milliers d'employés.",
          "Freshservice : Cette plateforme ITSM excelle dans la gestion des opérations informatiques. Ses fonctionnalités majeures — gestion automatisée des tickets d'incidents, catalogue de services en libre-service et Asset Management — offrent une visibilité et une réactivité indispensables pour les équipes DSI.",
          "Pigment : Acteur clé du pilotage de la performance d'entreprise (EPM). Pigment propose des fonctionnalités de modélisation financière agile, de planification budgétaire en temps réel et de simulation de scénarios complexes. C'est l'outil idéal pour transformer des données brutes en indicateurs stratégiques de performance — très proche de la vision que j'ai pour Kostbase.",
          "Active Asset Allocation (Coanda PMS) : Une solution spécialisée dans la gestion de portefeuille financier. Offerte en marque blanche, elle permet aux institutions financières de digitaliser toute la chaîne de valeur : de la construction de portefeuilles personnalisés à l'automatisation de la conformité réglementaire, en passant par le reporting client.",
          "Spendbase : Véritable miroir des ambitions de Kostbase, Spendbase se focalise sur l'optimisation des coûts logiciels. Ses fonctionnalités incluent le suivi centralisé de tous les abonnements SaaS, l'analyse des dépenses inutilisées, l'automatisation des renouvellements et des outils de négociation pour réduire la facture globale des licences.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Cette immersion a été cruciale pour structurer ma vision de Kostbase.com. En étudiant comment ces plateformes articulent leur interface utilisateur, leur gestion des données et leur capacité à générer des décisions actionnables pour les décideurs (CFO/DSI), je renforce ma capacité à concevoir un outil qui apporte une clarté financière et environnementale indispensable sur le marché actuel.",
          "📅 Date de l'événement : 20/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'webshop-mollie-codex',
    order: 4,
    title: 'Construire son webshop avec Mollie & Codex',
    description:
      "Atelier Le Wagon : passer d'une idée e-commerce à une boutique en ligne fonctionnelle, encaissant de vrais paiements, en quelques heures et sans équipe tech.",
    date: '11 juin 2026',
    eventDate: '11/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/0ivqgaik?tk=hNsezQ',
    cover: { url: webshopCover, alt: 'Atelier Webshop avec Mollie & Codex' },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Je suis arrivé au Wagon avec une question simple en tête : est-ce qu'on peut vraiment lancer un webshop en une soirée, sans monter une équipe tech ? Spoiler : oui, et c'est même devenu assez troublant de voir à quelle vitesse une idée prend forme.",
          "Pour cet atelier, j'ai choisi un terrain de jeu qui me parlait : une boutique en ligne dédiée à la vente de cartes Pokémon à l'unité. L'idée était de construire une vraie page de vente, avec une fiche collectionneur détaillée pour chaque carte - extension, numéro, langue, rareté, état de conservation - et un tunnel de commande complet, du choix de la carte jusqu'au paiement sécurisé.",
        ],
      },
      {
        fullWidth: true,
        image: { url: pokemonProduct, alt: 'Fiche produit Pokémon Market Place - carte Carapuce 007/165', aspectRatio: '16 / 9', caption: "La fiche produit générée par Codex : détails collectionneur (extension, numéro, rareté, état) et toggle FR/EN." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "On a commencé par poser le concept de boutique, choisir le catalogue, puis confier la construction du site à Codex. Pendant qu'il assemblait les pages produit avec les descriptions de cartes, le carrousel et la fiche collectionneur, j'ai branché Mollie pour gérer les paiements : carte, virement, Apple Pay, le tout en quelques clics. L'agent gérait aussi le toggle FR / ENG et la mise à jour dynamique des libellés selon la langue.",
        ],
      },
      {
        fullWidth: true,
        image: { url: pokemonCheckout, alt: 'Tunnel de commande avec récapitulatif et paiement Mollie', aspectRatio: '16 / 9', caption: "Le tunnel de commande complet avec récapitulatif et paiement sécurisé via Mollie — opérationnel en une soirée." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "En fin d'atelier, j'avais une boutique en ligne capable d'encaisser un vrai paiement de test, avec un design soigné, un back-office propre et un tunnel d'achat qui passait sans accroc par Mollie. La leçon que je retiens : aujourd'hui, ce qui sépare une idée e-commerce d'un MVP qui vend, ce ne sont plus les compétences techniques, c'est la clarté du besoin et la rigueur du parcours utilisateur.",
          "📅 Date de l'événement : 11/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'hackathon-lovable-join-lion',
    order: 5,
    title: 'Hackathon Lovable chez Join Lion',
    description:
      "Une soirée à la Jungle IA pour transformer une idée en application en 3h avec Lovable, entourée de 70 personnes qui se lancent en même temps.",
    date: '9 juin 2026',
    eventDate: '09/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/jybxjxu4?locale=fr&tk=Aimmjv',
    cover: { url: lovableCover, alt: 'Meetup Lovable x Paatch - Jungle IA' },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Quand je suis arrivé à la Jungle IA pour l'édition spéciale Lovable, j'avais cette sensation que je connais bien : celle d'être à deux doigts de me lancer sur une idée, mais de toujours trouver une bonne raison de la repousser. La promesse de la soirée était simple - ouvrir Lovable, prompter, bricoler une vraie idée, et voir où ça mène en quelques heures.",
          "J'ai profité de ces 3 heures pour me lancer enfin sur un projet que je repoussais depuis longtemps : construire mon portfolio pour présenter mon parcours et mes projets à d'éventuels recruteurs. J'ai mis à profit toute la durée de l'hackathon pour avancer au maximum sur ce site, page par page.",
        ],
      },
      {
        fullWidth: true,
        gallery: {
          columns: 3,
          aspectRatio: '16 / 10',
          images: [
            { url: portfolioHome, alt: 'Landing page du portfolio Vincent Nguyen', caption: "La landing page du portfolio, construite en live pendant le hackathon." },
            { url: portfolioParcours, alt: 'Page Parcours du portfolio', caption: "La page Parcours, générée par Lovable en quelques prompts." },
            { url: portfolioProjets, alt: 'Page Projets du portfolio', caption: "La page Projets, itérée en temps réel au fil de la soirée." },
          ],
        },
      },
      {
        fullWidth: true,
        gallery: {
          columns: 2,
          aspectRatio: '16 / 10',
          images: [
            { url: portfolioBlog, alt: 'Page Blog du portfolio', caption: "La page Blog, construite avant la fin du hackathon." },
            { url: portfolioContact, alt: 'Page Contact du portfolio', caption: "La page Contact, dernière page finalisée avant les présentations." },
          ],
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Très vite, la salle s'est remplie. Une soixantaine de personnes, chacune avec son idée, et autour de nous des facilitateurs prêts à débloquer le moindre bug ou la moindre hésitation sur un prompt. L'énergie était dingue : on entendait les claviers cliqueter, des éclats de rire à chaque feature qui fonctionnait, des « ah mais en fait c'est possible ?! » toutes les dix minutes.",
          "Ce qui m'a marqué, c'est de voir des profils non-techs sortir, en trois heures, un prototype publié, cliquable, presque crédible. Le rôle du PM change complètement dans ce contexte : on n'écrit plus une spec pour quelqu'un d'autre, on dialogue avec un agent qui construit en direct et on apprend en regardant ce qui sort de l'écran.",
        ],
      },
      {
        image: { url: lovableRoom, alt: 'Salle pleine pendant le meetup Lovable x Paatch', width: 'sm', caption: "La Jungle IA comble pour le hackathon Lovable x Paatch : une soixantaine de participants qui construisent en simultané." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "En fin de soirée, chaque groupe est venu présenter son projet. Six équipes, six univers complètement différents, et le même fil rouge : on était parti d'une page blanche, et on terminait avec quelque chose à montrer.",
          "Ce que je retiens : on n'avance pas en théorisant une idée pendant des mois, on avance en l'ouvrant, en la testant, en acceptant que la première version soit imparfaite. Merci à Lovable, à Paatch et à toute l'équipe d'avoir créé cet espace. J'y retournerai.",
          "📅 Date de l'événement : 09/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'construire-ia-demain',
    order: 6,
    title: "Construire l'IA de demain : défis et opportunités",
    description:
      "Table ronde Le Wagon x Women in Tech France sur l'IA comme révolution de société : comment construire une IA inclusive, représentative et équitable.",
    date: '2 juin 2026',
    eventDate: '02/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://www.lewagon.com/fr/events/construire-l-ia-de-demain-defis-et-opportunites-SsjIsz',
    cover: { url: iaDemainCover, alt: "Construire l'IA de demain - Défis et Opportunités" },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "J'ai eu la chance de participer à la table ronde organisée par Le Wagon avec Women in Tech France, sur un sujet qui me tient à cœur : à quoi va ressembler l'IA de demain, et qui sera en train de la construire ? Aux côtés de Zena El Kurdi, Jaafar Elalamy et Héloïse Bertoux, on a passé une soirée à confronter nos expériences - startup, grand groupe, formation, terrain - autour de cette question.",
          "Le format était volontairement ouvert : pas de pitch produit, pas de démo, mais des regards qui se croisent sur ce que l'IA va changer dans nos vies professionnelles et collectives. La salle, pleine, mélangeait fondatrices, ingénieures, designers, PM et profils en reconversion, et cette diversité a été un vrai moteur dans les échanges.",
        ],
      },
      {
        fullWidth: true,
        image: { url: iaDemainRoom, alt: "Table ronde Construire l'IA de demain au Wagon Paris", aspectRatio: '16 / 9', caption: "Table ronde « Construire l'IA de demain » au Wagon Paris avec Women in Tech France." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Une conviction est revenue plusieurs fois dans nos échanges : l'IA n'est pas seulement une révolution technologique, c'est une révolution de société. Elle va transformer nos métiers, notre accès à la connaissance, l'école, la santé, les services publics, et jusqu'à nos relations internationales. La vraie question n'est plus de savoir si elle va nous transformer, mais comment on choisit d'accompagner cette transformation.",
          "J'ai aussi partagé une intuition que je porte depuis quelques mois : l'IA ne remplacera pas les humains, mais les professionnels qui sauront s'en servir vont profondément transformer les organisations dans lesquelles ils travaillent. On le voit déjà côté produit, côté finance, côté ops - la barre se déplace.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le débat le plus intense a porté sur notre responsabilité collective. Si on laisse les biais des données d'aujourd'hui dicter les modèles de demain, on va figer dans la machine des inégalités qu'on essaie de corriger depuis vingt ans. Construire une IA inclusive, représentative et équitable, ce n'est pas une option : c'est une condition pour que cette technologie tienne ses promesses.",
          "On a aussi évoqué l'enjeu européen. L'IA est devenue stratégique au même titre que l'énergie ou la défense, et l'Europe a une carte à jouer si elle assume un modèle qui lui ressemble - exigeant sur les données personnelles, attentif à l'impact social, ambitieux côté recherche.",
          "Je suis ressorti de cette soirée avec une certitude : l'avenir de l'IA ne doit pas être construit par quelques-uns pour tous, mais par tous pour tous.",
          "📅 Date de l'événement : 02/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'claude-code-pms',
    order: 7,
    title: 'Formation Claude Code chez Noé',
    description:
      "Deux jours pour intégrer Claude Code dans ma pratique de PM : de l'ajout d'une fonctionnalité sur un écran de synthèse à la Spotify, jusqu'à la correction de bugs et la mise en production via GitHub.",
    date: '29 & 30 mai 2026',
    eventDate: '29-30/05/2026',
    categories: ['Formation', 'Product', 'IA'],
    url: 'https://www.noe.pm/claude-code-pour-pms',
    cover: { url: claudeCodeCover, alt: 'Formation Claude Code chez Noé' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Quand j'ai commencé cette formation chez Noé, j'utilisais Claude Code comme la plupart des PM autour de moi : un peu au feeling, beaucoup en mode chat, sans vraiment exploiter ce que l'outil pouvait faire. Deux jours plus tard, c'est devenu un vrai membre de mon équipe - et c'est sans doute le changement de pratique le plus marquant que j'ai vécu cette année.",
          "Le format est volontairement court et dense : deux journées en présentiel chez Noé, par petits groupes, avec des cas pratiques imposés sur des bases de code réelles. L'idée n'est pas d'apprendre à prompter dans le vide, mais de produire quelque chose de tangible à chaque demi-journée - une fonctionnalité, un correctif, une pull request. Cette contrainte change tout : on quitte la posture du PM qui rédige une spec et qu'on attend de voir, et on entre dans celle du PM qui contribue directement à la base de code, encadré par Claude.",
        ],
      },
      {
        fullWidth: true,
        image: { url: claudeCodeRoom, alt: 'Salle de formation Claude Code chez Noé', aspectRatio: '16 / 9', caption: "La salle de formation Claude Code chez Noé : petits groupes, cas pratiques sur des bases de code réelles." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Jour 1 - apporter une nouvelle fonctionnalité. On part d'un projet existant : un écran de synthèse annuelle façon Spotify Wrapped, fourni en base. L'exercice : ajouter une vraie fonctionnalité utilisateur, en l'occurrence un toggle clair / sombre qui change complètement l'identité visuelle de la page. Avant de coder quoi que ce soit, on commence par cadrer le besoin avec Claude - quel comportement attendu, quels états, quels composants impactés - puis on bascule en plan mode pour qu'il propose une stratégie d'implémentation. Une fois le plan validé, il exécute, on teste, on itère.",
        ],
      },
      {
        fullWidth: true,
        image: { url: spotifyWrappedDark, alt: 'Écran de synthèse annuelle Spotify Wrapped en mode sombre', aspectRatio: '9 / 16', width: 'sm', caption: "Le point de départ de l'exercice Jour 1 : l'écran de synthèse annuelle en mode sombre." },
      },
      {
        fullWidth: true,
        image: { url: spotifyWrappedLight, alt: 'Même écran de synthèse Spotify Wrapped en mode clair après ajout du toggle', aspectRatio: '9 / 16', width: 'sm', caption: "Le même écran en mode clair après ajout du toggle — fonctionnalité conçue, implémentée et publiée en autonomie." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Ce qui m'a marqué, ce n'est pas tellement de voir la fonctionnalité fonctionner - c'est de l'avoir conçue, fait implémenter, validée, puis publiée en autonomie, sans déranger une équipe de dev. Quand on a passé dix ans à écrire des specs sans pouvoir tester soi-même, c'est un vrai changement de référentiel.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Jour 2 - identifier et corriger des bugs. On change complètement de contexte : une application e-commerce à la Deliveroo, avec un parcours menu / panier / commande, et plusieurs bugs glissés volontairement dans le code. L'exercice est très proche d'une journée de bug triage en équipe produit : reproduire le bug, isoler la cause avec Claude, proposer un correctif, écrire un message de commit propre, ouvrir une pull request sur GitHub.",
        ],
      },
      {
        fullWidth: true,
        image: { url: roofoodMenu, alt: 'Application Roofood (clone Deliveroo) - menu et panier latéral', aspectRatio: '16 / 9', caption: "L'application Roofood (clone Deliveroo) : le terrain de jeu du Jour 2, avec des bugs glissés volontairement dans le code." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le moment fort de la journée a été la revue : chaque correctif est poussé sur une branche, soumis sur la branche main via une pull request, vérifié par un encadrant, puis mergé dans la base de code. On retrouve exactement le rythme d'une équipe tech - et on comprend de l'intérieur pourquoi une bonne description de PR, des commits atomiques et une vérification rigoureuse font gagner autant de temps en aval.",
        ],
      },
      {
        fullWidth: true,
        image: { url: roofoodCheckout, alt: "Étape de récapitulatif de commande sur l'application Roofood", aspectRatio: '16 / 9', caption: "L'étape de récapitulatif de commande sur Roofood, après correction du bug et merge de la pull request." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Ce que je retiens de ces deux jours, c'est moins une liste de fonctionnalités qu'un changement de posture. Le PM augmenté par Claude Code, ce n'est pas celui qui sait mieux prompter, c'est celui qui sait quel contexte donner, quelle décision garder pour lui, et quelle partie de la chaîne il peut désormais prendre en charge sans déranger ses devs.",
          "📅 Date de l'événement : 29-30/05/2026",
        ],
      },
    ],
  },
  {
    slug: 'noe-formation-pm',
    order: 10,
    title: 'Formation Product Management - Noé promo 33',
    description:
      "Retour sur 4 semaines intensives de Product Management chez Noé, en tant que PM pour BlaBlaCar : stratégie, discovery, priorisation, prototypage, delivery et restitution finale au Lead PM.",
    date: '20 avril - 15 mai 2026',
    eventDate: '20/04 - 15/05/2026',
    categories: ['Formation', 'Product'],
    url: 'https://www.noe.pm/formation-product-manager-la-formation-pm-en-4-semaines-noe',
    cover: { url: noePmPromo, alt: 'Promo 33 Noé - formation Product Management' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "J'ai officiellement obtenu mon diplôme de Product Management chez Noé, avec la promo 33. Quatre semaines intenses, denses, parfois épuisantes, mais qui ont changé ma manière de penser le produit.",
        ],
      },
      {
        fullWidth: true,
        image: { url: noePmPromo, alt: 'Photo de promo - Noé Product Management 33', aspectRatio: '16 / 9', caption: "La promo 33 Noé — quatre semaines de Product Management intensif avec BlaBlaCar comme entreprise cliente." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le format est simple sur le papier et redoutable dans la pratique : on devient PM pour une vraie entreprise - dans mon cas BlaBlaCar - et on est encadré par des Senior PM, Head of Product et CPO qui ne nous laissent rien passer. La première semaine, on s'attaque à la stratégie : explorer la problématique, comprendre le positionnement de BlaBlaCar face aux autres acteurs en France, identifier où se trouvent les vraies opportunités.",
          "La deuxième semaine, j'ai plongé dans la discovery. Interviews utilisateurs, requêtes SQL pour creuser la donnée, croisements dans Excel, tests produit. C'est la semaine où j'ai compris à quel point la qualité d'une question d'interview pouvait changer la trajectoire d'un projet entier.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Vient ensuite la priorisation. RICE, MoSCoW, KPIs impactés, arbitrages : on apprend à défendre ses choix devant des gens qui ont vu défiler des centaines de roadmaps. Puis le prototypage sur Figma, en testant chaque itération avec de vrais utilisateurs - pas des collègues complaisants, des vrais users qui te disent quand ça ne va pas.",
          "La dernière semaine, on bascule en mode delivery : rédaction des specs pour l'équipe tech, user stories, workflows, cas limites. L'objectif est clair - produire quelque chose qu'une équipe pourrait réellement développer derrière.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Et puis il y a eu le grand oral. Présenter notre travail devant le Lead PM de BlaBlaCar, défendre nos choix, encaisser les questions. C'est dans ce moment-là que j'ai mesuré le chemin parcouru en quatre semaines.",
          "Je sors de cette formation avec une boîte à outils complète, un réseau de PM passionnés, et surtout une confiance nouvelle : je sais que je peux prendre un sujet produit complexe et le mener du flou stratégique jusqu'à des specs livrables.",
          "📅 Date de l'événement : 20/04 - 15/05/2026",
        ],
      },
    ],
  },
  {
    slug: 'big-data-beautiful-data',
    order: 9,
    title: 'Des 5V du Big Data aux 5E du Beautiful Data - IAE Paris',
    description:
      "Conférence IAE Paris - Sorbonne Business School : et si l'immatériel du « Beautiful Data » venait compléter le matériel du Big Data, au service d'une performance plus durable ?",
    date: '18 mai 2026',
    eventDate: '18/05/2026',
    categories: ['Data', 'Communauté'],
    cover: { url: data5vIaeCover, alt: 'Conférence IAE Paris Alumni - Big Data & Beautiful Data' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Je suis venu à l'IAE Paris - Sorbonne Business School avec une question presque naïve : à force de courir derrière le « toujours plus » de données, ne sommes-nous pas en train d'oublier l'essentiel ? C'est exactement le débat que cette conférence est venue ouvrir, en confrontant les célèbres 5V du Big Data - Volume, Vélocité, Variété, Véracité, Valeur - à une grille beaucoup plus récente : les 5E du « Beautiful Data ».",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: data5vCover,
          alt: 'Slide « Les 5V du Big Data » projetée lors de la conférence',
          aspectRatio: '16 / 9',
          objectPosition: 'center 44%',
          caption: "Les 5V du Big Data (Volume, Vélocité, Variété, Véracité, Valeur) — point de départ du débat avec les 5E du Beautiful Data.",
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "La table ronde réunissait des regards très complémentaires. Xavier Morel, operating partner et expert de la transformation numérique, a posé le décor côté entreprise. Laurine Teixeira, doctorante en droit des sociétés, a rappelé combien le cadre juridique commence à dicter les bonnes pratiques data. Augustin de la Fouchardière, fondateur de MYPE, a parlé de l'informatique décisionnelle vue du terrain. Et Gilles Trigano, docteur en sciences de gestion et auteur d'une thèse sur les 5E du Beautiful Data, a déroulé la théorie qu'il défend depuis plusieurs années.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le fil rouge de la soirée a tourné autour de trois questions qui sont restées avec moi : avec l'essor de l'IA générative, va-t-on basculer d'un monde quantitatif vers un monde qualitatif ? Quelle complémentarité réelle entre le Big Data et le Beautiful Data ? Et quel rôle pour l'éthique et l'éducation dans une démarche d'éco-responsabilité numérique ?",
          "La thèse défendue m'a beaucoup parlé : le Big Data nous donne la matière - volume, vélocité, variété, véracité, valeur - mais c'est le Beautiful Data qui en révèle le sens. Les 5E (esthétique, éthique, éducatif, écologique, équitable) ne s'opposent pas aux 5V, ils les prolongent. Ensemble, ils dessinent un cercle vertueux dans lequel la performance globale d'une entreprise - y compris sociale et environnementale - devient mesurable et améliorable.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "En tant que PM Finance et SI, j'ai retrouvé dans cette grille beaucoup de débats internes que je vois passer chez mes clients : faut-il continuer à empiler des tableaux de bord, ou commencer à arbitrer ce que l'on mesure vraiment ? Quelle responsabilité quand on automatise une décision sur la base d'un modèle ? Comment former les équipes métier à lire la donnée sans la subir ?",
          "Je suis ressorti de cette soirée avec une conviction renforcée : la prochaine vague de valeur en data ne viendra pas d'un V supplémentaire, mais des E que l'on choisira d'incarner.",
          "📅 Date de l'événement : 18/05/2026",
        ],
      },
    ],
  },
  {
    slug: 'ia-transforme-pm',
    order: 8,
    title: "Comment l'IA transforme le Product Management",
    description:
      "Tech Talk Le Wagon x Welcome to the Jungle : comment le métier de PM a changé en 18 mois, ce qui s'automatise, et les compétences qui comptent vraiment en 2026.",
    date: '27 mai 2026',
    eventDate: '27/05/2026',
    categories: ['Product', 'IA', 'Communauté'],
    url: 'https://www.lewagon.com/fr/events/comment-l-ia-transforme-le-product-management-HPFVtl',
    cover: { url: iaPmCover, alt: "Comment l'IA transforme le Product Management" },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Une phrase, lancée en début de soirée, a donné le ton de toute la table ronde : la fiche de poste d'un PM n'a presque pas bougé en cinq ans, mais le métier lui-même s'est complètement transformé en dix-huit mois. Tout le monde dans la salle a hoché la tête, et on s'est dit qu'on était au bon endroit pour en parler.",
          "Je suis arrivé au Wagon avec une question très concrète : quels gestes de mon quotidien de PM sont en train d'être absorbés par l'IA, et lesquels prennent au contraire encore plus de valeur ? J'avais besoin de confronter mes intuitions à celles de PM qui vivent cette transformation à plus grande échelle que moi - en startup hyper-croissance comme en scale-up plus établie.",
          "La salle était pleine, mélange de PM expérimentés, de juniors qui cherchent leur place, et de profils tech curieux de voir comment le métier évolue. Cette diversité a beaucoup nourri les échanges qui ont suivi.",
        ],
      },
      {
        fullWidth: true,
        image: { url: iaPmRoom, alt: "Tech Talk Comment l'IA transforme le Product Management - Le Wagon Paris", caption: "Tech Talk Le Wagon x Welcome to the Jungle : salle pleine pour débattre de la transformation du métier de PM par l'IA." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le Wagon avait réuni des intervenants qui vivent ce basculement au quotidien : Louis Comte, qui voit défiler chaque jour des centaines de startups à STATION F en train de construire avec l'IA ; Leslie Malem, qui observe de l'intérieur les équipes produit de Welcome to the Jungle ; Emmanuel Hosanski, Head of Product chez Pennylane, qui embarque l'IA dans un produit comptable où l'erreur n'est pas une option ; et Anne Dumas, qui animait la discussion avec une vraie exigence.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "On a passé une bonne partie de la soirée à essayer de répondre à une question qui taraude beaucoup de PM autour de moi : qu'est-ce qui s'automatise vraiment dans notre métier, et qu'est-ce que ça veut dire pour les juniors qui arrivent ? La synthèse, c'est que la rédaction de specs, les premières analyses de données et la production de maquettes bougent énormément, mais que la priorisation, le sens du produit et la capacité à embarquer une équipe restent profondément humains - et deviennent même plus discriminants qu'avant.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "L'autre question forte de la soirée : quels produits peut-on construire aujourd'hui qui étaient impossibles il y a dix-huit mois ? Les exemples concrets ont fusé, des assistants métier capables de lire des documents complexes aux copilotes intégrés directement dans les outils internes. Et avec ça, un vrai sujet de fond : comment livrer des fonctionnalités IA quand les modèles hallucinent et que la confiance des utilisateurs se gagne lentement ?",
          "Je suis ressorti avec plein de notes, mais surtout avec la conviction que le PM de 2026 sera celui qui aura accepté que son métier change vite, et qui aura pris le temps d'apprendre à travailler avec ces nouveaux outils plutôt que de regarder ailleurs.",
          "📅 Date de l'événement : 27/05/2026",
        ],
      },
    ],
  },
  {
    slug: 'dust-ai-agent',
    order: 11,
    title: 'Atelier Dust - Construire son premier agent IA',
    description:
      "Soirée Eria x Le Wagon x Dust : théorie et pratique pour repartir avec son propre agent IA opérationnel, connecté à Google Drive et aux emails, sans une seule ligne de code.",
    date: '8 avril 2026',
    eventDate: '08/04/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://www.lewagon.com/fr/events/atelier-dust-build-your-first-ai-agent-5CkQZn',
    cover: { url: dustCover, alt: 'Construire son premier agent IA - Eria x Le Wagon x Dust' },
    sections: [
      {
        paragraphs: [
          "Ce soir-là au Wagon, j'avais une promesse claire en tête : repartir avec mon propre agent IA, opérationnel, sans écrire une ligne de code. Trois acteurs très complémentaires animaient la soirée : Eria, l'agence cofondée par Tifany Clemenceau et Melvin Duveau, spécialisée dans la création d'agents sur-mesure pour les TPE/PME ; Dust, la plateforme française d'agents IA déjà adoptée par plus de 5 000 organisations comme Doctolib, Qonto ou Alan ; et Le Wagon, qui sait toujours rendre la tech accessible.",
        ],
      },
      {
        image: { url: dustRoom, alt: "Salle pleine pour l'atelier Construire son premier agent IA au Wagon Paris", caption: "Salle pleine pour l'atelier Dust au Wagon Paris — une soirée pour repartir avec son propre agent IA opérationnel." },
      },
      {
        paragraphs: [
          "On a démarré par une partie théorique courte mais carrée : ce qu'est vraiment un agent (au-delà du buzzword), la différence entre un assistant et un agent autonome, et surtout les cas d'usage qui marchent en entreprise - ceux qui font gagner du temps réel et pas juste une démo Linkedin.",
          "Puis on est passés à la pratique. J'ai branché Dust à mon Google Drive et à mes emails, défini quelques règles en langage naturel, et regardé mon agent commencer à trier, résumer, proposer des brouillons. Le moment où il a sorti son premier résumé pertinent à partir d'un document que je lui avais donné, j'ai eu cette petite étincelle qu'on a quand un outil franchit le seuil de l'utile.",
        ],
      },
      {
        image: { url: dustFlyer, alt: 'Flyer Eria - Construire son premier agent IA', aspectRatio: '4 / 2.4', caption: "Le flyer Eria pour l'atelier Dust : construire son premier agent IA sans une ligne de code." },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Je suis reparti avec un agent qui fonctionne vraiment, intégré à mes outils du quotidien, et une certitude : la barrière d'entrée pour utiliser l'IA en entreprise n'a jamais été aussi basse. Le vrai sujet maintenant, c'est la qualité du contexte qu'on lui donne et la rigueur des cas d'usage qu'on choisit. Un grand merci à Tifany, Melvin et toute l'équipe Le Wagon pour cette soirée qui mêlait théorie, cas concrets et mise en pratique immédiate.",
          "📅 Date de l'événement : 08/04/2026",
        ],
      },
    ],
  },
];
