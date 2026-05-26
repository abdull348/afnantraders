import Link from 'next/link';
import Image from 'next/image';
import { Building2, Phone, Mail, ArrowUpRight, Globe, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

const partners = [
  { name: 'Macrogen', country: 'South Korea' },
  { name: 'PhytoTech Labs', country: 'USA' },
  { name: 'Thermo Fisher Scientific', country: 'USA' },
  { name: 'Thistle Scientific', country: 'United Kingdom' },
];

export default function Footer() {
  return (
    <footer className="bg-[#08080f] text-white">

      {/* ── CTA Section ── */}
      <div className="relative py-12 lg:py-16 overflow-hidden border-b border-white/[0.04]">
        {/* Animated bg orbs — CSS only (Server Component) */}
        <div
          className="absolute -top-28 -left-20 w-96 h-96 rounded-full pointer-events-none animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(0,168,232,0.13) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-28 right-10 w-[420px] h-[420px] rounded-full pointer-events-none animate-pulse-glow-alt"
          style={{ background: 'radial-gradient(circle, rgba(51,64,160,0.17) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-dot-grid-dark opacity-35 pointer-events-none" />

        {/* Gold top separator — transitions from page content */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2D16B]/55 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#F2D16B]/50" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(242,209,107,0.72)' }}>
                Partner with Us
              </span>
              <span className="w-6 h-px bg-[#F2D16B]/50" />
            </div>

            <h2 className="text-3xl sm:text-[2.4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Ready to Elevate Your<br className="hidden sm:block" /> Research Capabilities?
            </h2>
            <p className="text-[15px] leading-[1.75] mb-9 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Connect with our expert team and discover tailored solutions for your
              institution's unique requirements. We respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'accent', size: 'lg' }),
                  'gap-2 shadow-[0_8px_24px_rgba(242,209,107,0.28)] hover:shadow-[0_12px_36px_rgba(242,209,107,0.44)] transition-shadow duration-200'
                )}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="h-12 px-7 rounded-lg text-[15px] inline-flex items-center justify-center font-semibold text-white bg-white/[0.07] border border-white/[0.1] hover:bg-white/[0.13] hover:border-white/[0.18] transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer columns ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Afnan Traders Home" className="inline-block group">
              <div className="relative w-[200px] h-[42px]">
                <Image
                  src="/afnan-traders_logo.png"
                  alt="Afnan Traders"
                  fill
                  className="object-contain object-left brightness-[1.15] group-hover:brightness-125 transition-all duration-200"
                />
              </div>
            </Link>
            <p className="text-[13.5px] leading-relaxed max-w-[240px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Pakistan's trusted life science solutions provider since 2006. Serving hospitals,
              research institutions, and laboratories nationwide.
            </p>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'rgba(255,255,255,0.32)' }}>
                Est. 2006 · Rawalpindi, Pakistan
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group flex items-center gap-1.5 text-[13.5px] transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.52)' }}
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#00A8E8] shrink-0 transition-all duration-200 overflow-hidden" />
                  <span className="group-hover:text-white transition-colors duration-200">{l.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Distribution Partners */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Distribution Partners
            </h4>
            <div className="space-y-3">
              {partners.map((p) => (
                <div key={p.name} className="flex items-start gap-2.5">
                  <Globe size={12} className="mt-0.5 shrink-0" style={{ color: 'rgba(255,255,255,0.28)' }} />
                  <div>
                    <div className="text-[13.5px] font-medium leading-tight" style={{ color: 'rgba(255,255,255,0.58)' }}>{p.name}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{p.country}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 size={13} className="mt-0.5 shrink-0" style={{ color: 'rgba(0,168,232,0.75)' }} />
                <span className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
                  NBC Plaza, Shamsabad Murree Rd,<br />Rawalpindi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={13} className="shrink-0" style={{ color: 'rgba(0,168,232,0.75)' }} />
                <a
                  href="tel:+923005209127"
                  className="text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.52)' }}
                >
                  +92 300 5209127
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={13} className="shrink-0" style={{ color: 'rgba(0,168,232,0.75)' }} />
                <a
                  href="mailto:info@afnantraders.com"
                  className="text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.52)' }}
                >
                  info@afnantraders.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} Afnan Traders. All rights reserved.
          </p>
          <a
            href="https://devprimo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] transition-colors duration-200 hover:text-white/45"
            style={{ color: 'rgba(255,255,255,0.28)' }}
          >
            Developed by DevPrimo
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
