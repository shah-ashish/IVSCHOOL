

const Hero = () => {
 const heroData = {
  title: "Welcome to THE i.v. international school",
  subtitle: "Unlock Your Child’s Brightest Future",
  session: "Admissions Open for Session 2026–27",
  tagline: "Where curiosity meets excellence and dreams turn into achievements",
  cta: "Register for Free Counselling",
};
  return (
    <>
      


      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden border-none pt-20 ">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Session Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg">
              <span className="material-symbols-outlined text-lg sm:text-xl">
                campaign
              </span>
              <span>{heroData.session}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 px-4">
              {heroData.subtitle}
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4 leading-relaxed">
              {heroData.tagline}
            </p>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <button className="group inline-flex items-center gap-3 bg-yellow-400 text-blue-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
                <span>{heroData.cta}</span>
                <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">
                  arrow_downward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 -mb-4">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
};
export default Hero