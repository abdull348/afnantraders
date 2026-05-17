import Link from 'next/link';
import Image from 'next/image';
import { Building2, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
  { name: 'Thistle Scientific', country: 'UK' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Gold accent line */}
      <div className="sep-gold" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <Link href="/" aria-label="Afnan Traders Home">
              <div className="relative flex items-center">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#3340A0] opacity-85" />
                <div className="relative w-[340px] h-18">
                  <Image
                    src="/afnan-traders_logo.png"
                    alt="Afnan Traders"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pakistan's trusted life science solutions provider since 2006. Serving hospitals,
              research institutions, and laboratories nationwide.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8]" />
              Est. 2006 · Pakistan
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">Navigation</h4>
            <nav className="space-y-2.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#00A8E8] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">Distribution Partners</h4>
            <div className="space-y-3">
              {partners.map((p) => (
                <div key={p.name} className="flex items-start gap-2">
                  {/* <span className="w-1 h-1 rounded-full bg-[#00A8E8]/50 mt-1.5 flex-shrink-0" /> */}
                  <div>
                    <div className="text-sm font-medium text-gray-500">{p.name}</div>
                    {/* <div className="text-[11px] text-gray-400">{p.country}</div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Building2 size={14} className="text-[#00A8E8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500 leading-snug">
                  National Business Center, Rawalpindi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#00A8E8] flex-shrink-0" />
                <a href="tel:+923005209127" className="text-sm text-gray-500 hover:text-[#00A8E8] transition-colors">
                  +92 300 5209127
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#00A8E8] flex-shrink-0" />
                <a href="mailto:info@afnantraders.com" className="text-sm text-gray-500 hover:text-[#00A8E8] transition-colors">
                  info@afnantraders.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Afnan Traders. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-gray-400">
          <a href="https://devprimo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00A8E8] transition-colors">
            Developed by DevPrimo
          </a>
        </div>
      </div>
    </footer>
  );
}
