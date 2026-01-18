import React from 'react';

const aboutData = {
  title: " THE I.V. International School",
  mission: "To nurture confident, creative, and compassionate learners ready for tomorrow's challenges.",
  items: [
    { bgImage: "file1.png" },
    { bgImage: "file2.png" },
    { bgImage: "file3.png" },
    { bgImage: "file4.png" },
    { bgImage: "file5.png" },
    { bgImage: "file6.png" },
    { bgImage: "file7.png" },
  ],
};

const About = () => {

  const images = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const getImage = (name) => images[`../assets/${name}`];
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
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <img 
                  src={getImage(item.bgImage)}
                  alt={`School facility ${index + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;