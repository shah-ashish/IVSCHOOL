import React, { useState, useEffect } from 'react';

const navTabs = [
  { name: 'Home', href: '#' },
  {name:'Gallery',href:'#gallery'},

  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    

      <header 
        className={`bg-gradient-to-r from-blue-900 to-blue-800 text-white fixed top-0 z-50 shadow-lg w-full transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo & School Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 overflow-hidden">
                <img src='./assets/logo.jpeg' alt="schoolLogo" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">
                  THE I.V
                </h1>
                <p className="text-xs sm:text-sm font-bold">
                  International school
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center">
              {navTabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className="px-5 py-2 hover:bg-white/10 rounded-lg transition-colors font-medium text-base"
                >
                  {tab.name}
                </a>
              ))}
            </nav>

            {/* Enquiry Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <a 
                href='#admissions' 
                className="hidden sm:flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">
                  contact_mail
                </span>
                <span>Book Counselling</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                {navTabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className="px-4 py-3 hover:bg-white/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tab.name}
                  </a>
                ))}
                <a 
                  href='#admissions'
                  className="flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-xl">
                    contact_mail
                  </span>
                  <span>Book Counselling</span>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;