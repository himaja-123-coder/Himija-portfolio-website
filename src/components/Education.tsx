import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Education = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const educationData = [
    {
      degree: "BTech in Computer Science Engineering",
      institution: "Vaagdevi Institute Of Technology and Science",
      period: "2020 – 2024",
      cgpa: "8.3",
      color: "blue"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "J.M.J Junior College for Girls",
      period: "2018 – 2020",
      cgpa: "8.37",
      color: "purple"
    },
    {
      degree: "SSC",
      institution: "K.G.B.V High School",
      period: "2017 – 2018",
      cgpa: "9.0",
      color: "teal"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-teal-600"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${edu.color}-500 rounded-full border-4 border-white shadow-lg z-10`}></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-${edu.color}-500`}>
                      <div className="flex items-center mb-3">
                        <GraduationCap className={`text-${edu.color}-500 mr-3`} size={24} />
                        <span className={`text-${edu.color}-600 font-semibold text-sm`}>{edu.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-gray-600 mb-3">{edu.institution}</p>
                      
                      <div className="flex items-center">
                        <Award className={`text-${edu.color}-500 mr-2`} size={20} />
                        <span className="font-semibold text-gray-800">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;