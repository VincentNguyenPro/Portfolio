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
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground">
                Projets
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                Réalisations
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Des produits livrés, des impacts mesurés - Finance, Costing, Supply Chain, Applications mobiles.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto space-y-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <Link
                  to={`/projet/${project.slug}`}
                  className="group block rounded-3xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                >
                  <div className="grid md:grid-cols-[1fr_1.2fr]">
                    <div
                      className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
                        </>
                      )}
                      <div className="relative flex items-start justify-end gap-2">
                        {project.badge && (
                          <span className="text-xs md:text-sm font-semibold tracking-wide px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20">
                            {project.badge}
                          </span>
                        )}
                        <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold tracking-wider uppercase text-foreground">
                          <span>{project.company}</span>
                          <span className="text-muted-foreground/60">·</span>
                          <span className="text-muted-foreground">{project.period}</span>
                        </div>
                        <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
                            <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                        Voir le projet
                        <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
