import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Achievements = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const achievements = [
    {
      title: "Sports Excellence",
      description: "Participated in Kabaddi event at college Sports Workshop",
      icon: Trophy,
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-36 h-36 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-orange-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-red-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse-custom">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 mx-auto rounded-full animate-pulse-custom"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white via-yellow-50 to-orange-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-l-4 border-yellow-500 hover-lift hover-glow ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                >
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-custom">
                      <IconComponent className="text-white animate-bounce-custom" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-pulse-custom">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 text-center ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white max-w-4xl mx-auto hover-lift">
              <Award className="mx-auto mb-4 animate-float" size={48} />
              <h3 className="text-2xl font-bold mb-4 animate-pulse-custom">Beyond Academics</h3>
              <p className="text-lg opacity-90">
                Believing in holistic development, I actively participate in sports and extracurricular activities 
                to maintain a healthy work-life balance and develop teamwork skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;