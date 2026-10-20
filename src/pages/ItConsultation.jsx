import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ITConsultation() {
  const whatsappNumber = '263790292355'; // Target WhatsApp contact number

  // Core Service Pillars
  const services = [
    {
      id: '01',
      title: 'Infrastructure & Network Installation',
      shortDesc: 'Structured cabling, router/switch configuration, fiber backbones, and enterprise Wi-Fi deployment.',
      icon: '🌐',
    },
    {
      id: '02',
      title: '24/7 Proactive System Monitoring',
      shortDesc: 'Real-time telemetry, server uptime tracking, automated patch management, and immediate incident alerts.',
      icon: '📊',
    },
    {
      id: '03',
      title: 'Dedicated IT Help Desk & On-Site Support',
      shortDesc: 'Rapid Tier 1–3 technical support for hardware, software troubleshooting, OS maintenance, and user onboarding.',
      icon: '🎧',
    },
    {
      id: '04',
      title: 'Cloud Migration & Virtualization',
      shortDesc: 'Seamless transition to AWS/Azure, hybrid cloud setups, data backups, and disaster recovery planning.',
      icon: '☁️',
    },
    {
      id: '05',
      title: 'Cybersecurity & Compliance Audits',
      shortDesc: 'Vulnerability assessments, firewall setup, endpoint protection, and employee security awareness training.',
      icon: '🛡️',
    },
    {
      id: '06',
      title: 'Hardware Procurement & Asset Management',
      shortDesc: 'Strategic sourcing of workstation fleets, server racks, network gear, and lifecycle management.',
      icon: '🖥️',
    },
  ];

  // Detailed IT Solutions for the Interactive Inspector
  const solutions = [
    {
      id: 'net-install',
      category: 'Infrastructure',
      name: 'Enterprise Network & Cable Installation',
      leadTime: '1 – 3 Days Deployment',
      supportTier: 'Level 3 Network Engineers',
      sla: '99.99% Uptime Guarantee',
      scope: 'Cat6a/Cat7 Structured Cabling, Rack Cable Tidying, Cisco/Ubiquiti AP Setup, Firewall Policy Configuration.',
      deliverable: 'Complete Network Topology Map + Bandwidth Stress-Test Audit Report',
    },
    {
      id: 'monitoring-maint',
      category: 'Managed Services',
      name: '24/7 Server & System Telemetry',
      leadTime: 'Instant Onboarding',
      supportTier: 'Automated NOC + Engineer Alerts',
      sla: '< 15 Min Critical Incident Response',
      scope: 'Automated OS Patching, CPU/RAM Utilization Tracking, Disk Failure Early Warnings, Endpoint Threat Detection.',
      deliverable: 'Monthly Executive Performance Dashboard & Threat Briefing',
    },
    {
      id: 'help-desk',
      category: 'User Support',
      name: 'Managed IT Help Desk (Remote & On-Site)',
      leadTime: 'Same-Day Dispatch',
      supportTier: 'Tier 1 to Tier 3 Specialists',
      sla: '< 1 Hour Ticket Resolution Target',
      scope: 'Email/Workstation Setup, Software Licensing, Peripheral Troubleshooting, Malware Cleanups, User Onboarding.',
      deliverable: 'Dedicated Ticket Portal & Quarterly Service Level Agreements (SLA)',
    },
    {
      id: 'cloud-migrate',
      category: 'Cloud & Data',
      name: 'Cloud Infrastructure & Disaster Recovery',
      leadTime: 'Tailored Timeline',
      supportTier: 'Certified Cloud Architects',
      sla: 'Zero Business-Hours Downtime Migration',
      scope: 'Microsoft 365 / Google Workspace Migration, Offsite Encrypted Cloud Backups, VM Orchestration, Failover Drills.',
      deliverable: 'Business Continuity Plan & Cloud Cost Optimization Matrix',
    },
  ];

  // Selected IT Solution state for detailed view
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  const handleWhatsAppInquiry = (solution) => {
    const message = encodeURIComponent(
      `Hello 3Solutions team, I am inquiring about your IT Consultation services regarding: ${solution.name} (${solution.category}). Please provide more details on scoping and booking.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#03060D] text-white pt-28 pb-20 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <header className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            3Solutions Enterprise IT
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
            Managed IT & Technology Consultation
          </h1>
          
          <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
            From physical cabling and network installations to 24/7 proactive server monitoring and instant help desk support, we keep your technical infrastructure resilient, secure, and scalable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Explore IT Capabilities
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 border border-slate-700 px-8 py-3.5 font-bold text-slate-200 hover:border-cyan-400 hover:text-white transition-all duration-300"
            >
              Request On-Site Audit
            </Link>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 font-mono">
              // Core Services
            </h2>
            <p className="text-3xl font-extrabold mt-2">End-to-End IT Managed Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-slate-800 bg-slate-950/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <span className="font-mono text-xs text-cyan-500">{service.id}</span>
                <h3 className="text-xl font-bold mt-2 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Solutions Inspector */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 font-mono">
                // Service Scope
              </h2>
              <p className="text-3xl font-extrabold mt-2">IT Engagement Packages</p>
            </div>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Select a solution package to review deliverables & schedule an IT consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Solution Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((item) => {
                const isActive = selectedSolution?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedSolution(item)}
                    className={`cursor-pointer group relative rounded-xl border p-6 transition-all duration-300 bg-slate-950/80 ${
                      isActive
                        ? 'border-cyan-400 ring-2 ring-cyan-400/20 shadow-lg shadow-cyan-500/10'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mt-2 text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                      {item.scope}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3">
                      <span className="text-xs font-mono text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                        SLA: {item.sla}
                      </span>
                      <span className="text-xs font-bold text-cyan-400">View Scope →</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Solution Inspector */}
            <div className="lg:col-span-5 sticky top-28 rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 backdrop-blur-md shadow-2xl">
              {selectedSolution ? (
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      [ Architecture & SLA Inspector ]
                    </span>
                    <h3 className="text-2xl font-black mt-1">{selectedSolution.name}</h3>
                    <p className="text-slate-400 text-sm font-mono mt-0.5">{selectedSolution.category}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-500 block font-mono">DEPLOYMENT TIMELINE</span>
                      <span className="font-bold text-cyan-400">{selectedSolution.leadTime}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-500 block font-mono">ENGINEERING TIER</span>
                      <span className="font-bold">{selectedSolution.supportTier}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 col-span-2">
                      <span className="text-xs text-slate-500 block font-mono">SERVICE LEVEL AGREEMENT (SLA)</span>
                      <span className="font-bold text-emerald-400">{selectedSolution.sla}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 col-span-2">
                      <span className="text-xs text-slate-500 block font-mono">TECHNICAL SCOPE</span>
                      <span className="text-xs text-slate-300 block mt-1 leading-relaxed">{selectedSolution.scope}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 col-span-2">
                      <span className="text-xs text-slate-500 block font-mono">PRIMARY DELIVERABLE</span>
                      <span className="text-xs text-cyan-300 block mt-1 font-semibold">{selectedSolution.deliverable}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(selectedSolution)}
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    Inquire via WhatsApp
                  </button>
                </div>
              ) : (
                <p className="text-slate-500 text-center py-12">Select an IT package to inspect scope details.</p>
              )}
            </div>

          </div>
        </section>

        {/* Why Choose Us Banner */}
        <section className="mt-28 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/20 p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need a Customized Infrastructure Audit?</h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether setting up a new office, upgrading legacy hardware, or securing network perimeters, our certified IT engineers provide tailored roadmaps built around your uptime requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-3.5 transition-colors shadow-lg shadow-cyan-500/20"
            >
              Schedule Technical Consultation
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}