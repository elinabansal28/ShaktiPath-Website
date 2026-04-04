import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';

const stories = [
  {
    name: 'Priya',
    age: 14,
    location: 'Kalyan',
    skill: 'Web Design',
    quote: 'I used to think computers were for boys. Now I\'m building a website for my mother\'s shop.',
    detail: 'Priya joined ShaktiPath\'s first pilot cohort with zero exposure to technology. Within 8 weeks she had designed her mother\'s small business a landing page — and her first online order came in the following week.',
    initials: 'P',
    color: 'from-brand-magenta to-brand-magentaDark',
  },
  {
    name: 'Sarita',
    age: 16,
    location: 'Ambernath',
    skill: 'AI Prompting',
    quote: 'I wrote a prompt that helped my teacher explain photosynthesis better. She asked me to teach the class.',
    detail: 'Sarita discovered AI tools through ShaktiPath\'s AI literacy module. She now runs a study-group in her school where she teaches juniors how to use AI safely for their homework.',
    initials: 'S',
    color: 'from-brand-magenta to-purple-600',
  },
  {
    name: 'Ranjana',
    age: 15,
    location: 'Kalyan',
    skill: 'Freelance Content',
    quote: 'I earned ₹800 writing captions for a local salon. I used it to buy my school books.',
    detail: 'Ranjana\'s family could not always afford school supplies. After ShaktiPath\'s digital-gig module she landed her first freelance content project — and has since earned enough to self-fund her stationery every term.',
    initials: 'R',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Meena',
    age: 17,
    location: 'Ulhasnagar',
    skill: 'Canva & Design',
    quote: 'My poster was chosen for the school notice board. Now the principal asks me to design for events.',
    detail: 'Meena had no art background but picked up Canva within her first ShaktiPath workshop session. She now runs a small design service for local events and is saving for a graphic design certificate.',
    initials: 'M',
    color: 'from-rose-500 to-rose-700',
  },
  {
    name: 'Kavita',
    age: 16,
    location: 'Badlapur',
    skill: 'Digital Literacy',
    quote: 'I taught my mother how to use UPI and now she runs her tiffin orders completely online.',
    detail: 'Kavita\'s impact extended to her whole household. Skills she learned in ShaktiPath\'s digital-literacy module helped her family shift their home-based tiffin business online, doubling their monthly orders.',
    initials: 'K',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Divya',
    age: 15,
    location: 'Kalyan',
    skill: 'Coding Basics',
    quote: 'I fixed a bug in my project and felt like a superhero. I want to become a software engineer.',
    detail: 'Divya had always been told engineering was hard for girls from her background. Her first successful HTML/CSS project in ShaktiPath\'s curriculum flipped that belief — she now mentors younger students in computer lab sessions.',
    initials: 'D',
    color: 'from-green-500 to-emerald-700',
  },
];

const Stories: React.FC = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-magentaDark to-brand-magenta text-white py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 inline-block mb-6">
            Real Girls. Real Change.
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impact Stories</h1>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            Every number in our data represents a girl who decided she was capable of more.
            These are some of their stories — in their own words.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${story.color} p-8 text-white`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">
                    {story.initials}
                  </div>
                  <p className="text-base font-bold leading-relaxed mb-1 italic">"{story.quote}"</p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-gray-900">{story.name}, {story.age}</p>
                      <p className="text-xs text-gray-400">{story.location} · {story.skill}</p>
                    </div>
                    <Heart size={16} className="text-brand-magenta fill-brand-magenta/30" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{story.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-magentaDark mb-4">Want to create the next story?</h2>
          <p className="text-gray-600 mb-8">Whether you volunteer, mentor, or sponsor — you help write the next chapter.</p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-brand-magenta text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-magentaDark transition-colors shadow-lg"
          >
            Get Involved <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Stories;
