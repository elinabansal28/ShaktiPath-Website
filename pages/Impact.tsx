import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, ChevronRight } from 'lucide-react';

function useCountUp(target: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

interface StatCardProps {
  number: number;
  suffix: string;
  title: string;
  desc: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, suffix, title, desc, color }) => {
  const { count, ref } = useCountUp(number);
  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
    >
      <span className={`text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform ${color}`}>
        {count}{suffix}
      </span>
      <h3 className="text-xl font-bold text-brand-magentaDark mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const ProgressBar: React.FC<{ current: number; goal: number }> = ({ current, goal }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const pct = Math.min((current / goal) * 100, 100);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 150);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="bg-white rounded-3xl p-8 shadow-sm border border-brand-magenta/10 mb-12">
      <div className="flex items-center gap-3 mb-2">
        <Target size={22} className="text-brand-magenta" />
        <h3 className="font-bold text-gray-800 text-lg">Progress toward our goal</h3>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mb-3">
        <span>
          <strong className="text-brand-magentaDark text-xl">{current.toLocaleString('en-IN')}</strong> girls reached
        </span>
        <span>Goal: <strong>{goal.toLocaleString('en-IN')}</strong></span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-brand-magenta to-brand-magentaLight transition-all duration-[1500ms] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
        <TrendingUp size={12} /> {pct.toFixed(1)}% of the way there — and growing every week.
      </p>
    </div>
  );
};

const Impact: React.FC = () => {
  const stats: StatCardProps[] = [
    { number: 200, suffix: '+', title: 'Girls Mentored', desc: "In Maharashtra's underserved areas.", color: 'text-brand-magentaDark' },
    { number: 5, suffix: '+', title: 'Hands-On Workshops', desc: 'Conducted across local schools.', color: 'text-brand-teal' },
    { number: 2, suffix: '', title: 'Pilot Schools Engaged', desc: 'With 100% high school girls population.', color: 'text-purple-600' },
    { number: 20, suffix: '+', title: 'Teachers Enabled', desc: 'Equipped with our specialized curriculum and the ShaktiPath mobile app.', color: 'text-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-magentaLight mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Real Numbers. Real Girls.</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Journey</span> So Far</h1>
          <p className="text-white/70 text-lg font-light">
            Every number below represents a girl whose future looks a little brighter.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <ProgressBar current={200} goal={10000} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Story pull-through */}
          <div className="bg-[#fdf4f7] rounded-2xl p-10 border border-brand-magenta/10 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-800 mb-3 leading-snug">
              "I used to think computers were for boys.<br />
              Now I'm building a website for my mother's shop."
            </p>
            <p className="text-brand-magenta font-bold mb-6 italic">— Priya, 14, Kalyan</p>
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 bg-brand-magenta text-white px-8 py-3 rounded-full font-bold hover:bg-brand-magentaDark transition-colors"
            >
              Read all impact stories <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
