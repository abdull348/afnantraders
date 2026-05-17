'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import TaperedLine from '@/components/ui/TaperedLine';

const stats = [
  { value: '20+', label: 'Years in Pakistan' },
  { value: '500+', label: 'Institutions Served' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '4', label: 'Global Partners' },
];

export default function Hero() {
  return (
    <section id="home" className="pt-[4.5rem] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[54%_46%] gap-8 lg:gap-6 items-center py-14 lg:py-0">

          {/* ── LEFT: Text content ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:py-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-widest">
                Life Science Solutions · Pakistan
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-[3.25rem] lg:text-[3.5rem] font-extrabold text-[#1a1a2e] leading-[1.08] tracking-tight">
              Advancing<br />
              <span className="text-[#3340A0]">Science.</span>
              {' '}Delivering<br />
              <span className="text-[#3340A0]">Solutions.</span>
            </h1>

            {/* Supporting copy */}
            <p className="text-[17px] text-gray-500 leading-[1.72] max-w-[420px]">
              Trusted distributor of precision medical, diagnostic, and research
              instruments — serving Pakistan's hospitals and institutions since 2006.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/services" className={cn(buttonVariants({ size: 'lg' }), 'gap-1.5')}>
                Explore Services <ChevronRight size={16} />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
                Get in Touch
              </Link>
            </div>

            {/* Partner trust strip */}
            <div className="pt-1 border-t border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3 mt-5">
                Authorized Distributor For
              </p>
              <div className="flex flex-wrap gap-2">
                {['Macrogen', 'PhytoTech Labs', 'Thermo Fisher Scientific', 'Thistle Scientific'].map((name) => (
                  <span
                    key={name}
                    className="text-[12px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded-md px-2.5 py-1"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Enterprise image composition ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="hidden lg:block"
          >
            <div className="relative h-[540px]">

              {/* ── Main image panel ── */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-gray-100/80">
                <Image
                  src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1600&q=80"
                  fill
                  alt="Precision scientific instruments"
                  className="object-cover object-center"
                  priority
                  sizes="46vw"
                />

                {/* Depth: bottom dark fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08101e]/70 via-[#08101e]/15 to-transparent" />
                {/* Depth: left edge softener */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/6 via-transparent to-transparent" />

                {/* Subtle scientific grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: 0.03,
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                  }}
                />

                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#F2D16B]/90 via-[#F2D16B]/45 to-transparent" />
              </div>

              {/* ── Glass badge: ISO certified — top left ── */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.45 }}
                className="absolute top-5 left-5 flex items-center gap-2.5 bg-white/11 backdrop-blur-xl border border-white/20 rounded-md px-3.5 py-2.5"
              >
                <div className="w-[22px] h-[22px] rounded bg-[#00A8E8]/28 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={12} className="text-[#79dafc]" />
                </div>
                <div>
                  <div className="text-white text-[11px] font-semibold leading-tight">ISO Quality Assured</div>
                  <div className="text-white/44 text-[10px] leading-tight mt-0.5">Globally Certified Supply</div>
                </div>
              </motion.div>

              {/* ── Vertical brand tag — right inner edge ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 right-5 flex flex-col items-center gap-2.5"
              >
                <div className="h-10 w-px bg-white/16" />
                <span
                  className="text-[9px] font-bold text-white/22 uppercase tracking-[3px]"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Est. 2006 · Rawalpindi
                </span>
                <div className="h-10 w-px bg-white/16" />
              </motion.div>

              {/* ── Dark glass stats panel — bottom ── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45 }}
                className="absolute bottom-5 left-5 right-14 bg-[#07101e]/83 backdrop-blur-xl border border-white/7 rounded-lg p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-1 rounded-full bg-[#00A8E8]" />
                  <span className="text-white/38 text-[10px] uppercase tracking-widest font-bold">
                    Performance Overview
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/7">
                  {[
                    { v: '500+', l: 'Institutions' },
                    { v: '20+', l: 'Years Active' },
                    { v: '4', l: 'Partners' },
                  ].map(({ v, l }, i) => (
                    <div key={l} className={i > 0 ? 'pl-5' : ''}>
                      <div className="text-[22px] font-extrabold text-white tracking-tight leading-none mb-1.5">
                        {v}
                      </div>
                      <div className="text-[10px] text-white/38 font-semibold uppercase tracking-wide">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t-2 border-[#F2D16B]/40 bg-[#F8FCFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200/60">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="py-7 px-6 lg:px-10"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-[#1a1a2e]">{s.value}</div>
                <div className="text-xs text-gray-400 font-medium mt-1.5 uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
