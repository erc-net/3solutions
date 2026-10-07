import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DraftingCompass, 
  Box, 
  Layers, 
  Building2, 
  FileCheck2, 
  Cpu, 
  Cloud, 
  Server, 
  ShieldCheck, 
  Zap, 
  Database, 
  Network,
  ArrowRight, 
  CheckCircle2,
  HardHat,
  Terminal
} from 'lucide-react';

// Techie Moving Matrix Canvas Background
function TechMatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic Nodes & Architectural Vector Lines
    const nodes = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Grid mesh
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving node vector web
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${1 - (dist / 140) * 0.8})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
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
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

const architecturalServices = [
  {
    icon: DraftingCompass,
    title: "2D Architectural Plans & Structural Blueprints",
    description: "Complete house plan drawings, electrical schematics, foundation plans, section details, and exterior elevations compliant with local municipal codes.",
    tags: ["House Plan Drawing", "CAD Drafting", "Elevation Views"]
  },
  {
    icon: Box,
    title: "3D Photorealistic Rendering & Virtual Tours",
    description: "Hyper-realistic exterior renderings, interior architectural walkthroughs, dynamic daylighting simulations, and immersive client presentations.",
    tags: ["Ray-Tracing Visuals", "4K Renderings", "VR Walkthroughs"]
  },
  {
    icon: Layers,
    title: "BIM Integration & Structural Engineering",
    description: "End-to-end Building Information Modeling (BIM LOD 400). Multi-discipline structural, MEP (Mechanical, Electrical, Plumbing), and clash detection analysis.",
    tags: ["Revit BIM", "Structural Analysis", "Clash Detection"]
  },
  {
    icon: FileCheck2,
    title: "Permit Submissions & Approval Sets",
    description: "Code-compliant construction documentation packages ready for city planning approval, zoning reviews, and engineering sign-offs.",
    tags: ["Building Permits", "Zoning Approval", "Site Planning"]
  },
  {
    icon: Building2,
    title: "Commercial & Industrial Development",
    description: "Master planning for commercial hubs, high-density residential developments, structural renovations, and adaptive reuse architecture.",
    tags: ["Master Planning", "Steel Structure Design", "Urban Layouts"]
  },
  {
    icon: Cpu,
    title: "Algorithmic & Sustainable Parametric Design",
    description: "Computational massing models designed to optimize solar orientation, structural load distribution, thermal performance, and material reduction.",
    tags: ["Parametric Modeling", "Solar Analysis", "Green Building"]
  }
];

const cloudServices = [
  {
    icon: Cloud,
    title: "Hybrid & Multi-Cloud Infrastructure Architecture",
    description: "Designing fault-tolerant cloud environments on AWS, Azure, and GCP tailored for high-concurrency applications and corporate operations.",
    tags: ["AWS / Azure / GCP", "Multi-Cloud", "High Availability"]
  },
  {
    icon: Server,
    title: "Serverless & Container Orchestration",
    description: "Microservices design using Kubernetes, Docker, and AWS Lambda to create auto-scaling infrastructure that cuts idle resource costs.",
    tags: ["Kubernetes", "Docker", "Serverless Architecture"]
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security, Compliance & Identity Governance",
    description: "Zero-trust network architectures, automated vulnerability scanning, IAM role enforcement, and SOC2 / HIPAA compliance integration.",
    tags: ["Zero Trust", "IAM Enforcement", "Compliance Automation"]
  },
  {
    icon: Zap,
    title: "DevOps & Automated CI/CD Pipelines",
    description: "Infrastructure as Code (IaC) deployment via Terraform and Ansible with continuous integration pipelines for instantaneous build releases.",
    tags: ["Terraform", "CI/CD Pipelines", "GitOps Workflow"]
  },
  {
    icon: Database,
    title: "Data Lake & Distributed Cloud Storage",
    description: "High-throughput database clustering, real-time data replication, low-latency caching setups, and automated disaster recovery plans.",
    tags: ["PostgreSQL", "Redis", "Disaster Recovery"]
  },
  {
    icon: Network,
    title: "Edge Computing & Global CDN Optimization",
    description: "Low-latency network edge configuration, dynamic web asset caching, and DDoS mitigation for worldwide high-performance data delivery.",
    tags: ["Cloudflare Edge", "Edge Computing", "DDoS Shield"]
  }
];

const completedJobs = [
  { type: "Architectural", title: "Luxury 5-Bedroom Residential Villa", output: "Full CAD blueprints, 3D interior render, permit set approval." },
  { type: "Cloud", title: "Fintech Platform Multi-Region Setup", output: "Kubernetes multi-region deployment, Zero-Trust network security." },
  { type: "Architectural", title: "12-Story Commercial Complex", output: "BIM LOD 400 structural model, clash resolution, MEP schematics." },
  { type: "Cloud", title: "Enterprise Cloud Migration", output: "Legacy server to AWS Cloud transformation with 99.99% uptime SLA." },
];

export default function ArchitecturalSolutions() {
  const [activeTab, setActiveTab] = useState('architectural');

  return (
    <section className="min-h-screen bg-[#03060D] text-white pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Dynamic Animated Canvas Matrix Background */}
      <TechMatrixBackground />

      {/* Radiant Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Integrated Spatial & Digital Systems
            </span>
          </motion.div>

          <motion.h1 
            className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Architectural Solutions & Cloud Engineering
          </motion.h1>

          <motion.p 
            className="mt-6 text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver physical building blueprints, residential house plan drawings, photorealistic 3D models alongside hyper-scalable cloud architectures.
          </motion.p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl flex gap-2 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('architectural')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'architectural' 
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <HardHat className="w-4 h-4" />
              Architectural & Drafting
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'cloud' 
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Cloud className="w-4 h-4" />
              Cloud Infrastructure
            </button>
          </div>
        </div>

        {/* Services Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === 'architectural' ? architecturalServices : cloudServices).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Delivered Projects & Completed Jobs */}
        <div className="mt-28">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Delivered Projects
              </span>
              <h2 className="text-3xl font-bold mt-2">Recent Execution Showcase</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedJobs.map((job, idx) => (
              <motion.div 
                key={idx}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-cyan-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div>
                  <span className={`inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                    job.type === 'Architectural' ? 'bg-blue-950 text-blue-400 border border-blue-500/30' : 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    {job.type}
                  </span>
                  <h4 className="text-lg font-bold mt-3">{job.title}</h4>
                  <p className="text-sm text-gray-400 mt-2">{job.output}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-cyan-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Deliverable Completed
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-transparent border border-cyan-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to launch your house plan or cloud system?</h3>
            <p className="mt-3 text-gray-400 text-sm">Get precision CAD house drawings, structural approvals, or fault-tolerant cloud infrastructure deployed by experts.</p>
          </div>

          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-bold text-black hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] whitespace-nowrap"
          >
            Request Architectural Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}