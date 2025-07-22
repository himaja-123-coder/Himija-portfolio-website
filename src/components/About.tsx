import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-custom">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Computer Science Engineering graduate (2024) from <span className="font-semibold text-blue-600">Vaagdevi Institute Of Technology and Science</span>. 
                Strong in Java, JDBC, SQL, and web development technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate about building clean, scalable solutions and constantly learning in the software space. 
                I enjoy tackling complex problems and turning ideas into efficient, user-friendly applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg border border-blue-200 hover-lift hover-glow">
                  <h3 className="font-semibold text-blue-800 mb-2 animate-pulse-custom">Frontend Focus</h3>
                  <p className="text-blue-700 text-sm">Creating responsive, interactive user interfaces</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-lg border border-purple-200 hover-lift hover-glow">
                  <h3 className="font-semibold text-purple-800 mb-2">Backend Expertise</h3>
                  <p className="text-purple-700 text-sm">Building robust server-side applications</p>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-teal-200 hover-lift ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className={`flex items-center space-x-3 ${isVisible ? 'animate-slideInUp delay-100' : 'opacity-0'}`}>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Computer Science Graduate (2024)</span>
                </div>
                <div className={`flex items-center space-x-3 ${isVisible ? 'animate-slideInUp delay-200' : 'opacity-0'}`}>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Java Full Stack Developer</span>
                </div>
                <div className={`flex items-center space-x-3 ${isVisible ? 'animate-slideInUp delay-300' : 'opacity-0'}`}>
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Problem Solver & Team Player</span>
                </div>
                <div className={`flex items-center space-x-3 ${isVisible ? 'animate-slideInUp delay-400' : 'opacity-0'}`}>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;