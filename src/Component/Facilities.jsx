const facilitiesData = {
  title: "Our Facilities",
  subtitle: "Everything your child needs to thrive and excel",
  facilities: [
    {
      icon: "videocam",
      title: "CCTV Surveillance",
      description: "24/7 monitored campus for complete safety"
    },
    {
      icon: "directions_bus",
      title: "Transport Facility",
      description: "Safe and comfortable commute for students"
    },
    {
      icon: "science",
      title: "Practical Learning",
      description: "Hands-on experience in modern labs"
    },
    {
      icon: "school",
      title: "Expert Faculty",
      description: "Teachers from out of state with expertise"
    },
    {
      icon: "schedule",
      title: "24/7 Availability",
      description: "Round-the-clock support and security"
    },
    {
      icon: "sports_soccer",
      title: "Physical Education",
      description: "Sports facilities and annual exhibitions"
    },
    {
      icon: "shield",
      title: "Safe Premises",
      description: "Friendly and secure learning environment"
    },
    {
      icon: "psychology",
      title: "One-on-One Counseling",
      description: "Personal guidance for every student"
    },
    {
      icon: "accessibility",
      title: "Special Education",
      description: "Inclusive learning for all abilities"
    },
    {
      icon: "groups",
      title: "Parent-Teacher Association",
      description: "Strong home-school collaboration"
    },
    {
      icon: "medical_services",
      title: "First Aid Facility",
      description: "Immediate medical assistance available"
    },
    {
      icon: "factory",
      title: "Industry Visits",
      description: "Real-world exposure and learning"
    },
    {
      icon: "luggage",
      title: "Educational Trips",
      description: "Annual trips for experiential learning"
    },
    {
      icon: "menu_book",
      title: "NEP 2020 Based",
      description: "Curriculum aligned with New Education Policy"
    }
  ]
};

const Facilities = () => {
  return (
    <section className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
         <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {facilitiesData.title}
              
            </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {facilitiesData.subtitle}
          </p>
          </div>
   

        {/* Facilities List */}
        <div className="space-y-4">
          {facilitiesData.facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              {/* Icon - Left */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    {facility.icon}
                  </span>
                </div>
              </div>

              {/* Content - Right */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;