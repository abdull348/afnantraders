'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Award, TrendingUp } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality-Assured Supply',
    desc: 'All instruments sourced from ISO, CE, and WHO certified global manufacturers — fully verified before delivery.',
    color: '#00A8E8',
  },
  {
    icon: Headphones,
    title: 'Dedicated After-Sales Service',
    desc: 'Professional installation, scheduled calibration, and ongoing technical support throughout equipment lifecycle.',
    color: '#3340A0',
  },
  {
    icon: Award,
    title: 'Expert Scientific Team',
    desc: 'PhD scientists and certified engineers with deep domain expertise across all life science instrument categories.',
    color: '#00A8E8',
  },
];

const keyFigures = [
  { value: '500+', label: 'Institutions Served', icon: TrendingUp, color: '#00A8E8' },
  { value: '4', label: 'Global Partners', icon: Award, color: '#3340A0' },
  { value: '24/7', label: 'Technical Support', icon: Headphones, color: '#00A8E8' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[52%_48%] gap-14 lg:gap-20 items-start">

          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <TaperedLine color="#3340A0" />
              <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-[0.2em]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-[2.2rem] font-extrabold text-[#1a1a2e] leading-tight tracking-tight mb-5">
              Pakistan's Most Trusted<br />Life Science Partner
            </h2>
            <p className="text-[15px] text-gray-500 leading-[1.75] mb-10 max-w-md">
              For over 20 years, Afnan Traders has built its reputation on reliability, technical
              expertise, and genuine long-term partnership with Pakistan's scientific community.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8FCFF] transition-colors duration-200 -mx-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200"
                    style={{ background: `${f.color}10` }}
                  >
                    <f.icon size={18} style={{ color: f.color }} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1a1a2e] mb-1">{f.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-[1.72]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image + key figures */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Primary image panel */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 h-56 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?auto=format&fit=crop&w=1600&q=80"
                fill
                alt="Precision scientific instruments"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-[#1a1a2e]/15 to-transparent" />
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#F2D16B]/75" />
              {/* Text overlay */}
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[2.4rem] font-extrabold text-white leading-none tracking-tight">20+</div>
                  <div className="text-[11px] font-semibold text-white/65 uppercase tracking-wider mt-1">
                    Years of Excellence
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/12 border border-white/18 flex items-center justify-center">
                  <Award size={18} className="text-[#F2D16B]" />
                </div>
              </div>
            </div>

            {/* Key figures — 3 column grid */}
            <div className="grid grid-cols-3 gap-3">
              {keyFigures.map((fig, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-transparent hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300 text-center"
                >
                  <div
                    className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                    style={{ background: `${fig.color}10` }}
                  >
                    <fig.icon size={15} style={{ color: fig.color }} />
                  </div>
                  <div
                    className="text-[1.6rem] font-extrabold tracking-tight leading-none mb-1.5"
                    style={{ color: fig.color }}
                  >
                    {fig.value}
                  </div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide leading-tight">
                    {fig.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative secondary panel */}
            <div className="relative rounded-xl overflow-hidden h-32 bg-gradient-to-br from-[#1a1a2e] to-[#3340A0] border border-[#3340A0]/20">
              {/* Dot grid overlay */}
              <div className="absolute inset-0 bg-dot-grid-dark opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/10 to-transparent" />
              <div className="absolute inset-0 flex items-center px-7">
                <div>
                  <div className="text-[10px] font-bold text-white/35 uppercase tracking-[0.2em] mb-2">
                    Response Time
                  </div>
                  <div className="text-2xl font-extrabold text-white">24 Hours</div>
                  <div className="text-[12px] text-white/45 mt-1">For all technical inquiries</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
