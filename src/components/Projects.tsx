import React from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "PetHub E-commerce Web App",
      description: "Built a user-friendly pet supplies site using Java, MySQL, HTML, and CSS. Used MVC architecture, JDBC for database interaction, and enhanced UI with CRUD features.",
      technologies: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
      features: [
        "MVC Architecture Implementation",
        "JDBC Database Integration",
        "CRUD Operations",
        "User-friendly Interface"
      ],
      color: "blue"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-20 w-32 h-32 bg-emerald-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-16 w-28 h-28 bg-teal-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-pulse-custom">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto rounded-full animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-emerald-200 hover-lift hover-glow ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${project.color}-500 to-${project.color}-600 rounded-lg flex items-center justify-center mr-4`}>
                      <Code className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Database className="mr-2 text-blue-600" size={20} />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-center text-gray-700 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r from-${project.color}-100 to-${project.color}-200 text-${project.color}-800 rounded-full text-sm font-medium hover-lift animate-fadeInScale`}
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg hover-lift animate-pulse-custom">
                      <Github className="mr-2" size={18} />
                      View Code
                    </button>
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

export default Projects;