import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const footerData = {
  company: {
    name: 'Afnan Traders',
    description:
      'Delivering reliable and innovative life science solutions since 2006.',
  },
  links: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Contact', href: '/' },
  ],
  services: [
    'Medical Equipment',
    'Diagnostic Solutions',
    'Laboratory Instruments',
    'Research Support',
  ],
  contact: [
    {
      label: 'Address',
      text: 'Office # 16 ,1st Floor, NBC Plaza, Shamsabad Murree Rd, Rwp',
    },
    { label: 'Phone', text: '+92 300 5209127' },
    { label: 'Email', text: 'contact@afnantraders.com' },
  ],
};

export default function Footer() {
  return (
    <footer className='relative bg-gray-50 text-gray-800 border-t border-gray-100 overflow-hidden'>
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern
              id='abstract-lines'
              x='0'
              y='0'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M-5,5 L15,25'
                stroke='#0891b2'
                strokeWidth='0.5'
                opacity='2'
              />
              <path
                d='M10,0 L30,20'
                stroke='#3b82f6'
                strokeWidth='0.5'
                opacity='2'
              />
              <path
                d='M0,10 L20,30'
                stroke='#0891b2'
                strokeWidth='0.4'
                opacity='3'
              />
              <path
                d='M20,10 L35,-5'
                stroke='#3b82f6'
                strokeWidth='0.6'
                opacity='2'
              />
              <path
                d='M5,30 L25,45'
                stroke='#0891b2'
                strokeWidth='0.5'
                opacity='4'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#abstract-lines)' />
        </svg>
      </div>

      <div className='relative max-w-7xl mx-auto px-8 lg:px-12 py-8 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='space-y-5'>
            <div className='flex items-center space-x-3'>
              <div className='flex items-center min-w-max'>
                <a href='#' className='text-2xl font-semibold text-blue-950'>
                  AFNAN{' '}
                  <span className='relative after:absolute after:inset-0 after:rotate-3 after:border after:border-yellow-600 text-yellow-600'>
                    Traders
                  </span>
                </a>
              </div>
            </div>
            <p className='text-gray-600 leading-relaxed text-sm'>
              {footerData.company.description}
            </p>
          </div>

          <div>
            <h4 className='text-base font-semibold text-blue-950 mb-5 tracking-wide'>
              Quick Links
            </h4>
            <nav className='space-y-3'>
              {footerData.links.map((item, index) => (
                <div key={index} className='group'>
                  <Link
                    href={item.href}
                    className='inline-flex items-center text-gray-600 hover:text-blue-700 transition-all duration-200 text-sm'
                  >
                    <span>{item.name}</span>
                    <span className='ml-1 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200'>
                      <ArrowUpRight className='w-4 h-4' />
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <h4 className='text-base font-semibold text-blue-950 mb-5 tracking-wide'>
              Our Services
            </h4>
            <nav className='space-y-3'>
              {footerData.services.map((service, index) => (
                <div key={index} className='group'>
                  <span className='inline-flex items-center text-gray-600 hover:text-blue-700 transition-all duration-200 text-sm cursor-default select-none'>
                    {service}
                    <span className='ml-1 transform translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200'>
                      <ArrowUpRight className='w-4 h-4' />
                    </span>
                  </span>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <h4 className='text-base font-semibold text-blue-950 mb-5 tracking-wide'>
              Contact Us
            </h4>
            <div className='space-y-4 text-sm'>
              {footerData.contact.map((item, index) => (
                <div key={index} className='group'>
                  <p className='text-gray-600 leading-tight'>
                    <span className='font-medium text-blue-950'>
                      {item.label}:
                    </span>{' '}
                    <span className='text-gray-700'>{item.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm'>
          <p className='text-gray-500'>
            &copy; {new Date().getFullYear()} Afnan Traders
          </p>
          <div className='mt-4 md:mt-0 text-gray-400'>
            Developed by{' '}
            <Link
              href='https://devprimo.com/'
              className='text-gray-400 hover:text-blue-500 text-sm transition-colors'
            >
              DevPrimo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
