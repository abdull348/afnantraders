import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TaperedLine from '@/components/ui/TaperedLine';

export default function PageHero({ label, title, description, breadcrumb, className, children }) {
  return (
    <section className={cn('pt-28 pb-14 border-b border-gray-100 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-8">
            <Link href="/" className="hover:text-[#00A8E8] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#00A8E8]">{breadcrumb}</span>
          </nav>
        )}

        <div className="max-w-3xl">
          {/* Label */}
          {label && (
            <div className="flex items-center gap-2 mb-5">
              <TaperedLine color="#00A8E8" />
              <span className="text-xs font-bold text-[#00A8E8] uppercase tracking-widest">{label}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#1a1a2e] leading-tight mb-5 tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
