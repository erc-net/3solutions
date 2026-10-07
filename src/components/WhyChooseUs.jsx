import React from 'react';

const reasons = [
  { 
    title: "Industry Expertise", 
    desc: "Mastery across technology, healthcare, retail, and finance to deliver real-world, high-impact results.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/></svg>,
    gradient: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Tailored Solutions", 
    desc: "Bespoke software strategies and services precision-engineered to your unique business objectives.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-6.84a1.88 1.88 0 00-2.339-2.339l-6.84 3.879a15.995 15.995 0 00-4.648 4.764m3.42 3.42a6.976 6.976 0 00-3.42-3.42"/></svg>,
    gradient: "from-emerald-400 to-teal-600"
  },
  { 
    title: "End-to-End Services", 
    desc: "We remain your trusted technology partner from initial consultation through to long-term support.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
    gradient: "from-orange-400 to-rose-500"
  },
  { 
    title: "Innovation-Driven", 
    desc: "Leveraging AI, cloud, and automation to help you outperform the competition effortlessly.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
    gradient: "from-purple-500 to-fuchsia-600"
  },
  { 
    title: "Reliable Support", 
    desc: "Rapid response times and proactive maintenance to keep your systems secure and optimized.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
    gradient: "from-rose-400 to-red-600"
  },
  { 
    title: "Proven Results", 
    desc: "Focused on measurable outcomes: cost efficiency, increased productivity, and sustainable growth.", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>,
    gradient: "from-cyan-400 to-blue-500"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32  bg-transparent overflow-hidden">
      <style>{`
        @keyframes border-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-border-spin { animation: border-spin 8s linear infinite; }
        @keyframes text-shimmer { 0% { background-position: 0% 50%; } 100% { background-position: -200% 50%; } }
        .animate-text-shimmer { background-size: 200% auto; animation: text-shimmer 3s linear infinite; }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-text-shimmer">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative, scalable, and industry-specific solutions that empower your business to stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="group relative p-[2px] rounded-3xl overflow-hidden cursor-pointer">
              {/* Rotating Border */}
              <div className={`absolute inset-[-100%] animate-border-spin bg-gradient-to-r ${item.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative h-full bg-[#03060D] rounded-[22px] p-8 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}