'use client';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';

const partners = [
  {
    name: 'Macrogen',
    country: 'South Korea',
    specialty: 'Genomics & DNA Sequencing',
    desc: 'World leader in genomics services and next-generation sequencing solutions for research.',
    color: '#00A8E8',
  },
  {
    name: 'PhytoTech Labs',
    country: 'USA',
    specialty: 'Plant Biology & Tissue Culture',
    desc: 'Premium plant tissue culture media, growth regulators, and botanical research supplies.',
    color: '#3340A0',
  },
  {
    name: 'Thermo Fisher Scientific',
    country: 'USA',
    specialty: 'Analytical & Life Science',
    desc: 'Global leader in scientific instruments, reagents, consumables, and laboratory services.',
    color: '#00A8E8',
  },
  {
    name: 'Thistle Scientific',
    country: 'United Kingdom',
    specialty: 'Laboratory Instruments & Supplies',
    desc: 'Comprehensive range of laboratory equipment, glassware, and analytical instruments.',
    color: '#3340A0',
  },
];

export default function Partners() {
  return (
    <section className="py-14 bg-[#F8FCFF] border-y border-gray-100">
      {/* Gold top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F2D16B]/50 to-transparent mb-14 -mt-14" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <TaperedLine color="#00A8E8" />
            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Trusted Partners
            </h2>
          </div>
          <span className="text-[11px] text-gray-400 font-medium hidden sm:block">Serving Pakistan since 2006</span>
        </div>

        {/* Partners grid — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex items-start gap-5 p-6 lg:p-7 bg-white border border-gray-100 rounded-lg hover:border-[#00A8E8]/25 hover:shadow-[0_4px_20px_rgba(0,168,232,0.07)] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
                style={{ background: `${p.color}12` }}
              >
                <Globe size={20} style={{ color: p.color }} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2.5 flex-wrap mb-1.5">
                  <h3 className="text-lg font-bold text-[#1a1a2e] leading-tight">{p.name}</h3>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide flex-shrink-0">{p.country}</span>
                </div>
                <div className="text-xs font-bold mb-2.5" style={{ color: '#a07e00' }}>
                  {p.specialty}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>

              {/* Gold left accent on hover */}
              <div
                className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#F2D16B' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
