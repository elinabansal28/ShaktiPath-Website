import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Shield, Download, Layout, Book, MessageCircle, Heart, Lock } from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup';
import { IMAGES } from '../constants';

const AppPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const screens = [
    {
      id: 'home',
      label: 'Home Dashboard',
      content: (
        <div className="flex flex-col h-full bg-brand-surface p-4 font-sans">
          <div className="flex justify-between items-center mb-6">
             <div className="font-bold text-lg text-gray-800">Namaste, Priya</div>
             {/* Logo was saffron(white), changed to magenta for contrast */}
             <div className="w-8 h-8 bg-brand-magenta text-white rounded-full flex items-center justify-center font-bold">P</div>
          </div>
          <div className="mb-4">
            <h4 className="text-xs uppercase text-gray-500 font-bold mb-2">Your Path This Week</h4>
            {/* Cards changed to purple/magenta borders instead of saffron/white */}
            <div className="bg-white p-3 rounded-xl shadow-sm border-l-4 border-brand-magenta mb-2">
               <div className="flex justify-between text-xs font-bold mb-1">
                  <span>AI Basics</span>
                  <span className="text-brand-magenta">60%</span>
               </div>
               <p className="text-[10px] text-gray-500">Next: Understanding Bias</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border-l-4 border-brand-magentaLight">
               <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Project Studio</span>
                  <span className="text-brand-magenta">Active</span>
               </div>
               <p className="text-[10px] text-gray-500">Draft your poster idea</p>
            </div>
          </div>
          <div className="bg-brand-surface p-3 rounded-xl mt-auto">
             <p className="text-[10px] font-bold text-brand-magentaDark flex items-center gap-1"><CheckCircle size={10} /> Offline Mode Ready</p>
          </div>
        </div>
      )
    },
    {
      id: 'ai',
      label: 'AI Helper',
      content: (
        <div className="flex flex-col h-full bg-white font-sans">
          <div className="bg-brand-magenta p-4 text-white">
             <h3 className="font-bold text-sm flex items-center gap-2"><Layout size={14} /> AI Tutor</h3>
          </div>
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
             <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none text-[10px] text-gray-700">
                   How can I help you learn today?
                </div>
             </div>
             <div className="flex gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full bg-brand-surface flex-shrink-0"></div>
                <div className="bg-brand-surface p-2 rounded-lg rounded-tr-none text-[10px] text-gray-800">
                   Explain "Algorithm" in simple Marathi.
                </div>
             </div>
             <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-magenta flex-shrink-0"></div>
                <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none text-[10px] text-gray-700">
                   Sure! An algorithm is like a recipe... (Marathi translation placeholder)
                </div>
             </div>
          </div>
          <div className="p-3 border-t">
             <div className="bg-gray-50 text-gray-400 text-xs p-2 rounded-full text-center">Type your question...</div>
          </div>
        </div>
      )
    },
    {
      id: 'mentor',
      label: 'Mentor Connect',
      content: (
         <div className="flex flex-col h-full bg-brand-surface p-4 font-sans">
            <h3 className="font-bold text-gray-800 mb-4">Your Mentor</h3>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center mb-4">
               <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
               <h4 className="font-bold text-sm">Sarah D.</h4>
               <p className="text-[10px] text-gray-500">Software Engineer, Pune</p>
            </div>
            <div className="space-y-2">
               <div className="bg-white p-3 rounded-lg border border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium">Next Call</span>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded">Sat, 4PM</span>
               </div>
               <div className="bg-white p-3 rounded-lg border border-gray-100">
                  <p className="text-xs font-bold mb-1">Topic:</p>
                  <p className="text-[10px] text-gray-600">Reviewing your website project ideas.</p>
               </div>
            </div>
         </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* App Hero */}
      <section className="bg-brand-surface py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                 <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    The ShaktiPath App: Learning beyond the classroom.
                 </h1>
                 <p className="text-lg text-gray-600">
                    A simple, low-bandwidth companion for girls, parents, and mentors—built for real-life constraints. Connect, learn, and build from anywhere.
                 </p>
                 
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 max-w-md">
                    <h3 className="font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                    <p className="text-sm text-gray-500 mb-4">We are currently piloting with select schools. Sign up for updates.</p>
                    <form className="flex gap-2">
                       <input 
                         type="email" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Enter email address" 
                         className="flex-1 bg-brand-surface border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-magenta"
                       />
                       <button type="button" className="bg-brand-magenta text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-magentaDark transition-colors">
                          Join
                       </button>
                    </form>
                    <p className="text-[10px] text-gray-400 mt-2">No spam. We promise.</p>
                 </div>
                 
                 <div className="flex gap-4 pt-2">
                    <button className="flex items-center gap-2 text-gray-400 border border-gray-200 px-4 py-2 rounded-lg cursor-not-allowed">
                       <Download size={16} /> App Store
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 border border-gray-200 px-4 py-2 rounded-lg cursor-not-allowed">
                       <Download size={16} /> Play Store
                    </button>
                    <span className="text-xs text-brand-magentaDark font-bold self-center bg-brand-magenta/10 px-2 py-1 rounded">Coming Soon</span>
                 </div>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                 <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-magenta to-brand-magentaLight rounded-full blur-2xl opacity-20"></div>
                    <PhoneMockup label="Learning Path Interface">
                       {screens[0].content}
                    </PhoneMockup>
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
      <section className="py-20 bg-gradient-to-br from-brand-magentaLight to-brand-magentaDark text-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">Inside the App</h2>
               <p className="text-cyan-100 mt-2">Clean, accessible, and intuitive.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
               {screens.map(screen => (
                  <div key={screen.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                     <PhoneMockup label={screen.label}>
                        {screen.content}
                     </PhoneMockup>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Safety & Enterprise */}
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
                           <CheckCircle size={16} className="text-brand-magenta mt-0.5" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Pilot Request */}
               <div className="bg-brand-surface p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-magentaDark mb-2">For Schools & NGOs</h3>
                  <p className="text-sm text-gray-600 mb-6">Want to pilot the ShaktiPath app in your community? We provide device support and training.</p>
                  <form className="space-y-3">
                     <input type="text" placeholder="Organization Name" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-magenta outline-none text-sm" />
                     <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="District" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-magenta outline-none text-sm" />
                        <input type="number" placeholder="Est. Students" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-magenta outline-none text-sm" />
                     </div>
                     <button className="w-full bg-brand-magenta text-white font-bold py-3 rounded-lg hover:bg-brand-magentaDark transition-colors">
                        Request Pilot Info
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AppPage;