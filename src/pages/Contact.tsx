import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, Send, Download } from 'lucide-react';
import { photographerInfo, cvFiles } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { staticPageMeta } from '@/data/seo';
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
      <SEOHead {...staticPageMeta['/contact']} />

      <div className="min-h-screen">
        <section className="px-6 lg:px-8 pt-6 pb-6 md:pt-10 md:pb-3 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 md:space-y-2"
            >
              <p className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight uppercase text-muted-foreground">
                Contact
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-tight">
                Discutons de votre projet.
              </h1>
              <p className="text-base md:text-base text-muted-foreground font-light leading-relaxed">
                {photographerInfo.availability}. Pour échanger sur une opportunité Product Manager ou un projet à fort enjeu finance ou SI, contactez-moi directement.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-6 md:py-4">
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
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contactItems.length * 0.05 }}
                className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-card py-4"
              >
                <div className="size-11 rounded-full bg-muted flex items-center justify-center">
                  <Download className="size-5 text-foreground" />
                </div>
                <div className="flex items-center gap-1.5">
                  {cvFiles.map((cv) => (
                    <a
                      key={cv.lang}
                      href={cv.href}
                      download={cv.filename}
                      aria-label={`Télécharger mon CV en ${cv.label}`}
                      className="px-3 py-1.5 rounded-full border border-border text-xs font-semibold hover:bg-muted transition-colors"
                    >
                      {cv.lang}
                    </a>
                  ))}
                </div>
              </motion.div>
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

            {/* Desktop: full cards with address/label, CV as a third tile */}
            <div className="hidden md:grid sm:grid-cols-3 gap-3">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const isEmail = item.label === 'Email';
                const content = (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className={`size-9 rounded-full flex items-center justify-center ${
                          isEmail ? 'bg-blue-100 dark:bg-blue-950/50' : 'bg-muted'
                        }`}
                      >
                        <Icon className={`size-4 ${isEmail ? 'text-blue-600' : 'text-foreground'}`} />
                      </div>
                      {item.href && (
                        <ArrowUpRight
                          className={`size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                            isEmail
                              ? 'text-blue-600/70 group-hover:text-blue-600'
                              : 'text-muted-foreground group-hover:text-foreground'
                          }`}
                        />
                      )}
                    </div>
                    <div className="mt-2">
                      <p
                        className={`text-xs font-semibold tracking-[0.2em] uppercase mb-1 ${
                          isEmail ? 'text-blue-600' : 'text-muted-foreground'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`tracking-tight break-words ${
                          isEmail ? 'text-lg font-semibold' : 'text-base font-medium'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                const className = `group block min-w-0 rounded-2xl border p-3 hover:shadow-md transition-all ${
                  isEmail
                    ? 'border-blue-600/30 bg-blue-50/60 dark:bg-blue-950/20 hover:border-blue-600/50'
                    : 'border-border bg-card hover:border-foreground/20'
                }`;

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

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contactItems.length * 0.05 }}
                className="block min-w-0 rounded-2xl border border-border bg-card p-3"
              >
                <div className="size-9 rounded-full bg-muted flex items-center justify-center">
                  <Download className="size-4 text-foreground" />
                </div>
                <div className="mt-2">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    CV
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {cvFiles.map((cv) => (
                      <a
                        key={cv.lang}
                        href={cv.href}
                        download={cv.filename}
                        className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-sm font-medium hover:bg-muted hover:border-foreground/20 transition-colors"
                      >
                        {cv.label}
                        <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block max-w-2xl mx-auto mt-3 rounded-2xl border border-border bg-card p-4 space-y-2"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                Formulaire
              </p>
              <h2 className="text-xl font-semibold tracking-tight">
                Écrivez-moi
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  required
                  placeholder="Ex. Dupont"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  required
                  placeholder="Ex. Marie"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                />
              </div>
              <div className="space-y-1">
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
              <div className="space-y-1">
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
            </div>

            <div className="space-y-1">
              <Label htmlFor="message">Comment puis-je vous aider ?</Label>
              <Textarea
                id="message"
                required
                rows={2}
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
