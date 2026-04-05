import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Compass, GraduationCap, Briefcase, Coins, TrendingUp, Heart } from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % IMAGES.HOME_HERO.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">

      {/* ── HERO SLIDER ─────────────────────────────────────────────────────── */}
      <section className="relative h-[640px] md:h-[740px] overflow-hidden bg-gray-900">
        {IMAGES.HOME_HERO.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[7000ms] ${index === currentHeroIndex ? 'scale-105' : 'scale-100'}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/28" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

            <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-md" style={{fontFamily: "'Playfair Display', serif"}}>
                  {slide.titleWhite}
                  <span className="text-brand-yellow">{slide.titleAccent}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/85 max-w-lg leading-relaxed font-normal" style={{fontFamily: "'Poppins', sans-serif"}}>
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/get-involved"
                    className="bg-brand-magenta hover:bg-brand-magentaDark text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                  >
                    Get Involved <Heart size={15} className="fill-white/30" />
                  </Link>
                  <Link
                    to="/impact"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-3.5 rounded-full font-bold transition-all text-sm"
                  >
                    See Our Impact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-8 flex gap-2 z-20">
          {IMAGES.HOME_HERO.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1 rounded-full transition-all duration-400 ${idx === currentHeroIndex ? 'w-10 bg-brand-magenta' : 'w-3 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── IMPACT STATS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { value: '200+', label: 'Girls Empowered' },
              { value: '5+',   label: 'Schools Partnered' },
              { value: '20+',  label: 'Workshops Held' },
            ].map((stat) => (
              <div key={stat.label} className="py-10 text-center px-6">
                <p className="text-4xl md:text-5xl font-extrabold text-brand-magentaDark tracking-tight leading-none">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500 mt-2 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / 5-STEP WORKFLOW ────────────────────────────────────────── */}
      <section className="py-24 bg-[#fdf4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-magenta mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              We bridge the gap between{' '}
              <span className="gradient-text">Aspiration</span>
              {' '}&{' '}
              <span className="gradient-text">Access</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: <Compass size={28} />, title: 'Discover your passion', text: 'Map out to relevant skill' },
              { icon: <GraduationCap size={28} />, title: 'Build skill', text: 'Through learning courses' },
              { icon: <Briefcase size={28} />, title: 'Build professional portfolio', text: 'Search job prospects' },
              { icon: <Coins size={28} />, title: 'Earn while you learn', text: 'Self-fund your education' },
              { icon: <TrendingUp size={28} />, title: 'Build sustainable career', text: 'Stay empowered' },
            ].map((card, idx, arr) => (
              <div key={idx} className="relative flex flex-col items-center group">
                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-brand-magenta/20 -z-10" />
                )}
                <div className="w-12 h-12 rounded-full bg-brand-magenta text-white flex items-center justify-center text-base font-extrabold mb-5 z-10 shadow-md group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="w-full bg-white rounded-2xl p-6 flex flex-col min-h-[200px] shadow-sm hover:shadow-md transition-shadow border border-gray-100 group-hover:border-brand-magenta/20">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-magenta/8 text-brand-magenta shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900 leading-snug">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP SECTION ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1a1a2e] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-magentaLight">The Tech Layer</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Meet the ShaktiPath <span className="gradient-text">App.</span></h2>
              <p className="text-white/75 text-lg leading-relaxed font-light">
                Learning doesn't stop when the workshop ends. Our low-bandwidth mobile companion helps girls practice AI prompts, track projects, and connect with mentors safely from home.
              </p>
              <ul className="space-y-3">
                {['Designed for low-data environments', 'Safe, moderated mentor connections', 'Offline-first learning modules'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-magenta shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/app" className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-brand-surface px-7 py-3.5 rounded-full font-bold transition-colors shadow-lg text-sm">
                Explore the App
              </Link>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                <PhoneMockup label="Student Dashboard">
                  <div className="bg-brand-surface h-full flex flex-col p-5">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-xs text-gray-400 font-medium">Namaste,</p>
                        <h3 className="text-xl font-bold text-gray-800">Anjali</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-magenta text-white flex items-center justify-center text-sm font-bold shadow-md">A</div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-magentaDark to-brand-magenta text-white rounded-2xl p-5 mb-5 shadow-lg shadow-brand-magentaDark/20">
                      <div className="flex justify-between items-start mb-3">
                        <p className="font-bold text-sm">AI Basics Module</p>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">In Progress</span>
                      </div>
                      <div className="w-full bg-black/10 rounded-full h-1.5 mt-2">
                        <div className="bg-brand-magentaLight w-2/3 h-1.5 rounded-full shadow-[0_0_10px_rgba(212,24,92,0.4)]" />
                      </div>
                      <p className="text-[10px] mt-3 opacity-90">Lesson 3: Writing Prompts</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-white hover:border-brand-magenta/30 flex flex-col items-center py-5 hover:bg-brand-surface transition-colors cursor-pointer">
                        <div className="p-2 bg-brand-magentaDark/5 rounded-full mb-2">
                          <BookOpen className="text-brand-magentaDark" size={20} />
                        </div>
                        <span className="text-xs font-bold text-gray-600">Lessons</span>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-white hover:border-brand-magentaLight/30 flex flex-col items-center py-5 hover:bg-brand-surface transition-colors cursor-pointer">
                        <div className="p-2 bg-brand-magenta/10 rounded-full mb-2">
                          <Users className="text-brand-magenta" size={20} />
                        </div>
                        <span className="text-xs font-bold text-gray-600">Mentor</span>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-magenta mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Join the Movement</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Every girl deserves a fighting chance.
          </h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Whether you have 2 hours a month to mentor or resources to sponsor a classroom, your impact starts here.
          </p>
          <Link to="/get-involved" className="bg-brand-magenta text-white px-10 py-4 rounded-full font-bold text-sm shadow-lg shadow-brand-magenta/20 hover:bg-brand-magentaDark transition-colors hover:-translate-y-0.5 transform inline-block">
            Volunteer or Mentor
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
