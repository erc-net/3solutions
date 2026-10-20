import { Link } from 'react-router-dom';
import nameLogo from '../assets/Name.jpeg';

export default function Footer() {
  return (
    <footer className="relative bg-[#03060D] pt-20 pb-10 overflow-hidden font-sans border-t border-white/5">
      
      {/* --- TECHY BACKGROUND EFFECTS --- */}
      {/* Animated glowing top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      {/* Faint tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img 
                src={nameLogo} 
                alt="Company Name" 
                className="h-10 w-auto object-contain"
              />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architecting the digital future. We engineer scalable, secure, and high-performance digital ecosystems designed to dominate your market.
            </p>
            {/* Techy System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">All Systems Operational</span>
            </div>
          </div>

          {/* Column 2: Capabilities / Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Capabilities</h4>
            <ul className="space-y-4">
              {[
                { label: 'Cloud Infrastructure', to: '/cloud-solutions' },
                { label: 'Cyber Security', to: '/cyber-security' },
                { label: 'Web & App Development', to: '/web-app-development' },
                { label: 'Penetration Testing', to: '/penetration-testing' },
                { label: 'Automotive Systems', to: '/car-sale' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Careers', to: '/careers' },
                { label: 'Contact Hub', to: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                    <span className="text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Tech Insights</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our developer newsletter for architecture patterns and tech news.</p>
            

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* GitHub Icon */}
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* X / Twitter Icon */}
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} 3Solutions. All rights reserved. <span className="ml-2 text-cyan-600">v2.4.0</span>
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cyber-security" className="hover:text-white transition-colors">Security Setup</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}