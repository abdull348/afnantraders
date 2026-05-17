export const metadata = {
  title: 'About Us',
  description:
    "Learn about Afnan Traders — Pakistan's trusted life science solutions provider. Our mission, vision, milestones, and core values.",
  openGraph: {
    title: 'About Us | Afnan Traders',
    description:
      "Learn about Afnan Traders — Pakistan's trusted life science solutions provider.",
  },
};

import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, ChevronRight } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';
import PageHero from '@/components/shared/PageHero';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Excellence',
    desc: 'We uphold the highest standards in product quality, service delivery, and technical support at every stage.',
  },
  {
    title: 'Innovation',
    desc: 'We continuously source cutting-edge technologies that enable breakthroughs in research and healthcare.',
  },
  {
    title: 'Integrity',
    desc: 'We build lasting relationships through transparency, reliability, and consistently ethical practices.',
  },
];

const milestones = [
  { year: '2006', event: 'Founded in Rawalpindi with a vision to serve Pakistan\'s scientific community.' },
  { year: '2010', event: 'Established distribution partnership with Thermo Fisher Scientific.' },
  { year: '2014', event: 'Expanded into agricultural research and veterinary diagnostics sectors.' },
  { year: '2018', event: 'Partnered with Macrogen for genomics and molecular biology solutions.' },
  { year: '2021', event: 'Added PhytoTech Labs and Thistle Scientific to our distribution network.' },
  { year: '2026', event: 'Serving 500+ institutions across Pakistan with a dedicated support team.' },
];

const stats = [
  { value: '20+', label: 'Years of Operation' },
  { value: '500+', label: 'Satisfied Institutions' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '4', label: 'Global Partners' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumb="About Us"
        label="Our Story"
        title="Advancing Science in Pakistan"
        description="Afnan Traders is a trusted partner for medical, diagnostic, and research institutions — delivering integrated, reliable, and innovative life science solutions for nearly two decades."
      />

      {/* Stats band */}
      <section className="bg-[#F8FCFF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 lg:px-10">
                <div className="text-3xl font-extrabold text-[#1a1a2e]">{s.value}</div>
                <div className="text-xs text-gray-400 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-[#F8FCFF] border border-gray-100 rounded-xl p-8 lg:p-10">
              <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/10 flex items-center justify-center mb-6">
                <Target size={18} className="text-[#00A8E8]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To deliver reliable, innovative life science solutions that empower Pakistan&apos;s
                scientific, medical, and agricultural communities — enabling research excellence
                and improved patient outcomes.
              </p>
            </div>

            <div className="bg-[#F0F1FF] border border-[#3340A0]/10 rounded-xl p-8 lg:p-10">
              <div className="w-10 h-10 rounded-lg bg-[#3340A0]/10 flex items-center justify-center mb-6">
                <Eye size={18} className="text-[#3340A0]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Our Vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                To be Pakistan&apos;s premier provider of cutting-edge scientific technologies —
                recognized for integrity, expertise, and long-term partnerships that advance
                the nation&apos;s scientific capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-20 lg:py-28 bg-[#F8FCFF] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-xl overflow-hidden aspect-[4/3] relative border border-gray-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1648792940059-3b782a7b8b20?auto=format&fit=crop&w=1600&q=80"
                alt="Afnan Traders team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <TaperedLine color="#00A8E8" />
                <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-5 leading-tight">
                Nearly Two Decades of Scientific Partnership
              </h2>
              <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                <p>
                  Founded in 2006, Afnan Traders began with a vision to bridge global innovation
                  with Pakistan&apos;s growing demand for advanced scientific equipment.
                </p>
                <p>
                  Over the years, we&apos;ve built strategic partnerships with world-leading manufacturers
                  to deliver diagnostic, analytical, and medical technologies to hospitals, research
                  labs, agricultural institutes, and veterinary centers across the country.
                </p>
                <p>
                  Today, we stand as a trusted provider of integrated solutions — combining technical
                  expertise, reliable service, and a deep understanding of local needs to support
                  Pakistan&apos;s scientific advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-10">
            <TaperedLine color="#3340A0" />
            <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-widest">Our Journey</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white p-6 lg:p-8 hover:bg-[#F8FCFF] transition-colors duration-200">
                <div className="text-2xl font-extrabold text-[#00A8E8] mb-2">{m.year}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-[#F8FCFF] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-2 mb-4">
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">Core Values</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] leading-tight">
              Principles That Guide Every Decision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-7 hover:border-[#00A8E8]/25 hover:shadow-[0_4px_20px_rgba(0,168,232,0.06)] transition-all duration-300">
                <div className="w-8 h-px bg-[#00A8E8] mb-5" />
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3">
            Ready to Partner with Us?
          </h2>
          <p className="text-sm text-gray-500 mb-7 max-w-md mx-auto">
            Let&apos;s work together to equip your institution with reliable, innovative scientific solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg')}>
              Contact Us <ChevronRight size={16} />
            </Link>
            <Link href="/services" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-lg')}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
