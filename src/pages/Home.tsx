import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { photographerInfo, skillGroups } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { value: '10', suffix: ' ans', label: "d'expérience produit & SI" },
  { value: '+5', label: 'produits digitaux pilotés' },
  { value: '8 M€', label: 'budget produit piloté' },
  { value: '+250', label: 'utilisateurs accompagnés' },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <SEOHead
        exactTitle="Vincent Nguyen — Product Manager & Product Owner | Finance & SI | Paris"
        description="Portfolio de Vincent Nguyen, Product Manager & Product Owner avec 10 ans d'expérience en SI Finance et transformation digitale. Basé à Paris, disponible immédiatement."
      />
      <div className="min-h-screen">
        {/* HERO */}
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex flex-col items-start gap-1.5 px-3 py-2 rounded-2xl border border-border bg-muted/40 text-xs font-medium tracking-wide text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  {photographerInfo.availability}
                </div>
                <div className="pl-4">📍 Paris · 💻 Hybride · ✅ Disponible immédiatement</div>
              </div>

              <p className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground break-words">
                Vincent Nguyen
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Product Manager • Product Owner
                <span className="block text-muted-foreground font-light mt-2">
                  Transformation digitale
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed text-left md:text-justify">
                {photographerInfo.heroIntroduction}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projets"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  Voir mes projets
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
                >
                  Me contacter
                </Link>
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

          {/* Stats strip */}
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {s.value}
                  {s.suffix && <span className="text-muted-foreground text-2xl">{s.suffix}</span>}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground mb-6">
                À propos
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground text-left md:text-justify">
                Product Manager &amp; Product Owner avec 10 ans d'expérience en SI finance et transformation digitale.
                <br /><br />
                J'ai piloté des outils critiques (8 M€,&nbsp;+25&nbsp;ETP), livré des produits à impact mesurable dans des environnements multi-acteurs complexes, et j'utilise l'IA au quotidien pour accélérer la discovery comme la delivery produit.
              </p>
              <Link
                to="/parcours"
                className="group inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
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
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground mb-3">
                    Expertises
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
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
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground mb-3">
                    Projets
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                    Réalisations
                  </h2>
                </div>
                <Link
                  to="/projets"
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
                    to={`/projet/${project.slug}`}
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
                            alt={`${project.company} - ${project.title}`}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                        </>
                      )}
                      <div className="relative flex items-start justify-end gap-2">
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
                        <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-wider uppercase text-foreground mb-3">
                        <span>{project.company}</span>
                        <span className="text-muted-foreground/60">·</span>
                        <span className="text-muted-foreground">{project.period}</span>
                      </div>
                      <p className="text-base text-muted-foreground font-light leading-relaxed mb-5">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {project.metrics.slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <div className="text-xl font-semibold tracking-tight">{m.value}</div>
                            <div className="text-sm text-muted-foreground">{m.label}</div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Un produit à fort enjeu ?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
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
