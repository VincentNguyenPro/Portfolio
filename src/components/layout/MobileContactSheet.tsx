import { Send } from 'lucide-react';
import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OPPORTUNITY_TYPES, useContactForm } from '@/hooks/useContactForm';

interface MobileContactSheetProps {
  children: ReactNode;
}

export function MobileContactSheet({ children }: MobileContactSheetProps) {
  const { form, setForm, typeError, setTypeError, handleSubmit } = useContactForm();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-3xl max-h-[88vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-border" />
        <SheetTitle className="text-2xl font-semibold tracking-tight">Écrivez-moi</SheetTitle>
        <SheetDescription>
          Remplissez le formulaire, votre application mail s'ouvrira avec le message prérempli.
        </SheetDescription>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="sheet-nom">Nom</Label>
              <Input
                id="sheet-nom"
                required
                placeholder="Ex. Dupont"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sheet-prenom">Prénom</Label>
              <Input
                id="sheet-prenom"
                required
                placeholder="Ex. Marie"
                value={form.prenom}
                onChange={(e) => setForm({ ...form, prenom: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheet-email">Email</Label>
            <Input
              id="sheet-email"
              type="email"
              required
              placeholder="marie.dupont@exemple.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheet-type">Type d'opportunité</Label>
            <Select
              value={form.type}
              onValueChange={(v) => {
                setForm({ ...form, type: v });
                setTypeError(false);
              }}
            >
              <SelectTrigger
                id="sheet-type"
                aria-invalid={typeError}
                aria-describedby={typeError ? 'sheet-type-error' : undefined}
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
              <p id="sheet-type-error" className="text-sm text-destructive">
                Merci de sélectionner un type d'opportunité.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sheet-message">Comment puis-je vous aider ?</Label>
            <Textarea
              id="sheet-message"
              required
              rows={4}
              placeholder="Décrivez votre projet, contexte, calendrier…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <Button type="submit" size="lg" className="w-full gap-2 rounded-full bg-blue-600 hover:bg-blue-700">
            <Send className="size-4" />
            Envoyer
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
