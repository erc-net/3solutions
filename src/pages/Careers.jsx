import { Link } from 'react-router-dom';

export default function Careers() {
  const whatsappNumber = "263790292355";
  const whatsappMessage = encodeURIComponent(
    "Hello 3Solutions Team, I would like to join your talent pool for future career opportunities!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen bg-[#03060D] text-white pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm">3Solutions Careers</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black">Build the Future with Us</h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
          We deliver tailored, scalable, and high-performance solutions designed around modern business requirements. We are a digital-first company supporting <strong className="text-white font-semibold">100% remote roles</strong> alongside hybrid opportunities worldwide.
        </p>

        {/* Remote Work Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-cyan-400">Work From Anywhere</h2>
            <p className="text-gray-300 text-sm mt-1">We offer flexible, fully remote positions across multiple time zones. Work where you are most productive.</p>
          </div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 whitespace-nowrap">
            🌎 Remote First
          </span>
        </div>

        {/* No Open Positions Banner */}
        <div className="mt-16 rounded-2xl bg-[#0B1120] border border-gray-800 p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-2xl">
            📢
          </div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">No Open Positions At The Moment</h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            We currently do not have any active job openings. However, we are always on the lookout for exceptional talent as we continue to grow.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Link Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>💬</span>
              <span>Join Our Talent Pool via WhatsApp</span>
            </a>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}