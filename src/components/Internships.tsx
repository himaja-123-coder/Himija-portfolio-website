import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Internships = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const internships = [
    {
      title: "Java Full Stack Intern",
      company: "Pentagon Space",
      period: "2024",
      description: "Built full stack applications using Servlets, JSP, HTML/CSS, MySQL, and Java. Gained hands-on experience in enterprise-level development.",
      technologies: ["Java", "Servlets", "JSP", "HTML/CSS", "MySQL"],
      color: "blue"
    },
    {
      title: "MySQL Intern",
      company: "SoloLearn",
      period: "2024",
      description: "Worked on query optimization, database design, and CRUD operations. Enhanced understanding of database management and performance tuning.",
      technologies: ["MySQL", "Database Design", "Query Optimization", "CRUD Operations"],
      color: "purple"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-40 h-40 bg-amber-400 rounded-full animate-float"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-orange-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-red-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse-custom">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mx-auto rounded-full animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-t-4 border-orange-500 hover-lift hover-glow ${isVisible ? (index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight') : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${internship.color}-500 to-${internship.color}-600 rounded-lg flex items-center justify-center mr-4`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{internship.title}</h3>
                      <p className={`text-${internship.color}-600 font-semibold`}>{internship.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Calendar className="mr-2" size={16} />
                    <span className="text-sm">{internship.period}</span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{internship.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r from-${internship.color}-100 to-${internship.color}-200 text-${internship.color}-800 rounded-full text-sm font-medium hover-lift animate-fadeInScale`}
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;