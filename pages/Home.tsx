import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Users, Award, BookOpen, ChevronRight, Play, Compass, GraduationCap, Briefcase, Coins, TrendingUp } from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup';
import { IMAGES } from '../constants';



const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Auto-slide effect for Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % IMAGES.HOME_HERO.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {/* Full Width Horizontal Hero Slider */}
      {/* Changed background to more vibrant gradient */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-brand-magenta to-brand-magentaLight overflow-hidden">
        {/* Slider Images & Content */}
        {IMAGES.HOME_HERO.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1000ms] ease-in-out ${index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image */}
            <div className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[6000ms] ${index === currentHeroIndex ? 'scale-105' : 'scale-100'}`}
                 style={{ backgroundImage: `url(${slide.image})` }}>
            </div>
            {/* Soft Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-brand-magentaDark/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-magentaDark/60 via-transparent to-transparent"></div>

            {/* Hero Content Overlay (Now specific to each slide) */}
            <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-8 animate-fade-in-up">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight drop-shadow-sm">
                    <span className="text-white">{slide.titleWhite}</span>
                    <span className="text-brand-yellow">{slide.titleAccent}</span>
                  </h1>
                  <p className="text-3xl text-white max-w-lg leading-relaxed font-medium drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-8 flex gap-3 z-20">
          {IMAGES.HOME_HERO.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentHeroIndex ? 'w-8 bg-brand-teal' : 'w-2 bg-white/60 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>



      {/* The Story / Problem-Solution */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-7xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-6 leading-tight md:whitespace-nowrap">We bridge the gap between <span className="text-brand-magenta decoration-wavy underline decoration-brand-magentaLight/50">Aspiration</span> <span className="text-black">&</span> <span className="text-brand-magenta decoration-wavy underline decoration-brand-magentaLight/50">Access</span>.</h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
              {[
                { icon: <Compass size={32} />, title: "Discover your passion", text: "Map out to relevant skill" },
                { icon: <GraduationCap size={32} />, title: "Build skill", text: "Through learning courses" },
                { icon: <Briefcase size={32} />, title: "Build professional portfolio", text: "Search job prospects" },
                { icon: <Coins size={32} />, title: "Earn while you learn", text: "Self-fund your education" },
                { icon: <TrendingUp size={32} />, title: "Build sustainable career", text: "Stay empowered" }
              ].map((card, idx, arr) => (
                <div key={idx} className="relative flex flex-col items-center group">
                   {/* Connector Line & Arrow (Desktop Only) */}
                   {idx < arr.length - 1 && (
                     <>
                       <div className="hidden lg:block absolute top-8 left-1/2 w-[calc(100%+2rem)] h-1 bg-brand-surface -z-10"></div>
                       <div className="hidden lg:block absolute top-8 -right-5 transform -translate-y-1/2 translate-x-1/2 z-0 text-brand-magentaLight">
                         <ChevronRight size={24} strokeWidth={3} />
                       </div>
                     </>
                   )}

                   {/* Number Circle */}
                   <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-magenta text-brand-magenta flex items-center justify-center text-2xl font-bold shadow-[4px_4px_0px_0px_#22d3ee] mb-6 z-10 relative transition-transform hover:-translate-y-1">
                     {idx + 1}
                   </div>

                   {/* Card */}
                   <div className="w-full p-6 rounded-3xl bg-white border-2 border-brand-magenta shadow-[6px_6px_0px_0px_#22d3ee] hover:shadow-[8px_8px_0px_0px_#22d3ee] hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[280px] relative z-20">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-brand-surface text-brand-magenta transition-transform shrink-0">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-brand-magentaDark leading-tight">{card.title}</h3>
                      <p className="text-base font-medium text-gray-600 leading-relaxed">{card.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* App Integration Section - Softer Gradient */}
      <section className="py-24 bg-gradient-to-br from-brand-magentaLight to-brand-magentaDark text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-3 block">The Tech Layer</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the ShaktiPath App.</h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed font-light">
                     Learning doesn't stop when the workshop ends. Our low-bandwidth mobile companion helps girls practice AI prompts, track projects, and connect with mentors safely from home.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                       "Designed for low-data environments",
                       "Safe, moderated mentor connections",
                       "Offline-first learning modules"
                     ].map(item => (
                       <li key={item} className="flex items-center gap-3">
                          <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={14} /></div>
                          <span className="font-medium text-white">{item}</span>
                       </li>
                     ))}
                  </ul>
                  <Link to="/app" className="inline-flex items-center gap-2 bg-white text-brand-magentaDark hover:bg-brand-surface px-8 py-4 rounded-2xl font-bold transition-colors shadow-lg">
                     Explore the App <ArrowRight size={18} />
                  </Link>
               </div>
               
               <div className="lg:w-1/2 flex justify-center">
                  <div className="transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                    <PhoneMockup label="Student Dashboard">
                      <div className="bg-brand-surface h-full flex flex-col p-5">
                         <div className="flex justify-between items-center mb-6">
                            <div>
                               <p className="text-xs text-gray-400 font-medium">Namaste,</p>
                               <h3 className="text-xl font-bold text-gray-800">Anjali</h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-brand-magenta text-white flex items-center justify-center text-sm font-bold shadow-md">A</div>
                         </div>
                         
                         {/* Progress Card */}
                         <div className="bg-gradient-to-r from-brand-magentaDark to-brand-magenta text-white rounded-2xl p-5 mb-5 shadow-lg shadow-brand-magentaDark/20">
                            <div className="flex justify-between items-start mb-3">
                               <p className="font-bold text-sm">AI Basics Module</p>
                               <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">In Progress</span>
                            </div>
                            <div className="w-full bg-black/10 rounded-full h-1.5 mt-2">
                               <div className="bg-brand-teal w-2/3 h-1.5 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>
                            </div>
                            <p className="text-[10px] mt-3 opacity-90">Lesson 3: Writing Prompts</p>
                         </div>

                         {/* Quick Actions */}
                         <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-white hover:border-brand-magenta/30 flex flex-col items-center py-5 hover:bg-brand-surface transition-colors cursor-pointer">
                               <div className="p-2 bg-brand-magentaDark/5 rounded-full mb-2">
                                 <BookOpen className="text-brand-magentaDark" size={20} />
                               </div>
                               <span className="text-xs font-bold text-gray-600">Lessons</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-white hover:border-brand-magentaLight/30 flex flex-col items-center py-5 hover:bg-brand-surface transition-colors cursor-pointer">
                               <div className="p-2 bg-brand-teal/10 rounded-full mb-2">
                                  <Users className="text-brand-teal" size={20} />
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



      {/* Featured Story */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Soft, Calming Gradient Card */}
            <div className="bg-gradient-to-br from-brand-magentaLight to-brand-magentaDark rounded-[3rem] overflow-hidden text-white shadow-2xl shadow-brand-magenta/20">
               <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
                     <img 
                       src={IMAGES.HOME_FEATURE}
                       alt="Girl presenting her project" 
                       className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-magentaDark/80 to-transparent md:bg-gradient-to-t"></div>
                  </div>
                  <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                     <div className="mb-6">
                        <span className="bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">Transformation Story</span>
                     </div>
                     <h3 className="text-3xl font-bold mb-6 text-white leading-snug">"I used to think computers were for boys. Now I'm building a website for my mother's shop."</h3>
                     <p className="text-white mb-10 italic text-lg flex items-center gap-2">
                       <span className="w-8 h-px bg-brand-magentaLight"></span> Priya, 14, Kalyan
                     </p>
                     <Link to="/stories" className="inline-flex items-center text-white font-bold hover:text-brand-teal transition-colors group">
                        Read more stories <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-brand-magentaDark">Join the movement today.</h2>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">Whether you have 2 hours a month to mentor or resources to sponsor a classroom, your impact starts here.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/get-involved" className="bg-brand-magenta text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-magenta/20 hover:bg-brand-magentaDark transition-colors transform hover:-translate-y-1">
                  Volunteer or Mentor
               </Link>
               <Link to="/get-involved" className="bg-white border-2 border-brand-magenta text-brand-magenta hover:bg-brand-surface px-10 py-4 rounded-full font-bold text-lg shadow-sm transition-all">
                  Partner / Sponsor
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;