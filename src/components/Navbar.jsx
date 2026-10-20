import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import name from '../assets/Name.png';

const navLinks = [
  { title: 'Home', to: '/' },
  { 
    title: 'Tech Solutions', 
    subLinks: [
      { title: 'Web & App Development', to: '/web-app-development' },
      { title: 'Software Development', to: '/software-development' },
      { title: 'Penetration Testing', to: '/penetration-testing' },
      { title: 'Cloud Solutions', to: '/cloud-solutions' },
      { title: 'IT Support', to: '/it-support' },
    ]
  },
  { title: 'Architectural Solutions', to: '/architectural-solutions' },
  { title: 'IT Consultation', to: '/it-consultation' },
  { title: 'Careers', to: '/careers' },
  { title: 'About', to: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll to the top of the page and close menus on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Handle scroll effect for backdrop blur & navbar compression
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `relative px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-300 group flex items-center whitespace-nowrap ${
      isActive ? 'text-[var(--brand-primary,#00f2fe)] font-bold' : 'text-gray-700 hover:text-black'
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md py-1.5 shadow-md shadow-gray-200/50 border-b border-gray-200/60' 
          : 'bg-white py-3 border-b border-gray-100 shadow-sm'
      }`}
    >
      {/* Glow highlight line on scroll */}
      <div 
        className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-12 md:h-14 items-center justify-between gap-2 xl:gap-4">
          
          {/* LOGO SECTION */}
          <Link 
            to="/" 
            onClick={closeMenus} 
            aria-label="Home" 
            className="flex items-center gap-1.5 sm:gap-2 group transition-transform duration-300 hover:scale-[1.01] shrink-0"
          >
            <img 
              src={logo}
              alt="Company Logo" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-all" 
            />
            <img
              src={name}
              alt="Company Motto"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-all"
            />
          </Link>

          {/* DESKTOP NAVIGATION (Visible on xl/lg screens) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.title} className="relative group">
                  <button
                    type="button"
                    className="px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-gray-700 hover:text-black flex items-center gap-1 transition-colors group-hover:text-[var(--brand-primary,#00f2fe)] whitespace-nowrap"
                  >
                    <span>{link.title}</span>
                    <svg 
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-gray-500 group-hover:text-[var(--brand-primary,#00f2fe)]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Tech Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-1.5 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-56">
                    <div className="rounded-xl border border-gray-100 bg-white/95 backdrop-blur-xl p-1.5 shadow-xl shadow-gray-900/10 ring-1 ring-black/5 overflow-hidden">
                      {/* Top tech subtle accent line */}
                      <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 rounded-full" />
                      
                      {link.subLinks.map((sub) => (
                        <NavLink
                          key={sub.to}
                          to={sub.to}
                          className={({ isActive }) =>
                            `group/item flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                              isActive
                                ? 'bg-cyan-50 text-[var(--brand-primary,#00f2fe)] font-bold'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span>{sub.title}</span>
                              <span className={`text-cyan-500 transition-all duration-200 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0'}`}>
                                →
                              </span>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      <span>{link.title}</span>
                      {/* Active indicator dot & hover underline */}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[var(--brand-primary,#00f2fe)] transition-all duration-300 rounded-full ${isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'}`} />
                    </>
                  )}
                </NavLink>
              )
            )}

            {/* Glowing CTA Button */}
            <NavLink
              to="/contact"
              className="relative ml-2 group overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-white shadow-sm shadow-cyan-500/20 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 shrink-0"
            >
              {/* Shine effect animation */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-1">
                <span>Contact Us</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </NavLink>
          </div>

          {/* MOBILE TOGGLE HAMBURGER BUTTON */}
          <button
            type="button"
            className="lg:hidden relative p-2 rounded-lg text-gray-700 hover:bg-gray-100 active:scale-95 transition-all focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-0.5 -translate-y-0.5' : ''}`} />
              <span className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-0.5 translate-y-0.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 bg-white/95 backdrop-blur-xl ${
          isOpen ? 'max-h-[85vh] opacity-100 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-3 pt-2 pb-5 space-y-1.5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.title} className="rounded-lg border border-gray-100/80 bg-gray-50/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full px-3.5 py-2.5 text-left text-xs font-bold text-gray-800 flex items-center justify-between transition-colors hover:bg-gray-100/60"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {link.title}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-cyan-500' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sublinks Accordion */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden bg-white/80 ${
                    servicesOpen ? 'max-h-80 border-t border-gray-100 p-1.5' : 'max-h-0'
                  }`}
                >
                  {link.subLinks.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      onClick={closeMenus}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-xs font-semibold transition-all ${
                          isActive 
                            ? 'bg-cyan-50 text-[var(--brand-primary,#00f2fe)] font-bold' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                        }`
                      }
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenus}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-[var(--brand-primary,#00f2fe)] border-l-4 border-cyan-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`
                }
              >
                {link.title}
              </NavLink>
            )
          )}

          {/* Mobile CTA Contact Button */}
          <NavLink
            to="/contact"
            onClick={closeMenus}
            className="mt-3 block w-full rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-3.5 py-2.5 text-center text-xs font-bold text-white shadow-md shadow-cyan-500/20 active:scale-[0.98] transition-all"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}