import React from 'react';

const aboutData = {
  title: " THE I.V. International School",
  mission: "To nurture confident, creative, and compassionate learners ready for tomorrow's challenges.",
  items: [
    {
      icon: "school",
      title: "Experienced & Caring Educators",
      bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
    },
    {
      icon: "auto_stories",
      title: "Preschool to Grade 12 Programs",
      bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
    },
    {
      icon: "devices",
      title: "Smart Classrooms & Modern Infrastructure",
      bgImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600"
    },
    {
      icon: "sports_soccer",
      title: "Sports, Arts & Co-curricular Activities",
      bgImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600"
    },
    {
      icon: "security",
      title: "Safe & Nurturing Environment",
      bgImage: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600"
    },
  ],
};

const About = () => {
  return (
    <>
      
      
      <section id='about' className="py-8 sm:py-10 lg:py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase">
              {aboutData.title} 
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-center border-l-4 border-blue-600 bg-gray-50 px-6 sm:px-8 py-6 sm:py-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                "{aboutData.mission}"
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutData.items.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 h-64"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.bgImage}')`
                  }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/60 to-gray-900/40"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-end p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-lg mb-3 shadow-lg">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="font-semibold text-white leading-snug text-base sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;