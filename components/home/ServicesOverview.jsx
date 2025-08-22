'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  Stethoscope,
  Microscope,
  FlaskConical,
  Sprout,
  Users,
  Building2,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Medical Technology',
    description:
      'Advanced diagnostic systems and clinical equipment for hospitals and clinics.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '01',
  },
  {
    icon: Microscope,
    title: 'Diagnostic Instruments',
    description:
      'High-precision lab analyzers and microscopy solutions for accurate results.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '02',
  },
  {
    icon: FlaskConical,
    title: 'Analytical Systems',
    description:
      'Cutting-edge chromatography, spectrometry, and QA/QC instrumentation.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '03',
  },
  {
    icon: Sprout,
    title: 'Agricultural Research',
    description:
      'Specialized tools for crop analysis, soil testing, and biotech applications.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '04',
  },
  {
    icon: Users,
    title: 'Vet & Research Support',
    description:
      'Integrated solutions for veterinary diagnostics and research institutions.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '05',
  },
  {
    icon: Building2,
    title: 'Institutional Solutions',
    description:
      'Turnkey laboratory planning, setup, and technical integration services.',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
    number: '06',
  },
];

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  number,
  color,
  border,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      className={`p-6 rounded-2xl border ${border} bg-white relative overflow-hidden group hover:shadow-lg transition-all duration-500 cursor-default`}
    >
      <div className='flex items-start justify-between'>
        <div
          className={`rounded-lg ${color} p-3 w-max transition-transform duration-300`}
        >
          <Icon className='h-6 w-6' />
        </div>
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
          className='text-[50px] font-bold text-blue-100 opacity-50 pointer-events-none select-none'
        >
          {number}
        </motion.span>
      </div>

      <div className='space-y-2'>
        <h3 className='text-xl font-semibold text-blue-950 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-600 leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesOverview() {
  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16 max-w-4xl mx-auto'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent'>
            Precision Solutions for Healthcare & Research
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Delivering reliable, innovative technologies across medical,
            diagnostic, agricultural, and molecular research institutions.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
