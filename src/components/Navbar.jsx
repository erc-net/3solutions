import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import name from '../assets/Name.jpeg';

const navLinks = [
  { title: 'Home', to: '/' },
  { title: 'Tech Solutions', subLinks: [
    { title: 'Web & App Development', to: '/web-app-development' },
    { title: 'Software Development', to: '/software-development' },
    { title: 'Penetration Testing', to: '/penetration-testing' },
    { title: 'Cloud Solutions', to: '/cloud-solutions' },
    { title: 'ITsupport', to: '/it-support' },
  ]},
  { title: 'Architectural Solutions', to: '/architectural-solutions' },
  { title: 'Car Sale', to: '/car-sale' },
  { title: 'Careers', to: '/careers' },
  { title: 'About', to: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) => `px-4 py-2 font-bold transition-colors ${isActive ? 'text-[var(--brand-primary)]' : 'text-gray-700 hover:text-black'}`;

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white border-b border-gray-100 transition-all ${scrolled ? 'py-2 shadow-lg' : 'py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* --- LOGO SECTION UPDATED --- */}
          <Link to="/" onClick={() => setIsOpen(false)} aria-label="Home" className="flex items-center">
            <img 
              src={logo}
              alt="Company Logo" 
              className="h-15 w-auto object-contain" 
            />
            <img
              src={name}
              alt="Company Motto"
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          {/* ---------------------------- */}

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => link.subLinks ? (
              <div key={link.title} className="relative group">
                <button type="button" className="px-4 py-2 font-bold text-gray-700 hover:text-black">{link.title} ▾</button>
                <div className="absolute left-0 top-full mt-2 hidden w-64 rounded-xl border border-gray-100 bg-white py-2 shadow-xl group-hover:block">
                  {link.subLinks.map((sub) => <NavLink key={sub.to} to={sub.to} className="block px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-black">{sub.title}</NavLink>)}
                </div>
              </div>
            ) : <NavLink key={link.to} to={link.to} className={linkClass}>{link.title}</NavLink>)}
            <NavLink to="/contact" className="ml-3 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-bold text-white">Contact Us</NavLink>
          </div>

          <button type="button" className="md:hidden p-2 text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">☰</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-xl">
          {navLinks.map((link) => link.subLinks ? (
            <div key={link.title}>
              <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="w-full px-4 py-3 text-left font-bold">{link.title} ▾</button>
              {servicesOpen && link.subLinks.map((sub) => <NavLink key={sub.to} to={sub.to} onClick={() => setIsOpen(false)} className="block px-8 py-3 text-sm font-semibold text-gray-600">{sub.title}</NavLink>)}
            </div>
          ) : <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="block px-4 py-3 font-bold text-gray-800">{link.title}</NavLink>)}
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="mt-3 block rounded-xl bg-[var(--brand-primary)] px-4 py-3 text-center font-bold text-white">Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}