import React, { useRef, useEffect } from 'react';

const industries = [
  { 
    name: 'Technology', 
    desc: 'Custom software, SaaS, and cloud infrastructure.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
  },
  { 
    name: 'Cars Industry', 
    desc: 'Dealership networks, tracking, and auto-sales platforms.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375A2.625 2.625 0 01.75 16.125V13.5c0-.528.243-1.03.658-1.353l3.6-2.7a2.625 2.625 0 011.58-.534h10.824c.57 0 1.118.192 1.58.534l3.6 2.7c.415.323.658.825.658 1.353v2.625A2.625 2.625 0 0120.625 18.75H19.5m-14.25-6l1.32-2.642C6.983 9.38 7.785 9 8.665 9h6.67c.88 0 1.682.38 2.095 1.108l1.32 2.642" /></svg>
  },
  { 
    name: 'Healthcare', 
    desc: 'Secure patient care and medical software.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h-5.25V5.25a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v5.25H3a.75.75 0 00-.75.75v6a.75.75 0 00.75.75h5.25v5.25a.75.75 0 00.75.75h6a.75.75 0 00.75-.75v-5.25H21a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75z" /></svg>
  },
  { 
    name: 'Education', 
    desc: 'Interactive learning and EdTech platforms.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
  },
  { 
    name: 'Government', 
    desc: 'Compliant and secure public sector tools.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
  },
  { 
    name: 'Manufacturing', 
    desc: 'Automated workflows and industrial systems.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
  },
  { 
    name: 'Mining', 
    desc: 'Resource management and operational tracking.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.673 4.673a2.25 2.25 0 01-3.182 0l-1.06-1.06a2.25 2.25 0 010-3.182l4.673-4.673m-1.5 4.5l1.5-1.5M4.5 4.5l15 15m-15-15l3 3m12-3l-3 3M4.5 4.5L3 6" /></svg>
  },
  { 
    name: 'Agriculture', 
    desc: 'Smart farming and agricultural technology.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
  },
  { 
    name: 'Retail', 
    desc: 'E-commerce and omnichannel storefronts.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
  },
  { 
    name: 'Finance', 
    desc: 'Secure banking and fintech solutions.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  { 
    name: 'Logistics', 
    desc: 'Supply chain and fleet management.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375M9 11.25v1.5c0 .621.504 1.125 1.125 1.125h6m-1.5-1.5V6.375c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v7.5m11.25-1.5h1.5a1.125 1.125 0 011.125 1.125v1.5M16.5 6.375h1.5A1.125 1.125 0 0119.125 7.5v3.375m-2.625-4.5V3.375m0 0H18m-1.5 0V1.875" /></svg>
  },
  { 
    name: 'Architectural', 
    desc: 'Advanced drafting and structural design solutions.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21v-4.5M19.5 21v-4.5M19.5 21a3 3 0 11-6 0v-4.5m6 4.5a3 3 0 10-6 0M4.5 21v-4.5M4.5 21a3 3 0 106 0v-4.5M4.5 21a3 3 0 116 0M12 4.5L3 13.5m9-9l9 9m-9-9v12" /></svg>
  },
  { 
    name: 'Hospitality', 
    desc: 'Booking systems and guest experiences.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
  },
  { 
    name: 'NGOs', 
    desc: 'Donation portals and community management.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
  },
  { 
    name: 'Telecommunications', 
    desc: 'Network infrastructure and communication tools.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>
  },
];

