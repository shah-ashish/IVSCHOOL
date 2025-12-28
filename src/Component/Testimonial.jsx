import React from 'react';

const testimonialsData = [
  {
    name: "Mrs. Sharma",
    role: "Parent",
    message: "Choosing THE i.v. international school was the best decision for my child's academic and personal growth.",
  },
  {
    name: "Mr. Verma",
    role: "Parent",
    message: "Teachers truly care here, and my son loves every aspect of the school.",
  },
];

const Testimonial = () => {
  return (
    <>
   

      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              What Parents Say
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-blue-600 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <span className="material-symbols-outlined text-blue-600 text-4xl">
                    format_quote
                  </span>
                </div>

                {/* Message */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  {testimonial.message}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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

export default Testimonial;