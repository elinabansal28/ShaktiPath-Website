import React, { useState } from 'react';
import { CheckCircle, Shield, Layout, Book, MessageCircle, Heart, Lock } from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup';
import { FORMSPREE_URL, IMAGES } from '../constants';

const AppPage: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [waitlistDone, setWaitlistDone] = useState(false);
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  const [pilotForm, setPilotForm] = useState({ org: '', district: '', students: '' });
  const [pilotErrors, setPilotErrors] = useState<Record<string, string>>({});
  const [pilotDone, setPilotDone] = useState(false);
  const [pilotSubmitting, setPilotSubmitting] = useState(false);
  const [pilotSubmitError, setPilotSubmitError] = useState('');

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setEmailError('Email is required.'); return; }
    if (!validateEmail(email)) { setEmailError('Please enter a valid email address.'); return; }
    setWaitlistSubmitting(true);
    setWaitlistError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'App Waitlist Sign-up – ShaktiPath', email }),
      });
      if (!res.ok) throw new Error();
      setWaitlistDone(true);
    } catch {
      setWaitlistError('Something went wrong. Please try again.');
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  const handlePilotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!pilotForm.org.trim()) errs.org = 'Organisation name is required.';
    if (!pilotForm.district.trim()) errs.district = 'District is required.';
    if (!pilotForm.students.trim()) errs.students = 'Estimated student count is required.';
    if (Object.keys(errs).length > 0) { setPilotErrors(errs); return; }
    setPilotSubmitting(true);
    setPilotSubmitError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Pilot Request – ${pilotForm.org}`,
          organisation: pilotForm.org,
          district: pilotForm.district,
          estimated_students: pilotForm.students,
        }),
      });
      if (!res.ok) throw new Error();
      setPilotDone(true);
    } catch {
      setPilotSubmitError('Something went wrong. Please try again.');
    } finally {
      setPilotSubmitting(false);
    }
  };

  const inputClass = (err?: string) =>
    `w-full px-4 py-2 rounded-lg border focus:border-brand-magenta outline-none text-sm ${err ? 'border-red-400' : 'border-gray-200'}`;

  // App screenshots — first 5 only (Settings screen excluded from showcase)
  const screens = IMAGES.APP_SCREENSHOTS.slice(0, 5).map(s => ({
    id: s.label.toLowerCase().replace(/\s+/g, '-'),
    label: s.label,
    caption: s.caption,
    content: (
      <img
        src={s.src}
        alt={s.alt}
        className="w-full h-full object-cover object-top"
      />
    ),
  }));

  return (
    <div className="bg-white">
      {/* App Hero */}
      <section className="bg-[#fdf4f7] py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The ShaktiPath App: <span className="gradient-text">Learning beyond</span> the classroom.
              </h1>
              <p className="text-lg text-gray-500">
                A simple, low-bandwidth companion for girls, parents, and mentors — built for real-life constraints. Connect, learn, and build from anywhere.
              </p>

              {/* Live app CTA */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-magenta/20 max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Live Now</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">The ShaktiPath App is available now</h3>
                <p className="text-sm text-gray-500 mb-4">Open it in your browser and add to your home screen — works on any Android or iPhone, no app store needed.</p>
                <a
                  href="https://shaktipathskills.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-brand-magenta hover:bg-brand-magentaDark text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
                >
                  <CheckCircle size={18} />
                  Open the App →
                </a>
                <p className="text-[10px] text-gray-400 mt-3 text-center">Free to use · Works offline · English, Hindi & Marathi</p>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative flex flex-col items-center">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-magenta to-brand-magentaLight rounded-full blur-2xl opacity-20"></div>
                <PhoneMockup>
                  {screens[0].content}
                </PhoneMockup>
                <div className="mt-4 flex items-center gap-2 bg-brand-magenta/10 border border-brand-magenta/20 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-none"></span>
                  <span className="text-sm font-bold text-brand-magentaDark">ShaktiPath App · Live Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-magentaDark font-bold uppercase tracking-wider text-xs">Features</span>
            <h2 className="text-3xl font-bold mt-2">Built for her reality.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Book className="text-brand-magenta" />, title: "Bite-sized Learning", desc: "5-minute modules that work offline. No heavy video streaming required." },
              { icon: <Layout className="text-brand-magenta" />, title: "AI Tutor", desc: "Safe, guided prompt engineering practice to build AI literacy." },
              { icon: <Heart className="text-brand-magentaDark" />, title: "Mentor Connect", desc: "Structured, goal-oriented check-ins with verified professional mentors." },
              { icon: <Shield className="text-blue-600" />, title: "Safety First", desc: "No open DMs. No public profiles. Everything is moderated." },
              { icon: <CheckCircle className="text-green-600" />, title: "Project Studio", desc: "Step-by-step guides to turn ideas into community projects." },
              { icon: <MessageCircle className="text-gray-600" />, title: "Parent View", desc: "Simple weekly summaries for parents to stay involved." }
            ].map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Showcase */}
      <section className="py-24 bg-[#1a1a2e] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-magentaLight mb-3">Live Screenshots</p>
            <h2 className="text-4xl font-bold text-white">Inside the App</h2>
            <p className="text-white/50 mt-3 text-base">Every screen is from the real, live ShaktiPath app. Hover to explore.</p>
          </div>

          {/* Fan showcase — pt-14 on inner row gives headroom for upward hover lift */}
          <div className="overflow-x-auto pb-6 -mx-4 px-4">
            <div
              className="flex items-end justify-center min-w-max mx-auto"
              style={{ gap: 0, paddingTop: '56px' }}
            >
              {screens.map((screen, idx) => {
                const isHovered = hoveredIdx === idx;
                const isDefaultCenter = hoveredIdx === null && idx === 2;

                let tx = 0;
                if (hoveredIdx !== null && !isHovered) {
                  tx = (idx - hoveredIdx) * 18;
                }
                const ty = isHovered ? -32 : isDefaultCenter ? -10 : 0;
                const sc = isHovered ? 1.05 : 1;
                const op = hoveredIdx !== null && !isHovered ? 0.35 : 1;
                const zi = isHovered ? 20 : isDefaultCenter ? 5 : 3 - Math.abs(idx - 2);

                return (
                  <div
                    key={screen.id}
                    className="flex-none flex flex-col items-center cursor-pointer select-none"
                    style={{
                      marginLeft: idx === 0 ? 0 : '-28px',
                      zIndex: zi,
                      transform: `translateX(${tx}px) translateY(${ty}px) scale(${sc})`,
                      opacity: op,
                      transition: 'transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.28s ease',
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Label — always visible above phone, fixed height keeps baselines aligned */}
                    <div className="h-8 flex items-center justify-center mb-2">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap"
                        style={{
                          background: isHovered ? '#d4185c' : 'rgba(255,255,255,0.12)',
                          color: '#fff',
                          transition: 'background 0.25s ease',
                        }}
                      >
                        {screen.label}
                      </span>
                    </div>

                    {/* Phone frame + glow ring on hover */}
                    <div
                      className="rounded-[1.8rem]"
                      style={{
                        boxShadow: isHovered
                          ? '0 0 0 2px #d4185c, 0 0 55px rgba(212,24,92,0.55)'
                          : isDefaultCenter
                          ? '0 0 0 1px rgba(255,255,255,0.15)'
                          : 'none',
                        transition: 'box-shadow 0.3s ease',
                      }}
                    >
                      <PhoneMockup compact>
                        {screen.content}
                      </PhoneMockup>
                    </div>

                    {/* Caption — always visible, full white */}
                    <p
                      className="text-center text-white leading-snug mt-3"
                      style={{
                        fontSize: '11px',
                        maxWidth: '170px',
                        opacity: hoveredIdx !== null && !isHovered ? 0.3 : 0.9,
                        transition: 'opacity 0.28s ease',
                      }}
                    >
                      {screen.caption}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-white/20 text-xs mt-12 tracking-widest uppercase">
            shaktipathskills.vercel.app · live app
          </p>
        </div>
      </section>

      {/* Safety & Pilot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Safety */}
            <div className="bg-brand-surface p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 text-brand-magentaDark">
                <Lock size={24} />
                <h3 className="text-xl font-bold">Safety & Privacy</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Data minimization: We collect only what is needed.",
                  "Parental consent required for account creation.",
                  "All mentor interactions are logged and moderated.",
                  "No location tracking of minors."
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-brand-magenta mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pilot Request */}
            <div className="bg-brand-surface p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-brand-magentaDark mb-2">For Schools & NGOs</h3>
              <p className="text-sm text-gray-600 mb-6">Want to pilot the ShaktiPath app in your community? We provide device support and training.</p>
              {pilotDone ? (
                <div className="text-center py-6">
                  <CheckCircle className="mx-auto text-green-500 mb-3" size={40} />
                  <p className="font-bold text-gray-900 mb-1">Request received!</p>
                  <p className="text-sm text-gray-600">We'll reach out with pilot details within a week.</p>
                </div>
              ) : (
                <form onSubmit={handlePilotSubmit} noValidate className="space-y-3">
                  <div>
                    <input type="text" placeholder="Organisation Name" value={pilotForm.org}
                      onChange={e => { setPilotForm(p => ({ ...p, org: e.target.value })); setPilotErrors(p => ({ ...p, org: '' })); }}
                      className={inputClass(pilotErrors.org)} />
                    {pilotErrors.org && <p className="text-red-500 text-xs mt-1">{pilotErrors.org}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input type="text" placeholder="District" value={pilotForm.district}
                        onChange={e => { setPilotForm(p => ({ ...p, district: e.target.value })); setPilotErrors(p => ({ ...p, district: '' })); }}
                        className={inputClass(pilotErrors.district)} />
                      {pilotErrors.district && <p className="text-red-500 text-xs mt-1">{pilotErrors.district}</p>}
                    </div>
                    <div>
                      <input type="number" placeholder="Est. Students" value={pilotForm.students}
                        onChange={e => { setPilotForm(p => ({ ...p, students: e.target.value })); setPilotErrors(p => ({ ...p, students: '' })); }}
                        className={inputClass(pilotErrors.students)} />
                      {pilotErrors.students && <p className="text-red-500 text-xs mt-1">{pilotErrors.students}</p>}
                    </div>
                  </div>
                  {pilotSubmitError && <p className="text-red-500 text-sm">{pilotSubmitError}</p>}
                  <button type="submit" disabled={pilotSubmitting}
                    className="w-full bg-brand-magenta text-white font-bold py-3 rounded-lg hover:bg-brand-magentaDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                    {pilotSubmitting ? 'Submitting…' : 'Request Pilot Info'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPage;
