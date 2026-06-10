import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Languages as LanguagesIcon, Building2, School, BadgeCheck } from 'lucide-react';
import {
  photographerInfo,
  experiences,
  certifications,
  languages,
  educationItems,
} from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import saintelyonPhoto from '@/assets/vincent-saintelyon.jpg.asset.json';
import sunsetRoad from '@/assets/sunset-road.jpg.asset.json';
import anthropicLogo from '@/assets/logos/anthropic.png.asset.json';
import bartleLogo from '@/assets/logos/bartle.jpeg.asset.json';
import fInitiativesLogo from '@/assets/logos/f-initiatives.webp.asset.json';
import hecLogo from '@/assets/logos/hec.png.asset.json';
import microsoftLogo from '@/assets/logos/microsoft.png.asset.json';
import noeLogo from '@/assets/logos/noe.png.asset.json';
import renaultLogo from '@/assets/logos/renault.svg.asset.json';
import scrumLogo from '@/assets/logos/scrum.svg.asset.json';
import supmecaLogo from '@/assets/logos/supmeca.png.asset.json';

const matchLogo = (text: string): string | null => {
  const t = text.toLowerCase();
  if (t.includes('bartle')) return bartleLogo.url;
  if (t.includes('renault')) return renaultLogo.url;
  if (t.includes('blablacar')) return noeLogo.url; // formation via Noé
  if (t.includes('f-initiatives') || t.includes('f initiatives')) return fInitiativesLogo.url;
  if (t.includes('noé') || t.includes('noe')) return noeLogo.url;
  if (t.includes('hec')) return hecLogo.url;
  if (t.includes('supmeca') || t.includes('isae')) return supmecaLogo.url;
  if (t.includes('microsoft')) return microsoftLogo.url;
  if (t.includes('scrum')) return scrumLogo.url;
  if (t.includes('anthropic') || t.includes('claude')) return anthropicLogo.url;
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
        title="Parcours"
        description="Parcours, formation et certifications de Vincent Nguyen, Product Manager spécialisé en SI finance et transformation digitale."
      />
      <div className="min-h-screen">
        {/* Header */}
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                À propos
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                Parcours
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                {photographerInfo.biography.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
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

        {/* Approche */}
        <section className="px-6 lg:px-8 py-20 md:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Mon approche
              </p>
              <div className="space-y-5 text-xl md:text-2xl font-light leading-relaxed text-foreground">
                {photographerInfo.approach.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mon histoire */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Mon histoire
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                De l'ingénierie au Product Management : un parcours forgé dans la complexité
              </h2>
              <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-foreground/85">
                <p>
                  Formé en <strong className="font-semibold text-foreground">génie industriel à l'ISAE-SUPMECA</strong>, j'ai débuté chez <strong className="font-semibold text-foreground">Renault</strong> sur des projets techniques avant de basculer vers ce qui m'anime vraiment : <strong className="font-semibold text-foreground">construire des produits utiles à ceux qui les utilisent</strong>.
                </p>
                <p>
                  En 2014, je rejoins <strong className="font-semibold text-foreground">F-Initiatives</strong>, cabinet en <strong className="font-semibold text-foreground">financement de l'innovation</strong>, où j'accompagne des entreprises de la start-up aux <strong className="font-semibold text-foreground">grands groupes du CAC 40</strong> pour financer leurs projets R&D. Je comprends vite que l'innovation ne vaut quelque chose que si elle est <strong className="font-semibold text-foreground">structurée et portée par les bons interlocuteurs</strong>.
                </p>
                <p>
                  En 2016, je reviens chez <strong className="font-semibold text-foreground">Renault</strong> comme <strong className="font-semibold text-foreground">Product Owner</strong> sur un <strong className="font-semibold text-foreground">outil de costing critique</strong> — 10 M€, 250 utilisateurs, 12 pays. Je découvre ce que signifie vraiment <strong className="font-semibold text-foreground">livrer à grande échelle</strong> : spécifications, tests, conduite du changement.<br />
                  Résultat : <strong className="font-semibold text-foreground">95 % de taux d'adoption</strong> et <strong className="font-semibold text-foreground">+15 % de fiabilité et rapidité d'exécution</strong> des calculs.
                </p>
                <p>
                  En 2020, je deviens <strong className="font-semibold text-foreground">responsable transformation</strong> et je prends la responsabilité de l'<strong className="font-semibold text-foreground">outil de consolidation financière Supply Chain monde</strong> — 8 M€, +25 contrôleurs, 10 pays. Je vis pleinement le <strong className="font-semibold text-foreground">cycle produit</strong> : backlog, delivery Scrum, amélioration continue.<br />
                  Impact direct : <strong className="font-semibold text-foreground">-50 % sur les délais de clôture</strong>, de J+10 à J+5.
                </p>
                <p>
                  En 2023, chez <strong className="font-semibold text-foreground">Bartle</strong>, j'accompagne des grands groupes en <strong className="font-semibold text-foreground">restructuration DSI</strong>. Je construis de zéro un <strong className="font-semibold text-foreground">outil de pilotage des coûts DSI</strong>.<br />
                  Résultat : <strong className="font-semibold text-foreground">MVP livré en 2 mois</strong>.<br />
                  Je vis de l'intérieur le <strong className="font-semibold text-foreground">pain point universel des directions Finance et IT</strong> : les outils Excel ne suffisent plus pour piloter sérieusement un <strong className="font-semibold text-foreground">P&L DSI</strong>. Ce constat devient un <strong className="font-semibold text-foreground">déclic</strong>.
                </p>
                <p>
                  En 2026, je consolide ma pratique à la <strong className="font-semibold text-foreground">formation Noé</strong> et commence à construire le <strong className="font-semibold text-foreground">SaaS qui manque au marché</strong> : une application de <strong className="font-semibold text-foreground">pilotage P&L DSI</strong> conçue avec les <strong className="font-semibold text-foreground">outils IA modernes</strong>.
                </p>
                <p>
                  Aujourd'hui, je cherche à mettre cette <strong className="font-semibold text-foreground">triple culture — rigueur d'ingénieur, expertise finance & SI, maîtrise du cycle produit</strong> — au service de <strong className="font-semibold text-foreground">produits digitaux à fort impact</strong>, dans des environnements où la <strong className="font-semibold text-foreground">complexité métier est une opportunité, pas un obstacle</strong>.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="md:sticky md:top-24 relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-emerald-500/15 blur-2xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                  <img
                    src={saintelyonPhoto.url}
                    alt="Vincent Nguyen à l'arrivée de la SaintéLyon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xs text-muted-foreground font-light italic text-center">
                  Arrivée de la SaintéLyon — 78 km de nuit entre Saint-Étienne et Lyon
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mon parcours professionnel */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Mon parcours professionnel
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Un fil rouge cohérent
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85 mb-10">
                De l'ingénierie au Product Management, un fil rouge cohérent : <strong className="font-semibold text-foreground">créer de la valeur à travers des produits digitaux utiles</strong>.
              </p>

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
                    src={sunsetRoad.url}
                    alt="Route au coucher de soleil — symbole du parcours professionnel"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Formation */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border bg-muted/30">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
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

              <div className="flex items-center gap-3 mt-12 mb-6">
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
        </section>
      </div>
    </>
  );
}
