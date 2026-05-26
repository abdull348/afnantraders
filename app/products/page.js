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
    bg: 'linear-gradient(135deg, #EAF8FF 0%, #F0FBFF 100%)',
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
    bg: 'linear-gradient(135deg, #F0F1FF 0%, #F4F5FF 100%)',
  },
  {
    icon: FlaskConical,
    name: 'Thermo Fisher Scientific',
    country: 'USA',
    founded: '1956',
    specialty: 'Analytical Instruments & Life Science',
    about: "One of the world's largest scientific instruments and laboratory supplies companies. Thermo Fisher Scientific enables customers to make the world healthier, cleaner, and safer through advanced analytical instruments, reagents, and consumables.",
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
    bg: 'linear-gradient(135deg, #EAF8FF 0%, #F0FBFF 100%)',
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
    bg: 'linear-gradient(135deg, #F0F1FF 0%, #F4F5FF 100%)',
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

      {/* Partner overview strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-5 h-px bg-[#00A8E8]" />
            <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">Distribution Partners</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex items-center gap-3 bg-[#F8FCFF] border border-gray-100 rounded-xl p-4 hover:border-transparent hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200"
                  style={{ background: `${p.color}12` }}
                >
                  <p.icon size={16} style={{ color: p.color }} />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#1a1a2e] leading-tight">{p.name}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">{p.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner detail sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Partner header */}
              <div
                className="flex items-start gap-5 p-7 lg:p-9 border-b border-gray-100/70"
                style={{ background: p.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/80 shadow-sm group-hover:scale-105 transition-transform duration-300"
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1.5">
                    <h3 className="text-xl font-extrabold text-[#1a1a2e]">{p.name}</h3>
                    <Badge variant="outline" className="text-[10px] bg-white/70 border-white/80">
                      {p.country} · Est. {p.founded}
                    </Badge>
                  </div>
                  <div
                    className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2.5"
                    style={{ color: p.color }}
                  >
                    {p.specialty}
                  </div>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-2xl">{p.about}</p>
                </div>
              </div>

              {/* Categories */}
              <div className="grid sm:grid-cols-2 gap-px bg-gray-100 p-px">
                {p.categories.map((cat) => (
                  <div key={cat.title} className="bg-white p-6 lg:p-8">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                      {cat.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[13.5px] text-gray-600">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: p.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom hover accent */}
              <div
                className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}30, transparent)` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FCFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3 tracking-tight">
            Request a Product Quote
          </h2>
          <p className="text-[14px] text-gray-500 mb-7 max-w-md mx-auto leading-relaxed">
            Can't find what you're looking for? Our team can source specific products
            from our global partner network.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg shadow-sm shadow-[#00A8E8]/15')}
          >
            Contact Our Team <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
