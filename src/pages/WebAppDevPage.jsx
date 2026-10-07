import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Code2, Cpu, ShieldCheck, Zap, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function WebAppDevPage() {
  // Stagger Container for List Items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Fade Up Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Tech Badge Animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  const services = [
    {
      icon: Globe,
      badge: "WEB PLATFORMS",
      title: "Website Development",
      subtitle: "High-Converting & Scalable Web Systems",
      description: "Custom web applications, e-commerce engines, and high-performance business portals engineered for enterprise security, speed, and conversion.",
      deliverables: [
        "Custom Front-End & Back-End Architecture",
        "Responsive, Mobile-First UI/UX Design",
        "E-Commerce Integration (Stripe, Shopify, Custom)",
        "CMS Solutions (Headless, WordPress, Strapi)",
        "Core Web Vitals & Technical SEO Optimization"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      badge: "MOBILE ECOSYSTEMS",
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform iOS/Android Apps",
      description: "Intuitive, high-performance mobile applications crafted to engage users across iOS and Android with seamless real-time backend synchronization.",
      deliverables: [
        "Cross-Platform Development (iOS & Android)",
        "Native Mobile App Platform Solutions",
        "Offline-First Architecture & Real-Time Syncing",
        "App Store & Google Play Direct Deployment",
        "Biometric Auth, Push Notifications & Payments"
      ],
      techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST/GraphQL"]
    }
  ];

  const features = [
    { icon: Zap, title: "Sub-Second Speed", desc: "Optimized for extreme performance, fast initial loads, and low latency." },
    { icon: ShieldCheck, title: "Zero-Trust Security", desc: "Built with modern encryption protocols, OAuth, and secure data handling." },
    { icon: Cpu, title: "Elastic Architecture", desc: "Designed to seamlessly handle rapid business growth and heavy traffic spikes." },
    { icon: Code2, title: "Clean Documentation", desc: "Maintainable, fully typed codebases adhering to strict engineering standards." }
  ];

  return (
    <section className="min-h-screen bg-[#03060D] text-white pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* ----------------- DYNAMIC TECHIE ANIMATED BACKGROUND ----------------- */}
      
      {/* 1. Animated Moving Tech Grid */}
      <motion.div 
        animate={{
          backgroundPosition: ['0px 0px', '64px 64px'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
      />

      {/* 2. Scanning Laser Grid Line */}
      <motion.div 
        animate={{
          top: ['0%', '100%'],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4] pointer-events-none z-0"
      />

      {/* 3. Pulsing Tech Radar Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_20%,#03060D_90%)] pointer-events-none" />

      {/* 4. Ambient Floating Glow Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          x: ['-50%', '-45%', '-50%'],
          y: ['-50%', '-55%', '-50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[140px] rounded-full pointer-events-none" 
      />

      <motion.div 
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full pointer-events-none" 
      />

      {/* ----------------- PAGE CONTENT ----------------- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md mb-4 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider uppercase">3Solutions Tech Engine</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Web & Mobile App <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Development
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed font-light">
            We build high-performance web applications and native mobile software tailored to drive business growth, streamline operations, and deliver superior digital experiences.
          </p>

          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-cyan-500/40">
                Talk to Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Feature Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Animated Services Section */}
        <div className="mt-24 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                whileHover={{ border: '1px solid rgba(6,182,212,0.3)' }}
                className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Service Overview Column */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl font-extrabold">{service.title}</h2>
                    <p className="text-cyan-400 font-medium text-sm">{service.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Animated Tech Stack Badges */}
                    <div className="pt-4">
                      <p className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">// Core Tech Stack</p>
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                      >
                        {service.techStack.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            variants={badgeVariants}
                            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            className="font-mono text-xs bg-white/10 px-3 py-1.5 rounded-lg text-cyan-300 border border-white/10 cursor-default transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Service Deliverables Column */}
                  <div className="lg:col-span-7 bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">// Key Deliverables</h3>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    <motion.ul 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-3 pt-2"
                    >
                      {service.deliverables.map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={fadeInUp}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 transition-transform"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Bottom CTA Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-24 text-center bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-cyan-950/40 border border-cyan-500/30 rounded-3xl p-10 sm:p-16 relative overflow-hidden"
        >
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] pointer-events-none" 
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black">Ready to build your solution?</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Whether you need a full-scale enterprise web application or a cross-platform mobile app, our engineering team is ready to bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4 inline-block">
              <Link to="/contact" className="inline-block rounded-full bg-cyan-400 px-9 py-4 font-bold text-black shadow-lg shadow-cyan-400/20 transition-all hover:bg-cyan-300">
                Start Technical Scoping
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}