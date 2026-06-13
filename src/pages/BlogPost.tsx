import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts, type BlogCategory, type BlogSection } from '@/data/blog';
import { SEOHead } from '@/components/seo/SEOHead';

const categoryColor: Record<BlogCategory, string> = {
  'Product Management': 'from-sky-500 via-indigo-500 to-violet-600',
  'IA & Agents': 'from-violet-600 via-fuchsia-500 to-rose-500',
  Data: 'from-emerald-500 via-teal-500 to-cyan-600',
  'Innovation & Tech': 'from-amber-500 via-orange-500 to-rose-500',
  Formation: 'from-yellow-500 via-amber-500 to-orange-500',
  Communauté: 'from-slate-700 via-slate-900 to-zinc-900',
};

type SectionGroup = {
  text?: BlogSection;
  image?: BlogSection['image'];
};

const isImageOnly = (s: BlogSection) =>
  !!s.image && !s.paragraphs && !s.heading && !s.bullets && !s.quote;

function buildGroups(sections: BlogSection[]): SectionGroup[] {
  const groups: SectionGroup[] = [];
  let pending: SectionGroup | null = null;

  for (const s of sections) {
    if (isImageOnly(s)) {
      if (pending && !pending.image) {
        pending.image = s.image;
        groups.push(pending);
        pending = null;
      } else {
        if (pending) {
          groups.push(pending);
          pending = null;
        }
        groups.push({ image: s.image });
      }
    } else {
      if (pending) {
        groups.push(pending);
        pending = null;
      }
      pending = { text: s };
    }
  }
  if (pending) groups.push(pending);
  return groups;
}

function TextBlock({ section }: { section: BlogSection }) {
  return (
    <div className="space-y-4">
      {section.heading && (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {section.heading}
        </h2>
      )}
      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className="text-base md:text-lg text-foreground/90 leading-relaxed text-justify"
        >
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
    </div>
  );
}

function ImageBlock({
  image,
  className = '',
}: {
  image: NonNullable<BlogSection['image']>;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="w-full overflow-hidden rounded-xl border border-border bg-muted"
        style={{ aspectRatio: image.aspectRatio ?? '4 / 5' }}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: image.objectPosition ?? 'center' }}
          loading="lazy"
        />
      </div>
      {image.caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const groups = buildGroups(post.sections);

  return (
    <>
      <SEOHead title={post.title} description={post.description} />
      <article className="min-h-screen">
        <div className="relative w-full h-[32vh] md:h-[42vh] overflow-hidden bg-muted">
          <img
            src={post.cover.url}
            alt={post.cover.alt}
            className="absolute inset-0 w-full h-full object-contain p-6 md:p-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
        </div>

        <div className="px-6 lg:px-8 -mt-16 md:-mt-24 relative z-10">
          <div className="max-w-5xl mx-auto">
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
          <div className="max-w-5xl mx-auto space-y-12">
            {groups.map((g, idx) => {
              if (g.text && g.image) {
                const reverse = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-start"
                  >
                    <div className={reverse ? 'md:order-2' : ''}>
                      <TextBlock section={g.text} />
                    </div>
                    <ImageBlock
                      image={g.image}
                      className={reverse ? 'md:order-1' : ''}
                    />
                  </div>
                );
              }
              if (g.text) {
                return (
                  <div key={idx} className="max-w-3xl">
                    <TextBlock section={g.text} />
                  </div>
                );
              }
              if (g.image) {
                return (
                  <div key={idx} className="max-w-2xl mx-auto">
                    <ImageBlock image={g.image} />
                  </div>
                );
              }
              return null;
            })}

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
