'use client';
import { motion } from 'framer-motion';
import { Globe2, Dna, Leaf, FlaskConical, TestTube } from 'lucide-react';

const partners = [
  { name: 'Macrogen', country: 'South Korea', specialty: 'Genomics & DNA Sequencing', Icon: Dna, color: '#00A8E8' },
  { name: 'PhytoTech Labs', country: 'USA', specialty: 'Plant Biology', Icon: Leaf, color: '#3340A0' },
  { name: 'Thermo Fisher Scientific', country: 'USA', specialty: 'Analytical & Life Science', Icon: FlaskConical, color: '#00A8E8' },
  { name: 'Thistle Scientific', country: 'United Kingdom', specialty: 'Lab Instruments', Icon: TestTube, color: '#3340A0' },
];

/* Duplicate for seamless marquee loop */
const marqueeItems = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      {/* Gold gradient accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F2D16B]/45 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-[#00A8E8]" />
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Trusted Partners
            </span>
          </div>
          <span className="hidden sm:block text-[11px] text-gray-400 font-medium">
            Serving Pakistan since 2006
          </span>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="flex animate-marquee gap-4 w-max px-4">
            {marqueeItems.map((p, i) => (
              <PartnerCard key={`${p.name}-${i}`} {...p} />
            ))}
          </div>
        </div>

        {/* Partner detail grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8"
        >
          {partners.map((p, i) => (
            <PartnerDetailCard key={p.name} {...p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnerCard({ name, country, Icon, color }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 bg-gray-50/80 border border-gray-100/80 rounded-xl shrink-0 select-none">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${color}12` }}
      >
        <Icon size={15} style={{ color }} />
      </div>
      <div>
        <div className="text-sm font-semibold text-[#1a1a2e] whitespace-nowrap">{name}</div>
        <div className="text-[10px] text-gray-400 font-medium">{country}</div>
      </div>
    </div>
  );
}

function PartnerDetailCard({ name, country, specialty, desc, Icon, color, index }) {
  const descriptions = [
    'World leader in genomics services and next-generation sequencing solutions for research.',
    'Premium plant tissue culture media, growth regulators, and botanical research supplies.',
    'Global leader in scientific instruments, reagents, consumables, and laboratory services.',
    'Comprehensive range of laboratory equipment, glassware, and analytical instruments.',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      viewport={{ once: true }}
      className="group relative flex items-start gap-4 p-5 lg:p-6 bg-white border border-gray-100 rounded-xl hover:border-[#00A8E8]/25 hover:shadow-[0_6px_24px_rgba(0,168,232,0.07)] transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Left gold accent on hover */}
      <div
        className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: '#F2D16B' }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-105"
        style={{ background: `${color}12` }}
      >
        <Icon size={19} style={{ color }} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
          <h3 className="text-[15px] font-bold text-[#1a1a2e] leading-tight">{name}</h3>
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide shrink-0">
            {country}
          </span>
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: `${color}cc` }}>
          {specialty}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{descriptions[index]}</p>
      </div>
    </motion.div>
  );
}
