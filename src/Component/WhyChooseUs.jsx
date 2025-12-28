import React from 'react';

const whyChooseUsData = [
  "Personalized learning support",
  "Innovative classrooms & safe campus",
  "Strong board exam results",
  "Critical thinking & creativity",
  "Joyful learning experiences",
];

const WhyChooseUs = () => {
  return (
    <>
   

      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-white text-2xl">
                        check_circle
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium text-base sm:text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;