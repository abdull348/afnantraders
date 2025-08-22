// // components/AboutUs.js
// import { Award, Users, Globe, HeartPulse } from 'lucide-react';

// export default function AboutUs() {
//   const stats = [
//     { number: '18+', label: 'Years of Excellence', icon: Award },
//     { number: '500+', label: 'Institutions Served', icon: Users },
//     { number: '24/7', label: 'Technical Support', icon: Globe },
//     { number: '98%', label: 'Client Satisfaction', icon: HeartPulse },
//   ];

//   return (
//     <section className='py-20 bg-white'>
//       <div className='max-w-7xl mx-auto px-6 lg:px-8'>
//         {/* Header */}
//         <div className='text-center mb-16 max-w-4xl mx-auto'>
//           <div className='flex items-center justify-center space-x-2 mb-4'>
//             <div className='w-2 h-2 bg-cyan-600 rounded-full'></div>
//             <span className='text-cyan-600 font-semibold text-sm uppercase tracking-wider'>
//               Our Story
//             </span>
//           </div>
//           <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
//             Advancing{' '}
//             <span className='text-cyan-600'>Science & Healthcare</span> Since
//             2006
//           </h2>
//           <p className='text-lg text-gray-600 leading-relaxed'>
//             Afnan Traders has been a trusted partner for medical, diagnostic,
//             and research institutions across Pakistan, delivering reliable and
//             innovative solutions for over 18 years.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
//           {/* Image Placeholder */}
//           <div className='rounded-2xl overflow-hidden shadow-lg'>
//             <div
//               className='w-full h-96 bg-gradient-to-br from-cyan-50 to-blue-100 border border-cyan-200 flex items-center justify-center'
//               style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1581092921461-6484fdca7d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             ></div>
//           </div>

//           {/* Text Content */}
//           <div className='space-y-6'>
//             <h3 className='text-2xl font-semibold text-gray-900'>
//               Our Mission
//             </h3>
//             <p className='text-gray-600 leading-relaxed'>
//               To empower healthcare and research institutions with cutting-edge
//               technologies through integrated, reliable, and innovative
//               solutions tailored to the evolving needs of the scientific
//               community.
//             </p>

//             <h3 className='text-2xl font-semibold text-gray-900 mt-8'>
//               Our Commitment
//             </h3>
//             <p className='text-gray-600 leading-relaxed'>
//               We’ve built a broad platform of global principals and enabling
//               technologies to serve Medical, Diagnostic, Analytical,
//               Agriculture, Vet Research, and Molecular Biological institutions
//               with precision and integrity.
//             </p>

//             <p className='text-gray-600 italic mt-6 border-l-4 border-cyan-600 pl-4'>
//               "Delivering excellence not just in products, but in partnership,
//               support, and scientific advancement."
//             </p>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className='text-center p-6 bg-cyan-50 rounded-xl border border-cyan-100 hover:shadow-md transition-all duration-300 group'
//             >
//               <div className='inline-flex items-center justify-center w-12 h-12 bg-cyan-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform'>
//                 <stat.icon className='h-6 w-6' />
//               </div>
//               <p className='text-2xl font-bold text-gray-900 mb-1'>
//                 {stat.number}
//               </p>
//               <p className='text-sm text-gray-600 font-medium'>{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className='text-center mt-16'>
//           <a
//             href='/about'
//             className='inline-flex items-center px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg'
//           >
//             Learn More About Us
//             <svg
//               className='ml-2 h-5 w-5'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M14 5l7 7m0 0l-7 7m7-7H3'
//               ></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
