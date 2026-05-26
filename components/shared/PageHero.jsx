import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TaperedLine from '@/components/ui/TaperedLine';

export default function PageHero({ label, title, description, breadcrumb, className, children }) {
  return (
    <section className={cn('relative pt-28 pb-16 overflow-hidden', className)}>
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-white" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid-faint" />

      {/* Primary blue gradient orb — top right */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,168,232,0.07) 0%, rgba(0,168,232,0.02) 55%, transparent 75%)',
        }}
      />

      {/* Secondary indigo orb — bottom left */}
      <div
        className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(51,64,160,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Gold bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2D16B]/40 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 uppercase tracking-[0.18em] font-semibold mb-9">
            <Link href="/" className="hover:text-[#00A8E8] transition-colors duration-200">
              Home
            </Link>
            <ChevronRight size={11} className="text-gray-300" />
            <span className="text-[#00A8E8]">{breadcrumb}</span>
          </nav>
        )}

        <div className="max-w-3xl">
          {/* Label eyebrow */}
          {label && (
            <div className="flex items-center gap-2.5 mb-5">
              <TaperedLine color="#00A8E8" />
              <span className="text-[11px] font-bold text-[#00A8E8] uppercase tracking-[0.2em]">
                {label}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#1a1a2e] leading-[1.07] mb-5 tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-[17px] text-gray-500 leading-[1.72] max-w-2xl">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
