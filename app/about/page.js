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
import { Target, Eye, ChevronRight, Award, Users, TrendingUp, Clock } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';
import PageHero from '@/components/shared/PageHero';
import MilestoneTimeline from '@/components/about/MilestoneTimeline';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Excellence',
    desc: 'We uphold the highest standards in product quality, service delivery, and technical support at every stage.',
    accent: '#00A8E8',
  },
  {
    title: 'Innovation',
    desc: 'We continuously source cutting-edge technologies that enable breakthroughs in research and healthcare.',
    accent: '#3340A0',
  },
  {
    title: 'Integrity',
    desc: 'We build lasting relationships through transparency, reliability, and consistently ethical practices.',
    accent: '#00A8E8',
  },
];

const stats = [
  { value: '20+', label: 'Years of Operation', icon: Clock, color: '#00A8E8' },
  { value: '500+', label: 'Satisfied Institutions', icon: Users, color: '#3340A0' },
  { value: '1000+', label: 'Projects Completed', icon: TrendingUp, color: '#00A8E8' },
  { value: '4', label: 'Global Partners', icon: Award, color: '#3340A0' },
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
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group py-8 px-6 lg:px-10 hover:bg-[#F8FCFF] transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <s.icon size={14} style={{ color: s.color }} className="opacity-60" />
                  <div className="text-3xl font-extrabold text-[#1a1a2e] tracking-tight">{s.value}</div>
                </div>
                <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">

            <div className="group bg-[#F8FCFF] border border-gray-100 rounded-2xl p-8 lg:p-10 hover:border-[#00A8E8]/20 hover:shadow-[0_8px_32px_rgba(0,168,232,0.07)] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#00A8E8]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <Target size={19} className="text-[#00A8E8]" />
              </div>
              <div className="w-8 h-0.5 bg-[#00A8E8]/40 mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Our Mission</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
                To deliver reliable, innovative life science solutions that empower Pakistan&apos;s
                scientific, medical, and agricultural communities — enabling research excellence
                and improved patient outcomes.
              </p>
            </div>

            <div className="group bg-[#F0F1FF] border border-[#3340A0]/10 rounded-2xl p-8 lg:p-10 hover:border-[#3340A0]/25 hover:shadow-[0_8px_32px_rgba(51,64,160,0.08)] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#3340A0]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <Eye size={19} className="text-[#3340A0]" />
              </div>
              <div className="w-8 h-0.5 bg-[#3340A0]/40 mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Our Vision</h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
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
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1648792940059-3b782a7b8b20?auto=format&fit=crop&w=1600&q=80"
                alt="Afnan Traders team"
                fill
                className="object-cover"
              />
              {/* Gold top bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#F2D16B]/70" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <TaperedLine color="#00A8E8" />
                <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-5 leading-tight tracking-tight">
                Nearly Two Decades of Scientific Partnership
              </h2>
              <div className="space-y-4 text-[14.5px] text-gray-500 leading-relaxed">
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
          <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <TaperedLine color="#3340A0" />
                <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-[0.2em]">Our Journey</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight mb-5">
                Milestones That Define Us
              </h2>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
                From a humble start in 2006 to becoming Pakistan&apos;s most trusted
                life science partner — each year has been a step forward.
              </p>
            </div>
            <MilestoneTimeline />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-[#F8FCFF] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">Core Values</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] leading-tight tracking-tight">
              Principles That Guide Every Decision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-transparent hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div
                  className="w-10 h-0.5 mb-5 rounded-full transition-all duration-300 group-hover:w-14"
                  style={{ background: v.accent }}
                />
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{v.title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3 tracking-tight">
            Ready to Partner with Us?
          </h2>
          <p className="text-[14.5px] text-gray-500 mb-7 max-w-md mx-auto leading-relaxed">
            Let&apos;s work together to equip your institution with reliable, innovative scientific solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'gap-2 rounded-lg shadow-sm shadow-[#00A8E8]/15')}>
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
