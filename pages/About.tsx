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

      {/* Hero */}
      <section className="relative bg-brand-magenta/5 overflow-hidden min-h-[580px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl py-12 md:py-20">
            <p className="text-overline text-brand-magenta mb-3">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Who We Are</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At ShaktiPath, we don't just provide charity; we build capability. We are a team of technologists and mentors driven by a single, urgent mission: empowering girls in underserved communities to reclaim their futures.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/get-involved" className="bg-brand-magenta text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-magentaDark transition-colors shadow-md">
                Join Our Mission
              </Link>
              <Link to="/impact" className="border-2 border-brand-magenta text-brand-magenta px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-magenta hover:text-white transition-colors">
                See Our Impact
              </Link>
            </div>
          </div>
        </div>

        {/* Slanted image panel */}
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full hidden md:block">
          <div className="absolute inset-0 transform -skew-x-12 origin-top-left overflow-hidden z-10">
            <img
              src={IMAGES.ABOUT_TEAM}
              alt="Girls learning together in India"
              className="w-full h-full object-cover transform skew-x-12 scale-125 origin-top-left"
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-overline text-brand-magenta mb-2">The Person Behind the Mission</p>
            <h2 className="text-3xl font-bold text-gray-900">Meet the Founder</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Avatar */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end shrink-0">
              <div className="relative">
                <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-brand-magenta/20 bg-gradient-to-br from-brand-magenta to-brand-magentaDark flex items-center justify-center">
                  {/* Replace this div with <img src="/images/about/elina.jpg" .../> once you have the photo */}
                  <span className="text-7xl font-bold text-white select-none">EB</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-magenta text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg whitespace-nowrap">
                  Founder & CEO
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full md:w-2/3 text-center md:text-left">
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
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-overline text-brand-magenta mb-2">What We Stand For</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-brand-surface rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
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

      {/* Mission — image + text */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={IMAGES.ABOUT_MISSION}
                  alt="Girls mentoring and learning digital skills"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-overline text-brand-magenta mb-3">Why We Exist</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
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

      {/* CTA */}
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
