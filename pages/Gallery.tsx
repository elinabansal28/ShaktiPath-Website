import React, { useState } from 'react';
import { X } from 'lucide-react';

type Category = 'All' | 'Workshops' | 'Mentoring' | 'App' | 'Community';

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, 'All'>;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1577896335608-29bd2a839356?q=80&w=800&auto=format&fit=crop',
    alt: 'Girls in a workshop session',
    category: 'Workshops',
    caption: 'AI Basics workshop — Kalyan School, Feb 2025',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    alt: 'Students learning on computers',
    category: 'Workshops',
    caption: 'Hands-on coding session with 40 students',
  },
  {
    src: 'https://images.unsplash.com/photo-1529390003868-6c01d73923f8?q=80&w=800&auto=format&fit=crop',
    alt: 'Girls collaborating on a project',
    category: 'Community',
    caption: 'Teamwork — project presentation day',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    alt: 'Mentor with students',
    category: 'Mentoring',
    caption: 'One-on-one mentor session — Ambernath pilot',
  },
  {
    src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop',
    alt: 'Student using the ShaktiPath app',
    category: 'App',
    caption: 'Testing the ShaktiPath app\'s AI tutor feature',
  },
  {
    src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    alt: 'Group of girls at a workshop',
    category: 'Workshops',
    caption: 'Certificate distribution — Cohort 1 graduation',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    alt: 'Young woman on a laptop',
    category: 'Mentoring',
    caption: 'Remote mentoring pilot — video check-in',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    alt: 'Students working together',
    category: 'Community',
    caption: 'Community study group — student-led initiative',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    alt: 'Girl presenting her project',
    category: 'Community',
    caption: 'Project showcase — Priya presents her mother\'s website',
  },
];

const categories: Category[] = ['All', 'Workshops', 'Mentoring', 'App', 'Community'];

const Gallery: React.FC = () => {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = active === 'All' ? images : images.filter(img => img.category === active);

  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero */}
      <section className="bg-white py-16 px-4 border-b border-gray-100 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-gray-500 text-lg">
            A glimpse into the workshops, mentoring sessions, and community moments that make up ShaktiPath.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[130px] z-30 bg-brand-surface/90 backdrop-blur-sm py-4 px-4 border-b border-white/60">
        <div className="container mx-auto max-w-5xl flex gap-3 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                active === cat
                  ? 'bg-brand-magenta text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-brand-magenta/5 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-white text-sm text-center mt-4 opacity-80">{lightbox.caption}</p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
