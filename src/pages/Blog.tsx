import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useRef, useState } from 'react';
import { blogPosts, type BlogCategory } from '@/data/blog';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

const categoryColor: Record<BlogCategory, string> = {
  Product: 'from-sky-500 via-indigo-500 to-violet-600',
  IA: 'from-violet-600 via-fuchsia-500 to-rose-500',
  Data: 'from-emerald-500 via-teal-500 to-cyan-600',
  Formation: 'from-yellow-500 via-amber-500 to-orange-500',
  Communauté: 'from-slate-700 via-slate-900 to-zinc-900',
};

const POSTS_PER_PAGE = 8;

export default function Blog() {
  const allPosts = useMemo(() => [...blogPosts].sort((a, b) => a.order - b.order), []);
  const allCategories = useMemo(() => {
    const set = new Set<BlogCategory>();
    allPosts.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return Array.from(set);
  }, [allPosts]);
  const [selected, setSelected] = useState<BlogCategory | 'all'>('all');
  const [page, setPage] = useState(1);
  const posts = selected === 'all' ? allPosts : allPosts.filter((p) => p.categories.includes(selected));

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const gridRef = useRef<HTMLDivElement>(null);

  const selectCategory = (c: BlogCategory | 'all') => {
    setSelected(c);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEOHead
        exactTitle="Blog — Vincent Nguyen | Product, IA & Innovation"
        description="Carnets de bord Product Management, IA et Innovation. Conférences, hackathons, retours d'expérience terrain."
      />
      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-6 pb-6 md:pt-10 md:pb-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-3"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase text-muted-foreground">
                Blog
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Carnets de bord Product, IA & Data
              </h1>
              <p className="text-lg md:text-base text-muted-foreground font-light leading-relaxed">
                Comptes-rendus d'événements, retours d'expérience et réflexions au fil de mes formations, ateliers et conférences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-10 md:py-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                type="button"
                onClick={() => selectCategory('all')}
                className={cn(
                  'text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-colors',
                  selected === 'all'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/40'
                )}
              >
                Tous ({allPosts.length})
              </button>
              {allCategories.map((c) => {
                const count = allPosts.filter((p) => p.categories.includes(c)).length;
                const active = selected === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => selectCategory(c)}
                    className={cn(
                      'text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all',
                      active
                        ? `text-white border-transparent bg-gradient-to-br ${categoryColor[c]}`
                        : 'bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/40'
                    )}
                  >
                    {c} ({count})
                  </button>
                );
              })}
            </div>
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24">
            {paginatedPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group h-full block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/9] md:aspect-[16/11] overflow-hidden bg-muted">
                    <img
                      src={post.cover.url}
                      alt={post.cover.alt}
                      className={`absolute inset-0 w-full h-full ${
                        post.coverFit === 'contain' ? 'object-contain p-4 bg-muted' : 'object-cover'
                      } group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="relative h-full p-5 md:p-4 flex flex-col justify-between text-white">
                      <div className="flex items-start justify-end">
                        <ArrowUpRight className="size-5 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-4 space-y-3 md:space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories.map((c) => (
                          <span
                            key={c}
                            className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-full text-white bg-gradient-to-br ${categoryColor[c]}`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-medium text-muted-foreground whitespace-nowrap shrink-0 pt-1">
                        {post.date}
                      </p>
                    </div>
                    <h2 className="text-lg md:text-base font-semibold tracking-tight leading-snug line-clamp-2 group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  type="button"
                  onClick={() => goToPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="Page précédente"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-border text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="size-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => goToPage(p)}
                    aria-current={p === currentPage ? 'page' : undefined}
                    className={cn(
                      'inline-flex items-center justify-center size-9 rounded-full text-sm font-medium transition-colors',
                      p === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Page suivante"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-border text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
