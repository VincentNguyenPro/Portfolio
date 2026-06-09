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

        {/* Expériences */}
        <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="size-5 text-muted-foreground" />
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Expériences professionnelles
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <ScrollReveal key={`${exp.company}-${i}`} delay={i * 0.04}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 pb-10 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-semibold tracking-wide text-foreground">
                        {exp.period}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                    <div className="flex gap-4">
                      <LogoBadge text={exp.company} fallback={<Building2 className="size-5" />} />

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-base text-muted-foreground mt-1 mb-4">{exp.company}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-sm md:text-base font-light leading-relaxed text-foreground/80 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted-foreground"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
                    <div className="shrink-0 size-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground">
                      <BadgeCheck className="size-5" />
                    </div>
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
