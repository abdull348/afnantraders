// export default function AboutPage() {
//   return (
//     <>
//       <main className='bg-white'>
//         {/* Hero Section */}
//         <section className='relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50'>
//           <div className='absolute inset-0 opacity-5'>
//             <svg
//               className='w-full h-full'
//               xmlns='http://www.w3.org/2000/svg'
//               viewBox='0 0 100 100'
//               preserveAspectRatio='none'
//             >
//               <path
//                 d='M0,0 L100,0 L100,100 L0,100 Z'
//                 fill='none'
//                 stroke='#3b82f6'
//                 strokeWidth='0.3'
//                 strokeDasharray='4 4'
//               />
//               <circle cx='20' cy='20' r='0.8' fill='#3b82f6' />
//               <circle cx='80' cy='80' r='0.8' fill='#3b82f6' />
//             </svg>
//           </div>

//           <div className='relative max-w-6xl mx-auto px-6 text-center'>
//             <div className='flex items-center justify-center space-x-2 mb-6'>
//               <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
//               <span className='text-blue-600 font-semibold text-sm uppercase tracking-wider'>
//                 Our Journey
//               </span>
//             </div>
//             <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
//               Advancing Science in Pakistan Since{' '}
//               <span className='text-blue-600'>2006</span>
//             </h1>
//             <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
//               Afnan Traders has been a trusted partner for medical, diagnostic,
//               and research institutions, delivering integrated, reliable, and
//               innovative solutions for over 18 years.
//             </p>
//           </div>
//         </section>

//         {/* Mission Section */}
//         <section className='py-20 bg-white'>
//           <div className='max-w-5xl mx-auto px-6 lg:px-8 text-center'>
//             <h2 className='text-3xl font-bold text-gray-900 mb-12'>
//               Our Mission
//             </h2>
//             <div className='bg-blue-50 border border-blue-100 rounded-2xl p-10 md:p-12 mx-4'>
//               <blockquote className='text-2xl italic text-gray-800 leading-relaxed'>
//                 "To empower the scientific community with cutting-edge
//                 technologies and integrated solutions that drive innovation in
//                 healthcare, agriculture, and molecular research."
//               </blockquote>
//               <p className='mt-8 font-medium text-blue-700'>
//                 — Afnan Traders Leadership
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Story & History */}
//         <section className='py-20 bg-gray-50'>
//           <div className='max-w-6xl mx-auto px-6 lg:px-8'>
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
//               <div>
//                 <img
//                   src='https://images.unsplash.com/photo-1581092921461-6484fdca7d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//                   alt='Laboratory research team'
//                   className='rounded-2xl shadow-lg w-full h-96 object-cover'
//                 />
//               </div>
//               <div className='space-y-6'>
//                 <h2 className='text-3xl font-bold text-gray-900'>Our Story</h2>
//                 <p className='text-lg text-gray-600 leading-relaxed'>
//                   Founded in 2006, Afnan Traders began with a vision to bridge
//                   global innovation with Pakistan’s growing demand for advanced
//                   scientific equipment.
//                 </p>
//                 <p className='text-lg text-gray-600 leading-relaxed'>
//                   Over the years, we’ve built strategic partnerships with
//                   international manufacturers to deliver diagnostic, analytical,
//                   and medical technologies to hospitals, research labs,
//                   agricultural institutes, and veterinary centers across the
//                   country.
//                 </p>
//                 <p className='text-lg text-gray-600 leading-relaxed'>
//                   Today, we stand as a trusted provider of integrated solutions,
//                   combining technical expertise, reliable service, and deep
//                   understanding of local needs to support scientific
//                   advancement.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className='py-20 bg-white'>
//           <div className='max-w-6xl mx-auto px-6 lg:px-8'>
//             <div className='text-center mb-16'>
//               <h2 className='text-3xl font-bold text-gray-900'>
//                 Our Core Values
//               </h2>
//               <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
//                 Guiding every decision, partnership, and solution we deliver.
//               </p>
//             </div>

//             <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
//               {[
//                 {
//                   title: 'Excellence',
//                   desc: 'We uphold the highest standards in product quality, service delivery, and technical support.',
//                 },
//                 {
//                   title: 'Innovation',
//                   desc: 'We bring cutting-edge technologies to enable breakthroughs in research and healthcare.',
//                 },
//                 {
//                   title: 'Integrity',
//                   desc: 'We build lasting relationships through transparency, reliability, and ethical practices.',
//                 },
//               ].map((value, index) => (
//                 <div
//                   key={index}
//                   className='text-center p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100'
//                 >
//                   <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
//                     <div className='w-8 h-1 bg-blue-600 rounded'></div>
//                   </div>
//                   <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                     {value.title}
//                   </h3>
//                   <p className='text-gray-600 leading-relaxed'>{value.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className='py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white'>
//           <div className='max-w-4xl mx-auto text-center px-6'>
//             <h2 className='text-3xl md:text-4xl font-bold mb-6'>
//               Partner With Us for Scientific Excellence
//             </h2>
//             <p className='text-xl mb-10 opacity-90'>
//               Let’s work together to equip your institution with reliable,
//               innovative solutions.
//             </p>
//             <div className='flex flex-col sm:flex-row gap-4 justify-center'>
//               <a
//                 href='/contact'
//                 className='bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all'
//               >
//                 Contact Us Today
//               </a>
//               <a
//                 href='/services'
//                 className='border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all'
//               >
//                 Explore Our Services
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
