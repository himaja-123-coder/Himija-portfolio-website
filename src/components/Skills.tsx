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
    <section id="skills" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-40 h-40 bg-violet-400 rounded-full animate-float"></div>
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-purple-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-fuchsia-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-pulse-custom">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mx-auto rounded-full animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white via-${category.color}-50 to-${category.color}-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-${category.color}-200 hover-lift hover-glow ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center mr-4 animate-pulse-custom`}>
                        <IconComponent className="text-white animate-bounce-custom" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 animate-pulse-custom">{category.title}</h3>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className={`bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-${category.color}-500 hover:bg-${category.color}-50 transition-colors duration-200 hover-lift animate-slideInRight`}
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <span className="text-gray-800 font-medium animate-pulse-custom">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Highlights */}
          <div className={`mt-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-8 text-white hover-lift ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4 animate-float" size={48} />
              <h3 className="text-2xl font-bold mb-4 animate-pulse-custom">Always Learning</h3>
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