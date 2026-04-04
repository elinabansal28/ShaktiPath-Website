import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Target, ArrowRight, Lightbulb, Users, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants';

const WhyShaktiPath: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-brand-surface overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Column */}
            <div className="w-full md:w-1/2 relative animate-fade-in group">
               {/* Decorative blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-magenta opacity-10 rounded-full blur-3xl -z-10 group-hover:opacity-20 transition-opacity duration-500"></div>
               
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src={IMAGES.WHY_HERO}
                    alt="Indian girl student holding books with a concerned expression"
                    className="w-full h-[400px] md:h-[600px] object-cover filter brightness-90 contrast-110"
                  />
                  {/* Subtle overlay to enhance 'sad/moody' look */}
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
               </div>
            </div>

            {/* Text Column */}
            <div className="w-full md:w-1/2 animate-fade-in-up text-center md:text-left">
              <p className="text-overline text-brand-magenta mb-4">The Problem</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-brand-ink mb-8 tracking-tighter">
                The Hidden Crisis:<br />
                <span className="gradient-text-warm">The Leaky Pipeline</span> of Potential
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                She walks miles to school carrying her books and her dreams. But the path to a career is broken before she even starts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Problem: The Gap */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-6xl mx-auto text-center">
               <h2 className="text-2xl md:text-4xl font-extrabold mb-10 leading-tight text-gray-900 pb-2 max-w-5xl mx-auto">
                  Today, 96% of girls in India attend school. What an amazing achievement! <span className="underline decoration-wavy decoration-brand-magentaDark">But is this enough?</span>
               </h2>
               
               <p className="text-2xl font-bold text-brand-magentaDark mb-16 leading-relaxed max-w-4xl mx-auto">
                  Does every girl enrolled at school complete her education? <br/>Is she equipped with marketable skills to start her career?
               </p>
               
               <div className="max-w-5xl mx-auto">
                  
                  {/* Row 1 */}
                  <div className="py-12 border-t-2 border-dotted border-brand-magenta/40">
                    <div className="grid md:grid-cols-2 gap-12 text-center">
                        <div>
                            <div className="text-6xl md:text-7xl font-bold text-brand-magentaDark mb-4 tracking-tight">12%</div>
                            <p className="text-xl font-bold text-indigo-950 mb-2">High school drop out rate</p>
                            <p className="text-sm font-medium text-indigo-900/70">1 out of every 8 girls is a drop out in high school</p>
                        </div>
                        <div>
                            <div className="text-6xl md:text-7xl font-bold text-brand-magentaDark mb-4 tracking-tight">30%</div>
                            <p className="text-xl font-bold text-indigo-950 mb-2">Less spending on girl’s education</p>
                            <p className="text-sm font-medium text-indigo-900/70">A girl’s education is an “Expense” while a boy’s education is an “Investment”</p>
                        </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="py-12 border-y-2 border-dotted border-brand-magenta/40">
                    <div className="grid md:grid-cols-2 gap-12 text-center">
                        <div>
                            <div className="text-6xl md:text-7xl font-bold text-brand-magentaDark mb-4 tracking-tight">1/3rd</div>
                            <p className="text-xl font-bold text-indigo-950 mb-2">Of girls' time is spent</p>
                            <p className="text-sm font-medium text-indigo-900/70">In fulfilling domestic duties or caring for a family member</p>
                        </div>
                        <div>
                            <div className="text-6xl md:text-7xl font-bold text-brand-magentaDark mb-4 tracking-tight">44%</div>
                            <p className="text-xl font-bold text-indigo-950 mb-2">NEET rate for Indian Women</p>
                            <p className="text-sm font-medium text-indigo-900/70">NEET : (Not in Education, Employment, or Training)</p>
                        </div>
                    </div>
                  </div>

               </div>
           </div>
        </div>
      </section>

      {/* The Shift: Literacy vs Career */}
      <section className="py-20 bg-gradient-to-b from-brand-surface to-cyan-100">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center w-full mx-auto mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:whitespace-nowrap">
                  We're redefining the <span className="text-brand-magentaDark">"North Star"</span> for her
               </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Old Way */}
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-magenta/20 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                        <BookOpen size={24} />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-gray-500">The Old Standard</h3>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex gap-4 text-gray-500 text-lg md:text-xl">
                        <span className="text-red-400 mt-1">✕</span> Focus on passing exams
                     </li>
                     <li className="flex gap-4 text-gray-500 text-lg md:text-xl">
                        <span className="text-red-400 mt-1">✕</span> Learning theory only
                     </li>
                     <li className="flex gap-4 text-gray-500 text-lg md:text-xl">
                        <span className="text-red-400 mt-1">✕</span> "Computer class" is once a week
                     </li>
                     <li className="flex gap-4 text-gray-500 text-lg md:text-xl">
                        <span className="text-red-400 mt-1">✕</span> Outcome: A Certificate
                     </li>
                  </ul>
               </div>

               {/* ShaktiPath Way */}
               <div className="bg-gradient-to-br from-brand-magenta to-brand-magentaDark p-8 rounded-3xl shadow-xl border-2 border-brand-magentaLight transform scale-105 text-white">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Target size={24} className="text-white" />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white">The ShaktiPath Way</h3>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex gap-4 text-white font-medium text-lg md:text-xl">
                        <CheckCircle size={28} className="text-brand-magentaLight shrink-0 mt-0.5" /> Focus on building a portfolio
                     </li>
                     <li className="flex gap-4 text-white font-medium text-lg md:text-xl">
                        <CheckCircle size={28} className="text-brand-magentaLight shrink-0 mt-0.5" /> Learning market-ready skills (AI, Design)
                     </li>
                     <li className="flex gap-4 text-white font-medium text-lg md:text-xl">
                        <CheckCircle size={28} className="text-brand-magentaLight shrink-0 mt-0.5" /> Mobile-first, daily practice
                     </li>
                     <li className="flex gap-4 text-white font-medium text-lg md:text-xl">
                        <CheckCircle size={28} className="text-brand-magentaLight shrink-0 mt-0.5" /> Outcome: A Sustainable Career
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-medium mb-16 text-black">How We Do It</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 {
                   icon: <Lightbulb size={48} strokeWidth={1.5} />,
                   title: "Digital Fluency, Not Just Literacy",
                   text: "We don't teach \"MS Paint\". We teach Prompt Engineering, Canva design, and Digital Banking—tools that have immediate economic value."
                 },
                 {
                   icon: <TrendingUp size={48} strokeWidth={1.5} />,
                   title: "The Side-Hustle Mindset",
                   text: "We encourage girls to start small gigs—designing a flyer for a local shop, managing data for a small business. Earning builds confidence."
                 },
                 {
                   icon: <Users size={48} strokeWidth={1.5} />,
                   title: "Mentorship that Matters",
                   text: "Access is nothing without guidance. We pair girls with women in tech who show them what is possible beyond their village."
                 }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white border border-gray-200 p-10 flex flex-col items-center hover:shadow-lg transition-shadow">
                    <div className="text-brand-magentaDark mb-6">
                       {item.icon}
                    </div>
                    <h3 className="text-2xl text-brand-magentaDark mb-4 font-bold">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto">
                       {item.text}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of the Shift</h2>
            <p className="text-xl text-gray-600 mb-10">
               Help us turn potential into power. It costs less than you think to change a trajectory.
            </p>
            <div className="flex justify-center">
               <Link to="/get-involved" className="bg-brand-magenta text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-magentaDark transition-colors">
                  Join the Movement
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default WhyShaktiPath;