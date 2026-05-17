export const metadata = {
  title: 'Products',
  description:
    'Browse our product catalog — genomics, plant biology, analytical instruments, and laboratory equipment from Macrogen, PhytoTech Labs, Thermo Fisher Scientific, and Thistle Scientific.',
  openGraph: {
    title: 'Products | Afnan Traders',
    description:
      'World-class life science products from Macrogen, PhytoTech Labs, Thermo Fisher Scientific, and Thistle Scientific — distributed in Pakistan.',
  },
};

import Link from 'next/link';
import { Dna, Leaf, FlaskConical, TestTube, Globe, ChevronRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { buttonVariants } from '@/lib/button-variants';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const partners = [
  {
    icon: Dna,
    name: 'Macrogen',
    country: 'South Korea',
    founded: '1997',
    specialty: 'Genomics & Molecular Biology',
    about: 'A global leader in genomics services and sequencing technologies. Macrogen provides world-class DNA sequencing, genotyping, and bioinformatics services used by researchers and institutions worldwide.',
    categories: [
      {
        title: 'Sequencing Services',
        items: ['Sanger DNA Sequencing', 'Next-Generation Sequencing (NGS)', 'Whole Genome Sequencing', 'RNA Sequencing (RNA-Seq)'],
      },
      {
        title: 'Molecular Biology',
        items: ['Gene Synthesis', 'Oligo Synthesis', 'Plasmid Preparation', 'Genotyping Arrays'],
      },
    ],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: Leaf,
    name: 'PhytoTech Labs',
    country: 'USA',
    founded: '1991',
    specialty: 'Plant Biology & Tissue Culture',
    about: 'A premier supplier of plant tissue culture media, plant growth regulators, and botanical research supplies. PhytoTech Labs serves research institutions, universities, and agricultural centers globally.',
    categories: [
      {
        title: 'Culture Media',
        items: ['Murashige & Skoog (MS) Media', 'Woody Plant Medium (WPM)', 'Custom Formulations', 'Ready-to-Use Liquid Media'],
      },
      {
        title: 'Growth Regulators',
        items: ['Auxins & Cytokinins', 'Gibberellins', 'Abscisic Acid', 'Specialty Botanicals'],
      },
    ],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
  {
    icon: FlaskConical,
    name: 'Thermo Fisher Scientific',
    country: 'USA',
    founded: '1956',
    specialty: 'Analytical Instruments & Life Science',
    about: 'One of the world\'s largest scientific instruments and laboratory supplies companies. Thermo Fisher Scientific enables customers to make the world healthier, cleaner, and safer through advanced analytical instruments, reagents, and consumables.',
    categories: [
      {
        title: 'Laboratory Instruments',
        items: ['PCR & qPCR Machines', 'Spectrophotometers', 'Centrifuges & Mixers', 'Refrigerators & Freezers'],
      },
      {
        title: 'Reagents & Consumables',
        items: ['Molecular Biology Kits', 'Cell Culture Reagents', 'Lab Plasticware', 'Safety Equipment'],
      },
    ],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: TestTube,
    name: 'Thistle Scientific',
    country: 'United Kingdom',
    founded: '1973',
    specialty: 'Laboratory Instruments & Supplies',
    about: 'A trusted UK-based distributor of laboratory instruments, chemicals, and scientific supplies. Thistle Scientific provides comprehensive solutions for academic, industrial, and government laboratories.',
    categories: [
      {
        title: 'Laboratory Equipment',
        items: ['Analytical Balances', 'Ovens & Incubators', 'Water Baths & Heat Blocks', 'pH & Conductivity Meters'],
      },
      {
        title: 'Lab Consumables',
        items: ['Glassware & Plasticware', 'Filtration Supplies', 'Safety & PPE', 'Chemicals & Reagents'],
      },
    ],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Products"
        label="Our Product Catalog"
        title="World-Class Products from Global Partners"
        description="We distribute premium life science products from globally certified manufacturers — ensuring quality, reliability, and dedicated technical support in Pakistan."
      />

      {/* Partner overview grid */}
      <section className="py-16 bg-[#F8FCFF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-4 h-px bg-[#00A8E8]" />
            <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">Distribution Partners</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-xl p-5 text-center hover:border-[#00A8E8]/25 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: p.bg }}>
                  <p.icon size={18} style={{ color: p.color }} />
                </div>
                <div className="text-sm font-bold text-[#1a1a2e]">{p.name}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{p.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner detail sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-[#00A8E8]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              {/* Partner header */}
              <div className="flex items-start gap-5 p-7 lg:p-9 border-b border-gray-100" style={{ background: p.bg }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/70">
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-xl font-extrabold text-[#1a1a2e]">{p.name}</h3>
                    <Badge variant="outline" className="text-[10px]">{p.country} · Est. {p.founded}</Badge>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>
                    {p.specialty}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{p.about}</p>
                </div>
              </div>

              {/* Categories */}
              <div className="grid sm:grid-cols-2 gap-px bg-gray-100 p-px">
                {p.categories.map((cat) => (
                  <div key={cat.title} className="bg-white p-6 lg:p-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FCFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3">
            Request a Product Quote
          </h2>
          <p className="text-sm text-gray-500 mb-7 max-w-md mx-auto">
            Can't find what you're looking for? Our team can source specific products
            from our global partner network.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg')}>
            Contact Our Team <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
