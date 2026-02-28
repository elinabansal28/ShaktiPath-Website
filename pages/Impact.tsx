import React from 'react';

const Impact: React.FC = () => {
  const stats = [
    {
      number: "200+",
      title: "Girls Mentored",
      desc: "in Maharashtra's underserved area."
    },
    {
      number: "5+",
      title: "Hands-On Workshops",
      desc: "Conducted across local schools."
    },
    {
      number: "2",
      title: "Pilot Schools Engaged",
      desc: "with 100% high school girls population."
    },
    {
      number: "20+",
      title: "Teachers Enabled",
      desc: "Equipped with our specialized curriculum and the ShaktiPath mobile app."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Our Journey So Far</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-surface to-white p-8 rounded-[2rem] border border-brand-magenta/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <span className="text-5xl md:text-6xl font-bold text-brand-magentaDark mb-4 group-hover:scale-110 transition-transform">{stat.number}</span>
                <h3 className="text-xl font-bold text-brand-magentaDark mb-3">{stat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
