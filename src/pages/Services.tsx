import React from 'react';
import { Check, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Custom Tailoring',
      services: [
        { name: 'Men\'s Custom Suits', price: 'Starting from $1,200', description: 'Bespoke suits crafted to your exact measurements and style preferences' },
        { name: 'Women\'s Custom Dresses', price: 'Starting from $800', description: 'Elegant dresses designed and tailored for perfect fit and style' },
        { name: 'Business Attire', price: 'Starting from $600', description: 'Professional clothing that makes a lasting impression' },
        { name: 'Evening Wear', price: 'Starting from $900', description: 'Sophisticated formal wear for special occasions' }
      ]
    },
    {
      category: 'Alterations & Repairs',
      services: [
        { name: 'Hemming & Length Adjustments', price: '$25 - $75', description: 'Perfect length for pants, skirts, and dresses' },
        { name: 'Taking In/Letting Out', price: '$40 - $120', description: 'Adjusting garment width for the perfect fit' },
        { name: 'Sleeve Adjustments', price: '$30 - $80', description: 'Shortening or lengthening sleeves with precision' },
        { name: 'Zipper Replacement', price: '$35 - $65', description: 'Quality zipper installation and repair services' }
      ]
    },
    {
      category: 'Specialty Services',
      services: [
        { name: 'Wedding Dress Alterations', price: '$200 - $500', description: 'Expert bridal wear fitting for your special day' },
        { name: 'Vintage Garment Restoration', price: 'Quote on consultation', description: 'Bringing cherished vintage pieces back to life' },
        { name: 'Fabric Sourcing', price: 'Consultation fee applies', description: 'Access to premium fabrics from around the world' },
        { name: 'Personal Styling Consultation', price: '$150/hour', description: 'Professional guidance on style and fit' }
      ]
    }
  ];

  const processSteps = [
    { step: '1', title: 'Consultation', description: 'We discuss your vision, preferences, and requirements in detail' },
    { step: '2', title: 'Measurement', description: 'Precise measurements are taken using professional tailoring techniques' },
    { step: '3', title: 'Design & Fabric', description: 'Choose from our curated selection of premium fabrics and finalize design details' },
    { step: '4', title: 'First Fitting', description: 'Initial fitting to ensure proper foundation and make adjustments' },
    { step: '5', title: 'Final Fitting', description: 'Final adjustments and quality check before completion' },
    { step: '6', title: 'Delivery', description: 'Your perfectly crafted garment is ready for pickup or delivery' }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From bespoke custom tailoring to expert alterations, we offer comprehensive services to meet all your garment needs with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-slate-800">{service.name}</h3>
                    <span className="text-amber-600 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-slate-500">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Quality guarantee included</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Tailoring Process
            </h2>
            <p className="text-lg text-slate-600">
              Every garment follows our meticulous 6-step process to ensure perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-full font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 ml-4">{step.title}</h3>
                </div>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Perfect Tailoring?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Book your consultation today and discover the difference that expert craftsmanship makes
          </p>
          <a 
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;