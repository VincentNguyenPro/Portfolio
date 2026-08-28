import { motion } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, Award, Languages as LanguagesIcon, Building2, School, BadgeCheck, ArrowRight } from 'lucide-react';
import { MobileCarousel } from '@/components/ui/MobileCarousel';
import {
  photographerInfo,
  experiences,
  certifications,
  languages,
  educationItems,
} from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import saintelyonPhoto from '@/assets/vincent-saintelyon.webp';
import sunsetRoad from '@/assets/sunset-road.webp';
import anthropicLogo from '@/assets/logos/anthropic.png';
import bartleLogo from '@/assets/logos/bartle.jpeg';
import fInitiativesLogo from '@/assets/logos/f-initiatives.webp';
import hecLogo from '@/assets/logos/hec.png';
import microsoftLogo from '@/assets/logos/microsoft.png';
import noeLogo from '@/assets/logos/noe.png';
import renaultLogo from '@/assets/logos/renault.svg';
import scrumLogo from '@/assets/logos/scrum.svg';
import supmecaLogo from '@/assets/logos/supmeca.png';

const languageFlags: Record<string, string> = {
  'Français': '🇫🇷',
  'Anglais': '🇬🇧',
  'Espagnol': '🇪🇸',
  'Chinois (Mandarin)': '🇨🇳',
};

const matchLogo = (text: string): string | null => {
  const t = text.toLowerCase();
  if (t.includes('bartle')) return bartleLogo;
  if (t.includes('renault')) return renaultLogo;
  if (t.includes('blablacar')) return noeLogo; // formation via Noé
  if (t.includes('f-initiatives') || t.includes('f initiatives')) return fInitiativesLogo;
  if (t.includes('noé') || t.includes('noe')) return noeLogo;
  if (t.includes('hec')) return hecLogo;
  if (t.includes('supmeca') || t.includes('isae')) return supmecaLogo;
  if (t.includes('microsoft')) return microsoftLogo;
  if (t.includes('scrum')) return scrumLogo;
  if (t.includes('anthropic') || t.includes('claude')) return anthropicLogo;
  return null;
};

