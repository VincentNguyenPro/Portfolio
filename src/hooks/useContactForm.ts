import { useState } from 'react';

// Where messages end up (set in the Web3Forms dashboard) and the address shown if sending fails.
export const CONTACT_EMAIL = 'vincent.nguyen75020@gmail.com';

// Public access key of the Web3Forms service (made for front-end code, not a secret), injected at
// build time from the VITE_WEB3FORMS_KEY repository variable. Without it, the form falls back to
// opening the visitor's mail app with a prefilled message.
const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ?? '';
const ENDPOINT = 'https://api.web3forms.com/submit';

export const OPPORTUNITY_TYPES = ['CDI/CDD', 'Mission freelance', 'Echange informel', 'Autre'];

export type ContactStatus = 'idle' | 'sending' | 'sent' | 'error';

const EMPTY_FORM = {
  nom: '',
  prenom: '',
  email: '',
  type: '',
  message: '',
  website: '', // honeypot: hidden from visitors, bots fill it
};

export function useContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [typeError, setTypeError] = useState(false);
  const [status, setStatus] = useState<ContactStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!form.type) {
      setTypeError(true);
      return;
    }

    // Bots fill the hidden field: pretend it worked and send nothing.
    if (form.website) {
      setForm(EMPTY_FORM);
      setStatus('sent');
      return;
    }

    const subject = `[Contact portfolio] ${form.type} - ${form.prenom} ${form.nom}`;
    const text = `Nom : ${form.nom}
Prénom : ${form.prenom}
Email : ${form.email}
Type d'opportunité : ${form.type}

Message :
${form.message}`;

    if (!ACCESS_KEY) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(text)}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: 'Portfolio',
          name: `${form.prenom} ${form.nom}`,
          email: form.email, // Web3Forms uses it as the reply-to address
          type: form.type,
          message: form.message,
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        setForm(EMPTY_FORM);
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return { form, setForm, typeError, setTypeError, status, handleSubmit };
}
