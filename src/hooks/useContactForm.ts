import { useState } from 'react';

const RECIPIENT_EMAIL = 'vincent.nguyen75020@gmail.com';

export const OPPORTUNITY_TYPES = ['CDI/CDD', 'Mission freelance', 'Echange informel', 'Autre'];

export function useContactForm() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    type: '',
    message: '',
  });
  const [typeError, setTypeError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.type) {
      setTypeError(true);
      return;
    }
    const subject = `[Contact portfolio] ${form.type} - ${form.prenom} ${form.nom}`;
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

  return { form, setForm, typeError, setTypeError, handleSubmit };
}
