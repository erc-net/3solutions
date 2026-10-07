import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Cloud, 
  Server, 
  Headphones, 
  ShieldAlert, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  HardDrive, 
  Zap,
  RefreshCw
} from 'lucide-react';

// --- Animated Canvas Background Component (Network & IT Nodes) ---
const TechBackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create IT network nodes
    const nodeCount = 45;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      isCloudNode: Math.random() > 0.7
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${1 - dist / 140 * 0.85})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isCloudNode ? '#38bdf8' : '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};

// --- Services Data ---
const services = [
  {
    icon: Cloud,
    title: "Cloud Migration & Managed Infrastructure",
    description: "End-to-end cloud setup, AWS/Azure management, seamless server migration, and hybrid cloud architecture tailored for peak performance.",
    tags: ["AWS / Azure", "Hybrid Cloud", "Office 365 / Google Workspace"]
  },
  {
    icon: Headphones,
    title: "24/7 Helpdesk & Remote Support",
    description: "Instant remote troubleshooting, user onboarding/offboarding, ticket resolution, and round-the-clock technician availability for critical staff needs.",
    tags: ["Tier 1-3 Support", "Remote Desktop", "SLA Guaranteed"]
  },
  {
    icon: Network,
    title: "Network Deployment & Maintenance",
    description: "On-site and remote management of routers, firewalls, switches, enterprise Wi-Fi installation, VLAN configuration, and VPN tunneling.",
    tags: ["Router / Switch Config", "Mesh Wi-Fi", "VPN / Firewall"]
  },
  {
    icon: Wrench,
    title: "On-Site Hardware Technician Services",
    description: "Physical hardware repairs, server rack setup, workstation deployments, cabling, and diagnostics for workstations, laptops, and peripherals.",
    tags: ["Hardware Repair", "Rack Deployment", "Structured Cabling"]
  },
  {
    icon: HardDrive,
    title: "Data Backup & Disaster Recovery",
    description: "Automated real-time cloud and local backups, snapshot scheduling, and rapid disaster restoration plans to prevent data loss.",
    tags: ["Ransomware Recovery", "Cloud Backups", "Disaster Recovery"]
  },
  {
    icon: ShieldAlert,
    title: "IT Security & System Hardening",
    description: "Endpoint protection, antivirus automation, patch management, security audit checklists, and spam filter enforcement for all company assets.",
    tags: ["Endpoint Defense", "Patch Mgmt", "Email Security"]
  }
];

// --- Completed Jobs Data ---
const completedJobs = [
  {
    title: "Enterprise Multi-Site Cloud Migration",
    scope: "Migrated 120+ workstations and local SQL databases to AWS with zero business downtime.",
    stat: "100% Data Preserved",
    category: "Cloud Solutions"
  },
  {
    title: "Full Office Network & Server Rack Installation",
    scope: "Designed cabling structure, deployed Managed Switches, and configured zero-trust VPN access for 80 remote employees.",
    stat: "1 Gbps Fiber Speed",
    category: "On-Site Hardware"
  },
  {
    title: "Ransomware Disaster Recovery & Hardening",
    scope: "Restored client systems from clean encrypted cloud backups within 3 hours of infection and secured endpoints.",
    stat: "< 3 Hour Restore",
    category: "Emergency Support"
  }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ITSupportServices() {
  return (
    <div className="relative min-h-screen bg-[#03060D] text-white selection:bg-cyan-500 selection:text-black font-sans overflow-hidden">
      
      {/* ANIMATED CANVAS BACKGROUND */}
      <TechBackgroundCanvas />

      {/* BACKGROUND GLOWS & GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.18),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            3Solutions Managed IT & Technical Services
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400"
          >
            Reliable IT Support & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Cloud Infrastructure Services
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            From 24/7 helpdesk support and on-site hardware technicians to automated cloud infrastructure and network deployments — we keep your business tech fast, secure, and always online.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
            >
              Get IT Support Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#cloud-solutions" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 px-8 py-4 font-bold text-slate-300 backdrop-blur-sm transition-all"
            >
              Cloud & IT Solutions
            </a>
          </motion.div>
        </motion.div>

        {/* METRICS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md"
        >
          {[
            { value: "15 Min", label: "Avg. Ticket Response Time" },
            { value: "99.9%", label: "Cloud & Network Uptime" },
            { value: "1,200+", label: "Workstations Managed" },
            { value: "24/7/365", label: "Active Technician Monitoring" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black font-mono text-cyan-400">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED ANIMATED CLOUD SOLUTIONS SECTION */}
      <section id="cloud-solutions" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">Next-Gen Cloud Tech</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4">Automated Cloud & Virtualization</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Scale your infrastructure smoothly with continuous cloud syncing, automated backups, and instant virtual servers.</p>
        </div>

        {/* ANIMATED CLOUD ARCHITECTURE SHOWCASE */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
              <Cloud className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud Migration & Multi-Cloud</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Seamlessly shift legacy on-premise servers into AWS, Microsoft Azure, or hybrid environments with automated data integrity verification.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Zero Business Downtime</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Automated Sync Pipelines</li>
            </ul>
          </motion.div>

          {/* Interactive Animated Center Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#060D1A]/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-md text-center relative overflow-hidden"
          >
            {/* Pulsing Cloud Core */}
            <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center text-slate-950 shadow-lg"
              >
                <Database className="w-10 h-10" />
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs mb-2">
              <RefreshCw className="w-4 h-4 animate-spin" /> LIVE CLOUD SYNC ACTIVE
            </div>
            <h4 className="text-lg font-bold">Encrypted Enterprise Cloud Core</h4>
            <p className="text-slate-400 text-xs mt-2">Real-time replication across multi-region datacenters</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3">Virtual Desktop (VDI) & SaaS</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Enable secure remote work capabilities with cloud virtual desktops, single-sign-on (SSO), and Google Workspace/Office 365 administration.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Remote Desktop Infrastructure</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> IAM & Identity Management</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Full IT Support & Services</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Complete managed technical solutions designed to solve end-user issues, fix hardware, and maintain server networks.</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="relative group p-8 rounded-2xl bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* JOBS COMPLETED / CASE STUDIES SECTION */}
      <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">Proven Track Record</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4">Technician Jobs Delivered</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">A sample of recent technical projects handled by our support engineers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {completedJobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{job.category}</span>
                <h3 className="text-lg font-bold mt-2 mb-3 text-white">{job.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.scope}</p>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-center font-mono text-sm text-cyan-300 font-bold">
                {job.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-[#03060D] border border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">Need Fast & Reliable IT Support?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Connect with an IT technician today to audit your systems, set up cloud backups, or resolve network issues.
          </p>

          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
          >
            Talk to an IT Technician <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}