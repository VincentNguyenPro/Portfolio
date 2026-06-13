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
        title="Projets"
        description="Réalisations de Vincent Nguyen : Product Management chez BlaBlaCar, Bartle et Renault - finance, supply chain et applications mobiles."
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
              <p className="text-5xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground">
                Projets
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
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
                  to={`/project/${project.slug}`}
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                        </>
                      )}
                      <div className="relative flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs font-medium tracking-wider uppercase opacity-90">
                            {project.company}
                          </span>
                          <span className="text-xs opacity-60">·</span>
                          <span className="text-xs opacity-80">{project.period}</span>
                        </div>
                        {project.badge && (
                          <span className="text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 shrink-0">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
                          {project.title}
                        </h2>
                        <p className="text-sm md:text-base text-white/80 font-light">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
                      <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
                            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        Voir le projet
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
