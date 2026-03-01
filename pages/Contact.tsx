import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { FORMSPREE_URL } from '../constants';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Contact Message – ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly at hello@shaktipath.org.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-surface py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">Have questions about workshops, volunteering, or partnerships?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <Mail className="mx-auto text-brand-magenta mb-4" size={32} />
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:hello@shaktipath.org" className="text-sm text-gray-500 hover:text-brand-magenta transition-colors">
              hello@shaktipath.org
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <MapPin className="mx-auto text-brand-magenta mb-4" size={32} />
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-sm text-gray-500">Kalyan, Maharashtra, India</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <Phone className="mx-auto text-brand-teal mb-4" size={32} />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-500">hello@shaktipath.org</p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={56} />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              We've received your message and will get back to you within 2–3 business days.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
              className="bg-brand-magenta text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-magentaDark transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full bg-brand-surface border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full bg-brand-surface border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`w-full bg-brand-surface border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            {submitError && <p className="text-red-500 text-sm mb-4">{submitError}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-magenta text-white font-bold py-4 rounded-lg hover:bg-brand-magentaDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
