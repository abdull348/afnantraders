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

import { Building2, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/home/ContactForm';

const contactInfo = [
  {
    icon: Building2,
    label: 'Suite',
    value: 'Suite 16, 1st Floor, NBC Plaza, Shamsabad Murree Road, Rawalpindi, Pakistan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 5209127',
    href: 'tel:+923005209127',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@afnantraders.com',
    href: 'mailto:info@afnantraders.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Saturday, 9:00 AM – 6:00 PM PKT',
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* Form card */}
            <div className="bg-[#F8FCFF] border border-gray-100 rounded-xl p-7 lg:p-10">
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-7">Send Us a Message</h3>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-5 hover:border-[#00A8E8]/20 hover:shadow-[0_2px_12px_rgba(0,168,232,0.06)] transition-all duration-200">
                  <div className="w-9 h-9 rounded-md bg-[#00A8E8]/8 flex items-center justify-center flex-shrink-0">
                    <info.icon size={16} className="text-[#00A8E8]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-[#1a1a2e] hover:text-[#00A8E8] transition-colors leading-snug">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#1a1a2e] leading-snug">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-[#1a1a2e] rounded-lg p-5">
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Response Time</div>
                <div className="text-2xl font-extrabold text-white mb-1">24 Hours</div>
                <p className="text-xs text-white/50 leading-relaxed">
                  We respond to all inquiries within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
