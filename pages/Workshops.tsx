import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { IMAGES } from '../constants';

type WorkshopPhoto = { src: string; alt: string; caption: string };

const PhotoCard: React.FC<{ photo: WorkshopPhoto; index: number }> = ({ photo, index }) => (
  <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
    {/* Image */}
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />

    {/* Permanent light vignette */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

    {/* Badge */}
    <div className="absolute top-4 left-4 z-20">
      <span className="bg-white/95 backdrop-blur-sm text-brand-magentaDark text-xs font-black px-3 py-1.5 rounded-full shadow-lg tracking-wider">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    {/* Hover overlay — slides up from bottom */}
    <div className="absolute inset-0 z-10 flex items-end p-5 bg-gradient-to-t from-brand-magentaDark/85 via-brand-magentaDark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      <p className="text-white font-semibold text-sm leading-snug translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out">
        {photo.caption}
      </p>
    </div>

    {/* Glow ring on hover */}
    <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-brand-magenta/50 transition-all duration-400 pointer-events-none z-20" />
  </div>
);

const Workshops: React.FC = () => {
  const row1 = IMAGES.WORKSHOP_PHOTOS.slice(0, 3);
  const row2 = IMAGES.WORKSHOP_PHOTOS.slice(3, 6);

  return (
    <div className="bg-white">

      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-br from-brand-surface via-white to-brand-surface overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-overline text-brand-magenta mb-4 uppercase tracking-widest text-xs font-bold">In Action</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Our <span className="gradient-text">Workshops</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
            Real girls. <span className="text-brand-magentaDark font-semibold">Real skills.</span> Real impact.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {row1.map((photo, i) => (
              <PhotoCard key={i} photo={photo} index={i} />
            ))}
          </div>

          {/* Thin branded divider */}
          <div className="flex items-center gap-4 my-6 px-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-magenta/30 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-brand-magenta/50" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-magenta/30 to-transparent" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {row2.map((photo, i) => (
              <PhotoCard key={i + 3} photo={photo} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-[#fdf4f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: '200+', label: 'Girls Reached' },
              { value: '5+', label: 'Schools Partnered' },
              { value: '20+', label: 'Sessions Held' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extrabold text-brand-magentaDark tracking-tight">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-magenta to-brand-magentaDark text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want us in your school?</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            We partner with schools and NGOs across India. Reach out to request a workshop or pilot programme in your community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-magentaDark font-bold px-10 py-4 rounded-full hover:bg-brand-surface transition-colors shadow-lg"
            >
              Request a Workshop <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/40 text-white font-bold px-10 py-4 rounded-full transition-all"
            >
              Contact Us <Heart size={16} className="fill-white/30" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Workshops;
