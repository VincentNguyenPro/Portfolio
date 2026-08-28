import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { photographerInfo, skillGroups } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MobileCarousel } from '@/components/ui/MobileCarousel';
import { CountUpStat } from '@/components/ui/CountUpStat';

const stats = [
  { target: 10, suffix: ' ans', label: "d'expérience produit & SI" },
  { target: 5, prefix: '+', label: 'produits digitaux pilotés' },
  { target: 8, suffix: ' M€', label: 'budget produit piloté' },
  { target: 250, prefix: '+', label: 'utilisateurs accompagnés' },
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
        <section className="px-6 lg:px-8 pt-20 pb-6 md:pt-24 md:pb-16 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground break-words">
                Vincent Nguyen
              </p>
              <h1 className="text-[clamp(1.15rem,5.6vw,1.6rem)] sm:text-3xl md:text-4xl font-semibold tracking-tight whitespace-nowrap">
                Product Manager • Product Owner
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed text-left md:text-justify">
                {photographerInfo.heroIntroduction}
              </p>

              <div className="flex flex-nowrap items-center gap-2 md:gap-4 pt-2">
                <Link
                  to="/projets"
                  className="group flex flex-1 items-center justify-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-blue-600 text-white font-medium text-sm md:text-base whitespace-nowrap hover:bg-blue-700 transition-colors"
                >
                  Voir mes projets
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  data-contact-cta
                  className="group flex flex-1 items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-border text-foreground font-medium text-sm md:text-base whitespace-nowrap hover:bg-muted transition-colors"
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
              <div className="absolute -inset-1 sm:-inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-emerald-500/15 blur-2xl" />
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-muted">
                <img
                  src={photographerInfo.portraitImage}
                  alt={photographerInfo.name}
                  className="w-full h-full object-cover object-top grayscale"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur border border-white/20 text-white text-xs font-medium">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  Disponible
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <div className="max-w-7xl mx-auto mt-6 pt-4 md:mt-12 md:pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <CountUpStat key={s.label} target={s.target} prefix={s.prefix} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section className="py-14 md:py-32 px-6 lg:px-8 bg-background">
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
                className="group inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Découvrir mon parcours complet
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </section>


        {/* EXPERTISES */}
        <section className="py-14 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-8 md:mb-14">
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

            <MobileCarousel
              items={skillGroups}
              keyExtractor={(group) => group.title}
              trackClassName="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 lg:grid-cols-3"
              itemClassName="shrink-0 w-full snap-center sm:w-auto sm:shrink"
              navClassName="sm:hidden"
              renderItem={(group) => (
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold tracking-tight mb-4">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            />
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-14 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="mb-5 md:mb-14">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground mb-3">
                  Projets
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                  Réalisations
                </h2>
              </div>
            </ScrollReveal>

            <MobileCarousel
              items={featured}
              keyExtractor={(project) => project.id}
              trackClassName="flex gap-4 overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0"
              itemClassName="shrink-0 w-full snap-center md:w-auto md:shrink"
              navClassName="md:hidden"
              renderItem={(project) => (
                  <Link
                    to={`/projet/${project.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                  >
                    <div
                      className={`relative aspect-[16/9] md:aspect-[16/10] overflow-hidden ${
                        project.coverImage ? 'bg-muted' : `bg-gradient-to-br ${project.coverGradient}`
                      } p-5 md:p-8 flex flex-col justify-end text-white`}
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
                      {project.badge && (
                        <span className="absolute top-3 right-3 md:top-4 md:right-4 text-[9px] md:text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                          {project.badge}
                        </span>
                      )}
                      <div className="relative">
                        <h3 className="text-xl md:text-3xl font-semibold leading-tight line-clamp-2 md:line-clamp-none">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-wider uppercase text-foreground mb-3 min-h-10">
                        <span>{project.company}</span>
                        <span className="text-muted-foreground/60">·</span>
                        <span className="text-muted-foreground">{project.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        Voir le projet
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
              )}
            />

            <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
              <Link
                to="/projets"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                Voir tous les projets
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
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
                data-contact-cta
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
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
