import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@3solutions.co.zw',
    subtext: 'Direct responses within 24 hours',
    action: 'mailto:info@3solutions.co.zw',
    badgeColor: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-400/50',
  },
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+263 777799316',
    subtext: 'Mon-Fri from 8:00 AM to 5:00 PM CAT',
    action: 'tel:+263777799316',
    badgeColor: 'from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30',
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-400/50',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Direct',
    detail: '+263 777799316',
    subtext: 'Connect with our engineering team directly',
    action: 'https://wa.me/263777799316',
    badgeColor: 'from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-400/50',
    isWhatsApp: true,
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    detail: 'Bulawayo, Zimbabwe',
    subtext: 'Available for on-site & remote consultations',
    action: '#location',
    badgeColor: 'from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30',
    iconColor: 'text-pink-400',
    borderColor: 'hover:border-pink-400/50',
  },
];

const faqs = [
  {
    question: 'What types of project engagement models do you support?',
    answer: 'We offer flexible engagement models tailored to your scope—including end-to-end fixed project delivery, dedicated engineering team extension, and hourly technical consulting.',
  },
  {
    question: 'How quickly can 3-Solutions initiate a cybersecurity audit or software build?',
    answer: 'Following our initial technical discovery call, we typically provide a detailed architectural roadmap and commence onboarding within 3 to 5 business days.',
  },
  {
    question: 'Do you offer support and maintenance after deployment?',
    answer: 'Yes, we provide 24/7 proactive network monitoring, routine security patch management, and dedicated SLA-backed support packages.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Engineering',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Software Engineering',
        message: '',
      });
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#03060D] text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Cool Background Gradients & Sci-Fi Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-pink-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-blue-500/10 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider mb-6">
            <Sparkles size={14} className="text-pink-400 animate-pulse" />
            3-Solutions Contact Center
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-500">Exceptional Together</span>.
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Have a project in mind, need a security audit, or want to consult on your IT infrastructure? Reach out to our engineering team through your preferred channel.
          </p>
        </div>

        {/* Multi-Colored Quick Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const IconComponent = info.icon;
            return (
              <a
                key={idx}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className={`group p-6 rounded-3xl bg-[#0B1120]/80 backdrop-blur-md border border-gray-800 ${info.borderColor} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg`}
              >
                <div>
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${info.badgeColor} border flex items-center justify-center ${info.iconColor} group-hover:scale-110 transition-transform`}>
                    {info.isWhatsApp ? (
                      /* Custom WhatsApp SVG Icon */
                      <svg className="w-6 h-6 fill-current text-emerald-400" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    ) : (
                      <IconComponent size={22} />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{info.title}</h3>
                  <p className={`mt-1 text-sm font-semibold ${info.iconColor}`}>{info.detail}</p>
                </div>
                <p className="mt-4 text-xs text-gray-400 border-t border-gray-800/80 pt-3">{info.subtext}</p>
              </a>
            );
          })}
        </div>

        {/* Main Interactive Form & Styled Side Card */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Form with Vibrant Accent Highlights */}
          <div className="lg:col-span-7 bg-[#0B1120] border border-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />

            <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-sm text-gray-400 mb-8">Fill out the form below and our lead engineer will respond within 24 hours.</p>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-16 w-16 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto border border-cyan-400/30">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Delivered Successfully!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out to 3-Solutions. A member of our technical consulting team will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eric Taruwinga"
                      className="w-full bg-[#03060D] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-[#03060D] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+263 77 000 0000"
                      className="w-full bg-[#03060D] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#03060D] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Software Engineering">Software Engineering & Web Apps</option>
                      <option value="Penetration Testing">Penetration Testing & Security Audit</option>
                      <option value="Cloud Solutions">Cloud Infrastructure & Networking</option>
                      <option value="IT Advisory">IT Strategy & Technical Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Project Details / Message *</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project scope, requirements, or timeline..."
                    className="w-full bg-[#03060D] border border-gray-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-black font-bold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Consultation Side Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1120] via-[#0E172A] to-[#03060D] border border-cyan-500/30 p-8 space-y-6 relative overflow-hidden">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                Direct Technical Advisory
              </span>
              <h3 className="text-2xl font-bold text-white">Need immediate technical consultation?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you require urgent vulnerability auditing, Starlink multi-WAN network isolation, or high-performance React frontend development, our engineering lead is ready to consult.
              </p>

              <div className="space-y-4 pt-2 border-t border-gray-800/80">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock size={18} className="text-cyan-400 shrink-0" />
                  <span>Standard Response Time: <strong className="text-cyan-400">&lt; 2 Hours</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <ShieldCheck size={18} className="text-pink-400 shrink-0" />
                  <span>NDA Provided Upon Request</span>
                </div>
              </div>
            </div>

            {/* Bulawayo Base Card */}
            <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 space-y-3">
              <h4 className="text-lg font-bold text-white">Bulawayo Operating Base</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our core operations are stationed in Bulawayo, providing local on-site technical support across Zimbabwe alongside global remote delivery.
              </p>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 border-t border-gray-800">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-2 text-sm">Common questions before starting a project with 3-Solutions.</p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0B1120] border border-gray-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-bold text-white text-base flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-cyan-400 font-mono text-xl">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}