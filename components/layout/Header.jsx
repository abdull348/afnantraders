'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      closeNavbar();
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);

    const sections = navItems.map((item) => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        onClick={closeNavbar}
        aria-hidden='true'
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? 'flex lg:hidden' : 'hidden'
        }`}
      />

      <header
        className={`fixed left-0 top-0 w-full flex items-center h-17 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <nav className='relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center'>
          <div className='flex items-center min-w-max'>
            <a
              href='#'
              onClick={(e) => scrollToSection('home', e)}
              className='text-2xl font-semibold text-blue-950'
            >
              <span className='relative after:absolute after:inset-0 after:rotate-3 after:border after:border-blue-800 text-blue-800'>
                Afnan
              </span>{' '}
              Traders
            </a>
          </div>

          <div
            className={`
              absolute top-full left-0 w-full bg-white lg:bg-transparent py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:relative lg:flex lg:justify-between duration-300 ease-in-out
              ${
                openNavbar
                  ? 'translate-y-0 opacity-100 visible'
                  : 'translate-y-5 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100'
              }
            `}
          >
            <ul className='flex flex-col lg:flex-row gap-6 lg:items-center text-blue-950 lg:w-full lg:justify-center'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(item.id, e)}
                    className={`relative py-1.5 hover:text-blue-700 duration-300 ease-linear after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600 
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0'>
              <Link
                href='#'
                onClick={(e) => scrollToSection('contact', e)}
                className='px-4 py-1.5 duration-300 ease-linear flex justify-center w-full sm:w-auto border border-blue-800 text-blue-800 rounded-full'
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className='flex items-center lg:hidden gap-x-4'>
            <button
              onClick={toggleNavbar}
              aria-label='Toggle navbar'
              className='p-2 text-blue-950 rounded-md hover:bg-blue-50 transition-colors'
            >
              {openNavbar ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
