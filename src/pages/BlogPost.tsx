import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts, type BlogCategory } from '@/data/blog';
import { SEOHead } from '@/components/seo/SEOHead';

const categoryColor: Record<BlogCategory, string> = {
  'Product Management': 'from-sky-500 via-indigo-500 to-violet-600',
  'IA & Agents': 'from-violet-600 via-fuchsia-500 to-rose-500',
  Data: 'from-emerald-500 via-teal-500 to-cyan-600',
  'Innovation & Tech': 'from-amber-500 via-orange-500 to-rose-500',
  Formation: 'from-yellow-500 via-amber-500 to-orange-500',
  Communauté: 'from-slate-700 via-slate-900 to-zinc-900',
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEOHead title={post.title} description={post.description} />
      <article className="min-h-screen">
        <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden bg-muted">
          <img
            src={post.cover.url}
            alt={post.cover.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="px-6 lg:px-8 -mt-24 md:-mt-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="size-4" />
                Tous les articles
              </Link>

              <div className="flex items-center gap-2 text-sm flex-wrap">
                {post.categories.map((c) => (
                  <span
                    key={c}
                    className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full text-white bg-gradient-to-br ${categoryColor[c]}`}
                  >
                    {c}
                  </span>
                ))}
                <span className="text-muted-foreground">{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {post.description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-base md:text-lg text-foreground/90 leading-relaxed text-justify">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pl-1">
                    {section.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-base md:text-lg text-foreground/90 leading-relaxed flex gap-3"
                      >
                        <span className="mt-2 size-1.5 rounded-full bg-foreground/60 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="border-l-2 border-foreground/30 pl-4 italic text-foreground/80">
                    {section.quote}
                  </blockquote>
                )}
                {section.image && (
                  <figure className="my-4">
                    <img
                      src={section.image.url}
                      alt={section.image.alt}
                      className="w-full rounded-xl border border-border"
                      loading="lazy"
                    />
                    {section.image.caption && (
                      <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {post.url && (
              <div className="pt-8 border-t border-border">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors"
                >
                  Voir la source
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
