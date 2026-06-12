import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { properties } from '../data/mockData';

const slides = properties.map(property => ({
  image: property.image,
  title: property.title,
  subtitle: property.location,
  desc: property.desc
}));

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, idx) => (
        <div key={idx} className={`slide ${idx === currentSlide ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-overlay"></div>
          <div className="container slide-content">
            <p className="slide-subtitle">Featured Land Investment</p>
            <h1 className="slide-title">{slide.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c5a880', fontSize: '1rem', fontWeight: '600' }}>
              <MapPin size={18} />
              <span>{slide.subtitle}</span>
            </div>
            <p style={{ marginTop: '1rem', maxWidth: '600px', color: 'white' }}>{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="slider-controls">
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