const storyMilestones: { year: string; logos: string[]; content: React.ReactNode }[] = [
  {
    year: '2011',
    logos: [supmecaLogo, renaultLogo],
    content: (
      <>
        Formé en <strong className="font-semibold text-foreground">génie industriel à l'ISAE-SUPMECA</strong>, j'ai débuté chez <strong className="font-semibold text-foreground">Renault</strong> sur des projets techniques avant de basculer vers ce qui m'anime vraiment : <strong className="font-semibold text-foreground">construire des produits utiles à ceux qui les utilisent</strong>.
        <br />
        Ces premières années en usine et en bureau d'études m'apprennent une chose que je n'ai plus jamais oubliée : un produit se juge sur le terrain, avec les gens qui l'utilisent, pas sur un slide.
      </>
    ),
  },
  {
    year: '2014',
    logos: [fInitiativesLogo],
    content: (
      <>
        Je rejoins <strong className="font-semibold text-foreground">F-Initiatives</strong>, cabinet en <strong className="font-semibold text-foreground">financement de l'innovation</strong>, où j'accompagne des entreprises de la start-up aux <strong className="font-semibold text-foreground">grands groupes du CAC 40</strong> pour financer leurs projets R&D. Je comprends vite que l'innovation ne vaut quelque chose que si elle est <strong className="font-semibold text-foreground">structurée et portée par les bons interlocuteurs</strong>.
        <br />
        C'est là que je prends goût à la mécanique du financement de projet : cadrer un dossier, défendre un budget, convaincre des décideurs qui n'ont pas le temps de lire 40 pages.
      </>
    ),
  },
  {
    year: '2016',
    logos: [renaultLogo],
    content: (
      <>
        Je reviens chez <strong className="font-semibold text-foreground">Renault</strong> comme <strong className="font-semibold text-foreground">Product Owner</strong> sur un <strong className="font-semibold text-foreground">outil de costing critique</strong> - 10 M€, 250 utilisateurs, 12 pays. Je découvre ce que signifie vraiment <strong className="font-semibold text-foreground">livrer à grande échelle</strong> : spécifications, tests, conduite du changement.
        <br />
        Résultat : <strong className="font-semibold text-foreground">95 % de taux d'adoption</strong> et <strong className="font-semibold text-foreground">+15 % de fiabilité et rapidité d'exécution</strong> des calculs.
        <br />
        Je pilote un backlog partagé entre 12 pays aux pratiques comptables différentes - la première fois que je mesure à quel point l'alignement métier compte autant que la technique.
      </>
    ),
  },
  {
    year: '2020',
    logos: [renaultLogo],
    content: (
      <>
        Je deviens <strong className="font-semibold text-foreground">responsable transformation</strong> et <strong className="font-semibold text-foreground">Product Owner</strong>. Je prends la responsabilité de l'<strong className="font-semibold text-foreground">outil de consolidation financière Supply Chain monde</strong> - 8 M€, +25 contrôleurs, 10 pays. Je vis pleinement le <strong className="font-semibold text-foreground">cycle produit</strong> : backlog, delivery Scrum, amélioration continue.
        <br />
        Impact direct : <strong className="font-semibold text-foreground">-50 % sur les délais de clôture</strong>, de J+10 à J+5.
        <br />
        Je forme les équipes locales aux nouveaux rituels agiles et découvre qu'un outil ne transforme rien tant que la conduite du changement ne suit pas.
      </>
    ),
  },
  {
    year: '2023',
    logos: [bartleLogo],
    content: (
      <>
        Chez <strong className="font-semibold text-foreground">Bartle</strong>, j'accompagne des grands groupes en <strong className="font-semibold text-foreground">restructuration DSI</strong>. Je construis de zéro un <strong className="font-semibold text-foreground">outil de pilotage des coûts DSI</strong>. Je mène des <strong className="font-semibold text-foreground">ateliers utilisateurs</strong> pour comprendre leurs besoins et je <strong className="font-semibold text-foreground">prototype en plusieurs itérations</strong> pour aboutir à un MVP.
        <br />
        Résultat : <strong className="font-semibold text-foreground">MVP livré en 2 mois</strong>.
        <br />
        Je vis de l'intérieur le <strong className="font-semibold text-foreground">pain point universel des directions Finance et IT</strong> : les outils Excel ne suffisent plus pour piloter sérieusement un <strong className="font-semibold text-foreground">P&L DSI</strong>. Ce constat devient un <strong className="font-semibold text-foreground">déclic</strong>.
      </>
    ),
  },
  {
    year: '2026',
    logos: [noeLogo],
    content: (
      <>
        Je consolide ma pratique à la <strong className="font-semibold text-foreground">formation Noé</strong> et commence à construire le <strong className="font-semibold text-foreground">SaaS qui manque au marché</strong> : une application de <strong className="font-semibold text-foreground">pilotage P&L DSI</strong> conçue avec les <strong className="font-semibold text-foreground">outils IA modernes</strong>.
        <br />
        Je reprends volontairement une posture d'apprenant pour challenger mes réflexes de dix ans de Product Management avec les pratiques les plus récentes du métier.
      </>
    ),
  },
  {
    year: 'Présent',
    logos: [sunsetRoad],
    content: (
      <>
        Je cherche à mettre cette <strong className="font-semibold text-foreground">triple culture - rigueur d'ingénieur, expertise finance & SI, maîtrise du cycle produit</strong> - au service de <strong className="font-semibold text-foreground">produits digitaux à fort impact</strong>, dans des environnements où la <strong className="font-semibold text-foreground">complexité métier est une opportunité, pas un obstacle</strong>.
        <br />
        Si votre organisation a un sujet Finance ou SI qui mérite un vrai produit plutôt qu'un énième fichier Excel, discutons-en.
      </>
    ),
  },
];

