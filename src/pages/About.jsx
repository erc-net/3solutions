import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import nameImg from '../assets/Name.jpeg';

const metrics = [
  { value: '2023', label: 'Founded in Bulawayo', subtext: 'Established as an enterprise tech firm' },
  { value: '99.9%', label: 'Infrastructure Reliability', subtext: 'High-availability system deployments' },
  { value: '100%', label: 'Security Compliance', subtext: 'Rigorous penetration testing & auditing' },
  { value: '24/7', label: 'Proactive Monitoring', subtext: 'Continuous threat detection & support' },
];

const pillars = [
  {
    icon: '⚡',
    title: 'High-Performance Engineering',
    description: 'We build scalable web, mobile, and desktop applications optimized for speed, low latency, and heavy throughput across distributed networks.',
  },
  {
    icon: '🛡️',
    title: 'Defense-in-Depth Cybersecurity',
    description: 'Security is embedded at every layer—from secure API design and penetration testing to network isolation and endpoint policy enforcement.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Infrastructure Mastery',
    description: 'From multi-WAN router configurations and VoIP latency optimization to scalable cloud hosting, we engineer robust digital backbones.',
  },
  {
    icon: '🎯',
    title: 'Strategic Technical Advisory',
    description: 'We translate complex tech challenges into clear, actionable roadmaps designed around measurable return on investment and risk mitigation.',
  },
];

const workflowSteps = [
  { step: '01', title: 'Discovery & Audit', description: 'Comprehensive analysis of existing systems, security posturing, and technical requirements.' },
  { step: '02', title: 'Architectural Blueprint', description: 'Designing high-availability schemas, API protocols, and zero-trust security layers.' },
  { step: '03', title: 'Agile Engineering', description: 'Rapid, iterative code development with continuous automated testing and compliance checks.' },
  { step: '04', title: 'Deployment & Support', description: 'Zero-downtime release orchestration paired with 24/7 proactive network monitoring.' }
];

const milestones = [
  {
    year: '2023',
    title: 'Company Foundation',
    description: '3-Solutions was established in Bulawayo by Mr. Eric Taruwinga to deliver high-performance software engineering and IT consulting.',
  },
  {
    year: '2024',
    title: 'Expansion into Cybersecurity',
    description: 'Integrated dedicated penetration testing, vulnerability management, and infrastructure security auditing into core offerings.',
  },
  {
    year: '2025',
    title: 'Enterprise Infrastructure & Cloud',
    description: 'Expanded capabilities to include enterprise network orchestration, VoIP optimizations, and multi-cloud architectural deployments.',
  },
  {
    year: '2026 & Beyond',
    title: 'Global Remote Delivery',
    description: 'Scaling digital-first engineering teams and delivering tailored solutions for international and regional clients.',
  },
];

