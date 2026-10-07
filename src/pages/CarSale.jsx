import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CarSale() {
  const whatsappNumber = '263777799316'; // Replace with your target WhatsApp phone number

  // Sample Car Gallery Data
  // In a real application, this data would likely come from an API or database
  // Each car object contains details like name, brand, price, year, engine, transmission, power, and an image URL
  // The cars array is used to populate the car gallery and provide details for the spec inspector
  // The services array contains information about the different services offered by the car sale page
  const cars = [
    {
      id: '1',
      name: 'Cyber Sedan GT',
      brand: '3Solutions EV',
      price: '$45,000',
      year: 2026,
      engine: 'Dual Motor AWD',
      transmission: 'Direct Drive',
      power: '480 hp',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      name: 'Apex Horizon SUV',
      brand: 'Apex Motors',
      price: '$62,000',
      year: 2025,
      engine: '3.0L Turbo Hybrid',
      transmission: '8-Speed Automatic',
      power: '375 hp',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      name: 'Vortex Roadster',
      brand: 'Vortex',
      price: '$88,000',
      year: 2026,
      engine: '4.0L Twin-Turbo V8',
      transmission: '7-Speed Dual-Clutch',
      power: '610 hp',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Car Sale Services Data
  const services = [
    {
      id: '01',
      title: 'Direct Car Sales & Procurement',
      description: 'Access top-tier verified pre-owned and new vehicles imported directly to your specifications.',
      icon: '⚡',
    },
    {
      id: '02',
      title: 'Vehicle Trade-in & Valuation',
      description: 'Get transparent AI-driven market valuations and seamless trade-in credits for your current vehicle.',
      icon: '🔄',
    },
    {
      id: '03',
      title: 'Pre-Purchase Inspection',
      description: 'Full 150-point diagnostic scan and mechanical assessment report before committing to buy.',
      icon: '🛡️',
    },
  ];

  // Selected car state for detailed view
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleWhatsAppInquiry = (car) => {
    const message = encodeURIComponent(
      `Hello 3Solutions team, I am interested in inquiring about the ${car.brand} ${car.name} priced at ${car.price}. Please provide more details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#03060D] text-white pt-28 pb-20 selection:bg-cyan-500 selection:text-black">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <header className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            3Solutions Mobility
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
            Car Sale Services
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            High-tech vehicle sourcing, verifiable multi-point digital inspections, and seamless buying experiences driven by transparency.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#gallery"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              Browse Inventory
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 border border-slate-700 px-8 py-3.5 font-bold text-slate-200 hover:border-cyan-400 hover:text-white transition-all duration-300"
            >
              Custom Order
            </Link>
          </div>
        </header>

        {/* Services Section */}
        <section className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 font-mono">
              // Our Services
            </h2>
            <p className="text-3xl font-extrabold mt-2">End-to-End Automotive Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-slate-800 bg-slate-950/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <span className="font-mono text-xs text-cyan-500">{service.id}</span>
                <h3 className="text-xl font-bold mt-2 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Car Gallery & Spec Inspector */}
        <section id="gallery" className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-cyan-400 font-mono">
                // Showroom
              </h2>
              <p className="text-3xl font-extrabold mt-2">Available Vehicles</p>
            </div>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Click any vehicle name to inspect specs & initiate direct WhatsApp chat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Car List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cars.map((car) => {
                const isActive = selectedCar?.id === car.id;
                return (
                  <div
                    key={car.id}
                    onClick={() => setSelectedCar(car)}
                    className={`cursor-pointer group relative rounded-xl border overflow-hidden transition-all duration-300 bg-slate-950/80 ${
                      isActive
                        ? 'border-cyan-400 ring-2 ring-cyan-400/20 shadow-lg shadow-cyan-500/10'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-900">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-mono text-cyan-400 uppercase">{car.brand}</p>
                      <button className="text-lg font-bold mt-1 text-white text-left hover:text-cyan-400 transition-colors">
                        {car.name}
                      </button>
                      <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3">
                        <span className="text-xl font-extrabold text-cyan-400">{car.price}</span>
                        <span className="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300 font-mono">
                          {car.year}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Spec Inspector */}
            <div className="lg:col-span-5 sticky top-28 rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 backdrop-blur-md shadow-2xl">
              {selectedCar ? (
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      [ Telemetry Inspector ]
                    </span>
                    <h3 className="text-3xl font-black mt-1">{selectedCar.name}</h3>
                    <p className="text-slate-400 text-sm">{selectedCar.brand}</p>
                  </div>

                  <div className="text-3xl font-black text-cyan-400 border-y border-slate-800 py-3">
                    {selectedCar.price}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-500 block font-mono">MODEL YEAR</span>
                      <span className="font-bold">{selectedCar.year}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-500 block font-mono">HORSEPOWER</span>
                      <span className="font-bold">{selectedCar.power}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 col-span-2">
                      <span className="text-xs text-slate-500 block font-mono">POWERTRAIN / ENGINE</span>
                      <span className="font-bold">{selectedCar.engine}</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 col-span-2">
                      <span className="text-xs text-slate-500 block font-mono">TRANSMISSION</span>
                      <span className="font-bold">{selectedCar.transmission}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(selectedCar)}
                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    Inquire on WhatsApp
                  </button>
                </div>
              ) : (
                <p className="text-slate-500 text-center py-12">Select a vehicle to inspect details.</p>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}