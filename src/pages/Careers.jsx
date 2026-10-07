import { useState } from 'react';
import { Link } from 'react-router-dom';

const jobOpenings = [
  { id: '1', title: 'Senior Full Stack Engineer', department: 'Engineering', location: 'Remote (Global)', type: 'Full-time' },
  { id: '2', title: 'UI/UX Designer', department: 'Design', location: 'Remote or Hybrid', type: 'Full-time' },
  { id: '3', title: 'DevOps Specialist', department: 'Infrastructure', location: 'Remote (US/EU)', type: 'Full-time' },
  { id: '4', title: 'Technical Product Manager', department: 'Product', location: 'Remote', type: 'Full-time' }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 2000);
  };

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

        {/* Open Positions Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div key={job.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-[#0B1120] border border-gray-800 hover:border-cyan-500/50 transition-all">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="text-cyan-400">{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="mt-4 sm:mt-0 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-colors self-start sm:self-auto"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="mt-16 text-center border-t border-gray-800 pt-12">
          <p className="text-gray-400">Don't see a role that fits your skills?</p>
          <Link to="/contact" className="inline-block mt-4 rounded-full bg-[var(--brand-primary,#00f2fe)] px-7 py-3 font-bold text-black hover:opacity-90 transition-opacity">
            Talk to Our Team
          </Link>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#0B1120] border border-gray-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-cyan-400">Application Submitted!</h3>
                <p className="text-gray-300 mt-2">Thank you for applying for the {selectedJob.title} role. We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white">Apply for {selectedJob.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{selectedJob.location} | {selectedJob.type}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
                    <input required type="text" className="w-full bg-[#03060D] border border-gray-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                    <input required type="email" className="w-full bg-[#03060D] border border-gray-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Resume / LinkedIn URL</label>
                    <input required type="url" placeholder="https://..." className="w-full bg-[#03060D] border border-gray-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Cover Note</label>
                    <textarea rows={3} className="w-full bg-[#03060D] border border-gray-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors">
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}