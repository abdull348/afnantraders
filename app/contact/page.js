export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Afnan Traders. Request a quote, consultation, or product inquiry. Suite located in Rawalpindi, Pakistan.',
  openGraph: {
    title: 'Contact Us | Afnan Traders',
    description:
      'Get in touch with Afnan Traders for product inquiries, quotes, and consultations.',
  },
};

import { Building2, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/home/ContactForm';

const contactInfo = [
  {
    icon: Building2,
    label: 'Office',
    value: 'Suite 16, 1st Floor, NBC Plaza, Shamsabad Murree Road, Rawalpindi, Pakistan',
    color: '#00A8E8',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 5209127',
    href: 'tel:+923005209127',
    color: '#3340A0',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@afnantraders.com',
    href: 'mailto:info@afnantraders.com',
    color: '#00A8E8',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Saturday, 9:00 AM – 6:00 PM PKT',
    color: '#3340A0',
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        label="Get in Touch"
        title="Let's Start a Conversation"
        description="Have questions about our scientific solutions? Our expert team is ready to help you find the right instruments for your institution."
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">

            {/* ── LEFT: Contact details ── */}
            <div className="space-y-3">

              {/* Company info card */}
              <div className="bg-[#F8FCFF] border border-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-4 h-px bg-[#00A8E8]" />
                  <span className="text-[10px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">Afnan Traders</span>
                </div>
                <h4 className="text-[15px] font-bold text-[#1a1a2e] mb-1.5">Pakistan's Life Science Partner</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Trusted distributor of medical, diagnostic, and research instruments since 2006.
                  Serving hospitals, labs, and institutions nationwide.
                </p>
              </div>

              {/* Contact info cards */}
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3.5 bg-white border border-gray-100 rounded-xl p-4 hover:border-transparent hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200"
                    style={{ background: `${info.color}10` }}
                  >
                    <info.icon size={15} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[13px] font-medium text-[#1a1a2e] hover:text-[#00A8E8] transition-colors leading-snug"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[13px] font-medium text-[#1a1a2e] leading-snug">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Response time */}
              <div className="bg-gradient-to-r from-[#F2D16B]/14 to-[#F2D16B]/06 border border-[#F2D16B]/25 rounded-xl p-5">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1.5">
                  Response Time
                </div>
                <div className="text-xl font-extrabold text-[#1a1a2e] mb-1">Within 24 Hours</div>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  We respond to all inquiries on business days.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-[#00A8E8]/10 flex items-center justify-center">
                  <MessageSquare size={16} className="text-[#00A8E8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] leading-tight">Send Us a Message</h3>
                  <p className="text-[12.5px] text-gray-400 mt-0.5">We respond within 24 business hours.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
