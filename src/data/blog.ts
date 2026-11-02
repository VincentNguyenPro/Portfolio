import pennylaneIaCover from '@/assets/blog/pennylane-ia-cover.webp';
import pennylaneIaRoom from '@/assets/blog/pennylane-ia-room.webp';
import noeIaProduitCover from '@/assets/blog/noe-ia-produit-cover.webp';
import noeIaProduitNiveaux from '@/assets/blog/noe-ia-produit-niveaux.webp';
import noeIaProduitFaisabilite from '@/assets/blog/noe-ia-produit-faisabilite.webp';
import noeIaProduitConfiance from '@/assets/blog/noe-ia-produit-confiance.webp';
import noeIaProduitCycle from '@/assets/blog/noe-ia-produit-cycle.webp';
import noeIaProduitLean from '@/assets/blog/noe-ia-produit-lean.webp';
import jungleIaDustCover from '@/assets/blog/jungle-ia-dust-cover.webp';
import jungleIaDustRoom from '@/assets/blog/jungle-ia-dust-room.webp';
import jungleIaDustAgent from '@/assets/blog/jungle-ia-dust-agent.webp';
import jungleIaDustCommunity from '@/assets/blog/jungle-ia-dust-community.webp';
import mistralVibeCover from '@/assets/blog/mistral-vibe-cover.webp';
import mistralVibeCeremony from '@/assets/blog/mistral-vibe-ceremony.webp';
import mistralVibeTeam from '@/assets/blog/mistral-vibe-team.webp';
import mistralVibeAppQuestion from '@/assets/blog/mistral-vibe-app-question.webp';
import mistralVibeAppSimulator from '@/assets/blog/mistral-vibe-app-simulator.webp';
import mistralVibeAppMap from '@/assets/blog/mistral-vibe-app-map.webp';
import agenticGtmCover from '@/assets/blog/agentic-gtm-cover.png';
import agenticGtmRoom from '@/assets/blog/agentic-gtm-room.jpeg';
import agenticGtmTeam from '@/assets/blog/agentic-gtm-team.jpeg';
import agenticGtmPitch from '@/assets/blog/agentic-gtm-pitch.jpeg';
import agenticGtmAppMap from '@/assets/blog/agentic-gtm-app-map.png';
import agenticGtmAppDealroom from '@/assets/blog/agentic-gtm-app-dealroom.png';
import agenticGtmAppGraph from '@/assets/blog/agentic-gtm-app-graph.png';
import agenticGtmAppFollowup from '@/assets/blog/agentic-gtm-app-followup.png';
import alanLovableCover from '@/assets/blog/alan-lovable-cover.png';
import alanLovableRoom from '@/assets/blog/alan-lovable-room.jpeg';
import alanLovableAppSelection from '@/assets/blog/alan-lovable-app-selection.png';
import alanLovableAppDashboard from '@/assets/blog/alan-lovable-app-dashboard.png';
import alanLovableAppChecklist from '@/assets/blog/alan-lovable-app-checklist.png';
import alanLovableAppShoes from '@/assets/blog/alan-lovable-app-shoes.png';
import travelAiCover from '@/assets/blog/travel-ai-cover.png';
import travelAiRoom from '@/assets/blog/travel-ai-room.jpeg';
import travelAiAppSearch from '@/assets/blog/travel-ai-app-search.png';
import travelAiAppDetail from '@/assets/blog/travel-ai-app-detail.png';
import dustCover from '@/assets/blog/dust-cover.webp';
import dustRoom from '@/assets/blog/dust-room.webp';
import dustFlyer from '@/assets/blog/dust-flyer.webp';
import webshopCover from '@/assets/blog/webshop-cover.avif';
import iaPmCover from '@/assets/blog/ia-pm-cover.webp';
import iaPmRoom from '@/assets/blog/ia-pm-room.webp';
import iaDemainCover from '@/assets/blog/ia-demain-cover.webp';
import iaDemainRoom from '@/assets/blog/ia-demain-room.webp';
import lovableCover from '@/assets/blog/lovable-cover.avif';
import lovableRoom from '@/assets/blog/lovable-room.webp';
import claudeCodeCover from '@/assets/blog/claude-code-cover.webp';
import claudeCodeRoom from '@/assets/blog/claude-code-room.webp';
import noePmPromo from '@/assets/blog/noe-pm-promo.webp';
import data5vCover from '@/assets/blog/data-5v-cover.webp';
import data5vIaeCover from '@/assets/blog/data-5v-iae-cover.webp';
import vivatechCover from '@/assets/blog/vivatech-cover.webp';
import productPartnersCover from '@/assets/blog/product-partners-cover.webp';
import productPartnersRoom from '@/assets/blog/product-partners-room.jpeg';
import betterCallClaudeCover from '@/assets/blog/better-call-claude-cover.jpeg';
import betterCallClaudeDemo from '@/assets/blog/better-call-claude-demo.webp';
import betterCallClaudeWorkflow from '@/assets/blog/better-call-claude-workflow.webp';
import vivatechEntree from '@/assets/blog/vivatech-entree.webp';
import vivatechIbmQuantum from '@/assets/blog/vivatech-ibm-quantum.webp';
import vivatechLifepods from '@/assets/blog/vivatech-lifepods.webp';
import vivatechTetmet from '@/assets/blog/vivatech-tetmet.webp';
import pokemonProduct from '@/assets/blog/pokemon-product.webp';
import pokemonCheckout from '@/assets/blog/pokemon-checkout.webp';
import spotifyWrappedDark from '@/assets/blog/spotify-wrapped-dark.webp';
import spotifyWrappedLight from '@/assets/blog/spotify-wrapped-light.webp';
import roofoodMenu from '@/assets/blog/roofood-menu.webp';
import roofoodCheckout from '@/assets/blog/roofood-checkout.webp';
import portfolioHome from '@/assets/blog/lovable-portfolio-home.webp';
import portfolioParcours from '@/assets/blog/lovable-portfolio-parcours.webp';
import portfolioProjets from '@/assets/blog/lovable-portfolio-projets.webp';
import portfolioBlog from '@/assets/blog/lovable-portfolio-blog.webp';
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
    slug: 'ia-quotidien-pennylane',
    order: 1,
    title: "L'IA au quotidien chez Pennylane : Engineering, Data & Product",
    description:
      "Tech Talk Le Wagon x Pennylane : comment l'IA change concrètement le travail des équipes Engineering, Data et Product, de la surcharge cognitive des agents à la mesure de la valeur.",
    date: '27 octobre 2026',
    eventDate: '27/10/2026',
    categories: ['IA', 'Product', 'Communauté'],
    url: 'https://www.lewagon.com/events/l-ia-au-quotidien-chez-pennylane-engineering-data-product-r8oClY',
    cover: { url: pennylaneIaCover, alt: "Tech Talk L'IA qui transforme : Engineering, Data & Product chez Pennylane - Le Wagon Paris" },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Au-delà des effets d'annonce, que change vraiment l'IA dans le quotidien d'une équipe tech ? C'est la question à laquelle Pennylane a accepté de répondre sans filtre, ce soir-là, dans les locaux du Wagon Paris. Trois profils, trois métiers : Emilie Paillous, Staff Engineer, Mélanie Bergeot, Data Analyst, et Niels Venverloo, Senior Product Manager, venus partager leur expérience de terrain autour de développement, d'analyse, de prototypage et de mise en production.",
          "J'y suis allé avec une envie précise : confronter ma pratique de l'IA, très orientée outils et prototypes, à celle d'une scale-up qui la déploie à l'échelle d'un produit comptable. Et le message qui est ressorti de la soirée tient en une phrase : l'objectif n'est pas d'utiliser le maximum d'IA, c'est de créer de la valeur réelle tout en gardant la maîtrise humaine.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: pennylaneIaRoom,
          alt: 'Table ronde Pennylane au Wagon Paris',
          aspectRatio: '4 / 3',
          caption: "La table ronde Pennylane x Le Wagon : salle comble, ambiance atelier et un format sans langue de bois.",
        },
      },
      {
        fullWidth: true,
        heading: 'Plus d’agents ne veut pas dire plus de productivité',
        paragraphs: [
          "Il est désormais possible de lancer plusieurs agents IA en parallèle sur des tâches différentes. Sauf que chaque agent demande de la supervision, des vérifications et des décisions humaines - et notre cerveau, lui, ne suit pas un nombre illimité de fils à la fois. La surcharge cognitive est le coût caché du multi-agents.",
          "Ce que j'en retiens : il n'y a pas de bon nombre d'agents universel. Chacun doit trouver le niveau de parallélisation qui reste compatible avec sa capacité d'attention, plutôt que de chercher à reproduire les setups spectaculaires qui circulent sur les réseaux sociaux.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Mesurer la qualité, pas seulement le volume',
        paragraphs: [
          "L'un des intervenants a détaillé les indicateurs suivis pour piloter les agents de développement, analysés lors de revues hebdomadaires :",
        ],
        bullets: [
          "le nombre de pull requests créées par les agents, pour mesurer le volume de travail délégué ;",
          "le nombre de corrections humaines, pour juger la qualité initiale du code généré ;",
          "les réactions positives et négatives aux commentaires de revue, pour évaluer leur pertinence ;",
          "le temps d'exécution des agents, pour suivre la rapidité de traitement ;",
          "un suivi hebdomadaire pour observer l'évolution dans le temps.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Une nuance importante : la productivité des développeurs reste difficile à mesurer directement, alors que les gains de temps sur certaines tâches côté utilisateur sont beaucoup plus faciles à observer. Et c'est là que, pour un PM, la valeur se joue.",
        ],
        quote: "Mesurer la valeur produite, pas l'utilisation de l'IA : un utilisateur qui fait en 15 secondes ce qui lui prenait plusieurs minutes, c'est un bénéfice concret. Le nombre d'appels à un modèle ne dit presque rien.",
      },
      {
        fullWidth: true,
        heading: 'Du clic à l’intention : l’IA change l’interface',
        paragraphs: [
          "L'exemple qui m'a le plus parlé vient du logiciel de comptabilité : configurer un plan de financement demandait de saisir à la main de nombreuses échéances, avec une multitude de clics. L'approche présentée consiste à laisser l'utilisateur décrire son besoin en langage naturel, puis à générer la configuration correspondante, qu'il peut visualiser et ajuster. Une description d'environ 15 secondes suffit.",
          "C'est un vrai changement de paradigme : on passe d'une interface où l'utilisateur exécute des opérations à une interface où il exprime une intention. Le défi n'est plus technique mais d'adoption, en particulier auprès des PME et des professionnels qui ne sont pas familiers avec l'IA.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Les limites : complexité, qualité et responsabilité',
        paragraphs: [
          "Premier travers cité : la tendance des agents à proposer des solutions trop complexes. Une modification simple peut aboutir à une implémentation pleine d'éléments inutiles, avec à la clé de la dette technique et une maintenance plus lourde. La parade passe par des règles de développement explicites, des vérifications automatiques des bonnes pratiques, une relecture humaine et une culture de la solution simple et pragmatique.",
          "Deuxième point, qui dépasse largement le code : certains utilisateurs se déresponsabilisent en attribuant leurs erreurs à l'outil, notamment sur les présentations et documents générés. Le principe défendu est clair : l'humain reste responsable du livrable, même quand c'est une IA qui l'a produit.",
        ],
      },
      {
        fullWidth: true,
        heading: 'La documentation devient un actif stratégique',
        paragraphs: [
          "Pour produire des résultats pertinents, un agent a besoin de contexte : règles de développement, objectifs, processus métier, décisions, connaissances internes. Le retour d'expérience présenté s'appuie sur une base de connaissances centralisée, alimentée par toutes les équipes, qui sert aussi à retrouver une information, comprendre les acronymes maison et accélérer l'intégration des nouveaux arrivants.",
          "Revers de la médaille : une documentation fausse ou obsolète conduit l'IA à produire des réponses fausses. La qualité des résultats dépend directement de la qualité des connaissances auxquelles elle accède - un sujet très proche de la Product Ops.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Adopter par l’expérimentation, pas par décret',
        paragraphs: [
          "Plutôt que d'imposer des outils, les entreprises représentées misent sur l'expérimentation décentralisée : chacun a la liberté de tester et de découvrir ses propres usages, accompagné par des AI Champions, ces collaborateurs particulièrement investis qui font émerger les bonnes pratiques avant qu'elles ne soient structurées et déployées plus largement.",
          "Côté sécurité, la philosophie est la même : rendre l'expérimentation possible dans un cadre sûr plutôt que d'interdire par défaut. Concrètement, cela passe par le maintien des contrôles de permissions existants lorsqu'un agent accède aux ressources de l'entreprise, et par la sécurisation des fonctionnalités IA comme n'importe quelle autre fonctionnalité logicielle.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Ce que j’en retiens comme Product Manager',
        paragraphs: [
          "Trois idées sont restées avec moi en sortant :",
        ],
        bullets: [
          "Le contexte métier devient un avantage concurrentiel. Les modèles sont de plus en plus accessibles à tous : la différenciation vient de la qualité des données, de la connaissance des utilisateurs et de l'intégration dans leurs processus.",
          "La vitesse d'expérimentation devient une compétence d'organisation. Les intervenants imaginent des équipes plus petites et plus expertes, capables de tester vite et d'apprendre de leurs résultats - ce qui remet la discovery, la priorisation et la mesure d'impact au centre du métier.",
          "La gouvernance se pense dès la conception. Sécurité, permissions et supervision humaine ne sont pas une couche à ajouter après coup.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Je repars avec une conviction : l'IA n'est pas qu'un outil d'automatisation, elle transforme en même temps les méthodes de développement, l'expérience utilisateur et l'organisation du travail. L'enjeu n'est pas de multiplier les agents ou les fonctionnalités IA, mais de trouver le bon équilibre entre automatisation, simplicité, qualité, autonomie et contrôle humain. Merci à Emilie, Mélanie et Niels pour leur franchise, et à toute l'équipe du Wagon pour cette soirée suivie d'un temps informel très riche en discussions.",
          "📅 Date de l'événement : 27/10/2026",
        ],
      },
    ],
  },
  {
    slug: 'noe-integrer-ia-produit',
    order: 2,
    title: "Comment intégrer l'IA dans son produit ? Le retour d'expérience de Roxane Albert (Noé)",
    description:
      "Webinaire Noé : trois idées fausses sur l'intégration de l'IA en product management, les quatre risques de Marty Cagan appliqués à l'IA et les trois piliers de la confiance, à partir d'un produit IA construit chez Bpifrance.",
    date: '6 octobre 2026',
    eventDate: '06/10/2026',
    categories: ['Product', 'IA', 'Formation'],
    url: 'https://www.youtube.com/watch?v=C8s9KSecbFo',
    cover: { url: noeIaProduitCover, alt: "Webinaire Noé - Comment intégrer l'IA dans son produit : les 3 idées fausses" },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Un POC d'IA qui reste dans un tiroir, tout PM en a croisé. Le webinaire de Noé, l'école où j'ai suivi ma formation Product Management, partait de ce constat : la vraie difficulté n'est pas de faire une IA qui marche, c'est de faire un produit IA que les gens adoptent. Roxane Albert, Group Product Manager chez Theodo, y a partagé son retour d'expérience sur les produits IA qu'elle a construits pour une banque publique, Bpifrance, dans un contexte réglementé où les contraintes de conformité et d'accès aux données sont fortes.",
          "J'ai suivi la session en direct, 45 minutes très denses, ouverte par Jules Delpech, fondateur de Noé. Voici ce que j'en retiens, avec les slides qui m'ont le plus servi.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Pourquoi le métier de PM change',
        paragraphs: [
          "En introduction, trois changements du métier de Product Manager ont été posés, chacun avec son enjeu :",
        ],
        bullets: [
          "Gagner en efficacité : déléguer et industrialiser des tâches avec l'IA à l'échelle de l'équipe, avec l'enjeu de centraliser les bonnes pratiques.",
          "Se rapprocher de la tech : lire, comprendre et contribuer à la codebase, sans casser le code ni surcharger les développeurs.",
          "Développer des fonctionnalités IA : concevoir et shipper des features qui reposent sur l'IA, avec deux défis, le non-déterminisme et l'observabilité.",
        ],
      },
      {
        fullWidth: true,
        heading: "Les trois niveaux de maturité d'un produit IA",
        paragraphs: [
          "Pour situer son projet, Roxane propose une grille simple en trois niveaux. Le premier, naviguer : une barre conversationnelle qui remplace les filtres, comme l'option « Décrivez votre voiture idéale » de La Centrale. Le deuxième, synthétiser : l'IA lit, résume et restitue l'information, comme l'assistant de Bpifrance qui prépare des notes de synthèse ou la recherche IA des Echos. Le troisième, déclencher : l'IA passe à l'action, notifie, envoie, met à jour, comme le coworker IA développé par Theodo, branché sur les outils de l'entreprise (CRM, messagerie, Slack, Notion, Drive).",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: noeIaProduitNiveaux,
          alt: "Slide : intégrer l'IA, trois niveaux de maturité - naviguer, synthétiser, déclencher",
          aspectRatio: '1868 / 1218',
          width: 'md',
          caption: "Les trois niveaux de maturité d'un produit IA : naviguer, synthétiser, déclencher.",
        },
      },
      {
        fullWidth: true,
        heading: 'Idée fausse n°1 : « il faut d’abord dérisquer la faisabilité »',
        paragraphs: [
          "Le réflexe technique est légitime : il faut dérisquer le contexte d'un produit IA, c'est-à-dire se demander quel type d'action on demande à l'IA, avec quelles données en entrée et quel risque d'hallucination. Garbage in, garbage out. Mais ce qu'on oublie, c'est que l'IA reste un moyen de répondre à un problème qui, parfois, se résout mieux sans IA. Sans désirabilité, on tombe dans les features à gogo.",
          "Le reframe : commencer par la désirabilité, puis passer les quatre risques de Marty Cagan sur un problème réel. Roxane les a déroulés sur le cas Bpifrance :",
        ],
        bullets: [
          "Viabilité : le modèle économique est-il rentable (coût du LLM, infra, support) et le business case sert-il une priorité stratégique ? Côté Bpifrance : le temps nécessaire à une analyse est divisé par deux, pour un coût inférieur à 2 € par analyse financière.",
          "Désirabilité : résout-on un problème réel et fréquent ? Côté Bpifrance : beaucoup de temps perdu à récupérer des documents dispersés dans plusieurs bases et des mails, et une partie de l'analyse purement descriptive, sans valeur ajoutée pour le chargé d'affaires.",
          "Faisabilité : les données sont-elles fiables, quel est le risque d'hallucination, la solution est-elle maintenable et peut-on changer de technologie ? Côté Bpifrance : uniquement des données de qualité en entrée, et un humain dans la boucle, puisque l'analyse est toujours relue par un chargé d'affaires et que la décision de financement ne se base jamais automatiquement sur l'analyse.",
          "Usabilité : faut-il créer une nouvelle interface plutôt qu'utiliser Copilot, Claude ou GPT, et l'utilisateur comprend-il ce que l'agent peut faire pour lui ? Côté Bpifrance : capitaliser sur un outil interne déjà utilisé pour le montage de dossier et, les données étant extrêmement confidentielles, rester dans un système Bpifrance.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: noeIaProduitFaisabilite,
          alt: "Slide : quatre risques de Marty Cagan, faisabilité - front, back office et API, couche d'accès aux modèles, observation",
          aspectRatio: '2000 / 1040',
          width: 'lg',
          caption: "Côté faisabilité, l'architecture retenue : un front dans un outil déjà utilisé, un back office branché par API, une couche d'accès aux modèles interchangeables et de l'observation.",
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Sur le choix de construire plutôt que d'utiliser un agent existant, trois arguments ont été avancés : les droits d'accès aux données (brancher des outils IA du marché sur les bases métier n'était pas permis, alors que c'était possible sur leur plateforme), la standardisation (une proposition de prompt par métier et par section de l'analyse) et l'amélioration continue. L'alternative, partager des projets à maintenir dans un outil générique, n'a pas fait décoller l'adoption.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Idée fausse n°2 : « il faut tester son MVP le plus vite possible »',
        paragraphs: [
          "Tester vite, oui, parce qu'on a toujours besoin de retours utilisateurs. Mais avec l'IA, un produit pas assez mature fait fuir immédiatement ses utilisateurs, et il devient très compliqué de recréer la confiance ensuite. Mieux vaut commencer par des bêta-testeurs internes. Le reframe : il faut d'abord penser la confiance, car sans confiance, il n'y a pas d'adoption.",
          "Elle repose sur trois piliers : la compétence (les résultats sont-ils de qualité, et qu'attend l'utilisateur ?), la transparence (d'où vient la réponse et que fait-on quand elle est fausse ?) et l'empathie (dans quel contexte est l'utilisateur et quelle posture attend-il ?).",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: noeIaProduitConfiance,
          alt: 'Slide : les trois piliers de la confiance - compétence, transparence, empathie',
          aspectRatio: '2000 / 1070',
          width: 'lg',
          caption: 'Les trois piliers de la confiance : compétence, transparence, empathie.',
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Pour la compétence, trois causes de mauvais outputs ont été identifiées : un périmètre trop large (on veut couvrir trop de cas d'usage et on n'atteint la qualité d'aucun), l'absence d'accord sur l'output (chez Bpifrance, pour un même métier, l'analyse n'était pas conduite de la même façon selon les régions, et il a fallu trancher avant de prompter) et des prompts non spécialisés (un dossier simple et un dossier complexe ne s'analysent pas avec les mêmes ratios).",
          "Pour la transparence, quatre réflexes de design : expliciter les sources (avec le numéro de page), savoir dire qu'on ne sait pas et rediriger vers un humain plutôt qu'inventer, laisser de la place à la correction puisque l'IA peut halluciner, et montrer les progrès quand la réponse prend du temps.",
        ],
        quote: "On oublie l'effort d'empathie parce qu'on voit des algorithmes. Or l'interface tend à devenir invisible : la conversation devient le produit.",
      },
      {
        fullWidth: true,
        heading: 'Idée fausse n°3 : « il faut se limiter à un faible nombre de testeurs »',
        paragraphs: [
          "Le reframe est subtil : plutôt que de limiter le nombre de testeurs, il faut cadrer le périmètre, puis apprendre de chaque input. Avant la mise en production : des cas de test, des jeux d'évaluation, des questions malicieuses, un périmètre et un niveau de risque définis. Après l'ouverture : l'analyse des traces réelles, pièce par pièce, pour comprendre ce que cherchent vraiment les utilisateurs, avec un outil d'observabilité comme Langfuse.",
          "Pour un PM, c'est un changement concret du cycle produit : un champ ouvert transforme chaque input en donnée produit, sans dispositif de recherche dédié ; des briques d'évaluation mesurent les réponses en continu ; et on peut optimiser directement, en enrichissant le contexte, en ajustant une compétence ou le prompt système sans passer par un ticket. Une limite honnête a aussi été posée : l'outillage de traces n'est pas encore fait pour les PM, et chez eux ce sont les profils techniques qui les exploitent pour améliorer les prompts. Des acteurs se positionnent justement pour rendre les traces lisibles par les équipes produit.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: noeIaProduitCycle,
          alt: 'Slide : ce que ça change dans le cycle produit - un champ ouvert, des briques d’évaluation, une optimisation directe',
          aspectRatio: '2000 / 1007',
          width: 'lg',
          caption: "Ce que l'IA change dans le cycle produit : un champ ouvert, des briques d'évaluation et une optimisation directe.",
        },
      },
      {
        fullWidth: true,
        heading: 'Pour aller plus loin : le lean',
        paragraphs: [
          "La présentation s'est conclue sur quatre principes lean qui guident les équipes de Theodo : la valeur pour le client (partir du terrain et de vrais problèmes utilisateurs), faire juste du premier coup (être vigilant sur la qualité, parce que c'est elle qui crée la confiance), un réseau d'équipes autonomes renforcées par des compétences IA, et une organisation apprenante qui observe et analyse chaque utilisation pour faire mieux.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: noeIaProduitLean,
          alt: 'Slide : comment le lean peut nous aider - value for customer, right first time, tech-enabled network of teams, learning organisation',
          aspectRatio: '2000 / 915',
          width: 'lg',
          caption: "Quatre principes lean pour aller plus loin : value for customer, right first time, tech-enabled network of teams, learning organisation.",
        },
      },
      {
        fullWidth: true,
        heading: 'Questions-réponses',
        paragraphs: [
          "La session s'est terminée par un temps d'échange sur la mesure du gain d'un produit IA, la construction de produits IA pour des utilisateurs externes, l'importance de partir du problème plutôt que de la techno (et de choisir entre IA et logique déterministe), la montée en compétence technique d'un PM et la façon de recréer la confiance après un lancement raté. Ces échanges sont à retrouver dans l'enregistrement du webinaire, que je vous recommande.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Ce que je retiens pour mes propres produits : repasser chaque idée IA au crible des quatre risques avant de la construire, traiter la confiance comme une exigence de départ plutôt que comme un détail de finition, et considérer chaque conversation comme une donnée de discovery. Merci à Roxane Albert pour la clarté du retour d'expérience, et à l'équipe Noé pour l'organisation.",
          "📅 Date de l'événement : 06/10/2026",
        ],
      },
    ],
  },
  {
    slug: 'jungle-ia-dust-premier-agent',
    order: 3,
    title: 'Jungle IA : construire son premier agent IA avec Dust',
    description:
      "Meetup Lion x Paatch avec l'équipe Dust : keynote, démo live et mini-hackathon de deux heures pour repartir avec un agent qui tourne vraiment. J'y ai construit un agent de veille et de candidature.",
    date: '29 septembre 2026',
    eventDate: '29/09/2026',
    categories: ['IA', 'Communauté'],
    cover: { url: jungleIaDustCover, alt: 'Jungle IA - Viens construire ton 1er agent IA en une soirée avec Dust - Lion x Paatch, 29 septembre 2026' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Le 29 septembre, la règle de la Jungle IA était simple : on ne rentre pas chez soi sans l'agent IA qu'on a construit de ses mains. Le meetup, organisé par Lion (l'école de l'IA de Maria Schools) avec Paatch, mettait cette fois Dust à l'honneur, la plateforme française pour créer des agents connectés à ses vrais outils. Soixante-dix places, une salle au cœur du 2e arrondissement, et un format assumé : pas de slides à rallonge, on met les mains dans le cambouis.",
          "Au programme de la soirée : une keynote pour comprendre concrètement ce que Dust permet aujourd'hui, une démo live avec des pros de l'outil, puis un mini-hackathon guidé de deux heures, avec des crédits offerts (un mois de plan Pro) et les experts et ambassadeurs Dust présents dans la salle pour débloquer chacun.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: jungleIaDustRoom,
          alt: 'Salle de la Jungle IA chez Lion pendant la présentation de la soirée',
          aspectRatio: '4 / 3',
          caption: "Chez Lion, avant le sprint de build : l'équipe présente le programme devant une salle d'ordinateurs ouverts.",
        },
      },
      {
        fullWidth: true,
        heading: 'Mon idée : un agent qui chasse les offres à ma place',
        paragraphs: [
          "Après l'atelier Dust d'avril au Wagon, je voulais passer un cran au-dessus : plutôt qu'un agent de tri d'emails, un agent vraiment utile dans mon quotidien du moment, la recherche d'un poste de Product Manager. J'ai appelé le mien JOB_HUNTER.",
          "Son rôle : repérer les offres, les scorer selon mon profil et les présenter dans un tableau de bord interactif, un « Frame » dans Dust. Chaque offre reçoit un score de matching sur 100 fondé sur les compétences, le produit, le niveau, la localisation, le mode de travail, le contrat, la rémunération et la fraîcheur. Seules celles au-dessus de 60/100 sont affichées, triées par score puis par fraîcheur, et les rémunérations non publiées sont signalées comme inconnues plutôt qu'estimées.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: jungleIaDustAgent,
          alt: "Agent JOB_HUNTER dans Dust : conversation à gauche, tableau de bord des offres scorées à droite",
          aspectRatio: '2400 / 1163',
          width: 'full',
          caption: "L'agent JOB_HUNTER dans Dust : la conversation à gauche, et à droite le tableau de bord avec filtres (poste, séniorité, localisation, mode de travail, contrat, rémunération, fraîcheur) et offres scorées.",
        },
      },
      {
        fullWidth: true,
        heading: 'Ce que j’ai appris en le construisant',
        paragraphs: [
          "Le tableau de bord réunit les filtres, le score, le tri et, sur chaque carte, les boutons « Voir l'offre », « Générer le CV » et « Générer la lettre de motivation ». Mais le vrai apprentissage est venu d'une limite. Sans webhook, sans serveur ni plateforme d'automatisation, l'agent ne peut pas déclencher la génération d'un CV d'un simple clic. Il me l'a dit franchement, et m'a proposé un contournement en quatre étapes :",
        ],
        bullets: [
          "cliquer sur « Générer le CV » dans l'offre ;",
          "cliquer sur « Copier la demande » ;",
          "coller cette demande dans la conversation ;",
          "l'agent consulte le lien de l'annonce, adapte mon CV et génère un PDF téléchargeable.",
        ],
      },
      {
        fullWidth: true,
        paragraphs: [
          "Deux leçons pour un PM. D'abord, un agent honnête sur ses limites vaut mieux qu'un agent qui promet une automatisation qu'il ne peut pas tenir : le contournement en quatre étapes marche dès ce soir, et la vraie automatisation viendra ensuite. Ensuite, la valeur n'est pas dans l'agent seul mais dans l'interface qui l'entoure : c'est le tableau de bord filtrable qui rend le scoring lisible et actionnable.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Et maintenant ?',
        paragraphs: [
          "La soirée s'est terminée sur deux invitations : rejoindre la communauté Slack de Dust et le programme ambassadeurs. L'équipe organisatrice a aussi encouragé chacun à publier son agent sur la communauté Dust, pour inspirer ceux qui passeront après.",
          "Je repars avec une conviction que ce format confirme : on comprend un outil d'agents en le construisant sur un vrai problème, pas en regardant une démo. Merci à Lion, à Paatch et à toute l'équipe Dust pour l'accompagnement.",
          "📅 Date de l'événement : 29/09/2026",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: jungleIaDustCommunity,
          alt: 'Dernière slide de la soirée : communauté Slack Dust et programme ambassadeurs',
          aspectRatio: '4 / 3',
          width: 'md',
          caption: "La dernière slide : rejoindre la communauté Slack de Dust ou le programme ambassadeurs.",
        },
      },
    ],
  },
  {
    slug: 'mistral-vibe-hackathon-matou',
    order: 4,
    title: 'Mistral Vibe Hackathon : construire Matou, le « Duolingo de la finance », en une journée',
    description:
      "Hackathon d'une journée organisé par Mistral AI à Paris : nous y avons construit Matou, une app qui apprend à gérer son argent avec des leçons générées en direct par Mistral.",
    date: '18 juillet 2026',
    eventDate: '18/07/2026',
    categories: ['IA', 'Product', 'Communauté'],
    url: 'https://luma.com/w692ilf0',
    cover: { url: mistralVibeCover, alt: 'Mistral Vibe Hackathon - Paris, 18 juillet 2026' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Un samedi, une salle au cœur du 9e arrondissement et une seule consigne : construire quelque chose avec Vibe, de l'ouverture des portes à 8h30 jusqu'à la remise des projets en fin d'après-midi. Le Mistral Vibe Hackathon, organisé par Mistral AI à Paris le 18 juillet 2026, réunissait des équipes de un à quatre participants, sur candidature, avec petit-déjeuner, déjeuner et dîner fournis toute la journée. À la clé pour le podium : 3 000, 2 000 et 1 000 dollars de crédits Mistral.",
          "Le programme était simple et tenu : accueil et petit-déjeuner de 8h30 à 9h30, cérémonie d'ouverture et lancement à 9h30, déjeuner à 12h30, snacks à 16h, remise des projets à 18h, puis annonce des gagnants vers 20h30.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: mistralVibeCeremony,
          alt: "Cérémonie d'ouverture du Mistral Vibe Hackathon à Paris",
          aspectRatio: '4 / 3',
          caption: "La cérémonie d'ouverture : Mistral présente le parcours de Le Chat à Mistral Vibe devant une salle pleine.",
        },
      },
      {
        fullWidth: true,
        heading: 'Notre projet : Matou, apprendre l’argent un geste par jour',
        paragraphs: [
          "Nous sommes partis d'un constat qui figurait en ouverture de notre pitch : 67 % des jeunes Français ne savent pas lire leur propre fiche de paie. Notre réponse s'appelle Matou, un « Duolingo de la finance » : une app qui promet d'apprendre l'argent un geste par jour. Pas un quiz figé, mais une app qui s'adapte à la personne, avec des leçons générées en direct par Mistral.",
          "Le parcours commence par quatre questions : la situation de la personne (étudiante, premier salaire, en poste, freelance ou entre deux), ses revenus mensuels, son objectif numéro un (mettre de côté, payer moins d'impôts, investir, gérer ses dépenses ou comprendre sa paie) et son aisance avec l'argent sur une échelle de 1 à 5. À partir de ces réponses, Mistral génère une leçon personnalisée.",
        ],
      },
      {
        fullWidth: true,
        gallery: {
          columns: 3,
          aspectRatio: '1000 / 1700',
          images: [
            {
              url: mistralVibeAppQuestion,
              alt: 'Matou : question sur les revenus mensuels, par bandes',
              caption: "Onboarding : les revenus se déclarent par bandes, jamais au montant exact.",
            },
            {
              url: mistralVibeAppSimulator,
              alt: 'Matou : simulateur brut vers net avec un curseur de salaire',
              caption: "L'outil final d'un module : un simulateur brut vers net appliqué à sa propre situation.",
            },
            {
              url: mistralVibeAppMap,
              alt: 'Matou : carte de progression en montagnes - Revenus, Budget, Impôts, Investir',
              caption: "La progression en montagnes : Revenus, Budget, Impôts, Investir.",
            },
          ],
        },
      },
      {
        fullWidth: true,
        heading: 'Du savoir à l’action, avec la confiance au centre',
        paragraphs: [
          "Chaque module de Matou se termine par un outil concret appliqué à la situation réelle de l'utilisateur. Le premier, « Simu brut vers net », fait glisser un salaire brut et affiche aussitôt ce qui arrive sur le compte, cotisations déduites. L'apprentissage suit un parcours de quatre montagnes à gravir, Revenus, Budget, Impôts puis Investir, avec trophées, XP, pièces, série de jours et une mascotte, le chat Matou.",
          "Les choix produit traitent l'argent comme un sujet sensible. Les revenus se saisissent par bandes plutôt que par montants exacts, les réponses restent sur l'appareil, et le message est assumé dans l'interface : Matou éduque, ne conseille pas, et c'est à l'utilisateur de vérifier avant toute décision qui engage son argent.",
        ],
      },
      {
        fullWidth: true,
        heading: 'Sous le capot : un LLM qui génère, un rendu qui reste déterministe',
        paragraphs: [
          "Techniquement, le choix a été de la sobriété : du HTML, du CSS et du JavaScript pur, déployés en statique, avec toute la logique côté client. L'API Mistral génère à l'exécution des questions et des scénarios adaptés, dont les réponses sont renvoyées en JSON structuré pour que l'affichage reste déterministe. Le modèle produit le contenu, l'interface garde la main sur la forme, ce qui évite les mauvaises surprises à l'écran.",
          "Côté roadmap, la première étape, le MVP du hackathon, était livrée à la fin de la journée : un prototype cliquable, un moteur adaptatif, l'intégration de Mistral et l'interface pastel complète.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: mistralVibeTeam,
          alt: 'Photo avec les stickers Mistral pendant le hackathon',
          aspectRatio: '3 / 4',
          width: 'md',
          caption: 'Pause photo avec les stickers Mistral.',
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Ce que je retiens de cette journée : en huit heures de build, il faut renoncer à tout couvrir et livrer une boucle complète, de la question posée à l'outil appliqué en passant par la leçon générée. C'est aussi un bon exercice de PM : choisir ce que le modèle doit produire, ce que l'interface doit garantir, et ce qu'on refuse de promettre à l'utilisateur. Merci à toute l'équipe de Mistral AI pour l'organisation et l'accueil.",
          "📅 Date de l'événement : 18/07/2026",
        ],
      },
    ],
  },
  {
    slug: 'agentic-gtm-hackathon-locus',
    order: 5,
    title: 'Agentic GTM Hackathon chez Station F : construire Locus avec Claude, Full Enrich & Sillage',
    description:
      "Hackathon chez Station F avec Anthropic, Full Enrich et Sillage : avec Duhan, j'ai construit Locus, un outil qui identifie le vrai décisionnaire d'un deal.",
    date: '9 juillet 2026',
    eventDate: '09/07/2026',
    categories: ['IA', 'Product', 'Communauté'],
    url: 'https://luma.com/96wafjf6',
    cover: { url: agenticGtmCover, alt: 'Agentic GTM Hackathon by Anthropic, Full Enrich & Sillage - Station F, July 9 2026' },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Une journée entière, de 8h30 à 21h, chez Station F : c'est le format qu'Anthropic, Full Enrich et Sillage avaient choisi pour l'Agentic GTM Hackathon. Plus de 800 candidatures pour ce créneau, une cinquantaine d'équipes retenues, un stack imposé à trois outils - Claude (Anthropic) comme moteur de raisonnement et de construction, Sillage pour les signaux d'intention (changements de poste, tracking de champions, engagement concurrentiel, intentions de recrutement), et Full Enrich pour l'enrichissement de contacts (emails vérifiés, téléphones, données personnes et entreprises).",
          "L'objectif affiché : construire des agents GTM prêts pour la production, pensés pour faire gagner du temps réel aux équipes commerciales - séquenceurs d'outreach, moteurs de scoring ICP, mise à jour automatique de CRM, monitoring de risque pipeline.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: agenticGtmRoom,
          alt: "Kickoff de l'Agentic GTM Hackathon chez Station F, présentation de Claude",
          aspectRatio: '2000 / 1500',
          caption: "Le kickoff chez Station F, sous la verrière : présentation du stack Claude devant l'ensemble des participants avant le sprint de build.",
        },
      },
      {
        fullWidth: true,
        heading: 'Mon idée avec Duhan : Locus, retrouver le décisionnaire absent',
        paragraphs: [
          "Avec mon coéquipier Duhan, nous sommes partis de son intuition : dans une phase de prospection commerciale, on perd énormément de temps sur la partie amont - collecter les informations sur le client ciblé (secteur d'activité, projets en cours, staffing, organisation). Pire, pendant la réunion de kickoff commercial, la personne réellement décisionnaire n'est presque jamais présente dans la salle. Résultat : tout le monde reprend la discussion depuis le début lors du vrai rendez-vous de décision, ce qui fait perdre un temps précieux à tous les participants.",
          "Locus répond directement à ce problème. L'outil se connecte via MCP aux boîtes mails pour construire un contexte et un historique sur les échanges avec chaque client, puis lance des plans d'action pour faire avancer le deal - jusqu'à préparer en amont les emails à envoyer. Il va aussi chercher des informations sur l'entreprise elle-même (actualités, mouvements internes, secteur d'activité) via Full Enrich et Sillage. Toutes ces informations sont agrégées et visualisées dans une carte de nœuds qui montre les liens entre les décisionnaires identifiés et les actions à lancer pour closer le deal.",
        ],
      },
      {
        fullWidth: true,
        gallery: {
          columns: 2,
          images: [
            {
              url: agenticGtmAppMap,
              alt: 'Vue d’ensemble Locus - carte des deal rooms actives',
              aspectRatio: '1600 / 1069',
              caption: "La vue d'ensemble : chaque bâtiment est une deal room active (Sephora, L'Oréal, Doctolib...), avec ses signaux et son statut de préparation.",
            },
            {
              url: agenticGtmAppDealroom,
              alt: 'Deal room Sephora sur Locus - décisionnaire non identifié',
              aspectRatio: '1600 / 1067',
              caption: "La deal room Sephora, construite à partir du dernier meeting transcrit : deux interlocuteurs connus, un décisionnaire budgétaire encore inconnu.",
            },
            {
              url: agenticGtmAppGraph,
              alt: 'Carte de nœuds Locus avec panneau Account Intelligence',
              aspectRatio: '1600 / 1062',
              caption: "Une fois le décisionnaire identifié via Full Enrich et Sillage (Marc Dupont, Head of Sales), Locus construit l'angle de vente et liste les signaux qui le concernent.",
            },
            {
              url: agenticGtmAppFollowup,
              alt: 'Email de relance rédigé automatiquement par Locus',
              aspectRatio: '1600 / 1065',
              caption: "Dernière étape : l'agent rédige directement l'email de relance vers le décisionnaire, en s'appuyant sur le contexte collecté auprès des autres interlocuteurs.",
            },
          ],
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Nous avons buildé toute la journée, jusqu'à la deadline de 17h30 pour la soumission finale. Sur la cinquantaine de groupes-projets présents, nous sommes passés sur scène à 18h pour présenter Locus en 3 minutes devant un jury composé de VP de plusieurs entreprises tech, dont Anthropic et Deel.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: agenticGtmPitch,
          alt: 'Pitch final devant le jury - Agentic GTM Hackathon Station F',
          aspectRatio: '2000 / 1500',
          caption: "Les pitchs finalistes sur la scène de Station F : 3 minutes chrono pour convaincre un jury de VP tech, dont Anthropic et Deel.",
        },
      },
      {
        fullWidth: true,
        image: {
          url: agenticGtmTeam,
          alt: "Vincent Nguyen et Duhan à l'Agentic GTM Hackathon, Station F",
          aspectRatio: '1500 / 2000',
          width: 'sm',
          caption: "Avec Duhan, mon coéquipier sur Locus, devant le mur de sponsors Anthropic x Full Enrich x Sillage.",
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Nous n'avons pas été retenus dans le top 10 final. Mais cette journée reste l'une des plus formatrices de mon année : j'ai appris à combiner plusieurs outils IA en conditions réelles - un LLM pour construire, deux sources de données pour enrichir - et surtout à condenser un produit entier en un pitch de 3 minutes devant un public exigeant. C'est un exercice que je referai avec plaisir.",
          "📅 Date de l'événement : 09/07/2026",
        ],
      },
    ],
  },
  {
    slug: 'hackathon-alan-lovable',
    order: 6,
    title: 'Hackathon Alan x Lovable : builder une app wellness en 60 minutes',
    description:
      "Hackathon éclair chez Alan : 60 minutes pour construire un produit bien-être avec Lovable et le pitcher en 90 secondes. J'ai créé RunReady, coach running.",
    date: '8 juillet 2026',
    eventDate: '08/07/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/ey6j9say?tk=6Y7Idh',
    cover: { url: alanLovableCover, alt: 'Alan x Lovable Hackathon - Build. Launch. Pitch. From idea to MVP in one hour.' },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "60 minutes. Pas une de plus. C'est le format qu'Alan et Lovable avaient choisi pour ce hackathon organisé dans les locaux d'Alan, 117 Quai de Valmy à Paris : partir d'une idée et repartir avec un prototype fonctionnel autour d'un seul thème, le wellness. À la clé, des pitchs de 90 secondes devant un jury et, pour tous les participants, un accès Lovable Pro avec 100 crédits pour builder sans se soucier du reste.",
          "Organisé par Hector Laine, l'événement a réuni une trentaine de participants, aucune expérience préalable de Lovable n'étant requise. Le brief tenait en une question : comment l'IA peut-elle améliorer le bien-être ?",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: alanLovableRoom,
          alt: "Salle du hackathon Alan x Lovable dans les locaux d'Alan, Paris",
          aspectRatio: '2000 / 1335',
          caption: "Les locaux d'Alan, 117 Quai de Valmy : une trentaine de participants penchés sur leur écran pour builder en 60 minutes chrono.",
        },
      },
      {
        fullWidth: true,
        heading: 'Mon idée : RunReady, un coach pour préparer sa course',
        paragraphs: [
          "En tant que coureur, je bute régulièrement sur le même problème : je manque de temps pour bien préparer mes courses en compétition, et cette désorganisation finit par se payer - blessures, appréhension, plaisir de course en moins. J'ai donc choisi de construire RunReady, une application qui décharge mentalement toute la préparation d'une course, du jour J jusqu'à l'entraînement du jour.",
          "Le workflow est simple : on sélectionne sa course parmi une sélection d'événements parisiens (5 km, 10 km, semi, marathon), avec sa date et son lieu. On choisit ensuite son objectif de rythme et de temps. À partir de là, RunReady agit comme un coach personnel.",
        ],
      },
      {
        fullWidth: true,
        gallery: {
          columns: 3,
          images: [
            {
              url: alanLovableAppSelection,
              alt: 'Écran de sélection de course RunReady - La Parisienne, The Color Run Paris',
              aspectRatio: '1600 / 1026',
              caption: "Le point de départ : choisir sa course parmi une sélection parisienne (5 km, 10 km, semi, marathon).",
            },
            {
              url: alanLovableAppDashboard,
              alt: 'Tableau de bord RunReady - compte à rebours, plan d’entraînement et conditions du jour',
              aspectRatio: '1600 / 919',
              caption: "Le tableau de bord : compte à rebours jusqu'à la course, séance du jour et plan d'entraînement sur la semaine.",
            },
            {
              url: alanLovableAppChecklist,
              alt: 'Checklist matériel, nutrition et suivi des chaussures RunReady',
              aspectRatio: '1600 / 849',
              caption: "La checklist matériel et nutrition s'adapte à la météo cochée (ici « Froid ») : gants, bonnet, lampe frontale.",
            },
          ],
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le plan d'entraînement alterne fondamental, fractionné et sorties longues, semaine après semaine jusqu'au jour J. Selon la météo cochée - ensoleillé, pluie, froid, nuit - l'application met à jour la checklist matériel : gants thermiques et bonnet par temps froid, gilet réfléchissant et lampe frontale de nuit.",
          "Le volet nutrition suit la même logique adaptative, structuré en trois temps - avant, pendant, après - et calibré selon l'intensité de la séance. Pour une sortie courte, RunReady reste simple : compote et tartine de beurre d'amande 1h30 avant, de l'eau pendant si la séance dure moins d'une heure, puis œufs, légumes et patate douce après pour la récupération. Sur une séance plus longue ou le jour de la course, les conseils montent en gamme : glucides lents (riz basmati, poulet, banane) 3h avant pour constituer les réserves, un gel énergétique toutes les 30 minutes avec de l'eau régulière pendant l'effort, puis une boisson de récupération et des fruits secs dans la fenêtre des 30 minutes suivant l'arrivée, avant un vrai repas. L'idée : ne plus improviser sa nutrition la veille d'une course.",
          "Un détail auquel je tenais : le suivi du kilométrage de mes paires de running. Une paire trop usée est une cause fréquente de blessure au genou, et RunReady comptabilise les kilomètres parcourus par paire pour prévenir le moment où il faut la changer.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: alanLovableAppShoes,
          alt: 'Suivi du kilométrage des chaussures de running dans RunReady',
          aspectRatio: '1600 / 1021',
          width: 'md',
          caption: "Le suivi « Mes chaussures » : chaque paire cumule ses kilomètres (Nike Pegasus 41, Vaporfly 3, Adidas Adizero Adios Pro 3) pour anticiper le moment du remplacement.",
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "En 60 minutes, je n'ai évidemment pas pu creuser toutes les fonctionnalités, ni tester l'application auprès de vrais coureurs - débutants comme confirmés - pour valider qu'elle répond à un besoin réel. C'est la limite assumée de l'exercice : le hackathon force à trancher vite plutôt qu'à approfondir. Mais l'idée reste solide et je compte bien la reprendre à tête reposée.",
          "Merci à Hector Laine et aux équipes Alan et Lovable pour cette soirée qui condense, en une heure, l'essentiel du prototypage produit : cadrer une idée, construire vite, et savoir la défendre en 90 secondes.",
          "📅 Date de l'événement : 08/07/2026",
        ],
      },
    ],
  },
  {
    slug: 'travel-ai-build-night',
    order: 7,
    title: 'Travel x AI Build Night : construire Nomad-K avec Lovable & Jinko',
    description:
      "Build night chez swanbase avec Lovable et Jinko sur le voyage : j'ai construit Nomad-K, une app qui explore des destinations selon un budget donné.",
    date: '7 juillet 2026',
    eventDate: '07/07/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/tru412zk?tk=A20cbH',
    cover: { url: travelAiCover, alt: 'Travel x AI Build Night - Lovable x Jinko, Venue Partner swanbase' },
    coverFit: 'contain',
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "Chez swanbase, dans le Sentier, Just Build It! avait posé un cadre simple pour cette Build Night : construire un produit sur le thème du voyage, de la mobilité ou de l'hospitality, avec Lovable pour le code et Jinko pour la donnée - vols, prix billets toutes compagnies, disponibilités hôtelières en direct. Accueil à 19h, kickoff et setup à 19h30, build time à 20h, puis démos live de 2 minutes à 21h30 devant la salle.",
          "L'événement était porté par Satvik Puti (Just Build It!), Kevin Gauthier (fondateur de Jinko) et Théo Sitjar (co-fondateur de swanbase), pour une quarantaine de participants venus construire vite plutôt qu'écouter.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: travelAiRoom,
          alt: 'Salle de la Travel x AI Build Night chez swanbase, Paris',
          aspectRatio: '2000 / 1500',
          caption: "Chez swanbase, Paris 2e : la salle penchée sur ses laptops pendant le build time, écran affichant le programme Lovable x Jinko.",
        },
      },
      {
        fullWidth: true,
        heading: 'Mon idée : Nomad-K, voyager selon son budget, pas l’inverse',
        paragraphs: [
          "Le problème que je voulais attaquer est très concret : on choisit rarement sa destination de vacances dans l'absolu, on la choisit sous contrainte de budget. Deux personnes avec le même montant en poche n'ont pourtant pas la même liste de destinations accessibles une fois vols et hôtel comptés. J'ai donc construit Nomad-K, une application qui inverse la logique de recherche classique : au lieu de partir d'une destination pour découvrir son prix, on part d'un budget total pour découvrir ses destinations.",
          "Le principe : on indique une ville de départ, un budget total (avec ou sans hôtel), des dates et un nombre de voyageurs. Nomad-K interroge Jinko en direct pour retourner une sélection de destinations qui tiennent dans l'enveloppe, avec la répartition du budget entre vol et hébergement pour chacune.",
        ],
      },
      {
        fullWidth: true,
        image: {
          url: travelAiAppSearch,
          alt: 'Application Nomad-K - recherche de destinations par budget total avec Jinko',
          aspectRatio: '1600 / 827',
          caption: "Nomad-K : pour 5 000 € et 10 nuits au départ de Paris, l'app retourne Le Cap, Reykjavík et la Patagonie avec la répartition vol/hôtel de chaque destination, en données live via Jinko.",
        },
      },
      {
        fullWidth: true,
        image: {
          url: travelAiAppDetail,
          alt: 'Fiche destination Cape Town sur Nomad-K avec devis détaillé',
          aspectRatio: '1600 / 835',
          caption: "La fiche destination détaille le devis (vol, hôtel, empreinte carbone) et les temps forts du séjour, avant confirmation de réservation.",
        },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Comme pour tout hackathon, il faut prendre du recul sur l'exercice : le temps de build était limité à environ une heure, ce qui ne m'a pas laissé la place de faire de la discovery pour vérifier que ce problème de recherche par budget est bien celui que rencontrent réellement les voyageurs. C'est la limite assumée du format - on valide une intuition produit, pas encore un besoin confirmé.",
          "Reste que la combinaison Lovable + Jinko a permis, en une heure, de brancher une vraie source de données de voyage sur un concept produit qui tient debout. De quoi donner envie de creuser Nomad-K au-delà de la soirée.",
          "📅 Date de l'événement : 07/07/2026",
        ],
      },
    ],
  },
  {
    slug: 'product-partners-retrospective',
    order: 8,
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
    order: 9,
    title: "Better Call Claude : l'IA au service de l'efficacité métier",
    description:
      "Premier meetup Better Call Claude par Arynor : deux démos live sur la consolidation de données et la préparation prospect, applicables dès le lendemain.",
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
    order: 10,
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
        image: { url: vivatechTetmet, alt: 'Stand TETMET - bras robotisé à soudage laser - VivaTech 2026', aspectRatio: '3 / 4', width: 'sm', caption: 'TETMET : fabrication additive métallique par bras robotisé six axes à soudage laser.' },
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
    order: 11,
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
    order: 12,
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
    order: 13,
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
    order: 14,
    title: 'Formation Claude Code chez Noé',
    description:
      "Deux jours pour intégrer Claude Code à ma pratique de PM : ajout de fonctionnalité, correction de bugs et mise en production via GitHub.",
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
    order: 17,
    title: 'Formation Product Management - Noé promo 33',
    description:
      "Retour sur 4 semaines intensives de Product Management chez Noé, comme PM pour BlaBlaCar : stratégie, discovery, priorisation, prototypage et delivery.",
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
    order: 16,
    title: 'Des 5V du Big Data aux 5E du Beautiful Data - IAE Paris',
    description:
      "Conférence IAE Paris - Sorbonne Business School : et si l'immatériel du « Beautiful Data » complétait le Big Data, pour une performance plus durable ?",
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
    order: 15,
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
    order: 18,
    title: 'Atelier Dust - Construire son premier agent IA',
    description:
      "Soirée Eria x Le Wagon x Dust : théorie et pratique pour repartir avec son agent IA opérationnel, connecté à Google Drive et aux emails, sans coder.",
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
