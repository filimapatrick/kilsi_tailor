import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Star, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Custom Suits',
      description: 'Bespoke suits tailored to perfection with premium fabrics',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    },
    {
      title: 'Dress Alterations',
      description: 'Expert alterations for the perfect fit on any garment',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg'
    },
    {
      title: 'Wedding Attire',
      description: 'Special occasion wear crafted for your memorable moments',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Absolutely incredible work! My wedding dress fit like a dream.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Best tailor in the city. My suits have never looked better.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      text: 'Professional service and attention to detail is unmatched.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Custom Tailoring for 
              <span className="text-amber-400"> Men & Women</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
              Experience the art of bespoke craftsmanship with over 25 years of expertise in creating perfectly fitted garments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book an Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/gallery"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From custom suits to intricate alterations, we bring decades of expertise to every stitch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800">25+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800">1000+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                <Scissors className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800">5000+</div>
              <div className="text-slate-600">Garments Crafted</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800">4.9</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-slate-800 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;