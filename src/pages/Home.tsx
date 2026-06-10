import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { photographerInfo, skillGroups } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { value: '10', suffix: ' ans', label: "d'expérience SI Finance" },
  { value: '-50 %', label: 'délais de clôture (J+10 → J+5)' },
  { value: '8 M€', label: 'budget produit piloté' },
  { value: '+250', label: 'utilisateurs accompagnés' },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        {/* HERO */}
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Glow */}
          <div className="absolute top-1/3 -left-32 size-[480px] rounded-full bg-indigo-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 size-[480px] rounded-full bg-emerald-500/15 blur-[140px]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-40 pb-20">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8 text-white"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs font-medium tracking-wide text-white/80">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  {photographerInfo.availability}
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                  Vincent Nguyen
                  <span className="block text-white/60 font-light mt-2">
                    Product Manager · Finance & SI
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-2xl">
                  {photographerInfo.heroIntroduction}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/portfolio"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-white/90 transition-colors"
                  >
                    Voir mes projets
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Me contacter
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-emerald-500/20 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur aspect-[4/5]">
                  <img
                    src={photographerInfo.portraitImage}
                    alt={photographerInfo.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative border-t border-white/10 bg-white/[0.02] backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    {s.value}
                    {s.suffix && <span className="text-white/60 text-2xl">{s.suffix}</span>}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 font-light">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                À propos
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground text-justify hyphens-auto">
                Product Manager — Product Owner avec 10 ans d'expérience en SI finance et transformation digitale.
                J'ai piloté des outils critiques (8 M€, +25 ETP), réduit de 50 % les délais de clôture, et j'utilise l'IA au quotidien pour accélérer la discovery comme la delivery produit.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 mt-10 text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Découvrir mon parcours complet
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>


        {/* EXPERTISES */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Expertises
                  </p>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Ce que je sais faire
                  </h2>
                </div>
                <Sparkles className="size-8 text-muted-foreground/40 hidden md:block" />
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-semibold tracking-tight mb-4">{group.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Projets
                  </p>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Réalisations
                  </h2>
                </div>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  Tous les projets
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <Link
                    to={`/project/${project.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                  >
                    <div
                      className={`relative aspect-[16/10] overflow-hidden ${
                        project.coverImage ? 'bg-muted' : `bg-gradient-to-br ${project.coverGradient}`
                      } p-8 flex flex-col justify-between text-white`}
                    >
                      {project.coverImage && (
                        <>
                          <img
                            src={project.coverImage}
                            alt={`${project.company} — ${project.title}`}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                        </>
                      )}
                      <div className="relative flex items-center justify-between gap-2">
                        <span className="text-xs font-medium tracking-wider uppercase opacity-90">
                          {project.company}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.badge && (
                            <span className="text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                              {project.badge}
                            </span>
                          )}
                          <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                      <div className="relative">
                        <p className="text-xs opacity-80 mb-2">{project.period}</p>
                        <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {project.metrics.slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <div className="text-lg font-semibold tracking-tight">{m.value}</div>
                            <div className="text-xs text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Un produit à fort enjeu ?
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Discutons de la manière dont je peux contribuer à votre roadmap.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Me contacter
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
