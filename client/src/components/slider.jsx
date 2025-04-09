import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides with text and buttons
  const slides = [
    {
      id: 1,
      image: 'https://via.placeholder.com/800x300/FF5733/ffffff?text=Slide+1',  // Image URL
      text: 'COMPANY OF QUALITY',
      subtext: 'A factory is an industrial site, usually consisting of buildings and machinery where workers manufacture goods.',
      buttonText: 'Our Projects',
      buttonLink: '#projects'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/800x300/33FF57/ffffff?text=Slide+2',
      text: 'LEADING INDUSTRY',
      subtext: 'Processing one product into another to ensure seamless operations and output.',
      buttonText: 'Get a Free Quote',
      buttonLink: '#quote'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/800x300/3357FF/ffffff?text=Slide+3',
      text: 'TRUSTED PARTNER',
      subtext: 'We provide high-quality services with a focus on customer satisfaction.',
      buttonText: 'Learn More',
      buttonLink: '#learn'
    }
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Function for next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function for previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            {/* Text and Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fadeIn">{slide.text}</h2>
              <p className="text-lg mb-6 opacity-0 animate-fadeIn animate-delay-200">{slide.subtext}</p>
              <a
                href={slide.buttonLink}
                className="px-6 py-2 bg-red-600 text-white rounded-lg opacity-0 animate-fadeIn animate-delay-400 hover:bg-red-700 transition-all duration-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer"
        onClick={prevSlide}
      >
        &#10094;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer"
        onClick={nextSlide}
      >
        &#10095;
      </div>

      {/* Indicators (Optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
