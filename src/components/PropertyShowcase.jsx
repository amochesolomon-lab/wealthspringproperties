import React, { useState } from 'react';
import { properties } from '../data/mockData';
import { ArrowRight, BedDouble, Square, Check } from 'lucide-react';

export default function PropertyShowcase({ onEnquireClick, onViewAllProperties }) {
  const [activeTab, setActiveTab] = useState('United Arab Emirates');

  const filteredProperties = properties.filter(
    (prop) => prop.country === activeTab
  ).slice(0, 3); // Show top 3 in homepage for showcase

  return (
    <section className="category-tabs-section">
      <div className="container">
        <div className="tabs-header">
          <div>
            <span className="section-tag">Explore Portfolio</span>
            <h2 className="section-title">World-Class Destinations</h2>
          </div>
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'United Arab Emirates' ? 'active' : ''}`}
              onClick={() => setActiveTab('United Arab Emirates')}
            >
              United Arab Emirates
            </button>
            <button
              className={`tab-btn ${activeTab === 'Caribbean' ? 'active' : ''}`}
              onClick={() => setActiveTab('Caribbean')}
            >
              Caribbean Islands
            </button>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="property-grid">
          {filteredProperties.map((prop) => (
            <div key={prop.id} className="property-card">
              <div className="card-img-wrapper">
                <img src={prop.image} alt={prop.title} className="card-img" />
                <span className="card-tag">{prop.type}</span>
                {prop.cbi && <span className="card-cbi">CBI Program</span>}
              </div>

              <div className="card-body">
                <span className="card-location">{prop.location}</span>
                <h3 className="card-title">{prop.title}</h3>
                <p className="card-desc">{prop.desc}</p>
                
                <div className="card-specs">
                  <div className="spec-item">
                    <BedDouble size={16} />
                    <span>{prop.specs.beds}</span>
                  </div>
                  <div className="spec-item">
                    <Square size={14} />
                    <span>{prop.units || prop.specs.size}</span>
                  </div>
                </div>

                <div className="card-footer-info">
                  <span className="card-price">
                    {prop.currency === 'AED' 
                      ? `AED ${prop.price.toLocaleString()}` 
                      : `Starting from $${prop.price.toLocaleString()} USD`}
                  </span>
                  <a
                    href="#"
                    className="card-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onEnquireClick();
                    }}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button 
            className="btn-outline-dark" 
            onClick={() => onViewAllProperties(activeTab)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>View Full Portfolio</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
