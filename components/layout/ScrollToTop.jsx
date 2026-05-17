'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-9 h-9 bg-white border border-gray-200 rounded-md shadow-[0_4px_14px_rgba(0,0,0,0.09)] flex items-center justify-center text-gray-400 hover:text-[#1a1a2e] hover:border-gray-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-200"
          aria-label="Back to top"
        >
          <ChevronUp size={16} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
