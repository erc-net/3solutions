import React, { useState, useEffect } from 'react';
import IndustryShowcase from '../components/showcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
  const corePillars = [
    "Web & App Development", 
    "Architectural Solutions", 
    "Automotive Dealership", 
    "Software Development",
    "Penetration Testing",

    "Cloud Solutions",
    "Cyber Security"
  ];
  const [currentPillar, setCurrentPillar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % corePillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [corePillars.length]);

  return (
    <div className="relative w-full bg-[#03060D] text-white overflow-hidden font-sans">

      {/* --- INLINE STYLES FOR COMPLEX ANIMATIONS --- */}
      <style>
        {`
          /* 3D Isometric Floating for Cards */
          @keyframes float-3d-1 {
            0%, 100% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(80px) translateY(0px); }
            50% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(80px) translateY(-15px); }
          }
          @keyframes float-3d-2 {
            0%, 100% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(0px) translateY(0px); }
            50% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(0px) translateY(-10px); }
          }
          @keyframes float-3d-3 {
            0%, 100% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(-80px) translateY(0px); }
            50% { transform: rotateX(55deg) rotateZ(-45deg) translateZ(-80px) translateY(-5px); }
          }
          .animate-float-1 { animation: float-3d-1 6s ease-in-out infinite; }
          .animate-float-2 { animation: float-3d-2 6s ease-in-out infinite 0.7s; }
          .animate-float-3 { animation: float-3d-3 6s ease-in-out infinite 1.4s; }

          /* BACKGROUND ANIMATIONS */
          /* 1. Flying Grid Effect */
          @keyframes grid-scroll {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 0 40px, 40px 0; }
          }
          .animate-grid-scroll { animation: grid-scroll 1.5s linear infinite; }

          /* 2. Drifting Glowing Orbs */
          @keyframes orb-drift-1 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
            50% { transform: translate(40px, -40px) scale(1.1); opacity: 0.25; }
          }
          @keyframes orb-drift-2 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
            50% { transform: translate(-40px, 40px) scale(1.15); opacity: 0.2; }
          }
          .animate-orb-1 { animation: orb-drift-1 12s ease-in-out infinite; }
          .animate-orb-2 { animation: orb-drift-2 15s ease-in-out infinite reverse; }

          /* 3. Shooting Data Streams */
          @keyframes shooting-beam {
            0% { transform: translateX(100vw) translateY(-100vh) rotate(45deg); opacity: 1; }
            100% { transform: translateX(-50vw) translateY(150vh) rotate(45deg); opacity: 0; }
          }
          .animate-beam-1 { animation: shooting-beam 4s linear infinite; }
          .animate-beam-2 { animation: shooting-beam 5s linear infinite 2s; }
          .animate-beam-3 { animation: shooting-beam 6s linear infinite 4s; }

          /* Card Micro-Animations (Unchanged) */
          @keyframes rev-gauge { 0%, 100% { stroke-dasharray: 0, 100; } 50% { stroke-dasharray: 75, 100; } }
          .animate-rev { animation: rev-gauge 3s ease-in-out infinite; }
          @keyframes build-up { 0%, 100% { height: 10%; } 50% { height: 90%; } }
          .animate-build { animation: build-up 4s ease-in-out infinite; }
          @keyframes pulse-node { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.5); opacity: 1; border-color: #06b6d4; } }
          .animate-node { animation: pulse-node 2s ease-in-out infinite; }

          /* UI Intro Fade-Up */
          @keyframes fade-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
          .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; } .delay-400 { animation-delay: 0.4s; }

          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 25s linear infinite; }
        `}
      </style>

      {/* --- HIGHLY ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        
        {/* 1. Drifting Glowing Orbs (Nebula Effect) */}
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] sm:w-[45vw] sm:max-w-[450px] aspect-square bg-[#e11d48] rounded-full blur-[100px] mix-blend-screen animate-orb-1"></div>
        <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] sm:w-[50vw] sm:max-w-[500px] aspect-square bg-cyan-600 rounded-full blur-[120px] mix-blend-screen animate-orb-2"></div>
        <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] aspect-square bg-purple-600/20 rounded-full blur-[80px] mix-blend-screen animate-orb-1" style={{ animationDelay: '-5s' }}></div>
        
        {/* 2. Shooting Data Streams */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute w-[2px] h-[200px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px] animate-beam-1 shadow-[0_0_10px_#22d3ee]"></div>
          <div className="absolute w-[2px] h-[150px] bg-gradient-to-b from-transparent via-[#e11d48] to-transparent blur-[1px] animate-beam-2 ml-[30%] shadow-[0_0_10px_#e11d48]"></div>
          <div className="absolute w-[3px] h-[250px] bg-gradient-to-b from-transparent via-orange-400 to-transparent blur-[2px] animate-beam-3 ml-[70%] shadow-[0_0_15px_#fb923c]"></div>
        </div>

        {/* 3. Flying Perspective Floor Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_40%,#000_30%,transparent_100%)] transform perspective-[1000px] rotateX(65deg) scale(1.5) translateZ(-150px) animate-grid-scroll"></div>
      </div>

      {/* --- HERO CONTENT SECTION --- */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
          
          {/* LEFT: Text & Call to Action */}
          <div className="flex flex-col space-y-6 text-center lg:text-left z-20 mt-4 sm:mt-0">
            
            {/* Intro Badge */}
            <div className="animate-fade-up inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wider uppercase">Cross-Industry Expertise</span>
            </div>

            <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Empowering Every <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-rose-400 to-orange-400">
                Sector of Business.
              </span>
            </h1>

            {/* Dynamic Solutions Rotator */}
            <div className="animate-fade-up delay-200 h-10 flex items-center justify-center lg:justify-start overflow-hidden">
              <p className="text-lg sm:text-xl text-gray-300 font-medium">
                Pioneering in {' '}
                <span className="text-white font-bold ml-1 border-b-2 border-cyan-500 pb-1 inline-block min-w-[240px] text-left drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {corePillars[currentPillar]}
                </span>
              </p>
            </div>

            <p className="animate-fade-up delay-300 text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We provide tailored, high-performance solutions across all major industries. Whether you need an entire tech staffing overhaul, architectural planning software, or an automotive sales network, we architect success.
            </p>

            {/* Glowing Stats Row */}
            <div className="animate-fade-up delay-400 grid grid-cols-3 gap-3 sm:gap-4 pt-4 max-w-lg mx-auto lg:mx-0 w-full">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:border-[#e11d48]/50 hover:bg-[#e11d48]/10 transition-all text-center lg:text-left shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">500+</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold mt-1">Talent Placed</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-all text-center lg:text-left shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">30+</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold mt-1">Car Lots Built</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all text-center lg:text-left shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">100%</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase font-semibold mt-1">Project Delivery</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Industry 3D Animated Stack */}
          <div className="w-full flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[500px] animate-fade-up delay-300">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] perspective-[1200px] transform scale-90 sm:scale-100">
              
              {/* TOP CARD: Car Sales / Automotive */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border border-orange-500/40 rounded-2xl p-5 shadow-[0_20px_50px_rgba(249,115,22,0.15)] animate-float-1 flex flex-col justify-between group">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-orange-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Automotive Solutions
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-orange-500 animate-rev transition-all" strokeWidth="3" strokeDasharray="50, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-xl sm:text-2xl font-black text-white italic drop-shadow-md">Auto</span>
                      <span className="text-[8px] text-gray-400 uppercase">Sales Grid</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MIDDLE CARD: Architectural & Design */}
              <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-xl border border-blue-400/40 rounded-2xl p-5 shadow-[0_20px_50px_rgba(59,130,246,0.15)] animate-float-2 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_1px,transparent_0),linear-gradient(90deg,#60a5fa_1px,transparent_1px),linear-gradient(#60a5fa_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                
                <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-blue-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    Architectural Staff
                  </span>
                </div>
                
                <div className="relative z-10 flex justify-center items-end gap-3 h-24 mt-4 px-2">
                  <div className="w-6 bg-blue-400/80 border border-blue-300 rounded-t-sm animate-build shadow-[0_0_10px_rgba(96,165,250,0.5)]" style={{ animationDelay: '0s' }}></div>
                  <div className="w-6 bg-blue-500/80 border border-blue-400 rounded-t-sm animate-build shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-6 bg-blue-600/80 border border-blue-500 rounded-t-sm animate-build shadow-[0_0_10px_rgba(37,99,235,0.5)]" style={{ animationDelay: '1s' }}></div>
                  <div className="w-6 bg-blue-700/80 border border-blue-600 rounded-t-sm animate-build shadow-[0_0_10px_rgba(29,78,216,0.5)]" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>

              {/* BOTTOM CARD: Tech Staffing & Node Network */}
              <div className="absolute inset-0 bg-[#0B1B3D]/90 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-float-3 flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Tech Talent Network
                  </span>
                </div>
                
                <div className="relative w-full h-24 mt-4 flex items-center justify-center">
                   <div className="absolute w-8 h-8 rounded-full border border-cyan-400 bg-cyan-500/20 flex items-center justify-center z-10 animate-node shadow-[0_0_15px_#22d3ee]" style={{ animationDelay: '0s' }}>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                   </div>
                   <div className="absolute top-2 left-6 w-4 h-4 rounded-full border border-cyan-600 bg-cyan-900/50 animate-node" style={{ animationDelay: '0.4s' }}></div>
                   <div className="absolute bottom-2 right-6 w-5 h-5 rounded-full border border-cyan-600 bg-cyan-900/50 animate-node" style={{ animationDelay: '0.8s' }}></div>
                   <div className="absolute top-4 right-8 w-3 h-3 rounded-full border border-cyan-600 bg-cyan-900/50 animate-node" style={{ animationDelay: '1.2s' }}></div>
                   <div className="absolute bottom-4 left-8 w-4 h-4 rounded-full border border-cyan-600 bg-cyan-900/50 animate-node" style={{ animationDelay: '1.6s' }}></div>
                   
                   <svg className="absolute inset-0 w-full h-full text-cyan-800 opacity-60 pointer-events-none">
                     <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                     <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                     <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                     <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                   </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM INFINITE TICKER --- */}
      <div className="w-full border-t border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden py-3 sm:py-4 z-20 relative">
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#03060D] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#03060D] to-transparent z-10"></div>
        
        <div className="flex w-[200%] animate-marquee">
          <div className="flex-1 flex justify-around items-center text-[10px] sm:text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span> Tech Solution</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Architecture Plans</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Car Sales</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Cloud Network</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Penetration Testing</span>
          </div>
          <div className="flex-1 flex justify-around items-center text-[10px] sm:text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span> Tech Solutions</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Architecture Plans</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Car Sales</span>
            <span className="flex items-center gap-1.5 sm:gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Cloud Network</span>
          </div>
        </div>
      </div>
      {/* --- INDUSTRY SHOWCASE SECTION --- */}
      <div className="relative z-10">
        <IndustryShowcase />
      </div>
      {/* --- WHY CHOOSE US SECTION --- */}
      <div className="relative z-10">
      <WhyChooseUs />
      </div>
      {/* --- PROCESS SECTION --- */}
      <div className="relative z-10">
        <Process />
      </div>
      {/* --- STATS SECTION --- */}
      <div className="relative z-10">
        <Stats />
      </div>
      {/* --- CALL TO ACTION SECTION --- */}
      <div className="relative z-10">
        <CTA />
      </div>
      {/* --- BOTTOM INFINITE TICKER --- */}
      <div className="w-full border-t border-white/5 bg-[#03060D] overflow-hidden py-6 z-20 relative">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex-1 flex justify-around items-center text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span>Tech Solution</span>
            <span>Architecture Plans</span>
            <span>Car Sales</span>
            <span>Cloud Network</span>
            <span>Penetration Testing</span>
          </div>
          <div className="flex-1 flex justify-around items-center text-sm font-bold text-gray-400 tracking-widest uppercase">
            <span>Tech Solutions</span>
            <span>Architecture Plans</span>
            <span>Car Sales</span>
            <span>Cloud Network</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;