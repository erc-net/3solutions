import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Cloud, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Activity, 
  Lock 
} from 'lucide-react';

export default function CloudSolutions() {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      title: "Cloud Migration & Architecture",
      description: "Seamlessly transition legacy monolithic workloads to multi-cloud or hybrid environments with zero business disruption and optimized resource topology."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "DevOps & Infrastructure as Code",
      description: "Automate delivery pipelines, containerize microservices, and provision infrastructure dynamically using Terraform, Ansible, and Kubernetes."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Cloud Security & Compliance",
      description: "Zero-Trust architecture, end-to-end encryption, automated threat vector mitigation, and continuous audit monitoring (ISO, HIPAA, GDPR)."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-cyan-400" />,
      title: "FinOps & Cost Optimization",
      description: "Eliminate idle compute resources, optimize reserved instances, and leverage automated scaling rules to trim monthly expenditures by up to 45%."
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Serverless & Cloud-Native Development",
      description: "Build event-driven architectures using AWS Lambda, Azure Functions, and dynamic NoSQL data layers designed for infinite scale."
    },
    {
      icon: <Activity className="w-8 h-8 text-cyan-400" />,
      title: "Disaster Recovery & High Availability",
      description: "Sub-second database replication, automated failover routing, and multi-region backup strategies ensuring 99.999% system resilience."
    }
  ];

  const metrics = [
    { label: "Guaranteed SLA", value: "99.99%" },
    { label: "Deployment Velocity", value: "10x" },
    { label: "Average Cost Reduction", value: "38%" },
    { label: "Global Nodes", value: "120+" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Audit", desc: "Deep-dive assessment of your existing codebases, server topologies, and security postures." },
    { step: "02", title: "Architecture Blueprint", desc: "Engineering custom, high-throughput cloud infrastructure tailormade for modern scale." },
    { step: "03", title: "Zero-Downtime Execution", desc: "Automated, parallelized migration strategies ensuring continuous live service operations." },
    { step: "04", title: "Continuous FinOps & SecOps", desc: "24/7 automated monitoring, proactive threat defense, and continuous cost optimization." }
  ];

  return (
    <div className="min-h-screen bg-[#03060D] text-white overflow-hidden relative font-sans selection:bg-cyan-500 selection:text-black">
      {/* ========================================================================
        DYNAMIC TECHIE MOVING BACKGROUND (Pure CSS Keyframe Animations)
        ========================================================================
      */}
      <style>{`
        @keyframes bgGridMove {
          0% { background-position: 0 0; }
          100% { background-position: 80px 80px; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-25px) rotate(3deg) scale(1.05); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(20px) rotate(-3deg) scale(0.95); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.15); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-grid-moving {
          animation: bgGridMove 6s linear infinite;
        }
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 14s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s ease-in-out infinite;
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>

      {/* Moving Technical Grid & Scanlines Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a33_1px,transparent_1px),linear-gradient(to_bottom,#0f172a33_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-moving [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        {/* Pulsing Light Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-indigo-500/20 blur-[130px] rounded-full animate-pulse-glow" />
        <div className="absolute top-2/3 right-10 w-[500px] h-[300px] bg-gradient-to-l from-indigo-500/15 via-cyan-500/10 to-transparent blur-[110px] rounded-full animate-pulse-glow" />

        {/* Floating Dynamic Cloud Tech Icons in Background */}
        <div className="absolute top-20 left-[10%] text-cyan-500/10 animate-float-slow">
          <Cloud className="w-32 h-32" />
        </div>
        <div className="absolute top-1/3 right-[12%] text-blue-500/10 animate-float-reverse">
          <Layers className="w-40 h-40" />
        </div>
        <div className="absolute bottom-1/4 left-[15%] text-indigo-500/10 animate-float-slow">
          <Cpu className="w-36 h-36" />
        </div>
        <div className="absolute bottom-10 right-[20%] text-cyan-400/10 animate-float-reverse">
          <Globe className="w-48 h-48" />
        </div>

        {/* Laser Scanline Effect */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyan-500/10 to-transparent animate-scanline" />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span>// NEXT-GEN CLOUD INFRASTRUCTURE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Architecting The Future of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Cloud Operations.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed font-normal">
            We build, migrate, and continuously optimize resilient multi-cloud environments built for high availability, enterprise security, and extreme scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-slate-950 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Talk to Our Cloud Engineers</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Live Floating Tech Metrics Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-tight">{metric.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Comprehensive Services Grid */}
        <div className="mt-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Enterprise Cloud Capabilities</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Full-lifecycle cloud engineering tailored for continuous integration and operational excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="p-3.5 rounded-xl bg-slate-800/50 w-fit border border-slate-700/50 group-hover:bg-cyan-950/60 group-hover:border-cyan-500/40 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Methodology Process */}
        <div className="mt-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Execution Model</h2>
            <p className="text-slate-400">Structured deployment pipelines designed for predictability and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                <div className="text-4xl font-black text-cyan-500/20 font-mono mb-4 group-hover:text-cyan-400/40 transition-colors">{step.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Banner */}
        <div className="mt-32 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-cyan-950/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Agnostic Multi-Cloud Integration</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Engineered to run seamlessly on AWS, Microsoft Azure, Google Cloud Platform, or custom bare-metal Kubernetes clusters. Our automated failovers keep your application globally distributed and perpetually online.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "AWS, Azure & GCP Native Tooling",
                "Kubernetes & Docker Orchestration",
                "Terraform & Infrastructure-as-Code",
                "24/7 Threat & Anomaly Monitoring"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}