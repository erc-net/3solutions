import React from 'react';

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "150+" },
  { label: "Years Experience", value: "10+" },
  { label: "Global Reach", value: "20+" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i} className="hover:scale-105 transition-transform">
            <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              {s.value}
            </h4>
            <p className="text-cyan-500 uppercase tracking-widest text-xs mt-2 font-bold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}