const capabilities = [
  { title: 'Software Engineering', items: ['Custom Web Applications', 'Mobile App Development', 'RESTful & GraphQL APIs', 'Legacy System Modernization'] },
  { title: 'Cybersecurity & Audit', items: ['Penetration Testing', 'Vulnerability Assessment', 'Network Isolation & VLANs', 'Compliance Advisory'] },
  { title: 'Cloud & Networks', items: ['Multi-Cloud Deployment', 'VoIP & Latency Tuning', 'Starlink & WAN Management', 'Server Architecture'] },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="min-h-screen bg-[#03060D] text-white pt-32 pb-24 overflow-hidden relative">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Hero Section with Integrated Logo Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Engineering Excellence • Based in Bulawayo
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Architecting Resilient Tech Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500">Modern Enterprises</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              At <strong className="text-white">3-Solutions</strong>, we fuse custom software engineering, cloud architecture, and enterprise-grade cybersecurity to deliver tailored, high-impact digital solutions designed for sustainable business scale.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/contact" className="px-7 py-3.5 rounded-full bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors">
                Partner With Us
              </Link>
              <a href="#leadership" className="px-7 py-3.5 rounded-full bg-gray-900 border border-gray-800 text-white font-bold text-sm hover:bg-gray-800 transition-colors">
                Meet Executive Leadership
              </a>
            </div>
          </div>

          {/* Logo Card with Glow Effect & Tagline */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-[#0B1120] border border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
                <div className="p-4 rounded-2xl bg-white/95 shadow-inner mb-6 flex justify-center items-center">
                  <img 
                    src={logoImg} 
                    alt="3-Solutions Logo" 
                    className="w-56 sm:w-64 h-auto object-contain"
                  />
                </div>
                <div className="space-y-3 flex flex-col items-center">
                  <span className="text-xs uppercase font-mono text-cyan-400 tracking-widest font-semibold">
                    Corporate Brand Identity
                  </span>
                  <img 
                    src={nameImg} 
                    alt="3-Solutions Name" 
                    className="w-48 sm:w-56 h-auto object-contain filter invert brightness-200"
                  />
                </div>
                <p className="text-xs text-gray-400 italic border-t border-gray-800/80 pt-3 mt-4 w-full">
                  "Sustaining Excellence, For Future Generations"
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-[#0B1120]/80 backdrop-blur-md border border-gray-800 hover:border-cyan-500/40 transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{metric.value}</div>
              <div className="mt-4">
                <div className="text-white font-bold text-sm sm:text-base">{metric.label}</div>
                <div className="text-xs text-gray-400 mt-1">{metric.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Leadership Section */}
        <div id="leadership" className="rounded-3xl bg-gradient-to-br from-[#0B1120] via-[#0E172A] to-[#03060D] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                Executive Leadership
              </span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mr. Eric Taruwinga</h2>
                <p className="text-cyan-400 font-semibold text-lg mt-1">Founder, Software Engineer & Lead IT Consultant</p>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Founded in <strong className="text-white">2023</strong> in <strong className="text-white">Bulawayo</strong>, 3-Solutions was established under the vision of Mr. Eric Taruwinga to provide high-caliber technology solutions that bridge the gap between business objectives and technical implementation.
                </p>
                <p>
                  As an accomplished software engineer and IT consultant, Eric brings hands-on technical authority across full-stack software development, network architecture, penetration testing, and IT infrastructure administration.
                </p>
                <p>
                  Under his technical leadership, 3-Solutions maintains a disciplined approach to engineering—ensuring every application, network layout, and cloud migration adheres to strict performance, security, and scalability benchmarks.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-[#03060D] border border-gray-800 text-xs font-mono text-gray-300"># Software Architecture</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#03060D] border border-gray-800 text-xs font-mono text-gray-300"># Cybersecurity & Auditing</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#03060D] border border-gray-800 text-xs font-mono text-gray-300"># Network Infrastructure</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#03060D] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-gray-800 pb-3">Company Fast Facts</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center text-gray-300">
                  <span className="text-gray-400">Headquarters</span>
                  <span className="font-semibold text-white">Bulawayo, ZW</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="text-gray-400">Founded</span>
                  <span className="font-semibold text-white">2023</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="text-gray-400">Primary Focus</span>
                  <span className="font-semibold text-cyan-400">Enterprise Solutions</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="text-gray-400">Delivery Model</span>
                  <span className="font-semibold text-white">On-Site & Remote</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block text-center w-full py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors"
              >
                Schedule Executive Consultation
              </Link>
            </div>

          </div>
        </div>

        {/* Our Engineering Workflow */}
        <div>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Engineering Methodology</h2>
            <p className="text-gray-400 mt-2">How we execute projects from conceptualization to global production.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0B1120] border border-gray-800 hover:border-cyan-500/30 transition-all space-y-3">
                <div className="text-3xl font-black text-cyan-400 font-mono">{step.step}</div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Core Engineering Pillars</h2>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              We combine specialized disciplines to design, build, and secure modern technical platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#0B1120] border border-gray-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Capabilities Matrix */}
        <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-white">Specialized Technical Capabilities</h2>
            <p className="text-gray-400 mt-2">End-to-end expertise engineered to solve technical roadblocks.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 border-b border-gray-800 pb-2">{cap.title}</h3>
                <ul className="space-y-2.5">
                  {cap.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Company Evolution Timeline */}
        <div>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Company Evolution</h2>
            <p className="text-gray-400 mt-2">Our journey of technical growth and expanding service offerings.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-[#0B1120] border border-gray-800/80 rounded-2xl p-6 relative">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.year}</div>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Interactive Toggle Section */}
        <div className="bg-gradient-to-r from-cyan-950/20 to-blue-950/20 border border-cyan-500/20 rounded-3xl p-8 sm:p-12">
          <div className="flex gap-4 border-b border-gray-800 pb-4">
            <button 
              onClick={() => setActiveTab('mission')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${activeTab === 'mission' ? 'bg-cyan-400 text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Our Mission
            </button>
            <button 
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${activeTab === 'vision' ? 'bg-cyan-400 text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Our Vision
            </button>
          </div>

          <div className="mt-8">
            {activeTab === 'mission' ? (
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-bold text-white">Empowering Businesses with Secure, High-Performance Tech</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To design and deliver scalable software systems, secure cloud architecture, and robust network infrastructures that empower organizations to innovate with total confidence.
                </p>
              </div>
            ) : (
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-bold text-white">Setting the Standard for Digital Engineering</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To become a premier technology partner known for technical precision, uncompromising cybersecurity standards, and transformative software solutions across regional and international markets.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* High-Impact CTA Banner */}
        <div className="text-center rounded-3xl bg-[#0B1120] border border-gray-800 p-10 sm:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white">Ready to Elevate Your Digital Infrastructure?</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Partner with 3-Solutions to engineer secure software, optimize network performance, and protect your digital assets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black hover:bg-cyan-300 transition-colors text-sm sm:text-base"
              >
                Talk to Our Engineering Team
              </Link>
              <Link
                to="/careers"
                className="rounded-full bg-gray-800 hover:bg-gray-700 px-8 py-4 font-bold text-white transition-colors text-sm sm:text-base"
              >
                Explore Open Careers
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}