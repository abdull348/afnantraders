'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Dna, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import TaperedLine from '@/components/ui/TaperedLine';

const stats = [
  { value: '20+', label: 'Years in Pakistan' },
  { value: '500+', label: 'Institutions Served' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '4', label: 'Global Partners' },
];

const partners = ['Macrogen', 'PhytoTech Labs', 'Thermo Fisher Scientific', 'Thistle Scientific'];

export default function Hero() {
  return (
    <section id="home" className="relative pt-[4.5rem] bg-white overflow-hidden">

      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(0,168,232,0.09) 0%, rgba(0,168,232,0.03) 55%, transparent 75%)' }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full animate-pulse-glow-alt"
          style={{ background: 'radial-gradient(circle, rgba(51,64,160,0.08) 0%, rgba(51,64,160,0.02) 60%, transparent 80%)', animationDelay: '2s' }}
        />
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[57%_43%] gap-8 lg:gap-8 items-center py-12 lg:py-0">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:py-14"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5"
            >
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.18em]">
                Life Science Solutions · Pakistan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.75rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold text-[#1a1a2e] leading-[1.06] tracking-tight"
            >
              Advancing<br />
              <span className="text-[#3340A0]">Science.</span>
              {' '}Delivering<br />
              <span className="text-[#3340A0]">Solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[17px] text-gray-500 leading-[1.75] max-w-[430px]"
            >
              Trusted distributor of precision medical, diagnostic, and research
              instruments — serving Pakistan's hospitals and institutions since 2006.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'gap-2 shadow-md shadow-[#00A8E8]/20 hover:shadow-lg hover:shadow-[#00A8E8]/30 transition-shadow duration-200'
                )}
              >
                Explore Services <ChevronRight size={16} />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-2 border-t border-gray-100"
            >
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3.5 mt-5">
                Authorized Distributor For
              </p>
              <div className="flex flex-wrap gap-2">
                {partners.map((name) => (
                  <span
                    key={name}
                    className="text-[12px] font-semibold text-gray-500 bg-gray-50/80 border border-gray-100 rounded-md px-3 py-1 hover:border-[#00A8E8]/30 hover:text-[#1a1a2e] transition-colors duration-200"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="hidden lg:block"
          >
            <div className="relative h-[420px]">

              {/* Animated border glow — conic-gradient rotating behind image */}
              <div className="absolute -inset-[2px] rounded-[18px] overflow-hidden pointer-events-none">
                <div
                  className="absolute"
                  style={{
                    width: '200%',
                    height: '200%',
                    top: '-50%',
                    left: '-50%',
                    background: 'conic-gradient(from 0deg, transparent 0%, transparent 62%, rgba(0,168,232,0.18) 72%, rgba(0,168,232,0.55) 80%, rgba(0,168,232,0.18) 88%, transparent 95%)',
                    animation: 'spin-slow 8s linear infinite',
                  }}
                />
              </div>

              {/* Main image panel */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-gray-100/40">
                <Image
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80"
                  fill
                  alt="Professional laboratory environment"
                  className="object-cover object-center"
                  priority
                  sizes="43vw"
                />
                {/* Gradient overlay for readability of badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101c]/75 via-[#06101c]/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#F2D16B]/90 via-[#F2D16B]/50 to-transparent" />
              </div>

              {/* Genomics glass badge — top left, floats */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45 }}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 flex items-center gap-2 bg-white/[0.1] backdrop-blur-2xl border border-white/[0.16] rounded-xl px-3.5 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7dd9fc] shrink-0" />
                  <Dna size={13} style={{ color: '#7dd9fc' }} />
                  <span className="text-[11.5px] font-semibold text-white/88">Genomics</span>
                </motion.div>
              </motion.div>

              {/* Diagnostics glass badge — top right, floats */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.45 }}
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                  className="absolute top-4 right-4 flex items-center gap-2 bg-white/[0.1] backdrop-blur-2xl border border-white/[0.16] rounded-xl px-3.5 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a5b4fc] shrink-0" />
                  <Microscope size={13} style={{ color: '#a5b4fc' }} />
                  <span className="text-[11.5px] font-semibold text-white/88">Diagnostics</span>
                </motion.div>
              </motion.div>

              {/* Stats glass panel — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.55 }}
                className="absolute bottom-4 left-4 right-4 bg-[#050e1a]/88 backdrop-blur-2xl border border-white/[0.07] rounded-xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.32)]"
              >
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    Performance Overview
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
                  {[
                    { v: '500+', l: 'Institutions' },
                    { v: '20+', l: 'Years Active' },
                    { v: '4', l: 'Partners' },
                  ].map(({ v, l }, i) => (
                    <div key={l} className={i > 0 ? 'pl-5' : ''}>
                      <div className="text-[22px] font-extrabold text-white tracking-tight leading-none mb-1">
                        {v}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.38)' }}>
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
      <div className="relative border-t-2 border-[#F2D16B]/35 bg-gradient-to-b from-[#F8FCFF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200/50">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                className="group py-6 px-6 lg:px-10 hover:bg-[#00A8E8]/[0.02] transition-colors duration-300"
              >
                <div className="text-3xl lg:text-[2.2rem] font-extrabold text-[#1a1a2e] tracking-tight group-hover:text-[#00A8E8] transition-colors duration-300">
                  {s.value}
                </div>
                <div className="text-[11px] text-gray-400 font-semibold mt-1 uppercase tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
