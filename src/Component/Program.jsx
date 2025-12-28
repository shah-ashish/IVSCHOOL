import React from 'react';

const programsData = {
  academics: [
    "CBSE / State Board Curriculum",
    "STEM-focused Learning",
    "Languages & Grammar Excellence",
    "Digital Classrooms & Modern Labs",
  ],
  activities: [
    "Sports & Fitness",
    "Music & Arts",
    "Robotics & Coding Clubs",
    "Annual Events & Competitions",
  ],
};

const Program = () => {
  return (
    <>
     

      <section id='programs' className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our Programmes & Offerings
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive education combining academic excellence with holistic development
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Streams */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    menu_book
                  </span>
                </div>
                <h3 className="text-2xl font-bold">
                  Academic Streams
                </h3>
              </div>
              <div className="space-y-4">
                {programsData.academics.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-blue-900 text-base font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-white/95 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Co-Curricular Activities */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    palette
                  </span>
                </div>
                <h3 className="text-2xl font-bold">
                  Co-Curricular Activities
                </h3>
              </div>
              <div className="space-y-4">
                {programsData.activities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-indigo-900 text-base font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-white/95 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;