import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categoryColor: Record<string, string> = {
  Product: 'from-sky-500 via-indigo-500 to-violet-600',
  IA: 'from-violet-600 via-fuchsia-500 to-rose-500',
  Data: 'from-emerald-500 via-teal-500 to-cyan-600',
  Formation: 'from-amber-500 via-orange-500 to-rose-500',
  Événement: 'from-slate-700 via-slate-900 to-zinc-900',
};

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog"
        description="Articles et retours d'expérience de Vincent Nguyen sur le Product Management, la Data et l'IA."
      />
      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-6"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Blog
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                Notes Product, Data & IA
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Articles, retours d'expérience et notes prises au fil de mes formations,
                ateliers et conférences sur le Product Management, la Data et l'IA.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                >
                  <div
                    className={`relative aspect-[16/9] bg-gradient-to-br ${
                      categoryColor[post.category] ?? 'from-slate-700 to-slate-900'
                    } p-6 flex flex-col justify-between text-white overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20">
                        {post.category}
                      </span>
                      <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="relative text-xs opacity-90">{post.date}</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <h2 className="text-lg font-semibold tracking-tight leading-snug group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
