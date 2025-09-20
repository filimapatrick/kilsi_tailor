import React from 'react';
import { Award, Scissors, Users, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: '25+ Years', description: 'Professional Experience' },
    { icon: Users, title: '1000+', description: 'Satisfied Clients' },
    { icon: Scissors, title: 'Master', description: 'Craftsman Certified' },
    { icon: Heart, title: 'Passion', description: 'Driven Excellence' }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Meet Master Tailor
              <span className="text-amber-600"> Maria Rodriguez</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 25 years of experience in the art of tailoring, Maria Rodriguez has built a reputation for creating exceptional garments that combine traditional craftsmanship with contemporary style.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Trained in Milan's finest ateliers and specializing in both men's and women's formal wear, Maria brings European precision to every piece she creates. Her attention to detail and commitment to perfect fit has made her the preferred choice for professionals, wedding parties, and fashion-conscious individuals throughout the city.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-slate-700">Specializes in custom suits and formal wear</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-slate-700">Expert in traditional and modern tailoring techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-slate-700">Certified master craftsman</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg"
                alt="Master Tailor Maria Rodriguez"
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Excellence
            </h2>
            <p className="text-lg text-slate-600">
              Recognized expertise in the art of tailoring
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{achievement.title}</h3>
                  <p className="text-slate-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Our Tailoring Philosophy
          </h2>
          <blockquote className="text-xl md:text-2xl text-slate-600 italic leading-relaxed">
            "Every garment tells a story. My role is to ensure that story is one of confidence, elegance, and perfect fit. I believe that exceptional tailoring is not just about measurements—it's about understanding how a person wants to feel when they wear their clothes."
          </blockquote>
          <cite className="block mt-6 text-lg text-slate-800 font-semibold">
            - Maria Rodriguez, Master Tailor
          </cite>
        </div>
      </section>
    </div>
  );
};

export default About;