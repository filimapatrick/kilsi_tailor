import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    'Custom Men\'s Suit',
    'Custom Women\'s Dress',
    'Suit Alterations',
    'Dress Alterations',
    'Wedding Attire',
    'Business Attire',
    'Evening Wear',
    'Consultation Only'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm your booking.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule your consultation with Master Tailor Maria Rodriguez. We'll discuss your vision and create a plan for your perfect garment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-amber-600 mr-3" />
                Schedule Your Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your specific needs, style preferences, or any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Request Appointment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Consultation Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <User className="h-5 w-5 text-amber-600 mr-2" />
                What to Expect
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Initial consultation (30-45 minutes)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Detailed measurements and fitting assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Fabric selection and design discussion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Timeline and pricing explanation</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: +1 (555) 123-4567</span>
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

                <a 
                  href="mailto:info@elitetailoring.com"
                  className="flex items-center space-x-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-amber-600 mr-2" />
                Business Hours
              </h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;