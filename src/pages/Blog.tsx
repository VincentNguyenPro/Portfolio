import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, type BlogCategory } from '@/data/blog';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categoryColor: Record<BlogCategory, string> = {
  'Product Management': 'from-sky-500 via-indigo-500 to-violet-600',
  'IA & Agents': 'from-violet-600 via-fuchsia-500 to-rose-500',
  Data: 'from-emerald-500 via-teal-500 to-cyan-600',
  'Innovation & Tech': 'from-amber-500 via-orange-500 to-rose-500',
  Formation: 'from-yellow-500 via-amber-500 to-orange-500',
  Communauté: 'from-slate-700 via-slate-900 to-zinc-900',
};

export default function Blog() {
  const posts = [...blogPosts].sort((a, b) => a.order - b.order);

  return (
    <>
      <SEOHead
        title="Blog"
        description="Notes terrain de Vincent Nguyen : Product Management, IA & agents, Data, Innovation et formations."
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
                Blog
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                Notes terrain - Product, IA, Data & Innovation
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Comptes-rendus d'événements, retours d'expérience et notes prises au fil de mes formations, ateliers et conférences - Product Management, IA & agents, Data, Innovation et Communauté tech.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group h-full block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.cover.url}
                      alt={post.cover.alt}
                      className={`absolute inset-0 w-full h-full ${
                        post.coverFit === 'contain' ? 'object-contain p-4 bg-muted' : 'object-cover'
                      } group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="relative h-full p-5 flex flex-col justify-between text-white">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {post.categories.map((c) => (
                            <span
                              key={c}
                              className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full bg-gradient-to-br ${categoryColor[c]} border border-white/20`}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                        <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </div>
                      <p className="text-xs opacity-90">{post.date}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h2 className="text-lg font-semibold tracking-tight leading-snug group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {post.description}
                    </p>
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
