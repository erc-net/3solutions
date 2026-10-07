import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Database, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export default function SoftwareDevelopment() {
  const services = [
    {
      icon: <Code2 className="w-7 h-7 text-cyan-400" />,
      title: "Custom Software Engineering",
      desc: "Tailor-made web applications, enterprise systems, and microservices built to solve complex operational challenges."
    },
    {
      icon: <Smartphone className="w-7 h-7 text-cyan-400" />,
      title: "Mobile App Development",
      desc: "Cross-platform and native iOS/Android applications built for high performance, intuitive UX, and seamless scalability."
    },
    {
      icon: <Cloud className="w-7 h-7 text-cyan-400" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Architecting resilient AWS/Azure cloud environments, automated CI/CD pipelines, and modern container orchestration."
    },
    {
      icon: <Database className="w-7 h-7 text-cyan-400" />,
      title: "API Architecture & Integration",
      desc: "Robust REST and GraphQL APIs designed to securely connect your internal tooling with third-party ecosystems."
    },
    {
      icon: <Cpu className="w-7 h-7 text-cyan-400" />,
      title: "AI & Machine Learning",
      desc: "Integrating predictive models, automated workflows, and data analytics engines directly into your core business applications."
    },
    {
      icon: <Layers className="w-7 h-7 text-cyan-400" />,
      title: "Legacy System Modernization",
      desc: "Refactoring and migrating outdated, monolithic codebases into modular, high-performing cloud architectures."
    }
  ];

  const techStack = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "Go", "PostgreSQL", "Docker", "Kubernetes", "AWS", "GraphQL", "Tailwind CSS"
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Blueprint", desc: "Mapping your functional specs, architecture requirements, and technical roadmaps." },
    { step: "02", title: "Agile Sprints", desc: "Iterative development cycles with continuous delivery, code reviews, and transparent updates." },
    { step: "03", title: "QA & Automation", desc: "Rigorous automated testing, security audits, and load testing to guarantee stability." },
    { step: "04", title: "Deploy & Scale", desc: "Zero-downtime deployment backed by ongoing maintenance, monitoring, and optimizations." }
  ];

  return (
    <div className="min-h-screen bg-[#03060D] text-white pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Dynamic Animated Tech Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Animated Neon Light Orbs */}
        <motion.div 
          animate={{
            x: [0, 120, -100, 0],
            y: [0, -150, 80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full"
        />

        <motion.div 
          animate={{
            x: [0, -140, 100, 0],
            y: [0, 120, -100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-600/15 blur-[180px] rounded-full"
        />

        <motion.div 
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-indigo-500/10 blur-[200px] rounded-full"
        />

        {/* Animated Moving Cyber Tech Grid */}
        <motion.div 
          animate={{ backgroundPositionY: ["0px", "60px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
        />

        {/* Moving Digital Scanning Beams */}
        <motion.div 
          animate={{ y: ["-100%", "1000%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent border-b border-cyan-500/20"
        />

        {/* Floating Binary / Tech Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${(i * 8.5) % 100}%`, 
              y: "110%", 
              opacity: 0.2 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 10 + (i % 5) * 3, 
              repeat: Infinity, 
              delay: i * 0.8,
              ease: "linear" 
            }}
            className="absolute text-[10px] font-mono text-cyan-400/40 tracking-widest select-none pointer-events-none"
          >
            {i % 2 === 0 ? "010101" : "<Code />"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5" />
            <span>// 3SOLUTIONS_CORE_ENGINES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Software Development</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed font-light">
            We architect, build, and scale production-grade software solutions engineered to handle complex logic, high throughput, and demanding business requirements.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link 
              to="/contact" 
              className="group flex items-center gap-2 rounded-full bg-[var(--brand-primary,#00f2fe)] px-7 py-3 font-bold text-black transition-all hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-[1.02]"
            >
              Talk to Our Engineers
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="#services" 
              className="px-7 py-3 rounded-full border border-gray-800 text-gray-300 hover:text-white hover:border-gray-600 transition-colors font-medium text-sm backdrop-blur-sm"
            >
              Explore Capability
            </a>
          </div>
        </motion.div>

        {/* Dynamic Tech Marquee / Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800/80"
        >
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Core Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-mono bg-gray-900/80 text-cyan-300 border border-cyan-900/50 rounded-md backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <section id="services" className="mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">// Capabilities</p>
              <h2 className="text-3xl font-extrabold mt-2">Services We Deliver</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-2 md:mt-0">End-to-end development capabilities covering full lifecycle engineering.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-gray-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="p-3 w-fit rounded-xl bg-cyan-950/50 border border-cyan-800/40 mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="mt-28">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">// Methodology</p>
          <h2 className="text-3xl font-extrabold mt-2 mb-12">How We Build</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-950/70 backdrop-blur-sm border border-gray-800/80 relative">
                <span className="text-3xl font-mono font-black text-cyan-500/20 absolute top-4 right-4">{step.step}</span>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Value Metrics */}
        <section className="mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-cyan-950/30 to-gray-900/50 border border-cyan-900/40 backdrop-blur-md">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-2xl font-bold">High Performance</h4>
              <p className="text-xs text-gray-400 mt-1">Optimized for low latency & fast response times</p>
            </div>
            <div>
              <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-2xl font-bold">Security First</h4>
              <p className="text-xs text-gray-400 mt-1">Enterprise-grade encryption and compliance</p>
            </div>
            <div>
              <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="text-2xl font-bold">99.9% Uptime</h4>
              <p className="text-xs text-gray-400 mt-1">Fault-tolerant cloud architectures</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.2)]"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">Ready to Build Your Software Engine?</h2>
            <p className="mt-3 text-black/80 font-medium">From blueprint to production deployment, let's build something exceptional.</p>
            <Link 
              to="/contact" 
              className="inline-block mt-6 px-8 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all hover:scale-105 shadow-xl"
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}