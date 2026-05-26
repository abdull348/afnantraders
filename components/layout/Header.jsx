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
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/97 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.05),0_6px_28px_rgba(0,0,0,0.07)]'
          : 'bg-white/85 backdrop-blur-xl border-b border-gray-100/70'
      )}
    >
      {/* Premium gold accent line at very top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F2D16B]/55 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'relative flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-14' : 'h-[4.5rem]'
          )}
        >
          {/* Logo — clean, no background gimmick */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Afnan Traders Home">
            <div
              className={cn(
                'relative transition-all duration-300',
                scrolled ? 'w-[180px] h-[38px]' : 'w-[210px] h-[44px]'
              )}
            >
              <Image
                src="/afnan-traders_logo.png"
                alt="Afnan Traders"
                fill
                className="object-contain object-left group-hover:opacity-90 transition-opacity duration-200"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav — absolutely centered */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2.5 text-[13.5px] font-medium rounded-lg transition-all duration-200',
                    active
                      ? 'text-[#1a1a2e] font-semibold'
                      : 'text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-50/80'
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#F2D16B] rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'sm' }),
              'hidden lg:flex rounded-lg px-5 shadow-sm shadow-[#00A8E8]/15 hover:shadow-[0_4px_14px_rgba(0,168,232,0.28)] transition-shadow duration-200'
            )}
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-[#1a1a2e] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
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
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white/98 backdrop-blur-2xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors',
                        active
                          ? 'text-[#1a1a2e] bg-[#F2D16B]/10 font-semibold border-l-2 border-[#F2D16B]'
                          : 'text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.18 }}
                className="pt-2 pb-1"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(buttonVariants({ size: 'sm' }), 'w-full rounded-lg justify-center')}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
