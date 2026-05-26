export const metadata = {
  title: 'Services',
  description:
    "Explore Afnan Traders' full range of services — medical technology, diagnostic instruments, analytical systems, agricultural research, veterinary, and institutional solutions.",
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
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: Microscope,
    number: '02',
    title: 'Diagnostic Instruments',
    shortDesc: 'High-precision lab analyzers and microscopy for accurate diagnostics.',
    fullDesc: 'From hematology analyzers to advanced microscopy, we provide complete diagnostic solutions for clinical and research laboratories. Our instruments deliver the accuracy and reliability demanded by modern diagnostic workflows.',
    capabilities: ['Hematology Analyzers', 'Biochemistry Analyzers', 'Microscopy Systems', 'Immunoassay Platforms', 'Microbiology Equipment'],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Analytical Systems',
    shortDesc: 'Chromatography, spectrometry, and QA/QC instrumentation.',
    fullDesc: 'Our analytical instrument portfolio includes HPLC systems, mass spectrometers, UV-Vis spectrophotometers, and electrochemistry equipment for pharmaceutical, environmental, and food safety laboratories.',
    capabilities: ['HPLC & GC Systems', 'Mass Spectrometry', 'UV-Vis Spectrophotometers', 'Atomic Absorption', 'Electrochemistry'],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: Sprout,
    number: '04',
    title: 'Agricultural Research',
    shortDesc: 'Specialized tools for crop analysis, soil testing, and biotech.',
    fullDesc: "Supporting Pakistan's agricultural sector with precision instruments for soil analysis, crop testing, irrigation management, and biotechnology research. Our solutions empower agricultural institutes, universities, and research centers.",
    capabilities: ['Soil Analysis Equipment', 'Crop Testing Systems', 'Water Quality Analyzers', 'Plant Tissue Culture', 'Biotech Research Tools'],
    color: '#3340A0',
    bg: '#F0F1FF',
  },
  {
    icon: Users,
    number: '05',
    title: 'Veterinary & Research',
    shortDesc: 'Integrated solutions for veterinary medicine and academic research.',
    fullDesc: 'Comprehensive diagnostic and analytical instruments for veterinary clinics, animal research facilities, and academic research institutions. Our solutions support everything from routine diagnostics to advanced scientific research.',
    capabilities: ['Veterinary Analyzers', 'Animal Monitoring', 'Research Microscopes', 'PCR & Molecular Tools', 'Imaging Systems'],
    color: '#00A8E8',
    bg: '#EAF8FF',
  },
  {
    icon: Building2,
    number: '06',
    title: 'Institutional Solutions',
    shortDesc: 'Turnkey lab setup, installation, and technical support services.',
    fullDesc: 'End-to-end laboratory establishment services including needs assessment, equipment selection, installation, staff training, and ongoing maintenance. We help universities, hospitals, and government laboratories build world-class facilities.',
    capabilities: ['Lab Design & Planning', 'Equipment Procurement', 'Professional Installation', 'Staff Training', 'Maintenance & Calibration'],
    color: '#3340A0',
    bg: '#F0F1FF',
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
          <div className="space-y-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-[0_8px_36px_rgba(0,0,0,0.09)] transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-0">

                  {/* Colored left accent panel */}
                  <div
                    className="hidden lg:flex flex-col items-center justify-between py-8 px-5 w-20 border-r border-gray-100/70"
                    style={{ background: `${s.bg}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                      style={{ background: `${s.color}18` }}
                    >
                      <s.icon size={18} style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-[11px] font-bold rotate-180 tracking-[0.15em]"
                      style={{ writingMode: 'vertical-rl', color: `${s.color}50` }}
                    >
                      {s.number}
                    </span>
                  </div>

                  {/* Mobile icon row */}
                  <div className="lg:hidden flex items-center gap-3 px-6 pt-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}12` }}
                    >
                      <s.icon size={18} style={{ color: s.color }} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 tracking-widest">{s.number}</span>
                  </div>

                  {/* Main text */}
                  <div className="px-6 lg:px-8 py-6 lg:py-8">
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2.5 group-hover:text-[#0d0d20] transition-colors duration-200">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-[1.75]">{s.fullDesc}</p>
                  </div>

                  {/* Capabilities */}
                  <div className="px-6 lg:px-8 py-6 lg:py-8 border-t lg:border-t-0 lg:border-l border-gray-100/70">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3.5">
                      Capabilities
                    </div>
                    <ul className="space-y-2">
                      {s.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2.5 text-[13.5px] text-gray-500">
                          <CheckCircle size={13} style={{ color: s.color }} className="shrink-0 opacity-80" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom hover accent */}
                <div
                  className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}30, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FCFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-[14px] text-gray-500 mb-7 max-w-md mx-auto leading-relaxed">
            Our technical team is ready to assess your specific requirements and recommend the right instruments for your institution.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg shadow-sm shadow-[#00A8E8]/15')}
          >
            Request a Consultation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
