'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Team',
    description:
      'PhD scientists and certified technicians providing expert support',
    color: 'text-purple-600',
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Personalized solutions and comprehensive training programs',
    color: 'text-teal-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support for uninterrupted operations',
    color: 'text-amber-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyChooseUs() {
  return (
    <section className='relative py-16 bg-gradient-to-b from-blue-50 to-white'>
      <div className='absolute -left-32 top-1/2 transform -translate-y-1/2 opacity-4 w-82 h-82 pointer-events-none select-none hidden sm:block'>
        <img
          src='/star.svg'
          alt='Background Pattern'
          className='w-full h-full object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
            className='relative space-y-4 p-2 md:p-6 rounded-xl overflow-hidden'
          >
            <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent relative z-10'>
              Trusted Life Science Partner
            </h2>

            <p className='text-lg text-gray-600 leading-relaxed relative z-10'>
              With 18+ years of excellence, we provide innovative life science
              solutions backed by:
            </p>

            <ul className='space-y-4 relative z-10'>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  className='flex items-start'
                >
                  <div className={`flex-shrink-0 mt-1 ${feature.color}`}>
                    <feature.icon className='h-5 w-5' />
                  </div>
                  <div className='ml-3'>
                    <h3 className='text-lg font-semibold text-blue-950'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
            className='relative p-2 sm:p-4'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div className='space-y-3'>
                <div className='relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src='/expert.jpg'
                    alt='Lab team working together'
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                  <div className='absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium'>
                    Expert Team
                  </div>
                </div>

                <div className='relative h-52 sm:h-64 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src='/precision.jpg'
                    alt='Advanced microscope'
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                  <div className='absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium'>
                    Precision Instruments
                  </div>
                </div>
              </div>

              <div className='space-y-3 sm:mt-6'>
                <div className='relative h-52 sm:h-64 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src='/quality.jpg'
                    alt='Quality control process'
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                  <div className='absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium'>
                    Quality Assurance
                  </div>
                </div>

                <div className='relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src='/research.jpg'
                    alt='Scientists collaborating'
                    fill
                    className='object-cover'
                    sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                  <div className='absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium'>
                    Research Partnership
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200'>
              <div className='text-center'>
                <div className='text-xl sm:text-2xl font-bold text-blue-900 mb-1'>
                  18+
                </div>
                <div className='text-xs sm:text-sm font-semibold text-blue-950'>
                  Years of
                </div>
                <div className='text-xs sm:text-sm font-semibold text-blue-950'>
                  Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
