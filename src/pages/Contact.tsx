import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to create something exceptional? Contact us to schedule your consultation and begin your bespoke tailoring journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="custom-suit">Custom Suit</option>
                  <option value="custom-dress">Custom Dress</option>
                  <option value="alterations">Alterations</option>
                  <option value="wedding-attire">Wedding Attire</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your tailoring needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500">WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">info@elitetailoring.com</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Location</h3>
                    <p className="text-slate-600">123 Fashion District</p>
                    <p className="text-slate-600">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Business Hours</h3>
                    <p className="text-slate-600">Mon - Fri: 9AM - 7PM</p>
                    <p className="text-slate-600">Sat: 10AM - 5PM</p>
                    <p className="text-slate-600">Sun: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="mb-6 text-amber-50">
                For urgent requests or same-day consultations, reach out directly via WhatsApp or call us.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: +1 (555) 123-4567</span>
                </a>
                
                <a 
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-600 font-semibold">Visit Our Studio</p>
                <p className="text-sm text-slate-500">123 Fashion District</p>
                <p className="text-sm text-slate-500">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;