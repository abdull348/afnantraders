'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Stethoscope, Microscope, FlaskConical, Sprout, Users, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import TaperedLine from '@/components/ui/TaperedLine';

const services = [
  {
    icon: Stethoscope,
    number: '01',
    title: 'Medical Technology',
    description: 'Advanced diagnostic systems, patient monitoring equipment, and clinical instruments for modern hospitals and healthcare facilities.',
    span: 2,
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1600&q=80',
    accent: '#00A8E8',
  },
  {
    icon: Microscope,
    number: '02',
    title: 'Diagnostic Instruments',
    description: 'High-precision lab analyzers, microscopy solutions, and immunoassay systems for accurate clinical and research diagnostics.',
    span: 1,
    image: null,
    accent: '#3340A0',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Analytical Systems',
    description: 'Chromatography, spectrometry, and electrochemistry instruments for advanced QA/QC and research analysis.',
    span: 1,
    image: null,
    accent: '#00A8E8',
  },
  {
    icon: Sprout,
    number: '04',
    title: 'Agricultural Research',
    description: 'Crop analysis systems, soil testing equipment, and biotechnology tools for agricultural sciences and food safety labs.',
    span: 2,
    image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&w=1600&q=80',
    accent: '#3340A0',
  },
  {
    icon: Building2,
    number: '05',
    title: 'Institutional Solutions',
    description: 'Turnkey laboratory setup, equipment installation, calibration, and comprehensive ongoing technical support.',
    span: 2,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80',
    accent: '#00A8E8',
  },
  {
    icon: Users,
    number: '06',
    title: 'Veterinary & Research',
    description: 'Specialized diagnostics, imaging, and analytical tools for veterinary medicine and academic research institutions.',
    span: 1,
    image: null,
    accent: '#3340A0',
  },
];

function ServiceCard({ icon: Icon, number, title, description, span, image, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'group relative bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-default',
        'hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]',
        'transition-all duration-350',
        span === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
      )}
    >
      {/* Faded right-edge image for large cards */}
      {image && span === 2 && (
        <div className="absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none overflow-hidden">
          <Image
            src={image}
            fill
            alt=""
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            sizes="30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
        </div>
      )}

      {/* Number watermark — small cards only */}
      {!image && (
        <span
          className="absolute top-4 right-5 text-[68px] font-extrabold select-none pointer-events-none leading-none"
          style={{ color: `${accent}09` }}
        >
          {number}
        </span>
      )}

      <div className="relative z-10 p-7 lg:p-8">
        {/* Number chip */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300"
            style={{ background: `${accent}10` }}
          >
            <Icon size={20} style={{ color: accent }} />
          </div>
          <span className="text-[11px] font-bold text-gray-300 tracking-widest">{number}</span>
        </div>

        {/* Text */}
        <div className="max-w-xs">
          <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#0d0d20] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[14.5px] text-gray-500 leading-[1.72]">{description}</p>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}25` }}
      />

      {/* Gold bottom accent — featured cards */}
      {span === 2 && (
        <div
          className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(90deg, transparent, #F2D16B55, transparent)' }}
        />
      )}

      {/* Subtle top-left corner gradient */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 0%, ${accent}07, transparent 70%)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-4">
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              Precision Solutions for<br />Healthcare & Research
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-[15px] text-gray-500 leading-[1.75]">
              Reliable, innovative technologies for medical, diagnostic, agricultural, and
              molecular research institutions across Pakistan.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#00A8E8] hover:text-[#0096d4] transition-colors group"
            >
              View all services
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
