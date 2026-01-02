import React, { useState } from 'react';

const facultyData = {
  title: "Meet Our Dedicated Faculty",
  subtitle: "Passionate educators committed to nurturing young minds",
  members: [
    {
      name: "Mr. Lhendup Sherpa",
      location: "Darjeeling",
      qualification: "M.A. (English)",
      image: "LS",
      subject: "English",
      philosophy: "I chose my career as a teacher to provide these to upcoming minds:",
      qualities: [
        { text: "Patience and understanding", icon: "psychology" },
        { text: "Strong organizational skills", icon: "checklist" },
        { text: "Ability to inspire and motivate", icon: "trending_up" },
        { text: "Commitment to continuous learning", icon: "school" }
      ]
    },
    {
      name: "Mrs. Chhedolma Tamang",
      location: "Darjeeling",
      qualification: "M.A. (English)",
      image: "CT",
      subject: "English",
      philosophy: "I've a strong enthusiasm in teaching the little ones with curiosity and always focus on providing them:",
      qualities: [
        { text: "Creativity: Think outside the box and make learning fun", icon: "palette" },
        { text: "Patience: Handle challenging situations with calmness", icon: "self_improvement" },
        { text: "Active Listening: Hear and understand students' concerns", icon: "hearing" },
        { text: "Positivity: Maintain a positive attitude, even in tough times", icon: "sentiment_satisfied" },
        { text: "Flexibility: Adapt to changing lesson plans or student needs", icon: "sync_alt" },
        { text: "Encouraging: Motivate students to reach their potential", icon: "military_tech" },
        { text: "Knowledgeable: Stay updated in their subject", icon: "menu_book" }
      ]
    },
    {
      name: "Miss. Chandrani Choudhury",
      location: "Siliguri",
      qualification: "Pursuing M.Sc. (Science)",
      image: "CC",
      subject: "Science",
      philosophy: "I am a woman with a great interest in teaching and enthusiastic in letting students know the following points:",
      qualities: [
        { text: "Growth Mindset: Believe students can grow and improve", icon: "speed" },
        { text: "Emotional Intelligence: Understand and manage emotions", icon: "favorite" },
        { text: "Storytelling: Make learning engaging and memorable", icon: "auto_stories" },
        { text: "Curiosity: Encourage inquiry and exploration", icon: "search" },
        { text: "Resilience: Bounce back from setbacks", icon: "shield" },
        { text: "Humility: Acknowledge mistakes and learn from them", icon: "thumb_up" },
        { text: "Playfulness: Make learning fun and enjoyable", icon: "celebration" },
        { text: "Authenticity: Be genuine and true to oneself", icon: "verified" }
      ]
    },
    {
      name: "Deepak Kumar",
      position: "Senior Teacher",
      qualification: "M.A. (History)",
      image: "DK",
      subject: "Mathematics, Science, Social Science",
      experience: "5 years",
      classes: "Up to 10th",
      philosophy: "Dedicated and student-focused teacher with strong subject knowledge and a clear, concept-based teaching approach. Believes in creating a positive classroom environment that encourages curiosity, discipline, and moral values while supporting overall student development.",
      qualities: [
        { text: "Clear concept-based teaching", icon: "lightbulb" },
        { text: "Student-focused approach", icon: "groups" },
        { text: "Strong subject knowledge", icon: "workspace_premium" },
        { text: "Promotes moral values", icon: "volunteer_activism" }
      ]
    }
  ]
};

const Faculty = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {facultyData.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {facultyData.subtitle}
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {facultyData.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="text-2xl md:text-3xl font-bold text-blue-600">
                          {member.image}
                        </span>
                      </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 break-words">
                        {member.name}
                      </h3>
                      <div className="space-y-1">
                        {member.position && (
                          <p className="text-blue-100 text-sm md:text-base flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">badge</span>
                            {member.position}
                          </p>
                        )}
                        {member.location && (
                          <p className="text-blue-100 text-sm md:text-base flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            {member.location}
                          </p>
                        )}
                        {member.qualification && (
                          <p className="text-blue-100 text-sm md:text-base flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">school</span>
                            {member.qualification}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject Badge */}
                  {member.subject && (
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        <span className="material-symbols-outlined text-lg">book</span>
                        {member.subject}
                      </span>
                    </div>
                  )}

                  {/* Additional Info - Experience & Classes */}
                  {(member.experience || member.classes) && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {member.experience && (
                        <span className="inline-flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                          <span className="material-symbols-outlined text-base">work</span>
                          {member.experience}
                        </span>
                      )}
                      {member.classes && (
                        <span className="inline-flex items-center gap-1 bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                          <span className="material-symbols-outlined text-base">groups</span>
                          {member.classes}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8">
                  {/* Philosophy */}
                  {member.philosophy && (
                    <div className="mb-6">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                        "{member.philosophy}"
                      </p>
                    </div>
                  )}

                  {/* Qualities */}
                  {member.qualities && member.qualities.length > 0 && (
                    <>
                      <div className="space-y-3 mb-4">
                        {member.qualities.slice(0, expandedCard === index ? member.qualities.length : 3).map((quality, qIndex) => (
                          <div
                            key={qIndex}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors"
                          >
                            <span className="material-symbols-outlined text-blue-600 text-xl md:text-2xl flex-shrink-0 mt-0.5">
                              {quality.icon}
                            </span>
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed flex-1">
                              {quality.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Show More/Less Button */}
                      {member.qualities.length > 3 && (
                        <button
                          onClick={() => toggleCard(index)}
                          className="w-full mt-4 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold py-3 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors text-sm md:text-base"
                        >
                          {expandedCard === index ? (
                            <>
                              <span>Show Less</span>
                              <span className="material-symbols-outlined">expand_less</span>
                            </>
                          ) : (
                            <>
                              <span>View All Qualities ({member.qualities.length - 3} more)</span>
                              <span className="material-symbols-outlined">expand_more</span>
                            </>
                          )}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>
    </>
  );
};

export default Faculty;