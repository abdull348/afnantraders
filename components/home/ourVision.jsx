// 'use client';
// import Image from 'next/image';
// import { Target, Eye } from 'lucide-react';
// import { useRef, useState, useEffect } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';

// function CountUp({ end, suffix }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       const duration = 2000;
//       const start = 0;
//       const increment = end / (duration / 16);

//       let current = start;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= end) {
//           clearInterval(timer);
//           current = end;
//         }
//         setCount(Math.floor(current));
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [end, isInView]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function AboutWithStats() {
//   const mainRef = useRef(null);
//   const statsRef = useRef(null);
//   const mainControls = useAnimation();
//   const statsControls = useAnimation();

//   const isMainInView = useInView(mainRef, { once: true, margin: '-100px' });
//   const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });

//   useEffect(() => {
//     if (isMainInView) mainControls.start('visible');
//   }, [isMainInView, mainControls]);

//   useEffect(() => {
//     if (isStatsInView) statsControls.start('visible');
//   }, [isStatsInView, statsControls]);

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.2 },
//     },
//   };

//   const item = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const stats = [
//     { number: 18, label: 'Years of Excellence', suffix: '+' },
//     { number: 500, label: 'Institutions Served', suffix: '+' },
//     { number: 1000, label: 'Solutions Delivered', suffix: '+' },
//     { number: 24, label: 'Technical Support', suffix: '/7' },
//   ];

//   return (
//     <section className='py-16 bg-gradient-to-t from-blue-50 to-white'>
//       {/* Image + Mission/Vision */}
//       <div
//         ref={mainRef}
//         className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-12 mb-20'
//       >
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={mainControls}
//           variants={item}
//           className='flex md:flex-1'
//         >
//           <div className='w-full md:h-full rounded-3xl shadow-lg overflow-hidden'>
//             <Image
//               src='/heath-care.jpg'
//               alt='Healthcare professionals at work'
//               width={1200}
//               height={700}
//               className='w-full h-full object-cover'
//               priority
//             />
//           </div>
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={mainControls}
//           variants={container}
//           className='md:w-1/2 lg:w-[65%] space-y-8'
//         >
//           {/* Main Text */}
//           <motion.div variants={item}>
//             <p className='font-normal text-xl sm:text-2xl md:text-3xl leading-relaxed bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent'>
//               Since 2006, <span className='font-bold'>Afnan Traders</span>{' '}
//               deliver reliable and innovative technologies that empower the
//               life-science community.
//             </p>
//           </motion.div>

//           {/* Mission & Vision */}
//           <motion.div
//             variants={container}
//             className='grid sm:grid-cols-2 gap-6'
//           >
//             <motion.div variants={item}>
//               <div className='p-6 border border-blue-100 bg-white rounded-2xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
//                 <div className='bg-blue-50 text-blue-500 rounded-lg p-3 w-max mb-4'>
//                   <Target className='w-6 h-6' />
//                 </div>
//                 <div className='space-y-3'>
//                   <h3 className='text-xl font-semibold text-blue-950'>
//                     Our Mission
//                   </h3>
//                   <p className='text-gray-700 text-md leading-relaxed'>
//                     Deliver reliable, innovative solutions for Pakistan's
//                     Life-Science Community
//                   </p>
//                 </div>
//                 <span className='absolute w-28 aspect-square -bottom-8 -right-8 bg-blue-600/10 rounded-full'></span>
//               </div>
//             </motion.div>

