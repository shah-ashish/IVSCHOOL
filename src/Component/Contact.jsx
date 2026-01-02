import React from 'react';

const Contact = () => {
  const contactData = {
    address: "Pani Tanki Road, Near Registry Office, Motipur, Muzaffarpur, Bihar - 843111",
    phone: "8935898684, 8587867893",
    email: "theivinternationalschool@gmail.com",
  };

  // 🔹 EDIT SOCIAL URLS HERE ONLY
  const socialData = {
    facebook: {
      profile: "https://www.facebook.com/share/1CxeGaFi6Y/",
      logo: "https://cdn.simpleicons.org/facebook/ffffff",
    },
    instagram: {
      profile: "https://www.instagram.com/the_i_v_international_school",
      logo: "https://cdn.simpleicons.org/instagram/ffffff",
    },
  };

  return (
    <>
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
                  <img src="./logo.jpeg" alt="school_logo" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase">
                    THE I.V. International school
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

              {/* 🔹 Social Media (DATA DRIVEN) */}
              <div className="mt-8 flex items-center gap-4">
                <a
                  href={socialData.facebook.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  <img
                    src={socialData.facebook.logo}
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>

                <a
                  href={socialData.instagram.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all"
                >
                  <img
                    src={socialData.instagram.logo}
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
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
                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <span className="material-symbols-outlined text-white text-2xl">location_on</span>
                  <p className="text-white">{contactData.address}</p>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <span className="material-symbols-outlined text-white text-2xl">call</span>
                  <p className="text-white">{contactData.phone}</p>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <span className="material-symbols-outlined text-white text-2xl">mail</span>
                  <p className="text-white">{contactData.email}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <p className="text-gray-400 text-sm text-center uppercase">
              © 2025 THE I.V. international school. All rights reserved.
            </p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Contact;
