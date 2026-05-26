'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FCFF] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative bg-[#0d0f1e] rounded-2xl px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 overflow-hidden"
        >
          {/* ── Background glow orbs ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Primary blue orb */}
            <div
              className="absolute -top-20 -left-20 w-72 h-72 rounded-full animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle, rgba(0,168,232,0.16) 0%, rgba(0,168,232,0.04) 60%, transparent 80%)',
              }}
            />
            {/* Secondary indigo orb */}
            <div
              className="absolute -bottom-24 right-20 w-80 h-80 rounded-full animate-pulse-glow-alt"
              style={{
                background: 'radial-gradient(circle, rgba(51,64,160,0.20) 0%, rgba(51,64,160,0.05) 60%, transparent 80%)',
                animationDelay: '3s',
              }}
            />
            {/* Dot grid */}
            <div className="absolute inset-0 bg-dot-grid-dark opacity-50" />
          </div>

          {/* Top gold accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2D16B]/65 to-transparent" />

          {/* Text content */}
          <div className="relative max-w-xl">
            <div className="flex items-center gap-2.5 mb-4">
              <TaperedLine color="#F2D16B" />
              <span className="text-[11px] font-bold text-[#F2D16B]/75 uppercase tracking-[0.2em]">
                Partner with Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white leading-tight tracking-tight mb-3">
              Ready to Elevate Your<br />Research Capabilities?
            </h2>
            <p className="text-[15px] text-white/45 leading-[1.72]">
              Connect with our expert team and discover tailored solutions for your institution's
              unique requirements. We respond within 24 hours.
            </p>
          </div>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: 'accent', size: 'lg' }), 'gap-2 shadow-[0_8px_24px_rgba(242,209,107,0.35)] hover:shadow-[0_10px_32px_rgba(242,209,107,0.5)] transition-shadow duration-200')}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="h-12 px-7 rounded-lg text-[15px] inline-flex items-center justify-center font-semibold text-white bg-white/9 border border-white/12 hover:bg-white/16 hover:border-white/20 transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
