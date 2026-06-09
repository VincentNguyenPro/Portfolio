import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: photographerInfo.email,
      href: `mailto:${photographerInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: photographerInfo.phone,
      href: `tel:${photographerInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vincentnguyenpro',
      href: photographerInfo.socialLinks.linkedin!,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: photographerInfo.location,
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact"
        description={`Contactez Vincent Nguyen, Product Manager — ${photographerInfo.availability}.`}
      />

      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-3xl"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Contact
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                Discutons de votre projet.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {photographerInfo.availability}. Pour échanger sur une opportunité Product Manager,
                un projet à fort enjeu finance ou SI, ou simplement faire connaissance — le moyen
                le plus rapide est l'email ou LinkedIn.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="size-5 text-foreground" />
                    </div>
                    {item.href && (
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg md:text-xl font-medium tracking-tight">{item.value}</p>
                  </div>
                </>
              );

              const className =
                'group block rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-md hover:border-foreground/20 transition-all';

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-12 rounded-2xl bg-foreground text-background p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-60 mb-3">
              Réponse rapide
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Je réponds généralement sous 24-48h en semaine. Pour les sujets urgents,
              n'hésitez pas à m'appeler directement.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
