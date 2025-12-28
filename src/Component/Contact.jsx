import React from 'react';
import logo from '../assets/logo.jpeg'
const Footer = () => {
  return (
    <>
      {/* Google Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <footer id='contact' className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* CTA Banner - Top */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-4">
                  <span className="material-symbols-outlined text-yellow-300 text-xl">
                    schedule
                  </span>
                  <span className="text-white">Limited Seats Available</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                  Secure Your Child's Future Today
                </h3>
                <p className="text-blue-100 text-base sm:text-lg">
                  Admissions are filling fast. Join our community of excellence and innovation.
                </p>
              </div>
              <a 
                href='#admissions' 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex-shrink-0 flex items-center gap-3 shadow-2xl group"
              >
                <span>Book Counselling</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                                 <img src={logo} alt="school_logo" />
                  
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    THE i.v. international school
                  </h3>
                  <p className="text-blue-400 text-sm">
                    Excellence in Education
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Nurturing confident, creative, and compassionate learners ready for tomorrow's challenges. Building futures through excellence in education.
              </p>
              
              {/* Mission Statement */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="material-symbols-outlined text-blue-400 text-2xl">
                    lightbulb
                  </span>
                  <h4 className="text-white font-semibold text-lg">Our Mission</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To provide world-class education that empowers students to become lifelong learners and responsible global citizens.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400 text-3xl">
                  contact_support
                </span>
                Get in Touch
              </h4>
              <div className="space-y-6">
                <a 
                  href="#"
                  className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1 font-semibold">Visit Us</p>
                    <p className="text-white text-base font-medium">YOUR SCHOOL ADDRESS</p>
                  </div>
                </a>

                <a 
                  href="tel:YOUR_PHONE"
                  className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">
                      call
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1 font-semibold">Call Us</p>
                    <p className="text-white text-base font-medium">YOUR PHONE NUMBER</p>
                  </div>
                </a>

                <a 
                  href="mailto:YOUR_EMAIL"
                  className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-2xl">
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1 font-semibold">Email Us</p>
                    <p className="text-white text-base font-medium">YOUR EMAIL ADDRESS</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2025 THE i.v. international school. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  
                </a>
                <span className="text-gray-700">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;