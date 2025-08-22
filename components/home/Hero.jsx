'use client';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Trusted by research institutions',
  'Wide range of equipment',
  'Technical support',
  'Quality products',
];

export default function HeroSection() {
  return (
    <>
      <section
        id='home'
        className='relative min-h-[70vh] py-8 bg-gradient-to-b from-indigo-900 to-purple-800 overflow-hidden'
      >
        <div className='hidden lg:block absolute right-0 top-0 w-full h-full'>
          <div className='absolute inset-0 bg-purple-900/70 z-10'></div>
          <Image
            src='/test-tube.jpg'
            fill
            alt='Scientific Equipment'
            className='object-cover'
          />
        </div>

        <div className='absolute left-0 top-0 w-1/2 h-full hidden lg:block'>
          <div className='absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-0'></div>
        </div>

        <div className='relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6 h-full'>
          <div className='lg:w-[60%] py-4 lg:py-8 xl:py-12 space-y-7 flex flex-col justify-center relative z-20'>
            <motion.h1
              className='text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight'
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Advanced Scientific Solutions for{' '}
              <span className='text-blue-300'>Research Community</span>
            </motion.h1>

            <motion.p
              className='text-white text-lg max-w-xl'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              Providing cutting-edge medical, diagnostic, and analytical
              equipment to research institutions across Pakistan since 2006.
            </motion.p>

            <motion.div
              className='grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 mt-6'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='text-white flex gap-x-3 items-center transition-all duration-300 hover:scale-105'
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <span className='flex-shrink-0'>
                    <CheckCircle className='w-5 h-5 text-blue-300' />
                  </span>
                  <span className='text-sm'>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
