import React, { useState } from 'react';
import { Heart, CheckCircle, Users, BookOpen, Smartphone, Award } from 'lucide-react';
import { FORMSPREE_URL } from '../constants';

interface Tier {
  amount: number;
  label: string;
  icon: React.ReactNode;
  impact: string;
}

const tiers: Tier[] = [
  { amount: 500, label: '₹500', icon: <BookOpen size={24} />, impact: 'Sponsors one girl\'s learning materials for a month' },
  { amount: 1500, label: '₹1,500', icon: <Users size={24} />, impact: 'Funds a full workshop session for 5 girls' },
  { amount: 5000, label: '₹5,000', icon: <Smartphone size={24} />, impact: 'Provides smartphone access to 2 girls for 3 months' },
  { amount: 15000, label: '₹15,000', icon: <Award size={24} />, impact: 'Sponsors an entire cohort of 20 girls for one term' },
];

const Donate: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(1500);
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const amount = custom ? parseInt(custom, 10) : selected;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount < 100) { setError('Please enter a minimum amount of ₹100.'); return; }
    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email.'); return; }
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Donation Interest – ₹${amount} – ${name}`,
          name,
          email,
          amount: `₹${amount}`,
          message: `Donation interest submitted from /donate page.`,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us at hello@shaktipath.org.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-magentaDark to-brand-magenta text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <Heart size={48} className="mx-auto mb-6 fill-white/30" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fund a Future</h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Every rupee you contribute goes directly toward equipping girls with skills,
            mentors, and the technology they need to build independent futures.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Impact Tiers */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Your donation powers</h2>
              <div className="space-y-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.amount}
                    onClick={() => { setSelected(tier.amount); setCustom(''); }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selected === tier.amount && !custom
                        ? 'border-brand-magenta bg-brand-magenta/5 shadow-md'
                        : 'border-gray-200 bg-white hover:border-brand-magenta/40'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      selected === tier.amount && !custom ? 'bg-brand-magenta text-white' : 'bg-brand-surface text-brand-magenta'
                    }`}>
                      {tier.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{tier.label}</p>
                      <p className="text-xs text-gray-500">{tier.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We've received your donation interest of <strong>₹{amount?.toLocaleString('en-IN')}</strong>.
                    Our team will be in touch within 2 business days with payment details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Complete your pledge</h2>

                  {/* Amount display */}
                  <div className="mb-5">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                    <div className="flex gap-3 items-center">
                      <div className="flex-grow bg-brand-surface border-2 border-brand-magenta/30 rounded-xl px-4 py-3 text-2xl font-bold text-brand-magentaDark">
                        ₹{custom || (selected ? selected.toLocaleString('en-IN') : '—')}
                      </div>
                    </div>
                    <input
                      type="number"
                      placeholder="Or enter a custom amount"
                      value={custom}
                      onChange={e => { setCustom(e.target.value); setSelected(null); }}
                      min={100}
                      className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-magenta bg-brand-surface"
                    />
                  </div>

                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-magenta bg-brand-surface"
                      placeholder="Full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-magenta bg-brand-surface"
                      placeholder="you@example.com"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-magenta text-white font-bold py-4 rounded-xl hover:bg-brand-magentaDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Heart size={18} className="fill-white/30" />
                    {submitting ? 'Submitting…' : 'Pledge Donation'}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    We'll reach out with secure payment details. 80G certification in progress.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
