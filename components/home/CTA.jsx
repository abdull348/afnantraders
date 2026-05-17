'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import TaperedLine from '@/components/ui/TaperedLine';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FCFF] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[#1a1a2e] rounded-xl px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 overflow-hidden"
        >
          {/* Subtle top gold accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F2D16B]/60 to-transparent" />

          {/* Text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <TaperedLine color="#F2D16B" />
              <span className="text-[11px] font-bold text-[#F2D16B]/80 uppercase tracking-widest">Partner with Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Ready to Elevate Your<br />Research Capabilities?
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed">
              Connect with our expert team and discover tailored solutions for your institution's
              unique requirements. We respond within 24 hours.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: 'accent', size: 'lg' }), 'gap-1.5')}
            >
              Get in Touch <ChevronRight size={16} />
            </Link>
            <Link
              href="/services"
              className="h-12 px-7 rounded-lg text-[15px] inline-flex items-center justify-center font-semibold text-white bg-white/10 border border-white/15 hover:bg-white/18 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
