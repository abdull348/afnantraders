'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'shadow-[0_1px_16px_rgba(0,0,0,0.09)]'
          : 'border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'relative flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-14' : 'h-[4.5rem]'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Afnan Traders Home">
            <div className="relative flex items-center">
              {/* Soft gradient circle behind the logomark for white-on-white visibility */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#3340A0] opacity-85 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative w-[300px] h-[52px]">
                <Image
                  src="/afnan-traders_logo.png"
                  alt="Afnan Traders"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav — absolutely centered in header */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    active
                      ? 'text-[#1a1a2e]'
                      : 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50'
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#F2D16B] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: 'sm' }), 'hidden lg:flex rounded-lg px-4')}
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                      active
                        ? 'text-[#1a1a2e] bg-[#F2D16B]/12 font-semibold border-l-2 border-[#F2D16B]'
                        : 'text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-50'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(buttonVariants({ size: 'sm' }), 'w-full rounded-lg justify-center')}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
