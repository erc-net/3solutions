import React from 'react';

const steps = [
  { title: "Discovery", desc: "We analyze your goals and market landscape." },
  { title: "Strategy", desc: "Custom roadmap designed for your success." },
  { title: "Development", desc: "Agile build process with quality assurance." },
  { title: "Deployment", desc: "Launch and continuous optimization." }
];

export default function Process() {
  return (
    <section className="py-24 bg-transparent text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-16">Our <span className="text-cyan-400">Process</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:bg-cyan-500 transition-all">
                <span className="text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-white/10"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}