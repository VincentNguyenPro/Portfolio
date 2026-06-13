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
import lovableTalk from '@/assets/blog/lovable-talk.jpeg.asset.json';
import lovableGroups from '@/assets/blog/lovable-groups.jpeg.asset.json';
import claudeCodeCover from '@/assets/blog/claude-code-cover.webp.asset.json';
import claudeCodeRoom from '@/assets/blog/claude-code-room.jpeg.asset.json';
import noePmPromo from '@/assets/blog/noe-pm-promo.jpeg.asset.json';
import data5vCover from '@/assets/blog/data-5v-cover.jpeg.asset.json';
import data5vIaeCover from '@/assets/blog/data-5v-iae-cover.webp.asset.json';
import vivatechCover from '@/assets/blog/vivatech-cover.png.asset.json';
import pokemonProduct from '@/assets/blog/pokemon-product.png.asset.json';
import pokemonCheckout from '@/assets/blog/pokemon-checkout.png.asset.json';
import spotifyWrappedDark from '@/assets/blog/spotify-wrapped-dark.png.asset.json';
import spotifyWrappedLight from '@/assets/blog/spotify-wrapped-light.png.asset.json';
import roofoodMenu from '@/assets/blog/roofood-menu.png.asset.json';
import roofoodCheckout from '@/assets/blog/roofood-checkout.png.asset.json';
import portfolioHome from '@/assets/blog/lovable-portfolio-home.png.asset.json';
import portfolioParcours from '@/assets/blog/lovable-portfolio-parcours.png.asset.json';
import portfolioProjets from '@/assets/blog/lovable-portfolio-projets.png.asset.json';
import portfolioBlog from '@/assets/blog/lovable-portfolio-blog.png.asset.json';
import portfolioContact from '@/assets/blog/lovable-portfolio-contact.png.asset.json';

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
    slug: 'vivatech-2026',
    order: 1,
    title: 'VivaTech 2026 - 10ᵉ édition',
    description:
      "Quatre jours porte de Versailles pour la 10ᵉ édition de VivaTech, le grand rendez-vous international de l'innovation et de la tech.",
    date: '20 juin 2026',
    eventDate: '20/06/2026',
    categories: ['IA', 'Data', 'Product'],
    url: 'https://vivatechnology.com/',
    cover: { url: vivatechCover.url, alt: 'VivaTech 2026 - Paris' },
    sections: [
      {
        paragraphs: [
          "Du 17 au 20 juin 2026, j'aurai la chance d'arpenter les allées de VivaTech pour sa 10ᵉ édition. Pendant quatre jours, le 15ᵉ arrondissement de Paris se transforme en capitale mondiale de l'innovation : startups, grands groupes, investisseurs et passionnés de tech convergent vers la porte de Versailles pour une édition anniversaire placée sous le signe de l'ambition.",
          "Avec environ 180 000 visiteurs en moyenne, VivaTech s'est imposé comme le principal point de rencontre entre les acteurs de la transformation numérique - IA, deeptech, climate tech, fintech, mobilité, santé. C'est l'endroit idéal pour prendre la température de ce qui va structurer le produit et la finance dans les prochaines années.",
          "Je publierai mon compte-rendu personnel après l'événement : pitchs marquants, démos qui ont fait bouger les lignes, et tendances IA à suivre côté Product.",
        ],
      },
      {
        paragraphs: [
          "🚧 Article en attente de visite - compte-rendu à venir.",
          "📅 Date de l'événement : 20/06/2026",
        ],
      },
    ],
  },
  {
    slug: 'webshop-mollie-codex',
    order: 2,
    title: 'Construire son webshop avec Mollie & Codex',
    description:
      "Atelier Le Wagon : passer d'une idée e-commerce à une boutique en ligne fonctionnelle, encaissant de vrais paiements, en quelques heures et sans équipe tech.",
    date: '11 juin 2026',
    eventDate: '11/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/0ivqgaik?tk=hNsezQ',
    cover: { url: webshopCover.url, alt: 'Atelier Webshop avec Mollie & Codex' },
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
        image: { url: pokemonProduct.url, alt: 'Fiche produit Pokémon Market Place - carte Carapuce 007/165', aspectRatio: '16 / 9' },
      },
      {
        fullWidth: true,
        paragraphs: [
          "On a commencé par poser le concept de boutique, choisir le catalogue, puis confier la construction du site à Codex. Pendant qu'il assemblait les pages produit avec les descriptions de cartes, le carrousel et la fiche collectionneur, j'ai branché Mollie pour gérer les paiements : carte, virement, Apple Pay, le tout en quelques clics. L'agent gérait aussi le toggle FR / ENG et la mise à jour dynamique des libellés selon la langue.",
        ],
      },
      {
        fullWidth: true,
        image: { url: pokemonCheckout.url, alt: 'Tunnel de commande avec récapitulatif et paiement Mollie', aspectRatio: '16 / 9' },
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
    order: 3,
    title: 'Hackathon Lovable chez Join Lion',
    description:
      "Une soirée à la Jungle IA pour transformer une idée en application en 3h avec Lovable, entourée de 70 personnes qui se lancent en même temps.",
    date: '9 juin 2026',
    eventDate: '09/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://luma.com/jybxjxu4?locale=fr&tk=Aimmjv',
    cover: { url: lovableCover.url, alt: 'Meetup Lovable x Paatch - Jungle IA' },
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
            { url: portfolioHome.url, alt: 'Landing page du portfolio Vincent Nguyen' },
            { url: portfolioParcours.url, alt: 'Page Parcours du portfolio' },
            { url: portfolioProjets.url, alt: 'Page Projets du portfolio' },
          ],
        },
      },
      {
        fullWidth: true,
        gallery: {
          columns: 2,
          aspectRatio: '16 / 10',
          images: [
            { url: portfolioBlog.url, alt: 'Page Blog du portfolio' },
            { url: portfolioContact.url, alt: 'Page Contact du portfolio' },
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
        image: { url: lovableRoom.url, alt: 'Salle pleine pendant le meetup Lovable x Paatch', width: 'sm' },
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
    order: 4,
    title: "Construire l'IA de demain : défis et opportunités",
    description:
      "Table ronde Le Wagon x Women in Tech France sur l'IA comme révolution de société : comment construire une IA inclusive, représentative et équitable.",
    date: '2 juin 2026',
    eventDate: '02/06/2026',
    categories: ['IA', 'Communauté'],
    url: 'https://www.lewagon.com/fr/events/construire-l-ia-de-demain-defis-et-opportunites-SsjIsz',
    cover: { url: iaDemainCover.url, alt: "Construire l'IA de demain - Défis et Opportunités" },
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
        image: { url: iaDemainRoom.url, alt: 'Table ronde Construire l’IA de demain au Wagon Paris', aspectRatio: '16 / 9' },
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
    order: 5,
    title: 'Formation Claude Code chez Noé',
    description:
      "Deux jours pour intégrer Claude Code dans ma pratique de PM : de l'ajout d'une fonctionnalité sur un écran de synthèse à la Spotify, jusqu'à la correction de bugs et la mise en production via GitHub.",
    date: '29 & 30 mai 2026',
    eventDate: '29-30/05/2026',
    categories: ['Formation', 'Product', 'IA'],
    url: 'https://www.noe.pm/claude-code-pour-pms',
    cover: { url: claudeCodeCover.url, alt: 'Formation Claude Code chez Noé' },
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
        image: { url: claudeCodeRoom.url, alt: 'Salle de formation Claude Code chez Noé', aspectRatio: '16 / 9' },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Jour 1 - apporter une nouvelle fonctionnalité. On part d'un projet existant : un écran de synthèse annuelle façon Spotify Wrapped, fourni en base. L'exercice : ajouter une vraie fonctionnalité utilisateur, en l'occurrence un toggle clair / sombre qui change complètement l'identité visuelle de la page. Avant de coder quoi que ce soit, on commence par cadrer le besoin avec Claude - quel comportement attendu, quels états, quels composants impactés - puis on bascule en plan mode pour qu'il propose une stratégie d'implémentation. Une fois le plan validé, il exécute, on teste, on itère.",
        ],
      },
      {
        fullWidth: true,
        image: { url: spotifyWrappedDark.url, alt: 'Écran de synthèse annuelle Spotify Wrapped en mode sombre', aspectRatio: '9 / 16', width: 'sm' },
      },
      {
        fullWidth: true,
        image: { url: spotifyWrappedLight.url, alt: 'Même écran de synthèse Spotify Wrapped en mode clair après ajout du toggle', aspectRatio: '9 / 16', width: 'sm' },
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
        image: { url: roofoodMenu.url, alt: 'Application Roofood (clone Deliveroo) - menu et panier latéral', aspectRatio: '16 / 9' },
      },
      {
        fullWidth: true,
        paragraphs: [
          "Le moment fort de la journée a été la revue : chaque correctif est poussé sur une branche, soumis sur la branche main via une pull request, vérifié par un encadrant, puis mergé dans la base de code. On retrouve exactement le rythme d'une équipe tech - et on comprend de l'intérieur pourquoi une bonne description de PR, des commits atomiques et une vérification rigoureuse font gagner autant de temps en aval.",
        ],
      },
      {
        fullWidth: true,
        image: { url: roofoodCheckout.url, alt: 'Étape de récapitulatif de commande sur l’application Roofood', aspectRatio: '16 / 9' },
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
    order: 8,
    title: 'Formation Product Management - Noé promo 33',
    description:
      "Retour sur 4 semaines intensives de Product Management chez Noé, en tant que PM pour BlaBlaCar : stratégie, discovery, priorisation, prototypage, delivery et restitution finale au Lead PM.",
    date: '20 avril - 15 mai 2026',
    eventDate: '20/04 - 15/05/2026',
    categories: ['Formation', 'Product'],
    url: 'https://www.noe.pm/formation-product-manager-la-formation-pm-en-4-semaines-noe',
    cover: { url: noePmPromo.url, alt: 'Promo 33 Noé - formation Product Management' },
    sections: [
      {
        fullWidth: true,
        paragraphs: [
          "J'ai officiellement obtenu mon diplôme de Product Management chez Noé, avec la promo 33. Quatre semaines intenses, denses, parfois épuisantes, mais qui ont changé ma manière de penser le produit.",
        ],
      },
      {
        fullWidth: true,
        image: { url: noePmPromo.url, alt: 'Photo de promo - Noé Product Management 33', aspectRatio: '16 / 9' },
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
    order: 7,
    title: 'Des 5V du Big Data aux 5E du Beautiful Data - IAE Paris',
    description:
      "Conférence IAE Paris - Sorbonne Business School : et si l'immatériel du « Beautiful Data » venait compléter le matériel du Big Data, au service d'une performance plus durable ?",
    date: '18 mai 2026',
    eventDate: '18/05/2026',
    categories: ['Data', 'Communauté'],
    cover: { url: data5vIaeCover.url, alt: 'Conférence IAE Paris Alumni - Big Data & Beautiful Data' },
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
          url: data5vCover.url,
          alt: 'Slide « Les 5V du Big Data » projetée lors de la conférence',
          aspectRatio: '16 / 9',
          objectPosition: 'center 44%',
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
    order: 6,
    title: "Comment l'IA transforme le Product Management",
    description:
      "Tech Talk Le Wagon x Welcome to the Jungle : comment le métier de PM a changé en 18 mois, ce qui s'automatise, et les compétences qui comptent vraiment en 2026.",
    date: '27 mai 2026',
    eventDate: '27/05/2026',
    categories: ['Product Management', 'IA & Agents'],
    url: 'https://www.lewagon.com/fr/events/comment-l-ia-transforme-le-product-management-HPFVtl',
    cover: { url: iaPmCover.url, alt: "Comment l'IA transforme le Product Management" },
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
        image: { url: iaPmRoom.url, alt: 'Tech Talk Comment l’IA transforme le Product Management - Le Wagon Paris' },
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
    order: 9,
    title: 'Atelier Dust - Construire son premier agent IA',
    description:
      "Soirée Eria x Le Wagon x Dust : théorie et pratique pour repartir avec son propre agent IA opérationnel, connecté à Google Drive et aux emails, sans une seule ligne de code.",
    date: '8 avril 2026',
    eventDate: '08/04/2026',
    categories: ['IA & Agents', 'Innovation & Tech'],
    url: 'https://www.lewagon.com/fr/events/atelier-dust-build-your-first-ai-agent-5CkQZn',
    cover: { url: dustCover.url, alt: 'Construire son premier agent IA - Eria x Le Wagon x Dust' },
    sections: [
      {
        paragraphs: [
          "Ce soir-là au Wagon, j'avais une promesse claire en tête : repartir avec mon propre agent IA, opérationnel, sans écrire une ligne de code. Trois acteurs très complémentaires animaient la soirée : Eria, l'agence cofondée par Tifany Clemenceau et Melvin Duveau, spécialisée dans la création d'agents sur-mesure pour les TPE/PME ; Dust, la plateforme française d'agents IA déjà adoptée par plus de 5 000 organisations comme Doctolib, Qonto ou Alan ; et Le Wagon, qui sait toujours rendre la tech accessible.",
        ],
      },
      {
        image: { url: dustRoom.url, alt: 'Salle pleine pour l’atelier Construire son premier agent IA au Wagon Paris' },
      },
      {
        paragraphs: [
          "On a démarré par une partie théorique courte mais carrée : ce qu'est vraiment un agent (au-delà du buzzword), la différence entre un assistant et un agent autonome, et surtout les cas d'usage qui marchent en entreprise - ceux qui font gagner du temps réel et pas juste une démo Linkedin.",
          "Puis on est passés à la pratique. J'ai branché Dust à mon Google Drive et à mes emails, défini quelques règles en langage naturel, et regardé mon agent commencer à trier, résumer, proposer des brouillons. Le moment où il a sorti son premier résumé pertinent à partir d'un document que je lui avais donné, j'ai eu cette petite étincelle qu'on a quand un outil franchit le seuil de l'utile.",
        ],
      },
      {
        image: { url: dustFlyer.url, alt: 'Flyer Eria - Construire son premier agent IA', aspectRatio: '4 / 2.4' },
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
