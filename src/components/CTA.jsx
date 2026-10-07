import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 bg-transparent text-whiteq
    ">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-12 rounded-[2rem] bg-gradient-to-br from-[#111f38] to-[#03060D] border border-white/10 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">Let’s discuss how we can build your future. Book a free consultation with our senior architects today.</p>
            <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#03060D] font-black rounded-full transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              Get Started Now
            </button>
          </div>
          {/* Animated Background Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}