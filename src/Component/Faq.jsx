import React, { useState } from 'react';

const faqData = [
  {
    q: "What are the age requirements for admission?",
    a: "Admissions are open from Nursery to Grade 12.",
  },
  {
    q: "Can I schedule a school visit?",
    a: "Yes, you can book a visit using the form or by calling us.",
  },
  {
    q: "What values does the school focus on?",
    a: "Academic excellence, discipline, confidence, and ethics.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Google Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                    {item.q}
                  </span>
                  <span className={`material-symbols-outlined text-blue-600 text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {item.a}
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

export default FAQ;