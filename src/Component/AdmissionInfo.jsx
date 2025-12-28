import React from 'react';

const admissionsData = {
  title: "Admissions & Important Information",
  classes: [
    "Nursery / KG",
    "Primary Classes",
    "Middle School",
    "Secondary & Senior Secondary",
  ],
  actions: [
    "Register for Admission",
    "Book a School Visit",
    "Ask for Fee Structure",
    "Request a Prospectus",
  ],
};

const AdmissionsInfo = () => {
  return (
    <>
     

      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              {admissionsData.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Admissions Open For */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    school
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Admissions Open For
                </h3>
              </div>
              <div className="space-y-3">
                {admissionsData.classes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-600 transition-colors duration-200"
                  >
                    <span className="material-symbols-outlined text-blue-600">
                      check_circle
                    </span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Can Do Next */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    touch_app
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  What You Can Do Next
                </h3>
              </div>
              <div className="space-y-3">
                {admissionsData.actions.map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-left font-medium"
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionsInfo;