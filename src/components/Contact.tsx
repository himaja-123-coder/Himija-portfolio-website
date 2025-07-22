import React from 'react';
import { Phone, Mail, Linkedin, Github, FileText, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9676162423",
      href: "tel:+919676162423",
      color: "green"
    },
    {
      icon: Mail,
      label: "Email",
      value: "subbireddygarihimaja@gmail.com",
      href: "mailto:subbireddygarihimaja@gmail.com",
      color: "red"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/himaja-subbiredygari/",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/himaja-123-coder",
      color: "gray"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-16 w-36 h-36 bg-rose-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-400 rounded-full animate-pulse-custom"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-400 rounded-full animate-bounce-custom"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="relative z-10">
          <div className={`text-center mb-16 ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse-custom">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mx-auto rounded-full animate-pulse-custom"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Ready to collaborate or have questions about my work? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group bg-gradient-to-br from-white to-rose-50 hover:from-rose-50 hover:to-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-rose-200 hover:border-rose-300 hover-lift hover-glow ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    contact.color === 'green' ? 'bg-green-500' :
                    contact.color === 'red' ? 'bg-red-500' :
                    contact.color === 'blue' ? 'bg-blue-500' :
                    'bg-gray-600'
                  }`}>
                    <IconComponent className="text-white" size={28} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{contact.label}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-zoomIn' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto hover-lift">
              <Send className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-lg opacity-90 mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <a
                href="mailto:subbireddygarihimaja@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-white text-rose-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover-lift"
              >
                <Mail className="mr-2" size={20} strokeWidth={2} />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;