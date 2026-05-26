'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dna, Leaf, FlaskConical, TestTube, ChevronRight } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';

const products = [
  {
    icon: Dna,
    partner: 'Macrogen',
    country: 'South Korea',
    title: 'Genomics & Molecular Biology',
    desc: 'World-class sequencing services and molecular biology solutions for advanced research.',
    items: ['DNA / RNA Sequencing', 'Next-Gen Sequencing (NGS)', 'Gene Synthesis', 'Genotyping Services'],
    color: '#00A8E8',
  },
  {
    icon: Leaf,
    partner: 'PhytoTech Labs',
    country: 'USA',
    title: 'Plant Biology & Tissue Culture',
    desc: 'Specialized media and reagents for plant research, tissue culture, and botanical science.',
    items: ['Tissue Culture Media', 'Plant Growth Regulators', 'Botanical Reagents', 'Sterile Supplies'],
    color: '#3340A0',
  },
  {
    icon: FlaskConical,
    partner: 'Thermo Fisher Scientific',
    country: 'USA',
    title: 'Analytical Instruments & Reagents',
    desc: 'Laboratory instruments and consumables for clinical and research environments.',
    items: ['PCR & qPCR Systems', 'Spectrophotometers', 'Centrifuges & Mixers', 'Lab Consumables'],
    color: '#00A8E8',
  },
  {
    icon: TestTube,
    partner: 'Thistle Scientific',
    country: 'United Kingdom',
    title: 'Laboratory Equipment & Supplies',
    desc: 'Complete range of laboratory instruments, glassware, and analytical supplies.',
    items: ['Glassware & Plasticware', 'Analytical Balances', 'Safety Equipment', 'Chemicals & Reagents'],
    color: '#3340A0',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-4">
              <TaperedLine color="#3340A0" />
              <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-[0.2em]">Our Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              World-Class Products<br />from Global Partners
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-[15px] text-gray-500 leading-[1.75]">
              Premium life science products from globally certified manufacturers —
              quality assured with full technical support in Pakistan.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#3340A0] hover:text-[#2a3590] transition-colors group"
            >
              View full catalog
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] transition-all duration-300"
            >
              {/* Top color accent bar */}
              <div className="h-[3px]" style={{ background: p.color }} />

              {/* Card body */}
              <div className="p-6 lg:p-7">

                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `${p.color}12` }}
                  >
                    <p.icon size={18} style={{ color: p.color }} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 mt-0.5">
                    {p.country}
                  </span>
                </div>

                {/* Partner + title */}
                <div
                  className="text-[10px] font-extrabold uppercase tracking-[0.22em] mb-1.5"
                  style={{ color: p.color }}
                >
                  {p.partner}
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a2e] leading-snug mb-2.5 group-hover:text-[#0d0d20] transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
                  {p.desc}
                </p>

                {/* Product items — 2×2 mini grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
                  {p.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[12.5px] text-gray-500 min-w-0">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: p.color }} />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/products"
                    className="text-[12.5px] font-semibold inline-flex items-center gap-1 transition-colors duration-200"
                    style={{ color: p.color }}
                  >
                    View catalog
                    <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

              {/* Hover glow inset ring */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1.5px ${p.color}20` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
