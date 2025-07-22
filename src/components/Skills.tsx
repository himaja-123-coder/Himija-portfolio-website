import React from 'react';
import { Code, Database, Globe, Settings, Users, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Java", "Core Java", "JDBC", "OOP", "SDLC"],
      color: "blue"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "green"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "DBMS"],
      color: "purple"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Git", "Eclipse", "VS Code"],
      color: "orange"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-solving", "Public Speaking", "Team Collaboration"],
      color: "teal"
    }
    ,
    {
      title: "Natural Skills",
      icon: Lightbulb,
      skills: ["Critical Thinking", "Adaptability", "Time Management", "Communication", "Leadership"],
      color: "indigo"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-purple-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className={`bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-${category.color}-500 hover:bg-${category.color}-50 transition-colors duration-200`}
                        >
                          <span className="text-gray-800 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Passionate about staying updated with the latest technologies and best practices in software development. 
                Committed to continuous learning and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;