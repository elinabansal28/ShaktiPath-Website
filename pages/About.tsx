import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Globe, Users, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

const values = [
  {
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: 'Capability over Charity',
    text: 'We teach girls to earn, not just learn. Every skill we teach has a direct economic application they can use today.',
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: 'Mobile-First Access',
    text: 'Our AI app works on low-bandwidth phones. Geography and infrastructure should never limit a girl\'s opportunity.',
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: 'Mentorship that Mirrors',
    text: 'We pair girls with women who came from similar backgrounds — proof, not just promise, that a career is possible.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">

      {/* ── 1. MEET THE FOUNDER — Hero section ───────────────────────────── */}
      <section className="py-20 bg-[#fdf4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-overline text-brand-magenta mb-2">The Person Behind the Mission</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Meet the <span className="gradient-text">Founder</span></h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-14 max-w-5xl mx-auto">
            {/* Founder Photo */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end shrink-0">
              <div className="relative">
                <div className="w-full max-w-sm md:max-w-none md:w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-brand-magenta/20">
                  <img
                    src={IMAGES.ABOUT_TEAM}
                    alt="Elina Bansal — Founder of ShaktiPath"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-magenta text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg whitespace-nowrap">
                  Founder & CEO
                </div>
                {/* Decorative dot pattern */}
                <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20 -z-10"
                  style={{ backgroundImage: 'radial-gradient(circle, #be185d 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }} />
              </div>
            </div>

            {/* Bio */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-magenta mb-3">Elina Bansal</h3>
              <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                {['Published Author', 'AI Educator', 'Based in Singapore'].map(tag => (
                  <span key={tag} className="bg-brand-magenta/10 text-brand-magentaDark text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Meet Elina Bansal, a dynamic student based in Singapore whose roots and heart remain deeply tied to India. Bridging the gap between two cultures, Elina is a frequent traveler to her home country, a connection that fuels her commitment to social impact. While she thrives on the rigor of solving complex mathematical problems and exploring the depths of literature, her true fulfillment comes from empowering others. A published author on Amazon and a dedicated mentor, Elina has spent significant time teaching AI and Mathematics to younger peers. Now, she is channeling that enthusiasm into ShaktiPath, where she is dedicated to uplifting and creating life-changing opportunities for underrepresented girls across India.
              </p>

              {/* Award badge */}
              <div className="mt-6 inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3">
                <span className="text-2xl">🥈</span>
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">Silver Award</p>
                  <p className="text-sm font-semibold text-gray-800">Global Youth Conference 2026 — AI &amp; Future of Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. RECOGNITION ───────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl border border-brand-magenta/10 shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-0">

              {/* Certificate image */}
              <div className="w-full md:w-1/2 bg-[#fdf4f7] flex items-center justify-center p-3">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-brand-magenta/20 w-full">
                    <img
                      src="/gyc-certificate.png"
                      alt="GYC 2026 Silver Award Certificate — Elina Bansal, ShaktiPath"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-magenta mb-2">Recognition</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Named Top 16 Finalist at <span className="gradient-text">GYC 2026</span></h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Elina was selected as a Top 16 Finalist at the Global Youth Conference 2026 and awarded the <strong>Silver Award</strong> in the <em>AI &amp; Future of Work</em> track — recognising ShaktiPath's impact on digital empowerment for underserved communities in India.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://theglobalyouth.org/gyc-2026-finalists" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-brand-magenta text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-magentaDark transition-colors shadow-md">
                    See Finalists Page
                  </a>
                  <a href="https://theglobalyouth.org/home" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 border-2 border-brand-magenta text-brand-magenta px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-magenta hover:text-white transition-colors">
                    GYC Website
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR STORY ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-magenta/8 via-brand-surface to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text — left */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">Our <span className="gradient-text">Story</span></h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-light">
                At ShaktiPath, we don't just provide charity — we build <span className="gradient-text font-bold">capability</span>. A team of technologists and mentors driven by one urgent mission: empowering girls in underserved communities to reclaim their futures.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link to="/get-involved" className="bg-brand-magenta text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-brand-magentaDark transition-colors shadow-lg shadow-brand-magenta/25">
                  Join Our Mission
                </Link>
                <Link to="/impact" className="border-2 border-brand-magenta text-brand-magenta px-8 py-3.5 rounded-full font-bold text-sm hover:bg-brand-magenta hover:text-white transition-colors">
                  See Our Impact
                </Link>
              </div>
            </div>

            {/* Video — right */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-brand-magenta/20 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/kPd62--P8-w?rel=0&modestbranding=1"
                  title="Elina Bansal — ShaktiPath Initiative"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-xs text-gray-400 mt-3 font-medium">Elina Bansal, Founder — explaining the ShaktiPath mission</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. MISSION ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={IMAGES.ABOUT_MISSION}
                  alt="Girls mentoring and learning digital skills"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Job role badges overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { label: 'Content Creator',      pos: 'top-4 left-4' },
                    { label: 'Video Editor',         pos: 'top-4 right-4' },
                    { label: 'Podcast Manager',      pos: 'top-1/2 left-4 -translate-y-1/2' },
                    { label: 'Social Media Assistant',   pos: 'bottom-4 left-4' },
                    { label: 'UX Writer',            pos: 'bottom-4 right-4' },
                  ].map(({ label, pos }) => (
                    <span key={label} className={`absolute ${pos} bg-white/90 backdrop-blur-sm text-brand-magentaDark text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-overline text-brand-magenta mb-3">Why We Exist</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our <span className="gradient-text">Mission</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We believe that literacy alone is not enough to empower a girl — especially when a girl's education is still considered an "expense" and not an "investment". We're committed to exposing girls in underserved areas to marketable, cashable skills while they're still studying, enabling them to earn via side gigs and self-fund their education — leading to a sustainable career.
              </p>
              <Link to="/why-shaktipath" className="inline-flex items-center gap-2 text-brand-magentaDark font-bold hover:gap-3 transition-all group">
                Why this matters <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VALUES ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-overline text-brand-magenta mb-2">What We Stand For</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#fdf4f7] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow border border-brand-magenta/10">
                <div className="w-14 h-14 rounded-2xl bg-brand-magenta/10 text-brand-magentaDark flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-brand-magenta to-brand-magentaDark text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Be Part of the Story</h2>
          <p className="text-white/80 mb-8 text-lg">
            Whether you mentor, volunteer, or sponsor — every contribution shapes a girl's future.
          </p>
          <Link to="/get-involved" className="inline-block bg-white text-brand-magentaDark font-bold px-10 py-4 rounded-full hover:bg-brand-surface transition-colors shadow-lg">
            Get Involved
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