const LogoBadge = ({ text, fallback, size = 11 }: { text: string; fallback: React.ReactNode; size?: 10 | 11 }) => {
  const logo = matchLogo(text);
  const sizeClass = size === 10 ? 'size-10' : 'size-11';
  return (
    <div className={`shrink-0 ${sizeClass} rounded-xl border border-border bg-white flex items-center justify-center overflow-hidden text-muted-foreground`}>
      {logo ? (
        <img src={logo} alt="" className="w-full h-full object-contain p-1.5" />
      ) : (
        fallback
      )}
    </div>
  );
};

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <>
      <SEOHead
        exactTitle="Parcours — Vincent Nguyen Product Manager"
        description="10 ans d'expérience en Product Management : Renault, Bartle, BlaBlaCar. Expertise Finance & SI, transformation digitale."
      />
      <div className="min-h-screen">
        {/* Header */}
        <section className="px-6 lg:px-8 pt-6 pb-6 md:pt-10 md:pb-8 border-b border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 lg:gap-16 items-start md:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-3"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground">
                Parcours
              </h1>
              <div className="space-y-2 md:space-y-2 text-base md:text-base text-muted-foreground font-light leading-relaxed text-left md:text-justify">
                {photographerInfo.biography.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Desktop: vertical year timeline + detail card, filling the space below the bio */}
              <div className="hidden md:block pt-2">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                  De l'ingénierie au Product Management : un parcours forgé dans la complexité
                </h2>
                <div className="grid grid-cols-[180px_1fr] gap-8 lg:gap-10 items-center">
                  <div className="relative">
                    <div className="absolute left-[6.5px] top-2 bottom-2 w-px bg-border" />
                    <div className="flex flex-col">
                      {storyMilestones.map((m, i) => {
                        const active = i === activeMilestone;
                        return (
                          <button
                            key={m.year}
                            type="button"
                            onClick={() => setActiveMilestone(i)}
                            className="group relative z-10 flex items-center gap-3 py-1.5 text-left"
                          >
                            <span
                              className={`size-3.5 rounded-full ring-4 ring-background transition-colors shrink-0 ${
                                active ? 'bg-blue-600' : 'bg-border group-hover:bg-muted-foreground'
                              }`}
                            />
                            <span
                              className={`text-base font-semibold tracking-tight transition-colors ${
                                active ? 'text-blue-600' : 'text-muted-foreground group-hover:text-foreground'
                              }`}
                            >
                              {m.year}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <motion.div
                    key={activeMilestone}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-border bg-card p-5 min-h-[220px]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {storyMilestones[activeMilestone].logos.length > 0 && (
                        <div className="flex items-center">
                          {storyMilestones[activeMilestone].logos.map((logo, li) => (
                            <span
                              key={li}
                              className={`size-12 rounded-full border border-border bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-sm ${
                                li > 0 ? '-ml-4' : ''
                              }`}
                              style={{ zIndex: storyMilestones[activeMilestone].logos.length - li }}
                            >
                              <img
                                src={logo}
                                alt=""
                                className={`w-full h-full ${logo === sunsetRoad ? 'object-cover' : 'object-contain p-1.5'}`}
                              />
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-2xl font-bold tracking-tight text-blue-600">
                        {storyMilestones[activeMilestone].year}
                      </p>
                    </div>
                    <p className="text-base font-light leading-relaxed text-foreground/85">
                      {storyMilestones[activeMilestone].content}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:sticky md:top-24 relative md:h-full"
            >
              <div className="absolute -inset-1 sm:-inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-emerald-500/15 blur-2xl" />
              <div className="relative aspect-[4/3] sm:aspect-[4/5] md:aspect-auto md:h-full rounded-3xl overflow-hidden border border-border bg-muted">
                <img
                  src={saintelyonPhoto}
                  alt="Vincent Nguyen à l'arrivée de la SaintéLyon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>


        {/* Mon histoire (mobile only — desktop shows this inline in the header above) */}
        <section className="md:hidden px-6 lg:px-8 py-8 border-t border-border">
            <div className="max-w-7xl mx-auto w-full">
            <ScrollReveal>
              <p className="text-2xl font-semibold tracking-tight uppercase text-muted-foreground mb-3">
                Mon histoire
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-5">
                De l'ingénierie au Product Management : un parcours forgé dans la complexité
              </h2>
            </ScrollReveal>
            {/* Mobile: horizontal stepper + fixed detail card */}
            <div>
              <div className="relative flex items-start pr-6">
                <div className="absolute left-3 right-2 top-[7px] h-px bg-border" />
                <ArrowRight className="absolute right-0 top-0 size-3.5 text-border" />
                {storyMilestones.map((m, i) => {
                  const active = i === activeMilestone;
                  return (
                    <button
                      key={m.year}
                      type="button"
                      onClick={() => setActiveMilestone(i)}
                      className="relative z-10 flex flex-1 flex-col items-center gap-1.5 min-w-0 px-0.5"
                    >
                      <span
                        className={`size-3.5 rounded-full ring-4 ring-background transition-colors ${
                          active ? 'bg-blue-600' : 'bg-border'
                        }`}
                      />
                      <span
                        className={`text-[10px] font-semibold leading-tight text-center transition-colors ${
                          active ? 'text-blue-600' : 'text-muted-foreground'
                        }`}
                      >
                        {m.year}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 min-h-[280px] rounded-2xl border border-border bg-card p-5">
                <div className="flex flex-col items-center text-center mb-4">
                  <p className="text-2xl font-bold tracking-tight text-blue-600 mb-3">
                    {storyMilestones[activeMilestone].year}
                  </p>
                  {storyMilestones[activeMilestone].logos.length > 0 && (
                    <div className="flex items-center justify-center">
                      {storyMilestones[activeMilestone].logos.map((logo, li) => (
                        <span
                          key={li}
                          className={`size-16 rounded-full border border-border bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-sm ${
                            li > 0 ? '-ml-4' : ''
                          }`}
                          style={{ zIndex: storyMilestones[activeMilestone].logos.length - li }}
                        >
                          <img
                            src={logo}
                            alt=""
                            className={`w-full h-full ${logo === sunsetRoad ? 'object-cover' : 'object-contain p-2'}`}
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-base font-light leading-snug text-foreground/85">
                  {storyMilestones[activeMilestone].content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mon parcours professionnel */}
        <section className="hidden md:block px-6 lg:px-8 py-8 md:py-14 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight uppercase text-muted-foreground mb-3 md:mb-3">
                Mon parcours professionnel
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 md:mb-3">
                Un fil rouge cohérent
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85 mb-5 md:mb-6">
                De l'ingénierie au Product Management, un fil rouge cohérent : <strong className="font-semibold text-foreground">créer de la valeur à travers des produits digitaux utiles</strong>.
              </p>
            </ScrollReveal>

            <div className="md:hidden">
              <MobileCarousel
                items={experiences}
                keyExtractor={(exp, i) => `${exp.company}-${i}`}
                trackClassName="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2"
                itemClassName="shrink-0 w-full snap-center"
                navClassName=""
                renderItem={(exp) => (
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                    <LogoBadge text={exp.company} fallback={<Building2 className="size-5" />} size={10} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold tracking-tight leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                    </div>
                    <p className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums">
                      {exp.period}
                    </p>
                  </div>
                )}
              />
            </div>

            <div className="hidden md:grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <ScrollReveal>
                <ul className="divide-y divide-border">
                  {experiences.map((exp, i) => (
                    <li key={`${exp.company}-${i}`} className="py-2.5 flex items-center gap-4">
                      <LogoBadge text={exp.company} fallback={<Building2 className="size-5" />} size={10} />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                      </div>
                      <p className="shrink-0 text-xs md:text-sm font-medium text-muted-foreground tabular-nums">
                        {exp.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-500/25 via-orange-500/15 to-rose-500/15 blur-2xl" />
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-muted">
                    <img
                      src={sunsetRoad}
                      alt="Route au coucher de soleil - symbole du parcours professionnel"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* Formation */}
        <section className="px-6 lg:px-8 py-8 md:py-28 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="md:hidden">
              <MobileCarousel
                items={['formation', 'langues', 'certifications'] as const}
                keyExtractor={(key) => key}
                trackClassName="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2"
                itemClassName="shrink-0 w-full snap-center"
                navClassName=""
                renderItem={(key) => {
                  if (key === 'formation') {
                    return (
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-5">
                          <GraduationCap className="size-5 text-muted-foreground" />
                          <h2 className="text-xl font-semibold tracking-tight">Formation</h2>
                        </div>
                        <div className="space-y-4">
                          {educationItems.map((e) => (
                            <div key={e.title} className="flex items-center gap-4">
                              <LogoBadge text={e.school} fallback={<School className="size-5" />} size={10} />
                              <div>
                                <p className="text-xs text-muted-foreground font-medium tracking-wide">{e.period}</p>
                                <h3 className="text-lg font-semibold mt-1">{e.title}</h3>
                                <p className="text-sm text-muted-foreground font-light mt-1">{e.school}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (key === 'langues') {
                    return (
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-5">
                          <LanguagesIcon className="size-5 text-muted-foreground" />
                          <h2 className="text-xl font-semibold tracking-tight">Langues</h2>
                        </div>
                        <ul className="space-y-3">
                          {languages.map((l) => (
                            <li key={l.name} className="flex items-center gap-4">
                              <span className="shrink-0 size-10 rounded-xl border border-border bg-white flex items-center justify-center overflow-hidden text-xl">
                                {languageFlags[l.name]}
                              </span>
                              <span className="flex-1 min-w-0 flex items-baseline justify-between gap-4">
                                <span className="text-base font-medium">{l.name}</span>
                                <span className="text-sm text-muted-foreground font-light">{l.level}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <div className="flex items-center gap-3 mb-5">
                        <Award className="size-5 text-muted-foreground" />
                        <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
                      </div>
                      <ul className="space-y-3">
                        {certifications.map((c) => (
                          <li key={c.label} className="flex gap-4">
                            <LogoBadge text={`${c.label} ${c.issuer}`} fallback={<BadgeCheck className="size-5" />} size={10} />
                            <div>
                              <p className="text-base font-semibold">{c.label}</p>
                              <p className="text-sm text-muted-foreground font-light">{c.issuer}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }}
              />
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <GraduationCap className="size-5 text-muted-foreground" />
                    <h2 className="text-xl md:text-3xl font-semibold tracking-tight">Formation</h2>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    {educationItems.map((e) => (
                      <div key={e.title} className="flex gap-4">
                        <div className="mt-4">
                          <LogoBadge text={e.school} fallback={<School className="size-5" />} size={10} />
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground font-medium tracking-wide">
                            {e.period}
                          </p>
                          <h3 className="text-lg font-semibold mt-1">{e.title}</h3>
                          <p className="text-sm text-muted-foreground font-light mt-1">{e.school}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-6">
                    <LanguagesIcon className="size-5 text-muted-foreground" />
                    <h2 className="text-xl md:text-3xl font-semibold tracking-tight">Langues</h2>
                  </div>
                  <ul className="space-y-3">
                    {languages.map((l) => (
                      <li key={l.name} className="flex items-center gap-4">
                        <span className="shrink-0 size-10 rounded-xl border border-border bg-white flex items-center justify-center overflow-hidden text-xl">
                          {languageFlags[l.name]}
                        </span>
                        <span className="flex-1 min-w-0 flex items-baseline justify-between gap-4">
                          <span className="text-base font-medium">{l.name}</span>
                          <span className="text-sm text-muted-foreground font-light">{l.level}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                  <Award className="size-5 text-muted-foreground" />
                  <h2 className="text-xl md:text-3xl font-semibold tracking-tight">Certifications</h2>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {certifications.map((c) => (
                    <li key={c.label} className="flex gap-4">
                      <LogoBadge text={`${c.label} ${c.issuer}`} fallback={<BadgeCheck className="size-5" />} size={10} />

                      <div>
                        <p className="text-base font-semibold">{c.label}</p>
                        <p className="text-sm text-muted-foreground font-light">{c.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