export default function IndustryShowcase() {
  const trackRef = useRef(null);

  // Magic 3D Tracking: Calculates distance from center and updates CSS variables dynamically
  useEffect(() => {
    let animationFrameId;

    const updateCards = () => {
      if (!trackRef.current) return;
      
      const cards = trackRef.current.querySelectorAll('.industry-card');
      const screenCenter = window.innerWidth / 2;
      // Calculate how far out the effect should start (roughly 75% of half the screen)
      const maxDistance = screenCenter * 1.5; 

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        
        // Calculate raw distance from the center of the screen
        const distance = Math.abs(screenCenter - cardCenter);
        
        // Calculate 'proximity' (0 = at edges, 1 = dead center)
        const proximity = Math.max(0, 1 - (distance / maxDistance));
        
        // Determine if the card is on the left (-1) or right (1) side of the screen
        const direction = cardCenter < screenCenter ? 1 : -1;

        // Pass these values to the CSS engine as variables
        card.style.setProperty('--px', proximity.toFixed(3));
        card.style.setProperty('--dir', direction);
      });

      animationFrameId = requestAnimationFrame(updateCards);
    };

    updateCards();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative py-32 bg-transparent overflow-hidden font-sans">
      
      {/* Dynamic 3D Coverflow & Color Transition Styles */}
      <style>
        {`
          @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: -200% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 3s linear infinite;
          }
          
          /* Slow Motion Animation (100 seconds) */
          @keyframes super-slow-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-super-slow {
            animation: super-slow-marquee 100s linear infinite;
          }

          /* --- THE 3D HOLOGRAPHIC CARD EFFECT --- */
          .industry-card {
             /* Fallback variables in case JS hasn't run yet */
             --px: 0; 
             --dir: 1; 

             /* 1. Scale, tilt, and push back cards based on how far they are from the center */
             transform: perspective(1200px) 
                        rotateY(calc(var(--dir) * (1 - var(--px)) * 35deg)) 
                        translateZ(calc(var(--px) * 50px))
                        scale(calc(0.85 + (var(--px) * 0.2)));
             
             /* 2. Color Change: Ghostly and faded at edges, bright cyan/blue at the center */
             opacity: calc(0.3 + (var(--px) * 0.7));
             filter: grayscale(calc(100% - (var(--px) * 100%))) 
                     brightness(calc(0.6 + (var(--px) * 0.6)));
             
             /* 3. Border glow intensifies as it reaches center */
             border-color: rgba(6, 182, 212, calc(var(--px) * 0.6));
             box-shadow: 0 calc(var(--px) * 20px) calc(var(--px) * 40px) calc(var(--px) * -10px) rgba(6,182,212,calc(var(--px) * 0.5));
             
             z-index: calc(var(--px) * 10);
             transition: all 0.1s linear; /* Tiny transition smooths out frame drops */
          }

          /* Hover heavily overrides the math calculation so users can interact freely */
          .industry-card:hover {
             transform: perspective(1200px) rotateY(0deg) translateZ(80px) scale(1.1) !important;
             filter: grayscale(0%) brightness(1.2) !important;
             opacity: 1 !important;
             border-color: #22d3ee !important;
             box-shadow: 0 20px 50px -10px rgba(6,182,212,0.6) !important;
             background-image: linear-gradient(to bottom, #172a52, #03060D) !important;
             z-index: 50 !important;
             transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease, border-color 0.3s ease !important;
          }

          .industry-card:hover .icon-box {
             color: #22d3ee;
             border-color: #22d3ee;
             box-shadow: 0 0 25px rgba(6,182,212,0.6);
             transform: scale(1.15);
          }

          .industry-card:hover .card-title {
             color: #67e8f9;
          }

          .industry-card:hover .card-desc {
             color: #ffffff;
          }

          .industry-card:hover .card-line {
             width: 100%;
          }
        `}
      </style>

      {/* Subtle Background Glow for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-orange-400 to-[#e11d48] animate-text-shimmer drop-shadow-lg">
            Industries We Empower
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto drop-shadow-sm">
          Delivering specialized, scalable digital architecture across all major sectors.
        </p>
      </div>

      {/* The Mask Image handles the hard fade out at the extreme left and right edges */}
      <div className="relative w-full max-w-[100vw] mx-auto overflow-visible [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-12">
        
        {/* Infinite Scroll Track - Using the new 100-second super slow animation */}
        <div ref={trackRef} className="flex w-max animate-super-slow hover:[animation-play-state:paused] items-center">
          
          {[...industries, ...industries, ...industries].map((industry, index) => (
            <div 
              key={index}
              className="industry-card flex-none w-[320px] mx-6 p-8 rounded-2xl bg-[#080c16] backdrop-blur-xl border border-blue-500/10 cursor-pointer relative overflow-hidden"
            >
              {/* Icon Container */}
              <div className="icon-box relative z-10 w-16 h-16 mb-6 rounded-xl bg-[#03060D] border border-blue-500/20 flex items-center justify-center text-blue-300 transition-all duration-300">
                {industry.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="card-title relative z-10 text-2xl font-bold text-gray-100 mb-3 transition-colors duration-300 drop-shadow-md">
                {industry.name}
              </h3>
              
              <p className="card-desc relative z-10 text-[15px] text-gray-400 leading-relaxed transition-colors duration-300">
                {industry.desc}
              </p>
              
              {/* Bottom glowing decorative line */}
              <div className="card-line absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(6,182,212,1)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}