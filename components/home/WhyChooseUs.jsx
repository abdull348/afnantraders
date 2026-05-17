'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Award } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality-Assured Supply',
    desc: 'All instruments sourced from ISO, CE, and WHO certified global manufacturers — fully verified before delivery.',
  },
  {
    icon: Headphones,
    title: 'Dedicated After-Sales Service',
    desc: 'Professional installation, scheduled calibration, and ongoing technical support throughout equipment lifecycle.',
  },
  {
    icon: Award,
    title: 'Expert Scientific Team',
    desc: 'PhD scientists and certified engineers with deep domain expertise across all life science instrument categories.',
  },
];

const keyFigures = [
  { value: '500+', label: 'Institutions Served' },
  { value: '4', label: 'Global Partners' },
  { value: '24/7', label: 'Technical Support' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[50%_50%] gap-16 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-5">
              <TaperedLine color="#3340A0" />
              <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight mb-5">
              Pakistan's Most Trusted<br />Life Science Partner
            </h2>
            <p className="text-[15px] text-gray-500 leading-7 mb-10 max-w-md">
              For over 20 years, Afnan Traders has built its reputation on reliability, technical
              expertise, and genuine long-term partnership with Pakistan's scientific community.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#00A8E8]/14 transition-colors duration-200">
                    <f.icon size={18} className="text-[#00A8E8]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1a1a2e] mb-1">{f.title}</h4>
                    <p className="text-[15px] text-gray-500 leading-7">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image + key figures */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Image panel */}
            <div className="relative rounded-xl overflow-hidden border border-gray-100 h-52">
              <Image
                src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?auto=format&fit=crop&w=1600&q=80"
                fill
                alt="Precision scientific instruments"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="text-4xl font-extrabold text-white leading-none">20+</div>
                <div className="text-xs font-semibold text-white/70 uppercase tracking-wider mt-1">Years of Excellence</div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F2D16B]/70" />
            </div>

            {/* Key figures grid */}
            <div className="grid grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
              {keyFigures.map((fig, i) => (
                <div key={i} className="bg-white p-6 lg:p-8 hover:bg-[#F8FCFF] transition-colors duration-200">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] tracking-tight mb-2">
                    {fig.value}
                  </div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider leading-tight">
                    {fig.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
