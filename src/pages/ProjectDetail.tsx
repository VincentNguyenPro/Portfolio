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
        <section className="relative text-white px-6 lg:px-8 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
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
          <div className="relative max-w-5xl mx-auto">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-10 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Tous les projets
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium tracking-wider uppercase text-white/90">
                <span>{project.company}</span>
                <span className="opacity-50">·</span>
                <span>{project.period}</span>
                <span className="opacity-50">·</span>
                <span>{project.role}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl drop-shadow-sm">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl drop-shadow-sm">
                {project.summary}
              </p>
            </motion.div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl md:text-4xl font-semibold tracking-tight drop-shadow-sm">{m.value}</div>
                  <div className="text-xs md:text-sm text-white/80 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto space-y-16">
            {project.scope && (
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-muted/30 p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Périmètre
                  </p>
                  <p className="text-base font-light">{project.scope}</p>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <section className="space-y-4">
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Contexte
                </h2>
                <p className="text-lg leading-relaxed text-foreground/85 font-light">
                  {project.context}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-4">
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Problématique
                </h2>
                <p className="text-2xl md:text-3xl font-light leading-snug text-foreground">
                  {project.problem}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="space-y-8">
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Démarche
                </h2>
                <ol className="space-y-6">
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
              <section className="space-y-4 rounded-2xl bg-foreground text-background p-8 md:p-10">
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase opacity-70">
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
                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
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
        <nav className="border-t border-border px-6 lg:px-8 py-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
            {previous ? (
              <Link
                to={`/projet/${previous.slug}`}
                className="group rounded-2xl border border-border p-5 hover:bg-muted/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <ArrowLeft className="size-3" />
                  Projet précédent
                </div>
                <div className="font-semibold tracking-tight">{previous.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/projet/${next.slug}`}
                className="group rounded-2xl border border-border p-5 hover:bg-muted/40 transition-colors sm:text-right"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 sm:justify-end">
                  Projet suivant
                  <ArrowRight className="size-3" />
                </div>
                <div className="font-semibold tracking-tight">{next.title}</div>
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
