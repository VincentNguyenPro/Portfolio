import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Languages as LanguagesIcon, Building2, School, BadgeCheck, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  photographerInfo,
  experiences,
  certifications,
  languages,
  educationItems,
} from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import saintelyonPhoto from '@/assets/vincent-saintelyon.jpg';
import sunsetRoad from '@/assets/sunset-road.jpg';
import anthropicLogo from '@/assets/logos/anthropic.png';
import bartleLogo from '@/assets/logos/bartle.jpeg';
import fInitiativesLogo from '@/assets/logos/f-initiatives.webp';
import hecLogo from '@/assets/logos/hec.png';
import microsoftLogo from '@/assets/logos/microsoft.png';
import noeLogo from '@/assets/logos/noe.png';
import renaultLogo from '@/assets/logos/renault.svg';
import scrumLogo from '@/assets/logos/scrum.svg';
import supmecaLogo from '@/assets/logos/supmeca.png';

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
  return (
    <>
      <SEOHead
        exactTitle="Parcours — Vincent Nguyen Product Manager"
        description="10 ans d'expérience en Product Management : Renault, Bartle, BlaBlaCar. Expertise Finance & SI, transformation digitale."
      />
      <div className="min-h-screen">
        {/* Header */}
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground">
                Parcours
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                Vincent Nguyen
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed text-left md:text-justify">
                {photographerInfo.biography.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:sticky md:top-24 relative"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-emerald-500/15 blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                <img
                  src={photographerInfo.portraitImage}
                  alt={photographerInfo.name}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
            </motion.div>
          </div>
        </section>


        {/* Mon histoire */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border">
            <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight uppercase text-muted-foreground mb-6">
                Mon histoire
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
                De l'ingénierie au Product Management : un parcours forgé dans la complexité
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
              <ScrollReveal>
                <div className="space-y-3 text-base font-light leading-snug text-left md:text-justify text-foreground/85">
                  <p>
                    Formé en <strong className="font-semibold text-foreground">génie industriel à l'ISAE-SUPMECA</strong>, j'ai débuté chez <strong className="font-semibold text-foreground">Renault</strong> sur des projets techniques avant de basculer vers ce qui m'anime vraiment : <strong className="font-semibold text-foreground">construire des produits utiles à ceux qui les utilisent</strong>.
                  </p>
                  <p>
                    En 2014, je rejoins <strong className="font-semibold text-foreground">F-Initiatives</strong>, cabinet en <strong className="font-semibold text-foreground">financement de l'innovation</strong>, où j'accompagne des entreprises de la start-up aux <strong className="font-semibold text-foreground">grands groupes du CAC 40</strong> pour financer leurs projets R&D. Je comprends vite que l'innovation ne vaut quelque chose que si elle est <strong className="font-semibold text-foreground">structurée et portée par les bons interlocuteurs</strong>.
                  </p>
                  <p>
                    En 2016, je reviens chez <strong className="font-semibold text-foreground">Renault</strong> comme <strong className="font-semibold text-foreground">Product Owner</strong> sur un <strong className="font-semibold text-foreground">outil de costing critique</strong> - 10 M€, 250 utilisateurs, 12 pays. Je découvre ce que signifie vraiment <strong className="font-semibold text-foreground">livrer à grande échelle</strong> : spécifications, tests, conduite du changement.<br />
                    Résultat : <strong className="font-semibold text-foreground">95 % de taux d'adoption</strong> et <strong className="font-semibold text-foreground">+15 % de fiabilité et rapidité d'exécution</strong> des calculs.
                  </p>
                  <p>
                    En 2020, je deviens <strong className="font-semibold text-foreground">responsable transformation</strong> et <strong className="font-semibold text-foreground">Product Owner</strong>. Je prends la responsabilité de l'<strong className="font-semibold text-foreground">outil de consolidation financière Supply Chain monde</strong> - 8 M€, +25 contrôleurs, 10 pays. Je vis pleinement le <strong className="font-semibold text-foreground">cycle produit</strong> : backlog, delivery Scrum, amélioration continue.<br />
                    Impact direct : <strong className="font-semibold text-foreground">-50 % sur les délais de clôture</strong>, de J+10 à J+5.
                  </p>
                  <p>
                    En 2023, chez <strong className="font-semibold text-foreground">Bartle</strong>, j'accompagne des grands groupes en <strong className="font-semibold text-foreground">restructuration DSI</strong>. Je construis de zéro un <strong className="font-semibold text-foreground">outil de pilotage des coûts DSI</strong>. Je mène des <strong className="font-semibold text-foreground">ateliers utilisateurs</strong> pour comprendre leurs besoins et je <strong className="font-semibold text-foreground">prototype en plusieurs itérations</strong> pour aboutir à un MVP.<br />
                    Résultat : <strong className="font-semibold text-foreground">MVP livré en 2 mois</strong>.<br />
                    Je vis de l'intérieur le <strong className="font-semibold text-foreground">pain point universel des directions Finance et IT</strong> : les outils Excel ne suffisent plus pour piloter sérieusement un <strong className="font-semibold text-foreground">P&L DSI</strong>. Ce constat devient un <strong className="font-semibold text-foreground">déclic</strong>.
                  </p>
                  <p>
                    En 2026, je consolide ma pratique à la <strong className="font-semibold text-foreground">formation Noé</strong> et commence à construire le <strong className="font-semibold text-foreground">SaaS qui manque au marché</strong> : une application de <strong className="font-semibold text-foreground">pilotage P&L DSI</strong> conçue avec les <strong className="font-semibold text-foreground">outils IA modernes</strong>.
                  </p>
                  <p>
                    Aujourd'hui, je cherche à mettre cette <strong className="font-semibold text-foreground">triple culture - rigueur d'ingénieur, expertise finance & SI, maîtrise du cycle produit</strong> - au service de <strong className="font-semibold text-foreground">produits digitaux à fort impact</strong>, dans des environnements où la <strong className="font-semibold text-foreground">complexité métier est une opportunité, pas un obstacle</strong>.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="md:sticky md:top-24 relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-emerald-500/15 blur-2xl" />
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                    <img
                      src={saintelyonPhoto}
                      alt="Vincent Nguyen à l'arrivée de la SaintéLyon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground font-light italic text-center">
                    Arrivée de la SaintéLyon - 44 km de nuit entre Saint-Catherine et Lyon
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mon parcours professionnel */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight uppercase text-muted-foreground mb-6">
                Mon parcours professionnel
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Un fil rouge cohérent
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85 mb-10">
                De l'ingénierie au Product Management, un fil rouge cohérent : <strong className="font-semibold text-foreground">créer de la valeur à travers des produits digitaux utiles</strong>.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <ScrollReveal>
                <ul className="divide-y divide-border">
                  {experiences.map((exp, i) => (
                    <li key={`${exp.company}-${i}`} className="py-5 flex items-center gap-4">
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
                <div className="md:sticky md:top-24 relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-500/25 via-orange-500/15 to-rose-500/15 blur-2xl" />
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
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
            <div className="mt-8 flex justify-start">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/Vincent-Nguyen-CV.pdf" download="Vincent-Nguyen-CV.pdf">
                  <Download className="size-4" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </section>


        {/* Formation */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="size-5 text-muted-foreground" />
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Formation</h2>
                </div>
                <div className="space-y-6">
                  {educationItems.map((e) => (
                    <div key={e.title} className="flex gap-4">
                      <LogoBadge text={e.school} fallback={<School className="size-5" />} size={10} />

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
                <div className="flex items-center gap-3 mb-6">
                  <LanguagesIcon className="size-5 text-muted-foreground" />
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Langues</h2>
                </div>
                <ul className="space-y-2">
                  {languages.map((l) => (
                    <li key={l.name} className="flex items-baseline justify-between gap-4">
                      <span className="text-base font-medium">{l.name}</span>
                      <span className="text-sm text-muted-foreground font-light">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="size-5 text-muted-foreground" />
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Certifications</h2>
              </div>
              <ul className="space-y-4">
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
        </section>
      </div>
    </>
  );
}
