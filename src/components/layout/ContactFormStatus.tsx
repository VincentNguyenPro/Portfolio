import { CONTACT_EMAIL, type ContactStatus } from '@/hooks/useContactForm';

/** Honeypot input: invisible to people and to screen readers, filled in by naive bots. */
export function HoneypotField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Ne pas remplir
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

/** Result message shown under the submit button once the form was sent or failed. */
export function ContactFormStatus({ status }: { status: ContactStatus }) {
  if (status === 'sent') {
    return (
      <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">
        Merci, votre message a bien été envoyé. Je vous réponds rapidement.
      </p>
    );
  }
  if (status === 'error') {
    return (
      <p role="alert" className="text-sm text-destructive">
        L'envoi a échoué. Réessayez dans un instant, ou écrivez-moi directement à{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    );
  }
  return null;
}
