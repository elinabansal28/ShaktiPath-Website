import React, { useState } from 'react';
import { Heart, Users, Briefcase, DollarSign, CheckCircle } from 'lucide-react';
import { FORMSPREE_URL } from '../constants';

type Tab = 'volunteer' | 'mentor' | 'partner' | 'donate';

const SuccessBanner: React.FC<{ message: string; onReset: () => void }> = ({ message, onReset }) => (
  <div className="text-center py-12">
    <CheckCircle className="mx-auto text-green-500 mb-4" size={56} />
    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
    <p className="text-gray-600 mb-6">{message}</p>
    <button onClick={onReset} className="text-brand-magenta font-bold hover:underline text-sm">
      Submit another response
    </button>
  </div>
);

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('volunteer');

  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', city: '' });
  const [volunteerErrors, setVolunteerErrors] = useState<Record<string, string>>({});
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);
  const [volunteerError, setVolunteerError] = useState('');

  const [mentorForm, setMentorForm] = useState({ name: '', email: '', role: '' });
  const [mentorErrors, setMentorErrors] = useState<Record<string, string>>({});
  const [mentorSubmitted, setMentorSubmitted] = useState(false);
  const [mentorSubmitting, setMentorSubmitting] = useState(false);
  const [mentorError, setMentorError] = useState('');

  const [partnerForm, setPartnerForm] = useState({ org: '', type: '', email: '' });
  const [partnerErrors, setPartnerErrors] = useState<Record<string, string>>({});
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);
  const [partnerError, setPartnerError] = useState('');

  const [selectedAmount, setSelectedAmount] = useState('');

  const tabs = [
    { id: 'volunteer' as Tab, label: 'Volunteer', icon: <Heart size={18} /> },
    { id: 'mentor' as Tab, label: 'Mentor', icon: <Users size={18} /> },
    { id: 'partner' as Tab, label: 'Partner (NGO/School)', icon: <Briefcase size={18} /> },
    { id: 'donate' as Tab, label: 'Donate', icon: <DollarSign size={18} /> },
  ];

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const inputClass = (err?: string) =>
    `w-full p-3 bg-brand-surface rounded-lg border focus:border-brand-magenta outline-none ${err ? 'border-red-400' : 'border-gray-200'}`;

  const postToFormspree = async (data: Record<string, string>) => {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Submission failed');
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!volunteerForm.name.trim()) errs.name = 'Name is required.';
    if (!volunteerForm.email.trim()) errs.email = 'Email is required.';
    else if (!validateEmail(volunteerForm.email)) errs.email = 'Enter a valid email.';
    if (!volunteerForm.city.trim()) errs.city = 'City is required.';
    if (Object.keys(errs).length > 0) { setVolunteerErrors(errs); return; }

    setVolunteerSubmitting(true);
    setVolunteerError('');
    try {
      await postToFormspree({
        _subject: 'Volunteer Application – ShaktiPath',
        name: volunteerForm.name,
        email: volunteerForm.email,
        city: volunteerForm.city,
      });
      setVolunteerSubmitted(true);
    } catch {
      setVolunteerError('Something went wrong. Please try again.');
    } finally {
      setVolunteerSubmitting(false);
    }
  };

  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!mentorForm.name.trim()) errs.name = 'Name is required.';
    if (!mentorForm.email.trim()) errs.email = 'Email is required.';
    else if (!validateEmail(mentorForm.email)) errs.email = 'Enter a valid email.';
    if (!mentorForm.role.trim()) errs.role = 'Current role is required.';
    if (Object.keys(errs).length > 0) { setMentorErrors(errs); return; }

    setMentorSubmitting(true);
    setMentorError('');
    try {
      await postToFormspree({
        _subject: 'Mentor Application – ShaktiPath',
        name: mentorForm.name,
        email: mentorForm.email,
        role: mentorForm.role,
      });
      setMentorSubmitted(true);
    } catch {
      setMentorError('Something went wrong. Please try again.');
    } finally {
      setMentorSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!partnerForm.org.trim()) errs.org = 'Organisation name is required.';
    if (!partnerForm.type) errs.type = 'Please select a type.';
    if (!partnerForm.email.trim()) errs.email = 'Email is required.';
    else if (!validateEmail(partnerForm.email)) errs.email = 'Enter a valid email.';
    if (Object.keys(errs).length > 0) { setPartnerErrors(errs); return; }

    setPartnerSubmitting(true);
    setPartnerError('');
    try {
      await postToFormspree({
        _subject: `Partnership Enquiry – ${partnerForm.org}`,
        organisation: partnerForm.org,
        type: partnerForm.type,
        email: partnerForm.email,
      });
      setPartnerSubmitted(true);
    } catch {
      setPartnerError('Something went wrong. Please try again.');
    } finally {
      setPartnerSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-surface min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Us</h1>
          <p className="text-gray-600">Choose how you want to contribute to the movement.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-magenta text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-brand-surface'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">

          {/* Volunteer Tab */}
          {activeTab === 'volunteer' && (
            <div className="space-y-6 animate-fade-in">
              {volunteerSubmitted ? (
                <SuccessBanner
                  message="We've received your volunteer application. Our team will reach out within 3–5 business days."
                  onReset={() => { setVolunteerSubmitted(false); setVolunteerForm({ name: '', email: '', city: '' }); }}
                />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Become a Volunteer</h2>
                  <p className="text-gray-600">We need passionate individuals to help organise workshops, document stories, and manage logistics.</p>
                  <div className="bg-brand-surface p-4 rounded-xl border border-brand-magenta/20">
                    <h4 className="font-bold text-brand-magentaDark text-sm mb-1">Typical Commitment</h4>
                    <p className="text-sm text-brand-magenta">4–6 hours per month. Weekend availability preferred.</p>
                  </div>
                  <form onSubmit={handleVolunteerSubmit} noValidate className="space-y-4">
                    <div>
                      <input type="text" placeholder="Full Name" value={volunteerForm.name}
                        onChange={e => { setVolunteerForm(p => ({ ...p, name: e.target.value })); setVolunteerErrors(p => ({ ...p, name: '' })); }}
                        className={inputClass(volunteerErrors.name)} />
                      {volunteerErrors.name && <p className="text-red-500 text-xs mt-1">{volunteerErrors.name}</p>}
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" value={volunteerForm.email}
                        onChange={e => { setVolunteerForm(p => ({ ...p, email: e.target.value })); setVolunteerErrors(p => ({ ...p, email: '' })); }}
                        className={inputClass(volunteerErrors.email)} />
                      {volunteerErrors.email && <p className="text-red-500 text-xs mt-1">{volunteerErrors.email}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder="City" value={volunteerForm.city}
                        onChange={e => { setVolunteerForm(p => ({ ...p, city: e.target.value })); setVolunteerErrors(p => ({ ...p, city: '' })); }}
                        className={inputClass(volunteerErrors.city)} />
                      {volunteerErrors.city && <p className="text-red-500 text-xs mt-1">{volunteerErrors.city}</p>}
                    </div>
                    {volunteerError && <p className="text-red-500 text-sm">{volunteerError}</p>}
                    <button type="submit" disabled={volunteerSubmitting}
                      className="bg-brand-magenta text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-magentaDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                      {volunteerSubmitting ? 'Submitting…' : 'Apply to Volunteer'}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

          {/* Mentor Tab */}
          {activeTab === 'mentor' && (
            <div className="space-y-6 animate-fade-in">
              {mentorSubmitted ? (
                <SuccessBanner
                  message="Your mentor application is in! We'll be in touch shortly to discuss next steps."
                  onReset={() => { setMentorSubmitted(false); setMentorForm({ name: '', email: '', role: '' }); }}
                />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Mentor a Girl</h2>
                  <p className="text-gray-600">Share your professional journey. Guide a student through their project. Be the role model you wish you had.</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                    <li>Monthly 1:1 check-ins (virtual/app-based)</li>
                    <li>Review student projects</li>
                    <li>Safe, moderated environment</li>
                  </ul>
                  <form onSubmit={handleMentorSubmit} noValidate className="space-y-4">
                    <div>
                      <input type="text" placeholder="Full Name" value={mentorForm.name}
                        onChange={e => { setMentorForm(p => ({ ...p, name: e.target.value })); setMentorErrors(p => ({ ...p, name: '' })); }}
                        className={inputClass(mentorErrors.name)} />
                      {mentorErrors.name && <p className="text-red-500 text-xs mt-1">{mentorErrors.name}</p>}
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address" value={mentorForm.email}
                        onChange={e => { setMentorForm(p => ({ ...p, email: e.target.value })); setMentorErrors(p => ({ ...p, email: '' })); }}
                        className={inputClass(mentorErrors.email)} />
                      {mentorErrors.email && <p className="text-red-500 text-xs mt-1">{mentorErrors.email}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder="Current Role (e.g. Software Engineer, Pune)" value={mentorForm.role}
                        onChange={e => { setMentorForm(p => ({ ...p, role: e.target.value })); setMentorErrors(p => ({ ...p, role: '' })); }}
                        className={inputClass(mentorErrors.role)} />
                      {mentorErrors.role && <p className="text-red-500 text-xs mt-1">{mentorErrors.role}</p>}
                    </div>
                    {mentorError && <p className="text-red-500 text-sm">{mentorError}</p>}
                    <button type="submit" disabled={mentorSubmitting}
                      className="bg-brand-magenta text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-magentaDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                      {mentorSubmitting ? 'Submitting…' : 'Submit Mentor Application'}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

          {/* Partner Tab */}
          {activeTab === 'partner' && (
            <div className="space-y-6 animate-fade-in">
              {partnerSubmitted ? (
                <SuccessBanner
                  message="Thank you for your interest! Our partnerships team will send you a deck and follow up within a week."
                  onReset={() => { setPartnerSubmitted(false); setPartnerForm({ org: '', type: '', email: '' }); }}
                />
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900">Partner with Us</h2>
                  <p className="text-gray-600">Schools, NGOs, and CSR initiatives: let's bring ShaktiPath to your community.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-bold mb-1">For Schools</h4>
                      <p className="text-xs text-gray-500">We provide curriculum + facilitators.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-bold mb-1">For CSR</h4>
                      <p className="text-xs text-gray-500">Sponsor a cohort with measurable impact reports.</p>
                    </div>
                  </div>
                  <form onSubmit={handlePartnerSubmit} noValidate className="space-y-4">
                    <div>
                      <input type="text" placeholder="Organisation Name" value={partnerForm.org}
                        onChange={e => { setPartnerForm(p => ({ ...p, org: e.target.value })); setPartnerErrors(p => ({ ...p, org: '' })); }}
                        className={inputClass(partnerErrors.org)} />
                      {partnerErrors.org && <p className="text-red-500 text-xs mt-1">{partnerErrors.org}</p>}
                    </div>
                    <div>
                      <select value={partnerForm.type}
                        onChange={e => { setPartnerForm(p => ({ ...p, type: e.target.value })); setPartnerErrors(p => ({ ...p, type: '' })); }}
                        className={inputClass(partnerErrors.type)}>
                        <option value="">Select Organisation Type</option>
                        <option>School</option>
                        <option>NGO</option>
                        <option>Corporate / CSR</option>
                        <option>Government Body</option>
                        <option>Other</option>
                      </select>
                      {partnerErrors.type && <p className="text-red-500 text-xs mt-1">{partnerErrors.type}</p>}
                    </div>
                    <div>
                      <input type="email" placeholder="Contact Email" value={partnerForm.email}
                        onChange={e => { setPartnerForm(p => ({ ...p, email: e.target.value })); setPartnerErrors(p => ({ ...p, email: '' })); }}
                        className={inputClass(partnerErrors.email)} />
                      {partnerErrors.email && <p className="text-red-500 text-xs mt-1">{partnerErrors.email}</p>}
                    </div>
                    {partnerError && <p className="text-red-500 text-sm">{partnerError}</p>}
                    <button type="submit" disabled={partnerSubmitting}
                      className="bg-brand-teal text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed">
                      {partnerSubmitting ? 'Submitting…' : 'Request Partnership Deck'}
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

          {/* Donate Tab */}
          {activeTab === 'donate' && (
            <div className="space-y-6 animate-fade-in text-center">
              <h2 className="text-2xl font-bold text-gray-900">Fuel the Mission</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Your contribution goes directly to device procurement, workshop materials, and facilitator training.
              </p>
              <div className="flex flex-wrap justify-center gap-4 my-8">
                {['₹500', '₹2,000', '₹10,000'].map(amt => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`border-2 font-bold text-xl px-8 py-4 rounded-xl transition-colors ${
                      selectedAmount === amt
                        ? 'bg-brand-magenta text-white border-brand-magenta'
                        : 'border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              {selectedAmount && (
                <div className="bg-brand-surface rounded-2xl p-6 max-w-sm mx-auto">
                  <p className="text-brand-magentaDark font-bold mb-4">You selected: {selectedAmount}</p>
                  <a
                    href={`mailto:hello@shaktipath.org?subject=Donation%20Enquiry%20%E2%80%93%20${encodeURIComponent(selectedAmount)}&body=Hi%2C%20I%20would%20like%20to%20donate%20${encodeURIComponent(selectedAmount)}%20to%20ShaktiPath.%20Please%20share%20payment%20details.`}
                    className="block w-full bg-brand-magenta text-white font-bold py-3 rounded-lg hover:bg-brand-magentaDark transition-colors"
                  >
                    Proceed to Donate
                  </a>
                </div>
              )}
              <p className="text-xs text-gray-400 mt-4">
                To enquire about 80G tax exemption eligibility, email{' '}
                <a href="mailto:hello@shaktipath.org" className="text-brand-magenta hover:underline">
                  hello@shaktipath.org
                </a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
