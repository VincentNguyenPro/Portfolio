import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, Send, Download } from 'lucide-react';
import { useState } from 'react';
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

const RECIPIENT_EMAIL = 'vincent.nguyen75020@gmail.com';

const OPPORTUNITY_TYPES = [
  'CDI/CDD',
  'Mission freelance',
  'Echange informel',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Contact portfolio] ${form.type || 'Nouveau message'} - ${form.prenom} ${form.nom}`;
    const body = `Nom : ${form.nom}
Prénom : ${form.prenom}
Email : ${form.email}
Type d'opportunité : ${form.type}

Message :
${form.message}`;
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

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
        <section className="px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight uppercase text-muted-foreground">
                Contact
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
                Discutons de votre projet.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {photographerInfo.availability}.
                <br /><br />
                Pour échanger sur une opportunité Product Manager, un projet à fort enjeu finance ou SI, ou simplement faire connaissance - utilisez le formulaire ci-dessous ou l'un des moyens de contact directs.
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

          <div className="max-w-5xl mx-auto mt-12 flex flex-col items-start gap-3">
            <p className="text-sm" style={{ color: '#6b7280' }}>
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
            className="max-w-5xl mx-auto mt-12 rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6"
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
                onValueChange={(v) => setForm({ ...form, type: v })}
              >
                <SelectTrigger id="type">
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
              <Button type="submit" size="lg" className="gap-2">
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
