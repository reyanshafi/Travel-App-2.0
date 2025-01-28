'use client';
import React, { useState } from 'react';

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Our Kashmir trip was magical thanks to this agency! Every detail was perfectly arranged, from houseboat stays to mountain treks.",
      author: "Emily Johnson",
      role: "Travel Blogger",
      stars: 5
    },
    {
      id: 2,
      text: "Best travel experience we've ever had! The Gulmarg skiing package exceeded all our expectations.",
      author: "Michael Chen",
      role: "Adventure Enthusiast",
      stars: 5
    },
    {
      id: 3,
      text: "Exceptional cultural tours in Pahalgam. Their local guides made all the difference in our experience.",
      author: "Sarah Thompson",
      role: "Cultural Explorer",
      stars: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-screen-xl px-6 mx-auto">
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute p-2 text-orange-600 -translate-y-1/2 left-4 top-1/2 hover:text-orange-700"
          aria-label="Previous testimonial"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute p-2 text-orange-600 -translate-y-1/2 right-4 top-1/2 hover:text-orange-700"
          aria-label="Next testimonial"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Testimonial Content */}
        <div className="px-12 text-center">
          {/* Stars */}
          <div className="flex justify-center mb-6 space-x-1 text-orange-600">
            {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="max-w-3xl mx-auto mb-8 text-2xl italic font-medium text-gray-800">
            "{testimonials[activeIndex].text}"
          </blockquote>

          {/* Author */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-blue-950">{testimonials[activeIndex].author}</p>
            <p className="text-gray-600">{testimonials[activeIndex].role}</p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mb-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-orange-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;