import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Smartphone, Globe, ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';
import BrandLogo from './BrandLogo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Why ShaktiPath', path: '/why-shaktipath' },
    { name: 'Who We Are', path: '/about' },
    { 
      name: 'Our Work', 
      path: '/programs',
      dropdown: [
        { name: 'Our Curriculum', path: '/curriculum' },
        { name: 'Our Workshops', path: '/workshops' },
        { name: 'Our AI Native App', path: '/app' }
      ]
    },
    { name: 'Impact', path: '/impact' },
    { name: 'App', path: '/app', highlight: true },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-surface">
      {/* Top Banner - Soft Violet - Scaled Up */}
      <div className="bg-brand-magenta/10 text-brand-magentaDark text-sm py-3 px-4 text-center border-b border-brand-magenta/10">
        <span className="font-medium">Empowering 10,000+ girls in Maharashtra. </span>
        <Link to="/get-involved" className="underline font-bold hover:text-brand-magenta ml-1">
          Join the movement
        </Link>
      </div>

      {/* Navigation - Scaled Up Height (h-32) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            
            {/* Left Column: Logo - Wrapped to push to far left */}
            <div className="flex-1 flex justify-start items-center min-w-0">
              <Link to="/" className="flex items-center group py-4 shrink-0">
                <BrandLogo className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              </Link>
            </div>

            {/* Center Column: Desktop Menu - Centered by sibling flex-1s */}
            <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12 shrink-0">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-xl font-bold transition-colors duration-200 whitespace-nowrap flex items-center gap-1 ${
                      link.highlight 
                        ? 'text-brand-magenta flex items-center gap-2 bg-brand-magenta/5 px-6 py-3 rounded-full' 
                        : 'text-gray-800 hover:text-brand-magenta'
                    } ${location.pathname === link.path ? 'text-brand-magenta' : ''}`}
                  >
                    {link.highlight && <Smartphone size={24} />}
                    {link.name}
                    {link.dropdown && <ChevronDown size={16} className="mt-1" />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-6 py-4 text-lg text-gray-700 hover:bg-brand-magenta/5 hover:text-brand-magenta font-medium transition-colors border-b last:border-0 border-gray-50"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right Column: Desktop Actions - Pushed to far right */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-8 min-w-0">
              
              <Link
                to="/get-involved"
                className="bg-brand-magenta hover:bg-brand-magentaLight text-white px-6 py-2.5 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Get Involved</span>
                <Heart size={20} className="fill-current text-brand-rose" />
              </Link>
            </div>

            {/* Mobile Menu Button - Shown only on mobile */}
            <div className="flex md:hidden flex-1 justify-end">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-magenta focus:outline-none bg-brand-magenta/5 p-2 rounded-lg"
                >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Scaled Up Items */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl rounded-b-3xl max-h-[80vh] overflow-y-auto">
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-5 py-4 rounded-2xl text-xl font-bold transition-colors ${
                      link.highlight ? 'text-brand-magenta bg-brand-magenta/5' : 'text-gray-800 hover:text-brand-magenta hover:bg-brand-magenta/5'
                    }`}
                    onClick={() => !link.dropdown && setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3 justify-between">
                       <div className="flex items-center gap-3">
                         {link.highlight && <Smartphone size={24} />}
                         {link.name}
                       </div>
                       {link.dropdown && <ChevronDown size={20} />}
                    </div>
                  </Link>
                  {link.dropdown && (
                    <div className="pl-10 pr-5 pb-2 space-y-1">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block py-3 text-lg text-gray-600 hover:text-brand-magenta font-medium border-b border-gray-50 last:border-0"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100">
                 <Link
                  to="/get-involved"
                  className="block w-full text-center bg-brand-magenta text-white px-6 py-4 rounded-2xl text-xl font-bold shadow-md"
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

      {/* Footer - Calming Gradient */}
      <footer className="bg-gradient-to-br from-brand-magentaDark to-brand-magenta text-white pt-20 pb-10 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Soft Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-magentaLight opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6 h-12">
                 {/* Reusing BrandLogo for Footer but slightly smaller */}
                 <BrandLogo className="h-full w-auto" />
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed mb-8 opacity-90">
                Building capability, not dependency. Empowering girls through digital skills, AI literacy, and mentorship.
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-brand-magentaDark transition-colors cursor-pointer flex items-center justify-center border border-white/10">
                    <span className="text-xs font-bold">In</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Discover</h4>
              <ul className="space-y-3 text-sm text-cyan-100">
                <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">Who We Are</Link></li>
                <li><Link to="/programs" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Work</Link></li>
                <li><Link to="/impact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Impact & Data</Link></li>
                <li><Link to="/app" className="hover:text-white hover:translate-x-1 transition-all inline-block">Mobile App</Link></li>
                <li><Link to="/stories" className="hover:text-white hover:translate-x-1 transition-all inline-block">Success Stories</Link></li>
              </ul>
            </div>

            {/* Take Action */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Take Action</h4>
              <ul className="space-y-3 text-sm text-cyan-100">
                <li><Link to="/get-involved" className="hover:text-white hover:translate-x-1 transition-all inline-block">Volunteer</Link></li>
                <li><Link to="/get-involved" className="hover:text-white hover:translate-x-1 transition-all inline-block">Become a Mentor</Link></li>
                <li><Link to="/get-involved" className="hover:text-white hover:translate-x-1 transition-all inline-block">Partner with Us</Link></li>
                <li><Link to="/get-involved" className="hover:text-white hover:translate-x-1 transition-all inline-block">Donate / Sponsor</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
              <p className="text-xs text-cyan-100 mb-4 opacity-80">Get monthly stories and progress reports. No spam.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-brand-magentaLight focus:bg-white/10 placeholder-cyan-300/50 transition-colors"
                />
                <button type="button" className="bg-brand-magentaLight text-brand-magentaDark hover:bg-white px-5 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cyan-200">
            <p>&copy; {new Date().getFullYear()} ShaktiPath Initiative. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;