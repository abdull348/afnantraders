'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
    }, 2000);
  };

  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  const inputClass =
    'w-full px-4 py-2.5 text-sm text-[#1a1a2e] bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/25 focus:border-[#00A8E8]/60 placeholder-gray-400 transition-all duration-200 hover:border-gray-300';
  const labelClass = 'block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#00A8E8]/10 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-[#00A8E8]" />
        </div>
        <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">Message Sent Successfully</h4>
        <p className="text-sm text-gray-500">We'll respond within 24 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
          <input type="text" required value={formData.name} onChange={set('name')}
            className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label className={labelClass}>Email Address <span className="text-red-400">*</span></label>
          <input type="email" required value={formData.email} onChange={set('email')}
            className={inputClass} placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Organization / Institution</label>
        <input type="text" value={formData.organization} onChange={set('organization')}
          className={inputClass} placeholder="Hospital, university, or company name" />
      </div>
      <div>
        <label className={labelClass}>Subject <span className="text-red-400">*</span></label>
        <input type="text" required value={formData.subject} onChange={set('subject')}
          className={inputClass} placeholder="e.g. Product inquiry, technical support…" />
      </div>
      <div>
        <label className={labelClass}>Message <span className="text-red-400">*</span></label>
        <textarea required rows={5} value={formData.message} onChange={set('message')}
          className={`${inputClass} resize-none`} placeholder="Tell us about your requirements…" />
      </div>
      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full gap-2 rounded-lg mt-1">
        {isSubmitting ? (
          <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending…</>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </Button>
    </form>
  );
}
