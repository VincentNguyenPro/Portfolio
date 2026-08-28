import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, Send, Download } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { OPPORTUNITY_TYPES, useContactForm } from '@/hooks/useContactForm';

export default function Contact() {
  const { form, setForm, typeError, setTypeError, handleSubmit } = useContactForm();

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: photographerInfo.email,
      href: `mailto:${photographerInfo.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vincentnguyenpro',
      href: photographerInfo.socialLinks.linkedin!,
      external: true,
    },
  ];

  return (
    <>
      <SEOHead
        exactTitle="Contact — Vincent Nguyen Product Manager"
        description={`Contactez Vincent Nguyen, Product Manager - ${photographerInfo.availability}.`}
      />

      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-6 pb-6 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-6"
            >
              <p className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground">
                Contact
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                Discutons de votre projet.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                {photographerInfo.availability}. Pour échanger sur une opportunité Product Manager ou un projet à fort enjeu finance ou SI, contactez-moi directement.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-6 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: icon-only CTAs */}
            <div className="md:hidden grid grid-cols-3 gap-3">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-card py-6 hover:border-foreground/20 transition-colors"
                  >
                    <div className="size-11 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="size-5 text-foreground" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.a>
                );
              })}
              <motion.a
                href="/Vincent-Nguyen-CV.pdf"
                download="Vincent-Nguyen-CV.pdf"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contactItems.length * 0.05 }}
                className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-card py-6 hover:border-foreground/20 transition-colors"
              >
                <div className="size-11 rounded-full bg-muted flex items-center justify-center">
                  <Download className="size-5 text-foreground" />
                </div>
                <span className="text-sm font-medium">CV</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (contactItems.length + 1) * 0.05 }}
              className="md:hidden mt-3 flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-foreground">Disponible immédiatement</span>
            </motion.div>

            {/* Desktop: full cards with address/label */}
            <div className="hidden md:grid sm:grid-cols-2 gap-4">
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
                      <p className="text-lg md:text-xl font-medium tracking-tight break-words">{item.value}</p>
                    </div>
                  </>
                );

                const className =
                  'group block min-w-0 rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-md hover:border-foreground/20 transition-all';

                return (
                  <motion.div
                    key={item.label}
                    className="min-w-0"
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
          </div>

          <div className="hidden md:flex max-w-7xl mx-auto mt-12 flex-col items-start gap-3">
            <p className="text-sm text-muted-foreground">
              Préférez-vous consulter mon CV ?
            </p>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/Vincent-Nguyen-CV.pdf" download="Vincent-Nguyen-CV.pdf">
                <Download className="size-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block max-w-7xl mx-auto mt-12 rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Formulaire
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Écrivez-moi
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  required
                  placeholder="Ex. Dupont"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  required
                  placeholder="Ex. Marie"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="marie.dupont@exemple.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type d'opportunité</Label>
              <Select
                value={form.type}
                onValueChange={(v) => {
                  setForm({ ...form, type: v });
                  setTypeError(false);
                }}
              >
                <SelectTrigger
                  id="type"
                  aria-invalid={typeError}
                  aria-describedby={typeError ? 'type-error' : undefined}
                  className={typeError ? 'border-destructive' : undefined}
                >
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  {OPPORTUNITY_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {typeError && (
                <p id="type-error" className="text-sm text-destructive">
                  Merci de sélectionner un type d'opportunité.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Comment puis-je vous aider ?</Label>
              <Textarea
                id="message"
                required
                rows={6}
                placeholder="Décrivez votre projet, contexte, calendrier…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" size="lg" className="gap-2 rounded-full">
                <Send className="size-4" />
                Envoyer
              </Button>
            </div>
          </motion.form>
        </section>
      </div>
    </>
  );
}
