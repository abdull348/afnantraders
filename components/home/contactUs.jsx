'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Office #16, 1st Floor, NBC Plaza, Shamsabad Murree Rd, Rawalpindi',
    color: '#00A8E8',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 5209127',
    color: '#3340A0',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@afnantraders.com',
    color: '#00A8E8',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 text-[#1a1a2e] text-sm bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/30 focus:border-[#00A8E8]/50 placeholder-gray-400 transition-all duration-200 hover:border-gray-300";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#F8FCFF] overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full bg-[#00A8E8]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8E8]/10 border border-[#00A8E8]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8]" />
            <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] leading-tight mb-5">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#3340A0]">
              Remarkable
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Have questions about our scientific solutions? Our experts are ready to help
            you find the perfect instruments for your research needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-7 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
          >
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-7">Send Us a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#00A8E8]/12 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[#00A8E8]" />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">Message Sent!</h4>
                <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className={inputClass} placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Subject</label>
                  <input
                    type="text" name="subject"
                    value={formData.subject} onChange={handleChange}
                    className={inputClass} placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-gradient-to-r from-[#00A8E8] to-[#3340A0] text-white font-semibold rounded-xl shadow-md shadow-[#00A8E8]/25 hover:shadow-lg hover:shadow-[#00A8E8]/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Intro card */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#3340A0] rounded-3xl p-7 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                <span className="text-white text-sm font-extrabold">AT</span>
              </div>
              <h4 className="text-lg font-bold mb-3">Afnan Traders</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Pakistan's trusted life science solutions provider.
                We serve hospitals, research institutions, and laboratories nationwide.
              </p>
            </div>

            {/* Contact info cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-white/80 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(0,168,232,0.1)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}14` }}
                >
                  <info.icon size={17} style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{info.label}</div>
                  <div className="text-sm font-semibold text-[#1a1a2e] leading-snug">{info.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Gold accent card */}
            <div className="bg-gradient-to-r from-[#F2D16B]/20 to-[#F2D16B]/10 border border-[#F2D16B]/30 rounded-2xl p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-[#1a1a2e]">Response time:</span>{' '}
                We typically respond to all inquiries within <span className="font-semibold text-[#3340A0]">24 hours</span> on business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
