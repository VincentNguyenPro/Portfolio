import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Portfolio() {
  return (
    <>
      <SEOHead
        exactTitle="Projets — Vincent Nguyen Product Manager"
        description="Découvrez les projets produit de Vincent Nguyen : BlaBlaCar, Bartle, Renault. Outils critiques, finance SI, supply chain."
      />
      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-6 pb-6 md:pt-14 md:pb-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-3"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground">
                Projets
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Réalisations
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Des produits livrés, des impacts mesurés - Finance, Costing, Supply Chain, Applications mobiles.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-10 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: full stacked cards */}
            <div className="md:hidden space-y-4">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.05}>
                  <Link
                    to={`/projet/${project.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                  >
                    <div className="grid">
                      <div
                        className={`relative aspect-video overflow-hidden ${
                          project.coverImage ? 'bg-muted' : `bg-gradient-to-br ${project.coverGradient}`
                        } p-5 flex flex-col justify-between text-white`}
                      >
                        {project.coverImage && (
                          <>
                            <img
                              src={project.coverImage}
                              alt={`${project.company} - ${project.title}`}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
                          </>
                        )}
                        <div className="relative flex items-start justify-end gap-2">
                          {project.badge && (
                            <span className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20">
                              {project.badge}
                            </span>
                          )}
                          <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        <div className="relative">
                          <h2 className="text-xl font-semibold leading-tight line-clamp-2">
                            {project.title}
                          </h2>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col gap-3">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold tracking-wider uppercase text-foreground">
                            <span>{project.company}</span>
                            <span className="text-muted-foreground/60">·</span>
                            <span className="text-muted-foreground">{project.period}</span>
                          </div>
                          <p className="text-base text-foreground/80 font-light leading-relaxed line-clamp-1">
                            {project.summary}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                          Voir le projet
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Desktop: 5 compact cards side by side */}
            <div className="hidden md:grid md:grid-cols-5 md:gap-5">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.05}>
                  <Link
                    to={`/projet/${project.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-md transition-all"
                  >
                    <div
                      className={`relative aspect-[16/11] overflow-hidden ${
                        project.coverImage ? 'bg-muted' : `bg-gradient-to-br ${project.coverGradient}`
                      } p-4 flex flex-col justify-between text-white`}
                    >
                      {project.coverImage && (
                        <>
                          <img
                            src={project.coverImage}
                            alt={`${project.company} - ${project.title}`}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
                        </>
                      )}
                      <div className="relative flex items-start justify-end">
                        {project.badge && (
                          <span className="text-[9px] font-semibold tracking-wide px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="relative text-base font-semibold leading-tight line-clamp-2">
                        {project.title}
                      </h2>
                    </div>

                    <div className="p-4">
                      <div className="text-xs font-semibold tracking-wide uppercase text-foreground truncate mb-2">
                        {project.company}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
                        Voir le projet
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
