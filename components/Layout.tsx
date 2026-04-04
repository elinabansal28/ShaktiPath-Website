import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Smartphone, ChevronDown, CheckCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import BackToTop from './BackToTop';
import { FORMSPREE_URL } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  // Global scroll-reveal: observe all .reveal elements on every page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  const navLinks = [
    { name: 'Why ShaktiPath', path: '/why-shaktipath' },
    { name: 'Who We Are', path: '/about' },
    {
      name: 'Our Work',
      path: '/curriculum',
      dropdown: [
        { name: 'Our Curriculum', path: '/curriculum' },
        { name: 'Our Workshops', path: '/workshops' },
        { name: 'Our AI Native App', path: '/app' }
      ]
    },
    { name: 'Impact', path: '/impact' },
    { name: 'App', path: '/app', highlight: true },
  ];

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email.');
      return;
    }
    setNewsletterSubmitting(true);
    setNewsletterError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'Newsletter Sign-up – ShaktiPath', email: newsletterEmail }),
      });
      if (!res.ok) throw new Error();
      setNewsletterDone(true);
    } catch {
      setNewsletterError('Something went wrong. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">

      {/* Top Banner — gradient strip */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-magentaDark to-brand-navy text-white text-sm py-2.5 px-4 text-center">
        <span className="opacity-90">Empowering 10,000+ girls in Maharashtra. </span>
        <Link to="/get-involved" className="font-bold underline underline-offset-2 hover:text-brand-magentaLight ml-1 transition-colors">
          Join the movement →
        </Link>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <div className="flex-1 flex justify-start items-center min-w-0">
              <Link to="/" className="flex items-center group shrink-0">
                <BrandLogo className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center space-x-6 lg:space-x-10 shrink-0">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-base font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 pb-1 border-b-2 ${
                      link.highlight
                        ? 'text-white bg-gradient-to-r from-brand-magenta to-brand-magentaDark px-5 py-2.5 rounded-full border-0 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all'
                        : isActive(link.path)
                          ? 'text-brand-magentaDark border-brand-magenta'
                          : 'text-slate-700 border-transparent hover:text-brand-magentaDark hover:border-brand-magentaLight'
                    }`}
                  >
                    {link.highlight && <Smartphone size={16} />}
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="mt-0.5 opacity-60" />}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="flex items-center gap-2 px-5 py-3.5 text-sm text-slate-600 hover:bg-brand-surface hover:text-brand-magentaDark font-medium transition-colors border-b last:border-0 border-gray-50"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-4 min-w-0 ml-6 pl-6 border-l border-gray-200">
              <Link
                to="/get-involved"
                className="bg-brand-magenta hover:bg-brand-magentaDark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Get Involved</span>
                <Heart size={16} className="fill-brand-rose text-brand-rose" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden flex-1 justify-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-magentaDark focus:outline-none bg-brand-surface p-2 rounded-xl border border-brand-magentaLight/20"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl rounded-b-3xl max-h-[80vh] overflow-y-auto">
            <div className="px-6 pt-4 pb-8 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                      link.highlight
                        ? 'text-white bg-gradient-to-r from-brand-magenta to-brand-magentaDark mt-2'
                        : isActive(link.path)
                          ? 'text-brand-magentaDark bg-brand-surface'
                          : 'text-slate-700 hover:text-brand-magentaDark hover:bg-brand-surface'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3">
                        {link.highlight && <Smartphone size={18} />}
                        {link.name}
                      </div>
                      {link.dropdown && <ChevronDown size={16} className="opacity-40" />}
                    </div>
                  </Link>
                  {link.dropdown && (
                    <div className="pl-8 pr-4 pb-1 space-y-0.5 mt-1">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block py-2.5 px-3 text-sm text-slate-500 hover:text-brand-magentaDark font-medium rounded-lg hover:bg-brand-surface transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  to="/get-involved"
                  className="block w-full text-center bg-brand-ink text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      <BackToTop />

      {/* Footer — deep navy gradient for premium feel */}
      <footer className="bg-gradient-to-br from-brand-navy via-[#0a2540] to-brand-magentaDark text-white pt-12 pb-8 rounded-t-[3rem] mt-16 relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-magenta opacity-10 blur-[120px] rounded-full pointer-events-none" />
        {/* Violet accent orb */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-violet opacity-10 blur-[80px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center mb-4 h-20">
                <BrandLogo className="h-full w-auto" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Building capability, not dependency. Empowering girls through digital skills, AI literacy, and mentorship.
              </p>
              <div className="flex space-x-2.5">
                {[
                  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in' },
                  { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
                  { href: 'https://twitter.com', label: 'Twitter/X', icon: '𝕏' },
                  { href: 'https://youtube.com', label: 'YouTube', icon: '▶' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                     className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-magenta transition-all flex items-center justify-center border border-white/10 text-xs font-bold hover:border-brand-magenta hover:-translate-y-0.5">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Discover */}
            <div>
              <h4 className="text-sm font-bold mb-3 text-brand-magentaLight tracking-widest uppercase">Discover</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {[
                  { label: 'Who We Are', to: '/about' },
                  { label: 'Our Work', to: '/curriculum' },
                  { label: 'Impact & Data', to: '/impact' },
                  { label: 'Impact Stories', to: '/stories' },
                  { label: 'Gallery', to: '/gallery' },
                  { label: 'Mobile App', to: '/app' },
                ].map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-white hover:translate-x-1 transition-all inline-block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Take Action */}
            <div>
              <h4 className="text-sm font-bold mb-3 text-brand-magentaLight tracking-widest uppercase">Take Action</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {[
                  { label: 'Volunteer', to: '/get-involved' },
                  { label: 'Become a Mentor', to: '/get-involved' },
                  { label: 'Partner with Us', to: '/get-involved' },
                  { label: 'Donate / Sponsor', to: '/donate' },
                  { label: 'Events', to: '/events' },
                  { label: 'FAQ', to: '/faq' },
                ].map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-white hover:translate-x-1 transition-all inline-block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold mb-3 text-brand-magentaLight tracking-widest uppercase">Stay Updated</h4>
              <p className="text-xs text-slate-400 mb-4">Monthly impact stories. No spam, ever.</p>
              {newsletterDone ? (
                <div className="flex items-center gap-2 text-brand-magentaLight font-bold">
                  <CheckCircle size={18} />
                  <span className="text-sm">You're subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} noValidate className="flex flex-col gap-3">
                  <div>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={e => { setNewsletterEmail(e.target.value); setNewsletterError(''); }}
                      placeholder="Your email address"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:bg-white/10 placeholder-slate-500 transition-colors ${newsletterError ? 'border-brand-rose' : 'border-white/10 focus:border-brand-magentaLight'}`}
                    />
                    {newsletterError && <p className="text-brand-rose text-xs mt-1">{newsletterError}</p>}
                  </div>
                  <button type="submit" disabled={newsletterSubmitting}
                    className="bg-brand-magenta hover:bg-brand-magentaLight text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed">
                    {newsletterSubmitting ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} ShaktiPath Initiative. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
