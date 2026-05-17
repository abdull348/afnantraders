'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dna, Leaf, FlaskConical, TestTube } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';

const products = [
  {
    icon: Dna,
    partner: 'Macrogen',
    country: 'South Korea',
    title: 'Genomics & Molecular Biology',
    desc: 'Comprehensive genomics services and molecular biology solutions for advanced research.',
    items: ['DNA / RNA Sequencing', 'Gene Synthesis', 'Next-Gen Sequencing (NGS)', 'Genotyping Services'],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: Leaf,
    partner: 'PhytoTech Labs',
    country: 'USA',
    title: 'Plant Biology & Tissue Culture',
    desc: 'Specialized media and reagents for plant research, tissue culture, and botanical science.',
    items: ['Tissue Culture Media', 'Plant Growth Regulators', 'Botanical Reagents', 'Sterile Supplies'],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
  {
    icon: FlaskConical,
    partner: 'Thermo Fisher Scientific',
    country: 'USA',
    title: 'Analytical Instruments & Reagents',
    desc: 'World-class laboratory instruments and consumables for clinical and research environments.',
    items: ['PCR & qPCR Systems', 'Spectrophotometers', 'Centrifuges & Mixers', 'Lab Consumables'],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: TestTube,
    partner: 'Thistle Scientific',
    country: 'United Kingdom',
    title: 'Laboratory Equipment & Supplies',
    desc: 'Complete range of laboratory instruments, glassware, and analytical supplies.',
    items: ['Glassware & Plasticware', 'Analytical Balances', 'Safety Equipment', 'Chemicals & Reagents'],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <TaperedLine color="#3340A0" />
              <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-widest">Our Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              World-Class Products<br />from Global Partners
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-[15px] text-gray-500 leading-7">
              Premium life science products distributed from globally certified manufacturers —
              with quality assurance and full technical support.
            </p>
            <Link href="/products" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#3340A0] hover:text-[#2a3590] transition-colors">
              View full catalog →
            </Link>
          </div>
        </div>

        {/* 2×2 enterprise card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[#00A8E8]/25 hover:shadow-[0_12px_40px_rgba(0,168,232,0.09)] transition-all duration-300 cursor-default"
            >
              {/* Colored header band */}
              <div
                className="relative px-7 pt-7 pb-6 border-b border-gray-100 overflow-hidden"
                style={{ background: p.bg }}
              >
                <div
                  className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-40"
                  style={{ background: `radial-gradient(circle, ${p.color}20, transparent 70%)` }}
                />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-white/70 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <p.icon size={21} style={{ color: p.color }} />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500 bg-white/80 border border-white/60 rounded-md px-2.5 py-1">
                    {p.country}
                  </span>
                </div>

                <div
                  className="text-[10px] font-extrabold uppercase tracking-widest mb-1.5"
                  style={{ color: p.color }}
                >
                  {p.partner}
                </div>
                <h3 className="text-[19px] font-bold text-[#1a1a2e] leading-tight mb-2">{p.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>

              {/* Product tags */}
              <div className="px-7 py-6">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3.5">Key Products</div>
                <div className="flex flex-wrap gap-2">
                  {p.items.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] text-gray-600 bg-[#F8FCFF] border border-gray-100 rounded-md px-3 py-1.5 group-hover:border-gray-200 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
