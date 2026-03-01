import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full bg-brand-magenta text-white shadow-lg hover:bg-brand-magentaDark hover:-translate-y-1 transition-all flex items-center justify-center"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