//             <motion.div variants={item}>
//               <div className='p-6 border border-blue-100 bg-white rounded-2xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
//                 <div className='bg-blue-50 text-blue-500 rounded-lg p-3 w-max mb-4'>
//                   <Eye className='w-6 h-6' />
//                 </div>
//                 <div className='space-y-3'>
//                   <h3 className='text-xl font-semibold text-blue-950'>
//                     Our Vision
//                   </h3>
//                   <p className='text-gray-700 text-md leading-relaxed'>
//                     Lead as Pakistan's premier provider of cutting-edge
//                     scientific technologies
//                   </p>
//                 </div>
//                 <span className='absolute w-28 aspect-square -bottom-8 -right-8 bg-blue-600/10 rounded-full'></span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Stats Section */}
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <motion.div
//           ref={statsRef}
//           initial='hidden'
//           animate={statsControls}
//           variants={container}
//           className='grid grid-cols-2 lg:grid-cols-4 gap-6'
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               className='relative text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
//             >
//               {/* Optional subtle background pattern */}
//               <div className='absolute inset-0 opacity-6 pointer-events-none select-none p-2 hidden sm:block'>
//                 <img
//                   src='/plant.svg'
//                   alt='Background Pattern'
//                   className='w-full h-full object-cover'
//                 />
//               </div>

//               <div className='relative z-10'>
//                 <div className='text-3xl lg:text-4xl font-bold text-blue-950 mb-2'>
//                   <CountUp end={stat.number} suffix={stat.suffix} />
//                 </div>
//                 <div className='text-blue-900 font-medium text-sm uppercase tracking-wider'>
//                   {stat.label}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';
import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const start = 0;
      const increment = end / (duration / 16);

      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(timer);
          current = end;
        }
        setCount(Math.floor(current));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutWithStats() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { number: 18, label: 'Years of Experience', suffix: '+' },
    { number: 500, label: 'Satisfied Clients', suffix: '+' },
    { number: 1000, label: 'Projects Completed', suffix: '+' },
    { number: 24, label: 'Support Available', suffix: '/7' },
  ];

  return (
    <section
      id='about'
      className='py-16 bg-gradient-to-t from-blue-50 to-white'
    >
      <div className='max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-12 mb-20'>
        <div className='flex md:flex-1'>
          <Image
            src='/heath-care.jpg'
            alt='Healthcare professionals at work'
            width={1200}
            height={700}
            className='w-full md:h-full object-cover rounded-3xl shadow-lg'
          />
        </div>

        <div className='md:w-1/2 lg:w-[65%] space-y-8'>
          <p className='font-normal text-xl sm:text-2xl md:text-3xl leading-relaxed bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent'>
            Since 2006, <span className='font-bold'>Afnan Traders</span> deliver
            reliable and innovative technologies that empower the life-science
            community.
          </p>

          <div className='grid sm:grid-cols-2 gap-6'>
            <div className='p-6 border border-blue-100 bg-white rounded-2xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
              <div className='bg-blue-50 text-blue-500 rounded-lg p-3 w-max mb-4'>
                <Target className='w-6 h-6' />
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold text-blue-950'>
                  Our Mission
                </h3>
                <p className='text-gray-700 text-md leading-relaxed'>
                  Deliver reliable, innovative solutions for Pakistan's
                  Life-Science Community
                </p>
              </div>
              <span className='absolute w-28 aspect-square -bottom-8 -right-8 bg-blue-600/10 rounded-full'></span>
            </div>

            <div className='p-6 border border-blue-100 bg-white rounded-2xl relative overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
              <div className='bg-blue-50 text-blue-500 rounded-lg p-3 w-max mb-4'>
                <Eye className='w-6 h-6' />
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold text-blue-950'>
                  Our Vision
                </h3>
                <p className='text-gray-700 text-md leading-relaxed'>
                  Lead as Pakistan's premier provider of cutting-edge scientific
                  technologies
                </p>
              </div>
              <span className='absolute w-28 aspect-square -bottom-8 -right-8 bg-blue-600/10 rounded-full'></span>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={container}
          className='grid grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className='relative text-center bg-white p-6 rounded-xl shadow-sm overflow-hidden'
            >
              <div className='absolute inset-0 opacity-6 pointer-events-none select-none p-2 hidden sm:block'>
                <img
                  src='/plant.svg'
                  alt='Background Pattern'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='relative z-10'>
                <div className='text-3xl lg:text-4xl font-bold text-blue-950 mb-2'>
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className='text-blue-900 font-medium text-sm uppercase tracking-wider'>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
