import React from 'react';
import { Smartphone, Bot, Rocket, Users, Compass, Check } from 'lucide-react';

const ProgramCard = ({ title, desc, outcomes, icon, duration }: any) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
     <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-brand-surface text-brand-magenta rounded-xl flex items-center justify-center">
           {icon}
        </div>
        <span className="bg-brand-surface text-gray-600 text-xs font-bold px-2 py-1 rounded">{duration}</span>
     </div>
     <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
     <p className="text-gray-600 mb-6">{desc}</p>
     <div className="space-y-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Outcomes</p>
        <ul className="space-y-1">
           {outcomes.map((o: string, i: number) => (
             <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
               <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
               {o}
             </li>
           ))}
        </ul>
     </div>
  </div>
);

const Programs: React.FC = () => {
  const programs = [
    {
       title: "Digital Foundations",
       desc: "Mastering the smartphone as a productivity tool, internet safety, and effective communication.",
       duration: "4 Weeks",
       icon: <Smartphone size={24} />,
       outcomes: ["Safe browsing habits", "Digital banking basics", "Professional messaging"]
    },
    {
       title: "AI Basics for Girls",
       desc: "Demystifying Artificial Intelligence. Learning prompts, ethics, bias, and real-world tools.",
       duration: "6 Weeks",
       icon: <Bot size={24} />,
       outcomes: ["Prompt engineering", "Understanding bias", "Using AI for study help"]
    },
    {
       title: "Digital Marketing with AI",
       desc: "Learn to create content using AI tools, manage social media, and build a personal brand for small businesses.",
       duration: "8 Weeks",
       icon: <Rocket size={24} />,
       outcomes: ["AI Content creation", "Social media strategy", "Basic analytics"]
    },
    {
       title: "Mentorship Circles",
       desc: "Connecting girls with women in tech and leadership for monthly guidance sessions.",
       duration: "Ongoing",
       icon: <Users size={24} />,
       outcomes: ["Career awareness", "Confidence building", "Network creation"]
    },
    {
       title: "Future Pathways",
       desc: "Guidance on scholarships, internships, and vocational paths after school.",
       duration: "2 Weeks",
       icon: <Compass size={24} />,
       outcomes: ["Resume/CV creation", "Scholarship applications", "Interview prep"]
    }
  ];

  return (
    <div className="bg-[#fdf4f7] min-h-screen py-16">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
             <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-magenta mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Our Programs</p>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Curriculum for <span className="gradient-text">Real Impact</span></h1>
             <p className="text-lg text-gray-500">Our programs are modular, practical, and designed for the specific context of semi-urban India.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {programs.map((p, i) => (
                <ProgramCard key={i} {...p} />
             ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-brand-magentaLight to-brand-magentaDark text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-brand-magenta/20">
             <h2 className="text-3xl font-bold mb-4">Request a Workshop for Your School</h2>
             <p className="max-w-2xl mx-auto mb-8 opacity-90">We bring the curriculum, the facilitators, and the devices. You provide the space and the students.</p>
             <button className="bg-white text-brand-magentaDark px-8 py-3 rounded-full font-bold hover:bg-brand-surface transition-colors">
                Contact Program Team
             </button>
          </div>
       </div>
    </div>
  );
};

export default Programs;