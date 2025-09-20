import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      category: 'Men\'s Suits',
      items: [
        { image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg', title: 'Navy Business Suit' },
        { image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg', title: 'Charcoal Wedding Suit' },
        { image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg', title: 'Formal Evening Wear' }
      ]
    },
    {
      category: 'Women\'s Dresses',
      items: [
        { image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg', title: 'Wedding Gown' },
        { image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg', title: 'Evening Dress' },
        { image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', title: 'Cocktail Dress' }
      ]
    },
    {
      category: 'Alterations',
      items: [
        { image: 'https://images.pexels.com/photos/7679564/pexels-photo-7679564.jpeg', title: 'Dress Hemming' },
        { image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg', title: 'Suit Tailoring' },
        { image: 'https://images.pexels.com/photos/7679577/pexels-photo-7679577.jpeg', title: 'Precision Work' }
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover the artistry and craftsmanship that goes into every piece we create. From elegant wedding gowns to sharp business suits, each garment represents our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {portfolioItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Transformation Stories
            </h2>
            <p className="text-lg text-slate-600">
              See how we transform garments into perfect fits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Before</h3>
              <img 
                src="https://images.pexels.com/photos/7679564/pexels-photo-7679564.jpeg"
                alt="Before alteration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-slate-600 mt-4">Oversized suit requiring significant adjustments</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">After</h3>
              <img 
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
                alt="After alteration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-slate-600 mt-4">Perfect fit with clean lines and professional appearance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Jennifer Williams', 
                text: 'Maria transformed my mother\'s wedding dress into the most beautiful gown. The attention to detail was incredible!',
                rating: 5
              },
              { 
                name: 'Robert Thompson', 
                text: 'My custom suits from Elite Tailoring are the best investment I\'ve made. Perfect fit every time.',
                rating: 5
              },
              { 
                name: 'Lisa Chen', 
                text: 'Professional, timely, and absolutely perfect results. I wouldn\'t trust my formal wear to anyone else.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-amber-400">★</div>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-slate-800 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Gallery;