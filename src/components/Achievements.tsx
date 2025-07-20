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
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-l-4 border-yellow-500"
                >
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <Award className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Beyond Academics</h3>
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