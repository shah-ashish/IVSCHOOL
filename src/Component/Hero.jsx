import React from 'react';

const Hero = () => {


  
  const heroData = {
    title: " THE I.V. International school",
    subtitle: "Unlock Your Child's Brightest Future",
    session: "Admissions Open for Session 2026–27",
    tagline: "Where curiosity meets excellence and dreams turn into achievements",
    cta: "Register for Free Counselling",
  };

  return (
    <>
   

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
          <div className="text-center space-y-5 sm:space-y-6">
            {/* Admission Badge - Centered */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  campaign
                </span>
                <span>{heroData.session}</span>
              </div>
            </div>

            {/* Main Title */}
              <span className='text-lg sm:text-3xl font-bold leading-tight capitalize'>Welcome to</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 uppercase">
           
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 px-4">
              {heroData.subtitle}
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4 leading-relaxed">
              {heroData.tagline}
            </p>

            {/* USP Highlights - School & Office Timings */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
              {/* School Timing */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 rounded-2xl px-4 sm:px-5 py-3 hover:bg-white/20 transition-all duration-300 shadow-lg w-full sm:w-auto">
                <span className="material-symbols-outlined text-yellow-400 text-2xl sm:text-3xl">
                  schedule
                </span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-yellow-300">School Hours</p>
                  <p className="text-sm sm:text-base font-bold">8:15 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Office Timing - 24/7 USP */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-2xl px-4 sm:px-5 py-3 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto relative overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                
                <span className="material-symbols-outlined text-2xl sm:text-3xl relative z-10">
                  support_agent
                </span>
                <div className="text-left relative z-10">
                  <p className="text-xs sm:text-sm font-bold">Office Support</p>
                  <p className="text-sm sm:text-base font-black flex items-center gap-1">
                    24/7 Available
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 bg-yellow-400 text-blue-900 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-yellow-300 hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300">
                <span>{heroData.cta}</span>
                <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">
                  arrow_downward
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm opacity-90 px-4">
             
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400 text-base sm:text-lg">groups</span>
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400 text-base sm:text-lg">workspace_premium</span>
                <span>Modern Campus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Wave - Multiple Layers for Seamless Blend */}



       
      </section>
    </>
  );
};

export default Hero;