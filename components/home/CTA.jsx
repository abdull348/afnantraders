'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='py-24'>
      <div className='px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto'>
        <div className='w-full relative py-8 md:py-10 px-4 md:px-8 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100 overflow-hidden'>
          <div className='absolute right-0 top-0 h-full w-full flex justify-end'>
            <div className='w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl'>
              <span className='absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45'></span>
              <span className='absolute w-16 h-16 -bottom-1 -right-1 bg-blue-400 rounded-md rotate-45'></span>
              <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-blue-300 rounded-md rotate-45'></span>
            </div>
          </div>

          <div className='absolute left-0 bottom-0 h-full w-full flex items-end'>
            <div className='w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl'>
              <span className='absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45'></span>
              <span className='absolute w-16 h-16 -bottom-1 -right-1 bg-blue-400 rounded-md rotate-45'></span>
              <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-blue-300 rounded-md rotate-45'></span>
            </div>
          </div>

          <div className='mx-auto text-center max-w-xl md:max-w-2xl relative space-y-6'>
            <motion.h1
              className='font-bold text-3xl sm:text-4xl md:text-5xl text-blue-950 leading-tight '
              variants={textVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              Quick Start your Strategic Partnership
            </motion.h1>

            <motion.p
              className='text-gray-800 text-lg'
              variants={textVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Providing cutting-edge medical, diagnostic, and analytical
              equipment to research institutions across Pakistan.
            </motion.p>

            <div className='mx-auto max-w-md sm:max-w-xl flex justify-center'>
              <motion.div
                variants={buttonVariants}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                whileTap='tap'
                viewport={{ once: true }}
              >
                <Link
                  href='#'
                  onClick={scrollToContact}
                  className='outline-none px-5 py-2 rounded-3xl bg-blue-900 text-white flex items-center overflow-hidden w-max relative group'
                >
                  <span className='relative z-10'>Contact Us</span>
                  <span className='absolute inset-0 w-full h-full bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl'></span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
