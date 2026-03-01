import { useEffect, useRef } from 'react';

export function useScrollReveal(className: string = 'reveal') {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    el.classList.add(className);
    observer.observe(el);

    return () => observer.disconnect();
  }, [className]);

  return ref;
}
