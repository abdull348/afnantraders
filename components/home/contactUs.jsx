'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='relative py-20'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50'></div>
        <svg
          className='absolute -top-20 -right-20 w-96 h-96 text-blue-100 opacity-30'
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            d='M45.7 -53.5C57.5 -42.8 67.8 -30.2 72.4 -16.4C77 -2.6 76 12.3 69.6 23.5C63.2 34.7 51.5 42.2 39.4 50.7C27.2 59.2 14.5 68.7 0.9 69.1C-12.7 69.5 -25.4 60.8 -37.4 51.5C-49.4 42.2 -60.7 32.3 -66.9 20.5C-73.1 8.7 -74.2 -5 -70.5 -18.1C-66.8 -31.2 -58.3 -43.8 -47.2 -52.7C-36.1 -61.6 -22.4 -66.9 -8.7 -67.2C5 -67.5 18.7 -62.8 31.2 -56.8C43.7 -50.8 55 -43.4 64.8 -34.1'
            transform='translate(100 100)'
          />
        </svg>
      </div>

      <div
        ref={ref}
        className='relative max-w-7xl mx-auto px-4 sm:px-10 md:px-12 lg:px-5'
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={item}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent'>
            Get in Touch
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Have questions about our scientific solutions? We're here to help
            you find the perfect equipment for your research needs.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 px-0 md:px-14'>
          <motion.div
            variants={container}
            initial='hidden'
            animate={controls}
            className='bg-white border border-blue-100 shadow-xl rounded-2xl p-5 md:p-8'
          >
            <h3 className='text-2xl font-semibold text-blue-950 mb-4'>
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-3'>
              <motion.div variants={item} className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-1.5 text-gray-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all duration-300'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-1.5 text-gray-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </motion.div>

              <motion.div variants={item}>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-1.5 text-gray-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all duration-300'
                    placeholder='Brief subject'
                  />
                </div>
              </motion.div>

              <motion.div variants={item}>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message <span className='text-red-600'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-1.5 text-gray-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none'
                    placeholder='Tell us about your requirements...'
                  />
                </div>
              </motion.div>

              <motion.button
                variants={item}
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-full font-medium focus:outline-none transition-colors flex items-center justify-center gap-3 group'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.5, duration: 0.6 }}
            className='hidden lg:flex lg:items-center lg:justify-center lg:min-h-0'
          >
            <div className='relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              <Image
                src='/message.svg'
                alt='Contact us illustration'
                fill
                className='object-contain'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
