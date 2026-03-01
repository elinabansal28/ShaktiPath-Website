import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <div className="relative mb-8 select-none">
          <p className="text-[10rem] font-bold leading-none text-brand-magenta/10">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-magenta to-brand-magentaDark flex items-center justify-center shadow-xl">
              <span className="text-4xl">🔍</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-magenta text-white px-8 py-4 rounded-full font-bold hover:bg-brand-magentaDark transition-colors shadow-lg"
          >
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-magenta text-brand-magenta px-8 py-4 rounded-full font-bold hover:bg-brand-magenta/5 transition-colors"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          Still lost?{' '}
          <Link to="/contact" className="text-brand-magenta font-bold hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
