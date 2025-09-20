import React from 'react';
import { Phone, Mail, MapPin, Clock, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">Elite Tailoring</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Premium custom tailoring services for discerning clients. Crafting exceptional garments with attention to detail and traditional techniques.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">info@elitetailoring.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">123 Fashion District, NY</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-slate-300">Mon - Fri: 9AM - 7PM</p>
                  <p className="text-slate-300">Sat: 10AM - 5PM</p>
                  <p className="text-slate-300">Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Elite Tailoring. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Crafted with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;