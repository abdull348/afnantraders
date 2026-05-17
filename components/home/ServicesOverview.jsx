'use client';
import { motion } from 'framer-motion';
import { Stethoscope, Microscope, FlaskConical, Sprout, Users, Building2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Medical Technology',
    description: 'Advanced diagnostic systems, patient monitoring equipment, and clinical instruments for modern hospitals.',
    number: '01',
    accent: '#00A8E8',
  },
  {
    icon: Microscope,
    title: 'Diagnostic Instruments',
    description: 'High-precision lab analyzers, microscopy solutions, and immunoassay systems for accurate diagnostics.',
    number: '02',
    accent: '#3340A0',
  },
  {
    icon: FlaskConical,
    title: 'Analytical Systems',
    description: 'Chromatography, spectrometry, and electrochemistry instruments for advanced research analysis.',
    number: '03',
    accent: '#00A8E8',
  },
  {
    icon: Sprout,
    title: 'Agricultural Research',
    description: 'Crop analysis systems, soil testing equipment, and biotech tools for agricultural sciences.',
    number: '04',
    accent: '#3340A0',
  },
  {
    icon: Users,
    title: 'Veterinary & Research',
    description: 'Specialized diagnostics, imaging systems, and analytical tools for veterinary medicine.',
    number: '05',
    accent: '#00A8E8',
  },
  {
    icon: Building2,
    title: 'Institutional Solutions',
    description: 'Turnkey laboratory setup, equipment installation, calibration, and full technical support.',
    number: '06',
    accent: '#3340A0',
  },
];

function ServiceCard({ icon: Icon, title, description, number, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-white/75 backdrop-blur-md border border-white/80 rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,168,232,0.14)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden cursor-default"
      style={{
        '--accent': accent,
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}35` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}28)` }}
        >
          <Icon size={22} style={{ color: accent }} />
        </div>
        <span className="text-5xl font-extrabold leading-none select-none pointer-events-none"
          style={{ color: `${accent}14` }}>
          {number}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-[#1a1a2e] mb-2.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>

      {/* Footer */}
      <div
        className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
        style={{ color: accent }}
      >
        Learn more
        <ArrowUpRight size={13} />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}50, transparent)` }}
      />
    </motion.div>
  );
}

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A8E8]/10 border border-[#00A8E8]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8]" />
            <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] leading-tight mb-5">
            Precision Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#3340A0]">
              Healthcare & Research
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Delivering reliable, innovative technologies across medical, diagnostic,
            agricultural, and molecular research institutions in Pakistan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
