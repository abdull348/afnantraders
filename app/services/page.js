export const metadata = {
  title: 'Services',
  description:
    'Explore Afnan Traders\' full range of services — medical technology, diagnostic instruments, analytical systems, agricultural research, veterinary, and institutional solutions.',
  openGraph: {
    title: 'Services | Afnan Traders',
    description:
      'Medical technology, diagnostic instruments, analytical systems, and more — delivered across Pakistan.',
  },
};

import Link from 'next/link';
import { Stethoscope, Microscope, FlaskConical, Sprout, Users, Building2, CheckCircle, ChevronRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Stethoscope,
    number: '01',
    title: 'Medical Technology',
    shortDesc: 'Advanced clinical instruments for hospitals and healthcare facilities.',
    fullDesc: 'We supply advanced diagnostic systems, patient monitoring equipment, imaging systems, and surgical instruments sourced from leading global manufacturers. Our medical technology solutions help hospitals and clinics deliver accurate diagnoses and better patient care.',
    capabilities: ['Patient Monitoring Systems', 'Diagnostic Imaging', 'Clinical Analyzers', 'Surgical Instruments', 'Point-of-Care Testing'],
  },
  {
    icon: Microscope,
    number: '02',
    title: 'Diagnostic Instruments',
    shortDesc: 'High-precision lab analyzers and microscopy for accurate diagnostics.',
    fullDesc: 'From hematology analyzers to advanced microscopy, we provide complete diagnostic solutions for clinical and research laboratories. Our instruments deliver the accuracy and reliability demanded by modern diagnostic workflows.',
    capabilities: ['Hematology Analyzers', 'Biochemistry Analyzers', 'Microscopy Systems', 'Immunoassay Platforms', 'Microbiology Equipment'],
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Analytical Systems',
    shortDesc: 'Chromatography, spectrometry, and QA/QC instrumentation.',
    fullDesc: 'Our analytical instrument portfolio includes HPLC systems, mass spectrometers, UV-Vis spectrophotometers, and electrochemistry equipment for pharmaceutical, environmental, and food safety laboratories.',
    capabilities: ['HPLC & GC Systems', 'Mass Spectrometry', 'UV-Vis Spectrophotometers', 'Atomic Absorption', 'Electrochemistry'],
  },
  {
    icon: Sprout,
    number: '04',
    title: 'Agricultural Research',
    shortDesc: 'Specialized tools for crop analysis, soil testing, and biotech.',
    fullDesc: "Supporting Pakistan's agricultural sector with precision instruments for soil analysis, crop testing, irrigation management, and biotechnology research. Our solutions empower agricultural institutes, universities, and research centers.",
    capabilities: ['Soil Analysis Equipment', 'Crop Testing Systems', 'Water Quality Analyzers', 'Plant Tissue Culture', 'Biotech Research Tools'],
  },
  {
    icon: Users,
    number: '05',
    title: 'Veterinary & Research',
    shortDesc: 'Integrated solutions for veterinary medicine and academic research.',
    fullDesc: 'Comprehensive diagnostic and analytical instruments for veterinary clinics, animal research facilities, and academic research institutions. Our solutions support everything from routine diagnostics to advanced scientific research.',
    capabilities: ['Veterinary Analyzers', 'Animal Monitoring', 'Research Microscopes', 'PCR & Molecular Tools', 'Imaging Systems'],
  },
  {
    icon: Building2,
    number: '06',
    title: 'Institutional Solutions',
    shortDesc: 'Turnkey lab setup, installation, and technical support services.',
    fullDesc: 'End-to-end laboratory establishment services including needs assessment, equipment selection, installation, staff training, and ongoing maintenance. We help universities, hospitals, and government laboratories build world-class facilities.',
    capabilities: ['Lab Design & Planning', 'Equipment Procurement', 'Professional Installation', 'Staff Training', 'Maintenance & Calibration'],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Services"
        label="What We Offer"
        title="Precision Solutions for Healthcare & Research"
        description="Delivering reliable, innovative technologies across medical, diagnostic, agricultural, and molecular research institutions in Pakistan."
      />

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-xl p-7 lg:p-9 hover:border-[#00A8E8]/25 hover:shadow-[0_4px_24px_rgba(0,168,232,0.07)] transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-10">

                  {/* Icon + number */}
                  <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-3 lg:w-16">
                    <div className="w-11 h-11 rounded-lg bg-[#00A8E8]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A8E8]/14 group-hover:scale-105 transition-all duration-300">
                      <s.icon size={19} className="text-[#00A8E8] group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 hidden lg:block">{s.number}</span>
                  </div>

                  {/* Main text */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.fullDesc}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Capabilities</div>
                    <ul className="space-y-1.5">
                      {s.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle size={13} className="text-[#00A8E8] flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FCFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3">
            Need a Custom Solution?
          </h2>
          <p className="text-sm text-gray-500 mb-7 max-w-md mx-auto">
            Our technical team is ready to assess your specific requirements and recommend the right instruments for your institution.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg')}>
            Request a Consultation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
