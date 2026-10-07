import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, Terminal, Cpu, Zap, Eye, Globe, ArrowRight, 
  CheckCircle2, FileText, ChevronDown, Award, AlertTriangle, 
  Layers, Lock, Crosshair, HelpCircle, ShieldCheck
} from 'lucide-react';

export default function PenetrationTesting() {
  // Interactive Calculator State
  const [assetType, setAssetType] = useState('web');
  const [assetCount, setAssetCount] = useState(1);
  const [complianceNeeded, setComplianceNeeded] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Globe className="w-7 h-7 text-cyan-400" />,
      title: "Web & Mobile App Pen Testing",
      desc: "Deep-dive evaluations targeting OWASP Top 10 vulnerabilities, API security, business logic bypasses, session flaws, and authorization flaws.",
      features: ["REST/GraphQL API Testing", "OAuth & JWT Token Security", "Business Logic Flaw Detection"]
    },
    {
      icon: <Cpu className="w-7 h-7 text-cyan-400" />,
      title: "Network & Infrastructure Testing",
      desc: "Simulated internal and external vector attacks targeting legacy systems, Active Directory, exposed ports, and vulnerable network perimeters.",
      features: ["Active Directory Attacks", "Internal Privilege Escalation", "Perimeter & Firewall Audits"]
    },
    {
      icon: <Terminal className="w-7 h-7 text-cyan-400" />,
      title: "Cloud Infrastructure Audit",
      desc: "Assessment of multi-cloud environments (AWS, Azure, GCP) to uncover risky IAM policies, public storage buckets, and container exploits.",
      features: ["IAM Role Escalation Checks", "Kubernetes / Docker Audits", "S3/Blob Storage Exposure"]
    },
    {
      icon: <Zap className="w-7 h-7 text-cyan-400" />,
      title: "Red Teaming & Social Engineering",
      desc: "Full-scale multi-vector simulations testing your security posture via Spear Phishing, credential harvesting, and physical intrusion.",
      features: ["Spear-Phishing Campaigns", "Physical Intrusion Tests", "EDR & Defense Evasion"]
    },
  ];

  const deliverables = [
    {
      title: "Executive Summary",
      desc: "High-level risk dashboard designed for CISOs, Board Members, and leadership to prioritize budget and strategic fixes."
    },
    {
      title: "Technical Vulnerability Report",
      desc: "Itemized breakdown of all findings categorized by CVSS score, complete with Proof-of-Concept (PoC) code snippets."
    },
    {
      title: "Remediation Playbook",
      desc: "Actionable, step-by-step developer guidelines and code fixes to resolve vulnerabilities quickly without downtime."
    },
    {
      title: "Free Retesting & Verification",
      desc: "Once your team patches the reported flaws, we perform a complementary re-scan to validate and verify fix effectiveness."
    }
  ];

  const complianceStandards = [
    { name: "PCI-DSS 4.0", desc: "Mandatory annual penetration testing for payment card compliance." },
    { name: "SOC 2 Type II", desc: "Demonstrate rigorous security controls to enterprise procurement teams." },
    { name: "HIPAA / HITECH", desc: "Protect ePHI data from unauthorized exfiltration and cyber threats." },
    { name: "ISO 27001", desc: "Validate Information Security Management System (ISMS) controls." }
  ];

  const faqs = [
    {
      q: "How long does a standard penetration test take?",
      a: "A standard engagement takes between 1 to 3 weeks depending on scope size, complexity, and target environment type. A detailed execution plan is provided before execution begins."
    },
    {
      q: "Will penetration testing cause downtime to our active services?",
      a: "No. Our security engineers use safe, controlled exploitation techniques to verify findings without disrupting production services or causing data corruption."
    },
    {
      q: "What is the difference between a Vulnerability Assessment and a Penetration Test?",
      a: "A vulnerability assessment uses automated tools to identify potential weaknesses. A penetration test goes further by manually exploiting those weaknesses to demonstrate real business impact."
    },
    {
      q: "Do you provide proof-of-compliance documentation?",
      a: "Yes. Upon completion, we issue a formal Letter of Attestation and Executive Summary ready to share with regulators, insurance auditors, and prospective enterprise clients."
    }
  ];

  // Dynamic estimate calculator logic
  const calculateEstimate = () => {
    let base = assetType === 'web' ? 2500 : assetType === 'cloud' ? 3500 : 2000;
    let multiplier = assetCount * 800;
    let complianceFee = complianceNeeded ? 1200 : 0;
    return base + multiplier + complianceFee;
  };

  return (
    <section className="relative min-h-screen bg-[#03060D] text-white pt-32 pb-24 overflow-hidden font-mono">
      {/* Background Grid & Scanline */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:24px_24px]" />
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-0 opacity-75 shadow-[0_0_15px_#00f3ff]"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest"
          >
            <ShieldAlert className="w-4 h-4 animate-pulse" /> 3Solutions Cyber Defense
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500"
          >
            Offensive Security & Penetration Testing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-gray-400 leading-relaxed font-sans"
          >
            Expose vulnerabilities before adversaries exploit them. We perform ethical hacking, cloud assessments, and adversarial red teaming to safeguard critical assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 px-8 py-4 font-bold text-black transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)]"
            >
              Book Security Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Console Cyber Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 bg-[#080d1a] border border-cyan-500/30 rounded-xl p-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-gray-800 text-xs text-gray-400">
            <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-cyan-400" /> SYSTEM_BREACH_SIMULATOR</span>
            <span className="text-emerald-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> SCAN IN PROGRESS</span>
          </div>
          <div className="mt-4 font-mono text-sm text-cyan-300 space-y-2">
            <p className="text-gray-500">&gt; Initializing target footprinting & OSINT engines...</p>
            <p>&gt; [SQLi Engine] Testing endpoint parameters... <span className="text-emerald-400">[Secure]</span></p>
            <p>&gt; [Port Scanner] Scanning open services... <span className="text-yellow-400">[3 Exposed Ports]</span></p>
            <p>&gt; [IAM Evaluator] Checking policy misconfigurations... <span className="text-rose-500 font-bold">[CRITICAL FLAW IDENTIFIED]</span></p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center mb-12 tracking-wide text-cyan-400 uppercase">Our Core Testing Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, borderColor: 'rgba(0,243,255,0.8)' }}
                className="p-8 bg-[#070c18] border border-gray-800 rounded-xl transition-all relative group"
              >
                <div className="p-3 bg-cyan-950/40 rounded-lg w-fit border border-cyan-500/20 group-hover:border-cyan-400">
                  {srv.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300">{srv.title}</h3>
                <p className="mt-3 text-gray-400 font-sans text-sm leading-relaxed">{srv.desc}</p>
                <div className="mt-6 pt-4 border-t border-gray-800 space-y-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-cyan-400/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scope & Cost Estimator Tool */}
        <div className="mt-28 bg-[#050914] border border-cyan-500/30 rounded-2xl p-8 sm:p-12 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Interactive Project Estimator</h2>
            <p className="mt-2 text-sm text-gray-400 font-sans">Select your targets to generate a preliminary engagement estimate.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Target Type Selection */}
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-3">Target Asset Type</label>
              <select 
                value={assetType} 
                onChange={(e) => setAssetType(e.target.value)}
                className="w-full bg-[#0a1020] border border-cyan-500/40 rounded-lg p-3 text-cyan-300 text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="web">Web Application / API</option>
                <option value="cloud">Cloud Environment (AWS/Azure)</option>
                <option value="network">Network & Internal Infrastructure</option>
              </select>
            </div>

            {/* Asset Count Slider */}
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-3">
                Estimated Scope Size: <span className="text-cyan-400 font-bold">{assetCount} Asset(s)</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={assetCount} 
                onChange={(e) => setAssetCount(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Compliance Toggle */}
            <div className="flex flex-col">
              <label className="block text-xs uppercase text-gray-400 font-bold mb-3">Compliance Requirements</label>
              <button 
                onClick={() => setComplianceNeeded(!complianceNeeded)}
                className={`w-full py-3 px-4 rounded-lg border font-sans text-xs font-bold transition-all ${
                  complianceNeeded 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-[#0a1020] border-gray-800 text-gray-400'
                }`}
              >
                {complianceNeeded ? '✓ PCI/SOC2 Attestation Included' : '+ Add Attestation Report'}
              </button>
            </div>
          </div>

          {/* Price Preview Footer */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-xs uppercase text-gray-400 block font-sans">Estimated Assessment Budget</span>
              <span className="text-3xl font-black text-cyan-400">${calculateEstimate().toLocaleString()} USD</span>
            </div>
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all">
              Lock In Scope Quote
            </Link>
          </div>
        </div>

        {/* Comprehensive Deliverables */}
        <div className="mt-28">
          <h2 className="text-2xl font-bold text-center mb-12 tracking-wide text-cyan-400 uppercase">What You Receive (Deliverables)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#070c18] border border-gray-800 rounded-xl relative hover:border-cyan-500/40 transition-all">
                <FileText className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-400 font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory & Compliance Focus */}
        <div className="mt-28 bg-gradient-to-r from-[#060b17] via-[#091124] to-[#060b17] border border-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <Award className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white uppercase">Compliance Readiness</h2>
            <p className="mt-2 text-sm text-gray-400 font-sans">Meet audit requirements with reports accepted by third-party auditors and insurance carriers.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((st, idx) => (
              <div key={idx} className="p-5 bg-[#03060d] border border-gray-800 rounded-lg">
                <span className="text-cyan-400 font-bold text-sm">{st.name}</span>
                <p className="mt-2 text-xs text-gray-400 font-sans">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-28 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 tracking-wide text-cyan-400 uppercase">Frequently Asked Questions</h2>
          <div className="space-y-4 font-sans">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg bg-[#070c18] overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center font-bold text-sm text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-gray-800/50 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="mt-28 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-[#0a1224] to-cyan-950/40 border border-cyan-500/40 text-center relative overflow-hidden">
          <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Ready to Harden Your Defenses?</h2>
          <p className="mt-4 text-gray-300 font-sans max-w-xl mx-auto">Schedule a zero-obligation security consultation with our certified OSCP/CISSP security specialists.</p>
          <div className="mt-8">
            <Link to="/contact" className="inline-block rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]">
              Request Assessment Proposal
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}