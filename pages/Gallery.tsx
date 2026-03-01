import React, { useState } from 'react';
import { X } from 'lucide-react';
import { IMAGES } from '../constants';

type Category = 'All' | 'Workshops' | 'Mentoring' | 'App' | 'Community';

type GalleryImage = typeof IMAGES.GALLERY[number];

const categories: Category[] = ['All', 'Workshops', 'Mentoring', 'App', 'Community'];

const Gallery: React.FC = () => {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const images = IMAGES.GALLERY;
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
