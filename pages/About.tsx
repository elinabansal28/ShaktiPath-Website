import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-magenta/5 overflow-hidden min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-xl py-12 md:py-20">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Who We Are</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                 At ShaktiPath, we don’t just provide charity; we build capability. We are a team of technologists and mentors driven by a single, urgent mission: empowering girls in underserved communities to reclaim their futures.
              </p>
           </div>
        </div>
        
        {/* Slanted Image Section */}
        <div className="absolute top-0 right-0 w-full md:w-[55%] h-full hidden md:block">
           <div className="absolute inset-0 transform -skew-x-12 origin-top-left overflow-hidden z-10">
              <img 
                src="https://images.unsplash.com/photo-1529209074137-c6bce7188f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Girls walking together in India" 
                className="w-full h-full object-cover transform skew-x-12 scale-125 origin-top-left" 
              />
           </div>
        </div>
      </section>

      {/* Team Profile */}
      <section className="py-20 bg-brand-surface">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
               {/* Founder Avatar */}
               <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-64 h-64 bg-gradient-to-br from-brand-magenta to-brand-magentaDark rounded-2xl flex items-center justify-center shadow-xl">
                     <span className="text-7xl font-bold text-white select-none">EB</span>
                  </div>
               </div>
               
               {/* Bio Text */}
               <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-brand-magenta mb-4">Elina Bansal</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                     Meet Elina Bansal, a dynamic student based in Singapore whose roots and heart remain deeply tied to India. Bridging the gap between two cultures, Elina is a frequent traveler to her home country, a connection that fuels her commitment to social impact. While she thrives on the rigor of solving complex mathematical problems and exploring the depths of literature, her true fulfillment comes from empowering others. A published author on Amazon and a dedicated mentor, Elina has spent significant time teaching AI and Mathematics to younger peers. Now, she is channeling that enthusiasm into ShaktiPath, where she is dedicated to uplifting and creating life-changing opportunities for underrepresented girls across India.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-brand-surfaceAlt">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-5xl font-bold mb-8 text-black">Our Mission</h2>
            <p className="text-xl text-brand-magenta leading-relaxed">
               We believe that literacy alone is not enough to empower a girl - especially when girl's education is still considered as an "expense" and not an "Investment". We're committed to exposing the girls in underserved areas to marketable, cashable skills building while they're studying, enabling them to earn via side gigs and self fund their education leading to a sustainable career trajectory.
            </p>
         </div>
      </section>
    </div>
  );
};

export default About;