import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug, getProjectNavigation } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  const { previous, next } = getProjectNavigation(project.slug);

  return (
    <>
      <SEOHead title={project.title} description={project.summary} type="article" />

      <article className="min-h-screen">
        {/* Hero */}
        <section className="relative text-white px-6 lg:px-8 pt-6 md:pt-10 pb-6 md:pb-8 overflow-hidden">
          {/* Cover image */}
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/75" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.coverGradient}`} />
          )}
          <div className="relative max-w-7xl mx-auto">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-base md:text-sm font-medium text-white hover:text-white mb-4 md:mb-4 transition-colors drop-shadow-sm px-4 py-2 md:px-3 md:py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20"
            >
              <ArrowLeft className="size-5 md:size-4" />
              Tous les projets
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-3 md:flex md:items-end md:justify-between md:gap-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-3xl font-semibold tracking-tight leading-[1.15] max-w-4xl drop-shadow-md">
                {project.title}
              </h1>

              <p className="hidden md:block text-base text-white font-light leading-relaxed max-w-md drop-shadow-md">
                {project.summary}
              </p>
            </motion.div>

            {/* Metrics */}
            <div className="hidden md:grid grid-cols-3 gap-6 mt-4 pt-4 border-t border-white/20 max-w-2xl">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-xl font-semibold tracking-tight drop-shadow-sm">{m.value}</div>
                  <div className="text-xs text-white drop-shadow-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="px-6 lg:px-8 py-5 md:py-28">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-16">
            <div className="flex flex-wrap items-center gap-3 text-sm md:text-base font-medium tracking-wider uppercase text-foreground/80 border-b border-border pb-5 md:pb-8">
              <span>{project.company}</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground">{project.period}</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground">{project.role}</span>
            </div>

            {project.scope && (
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-muted/30 p-5 md:p-6">
                  <p className="text-base font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Périmètre
                  </p>
                  <p className="text-base font-light">{project.scope}</p>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Contexte
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85 font-light">
                  {project.context}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Problématique
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85 font-light">
                  {project.problem}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-4 md:space-y-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Démarche
                </h2>
                <ol className="space-y-4 md:space-y-6">
                  {project.approach.map((step, i) => (
                    <li key={step.heading} className="grid grid-cols-[auto_1fr] gap-5">
                      <div className="flex flex-col items-center">
                        <div className="size-9 rounded-full border border-border bg-card flex items-center justify-center text-sm font-semibold">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        {i < project.approach.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="text-lg font-semibold tracking-tight mb-2">
                          {step.heading}
                        </h3>
                        <p className="text-base text-foreground/75 font-light leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-3 md:space-y-4 rounded-2xl bg-foreground text-background p-5 md:p-10">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase opacity-70">
                  Résultats
                </h2>
                <ul className="space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-lg font-light">
                      <CheckCircle2 className="size-5 mt-1 shrink-0 opacity-80" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Stack & méthodes
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>
        </div>

        {/* Navigation */}
        <nav className="md:hidden border-t border-border px-6 lg:px-8 py-5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
            {previous ? (
              <Link
                to={`/projet/${previous.slug}`}
                className="group min-w-0 rounded-xl sm:rounded-2xl border border-border p-4 sm:p-5 hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base font-medium text-muted-foreground mb-1.5 sm:mb-2">
                  <ArrowLeft className="size-3.5 sm:size-4 shrink-0" />
                  Précédent
                </div>
                <div className="text-sm sm:text-lg font-semibold tracking-tight leading-snug line-clamp-2">{previous.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/projet/${next.slug}`}
                className="group min-w-0 rounded-xl sm:rounded-2xl border border-border p-4 sm:p-5 hover:bg-muted/40 transition-colors sm:text-right"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base font-medium text-muted-foreground mb-1.5 sm:mb-2 sm:justify-end">
                  Suivant
                  <ArrowRight className="size-3.5 sm:size-4 shrink-0" />
                </div>
                <div className="text-sm sm:text-lg font-semibold tracking-tight leading-snug line-clamp-2">{next.title}</div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </article>
    </>
  );
}
