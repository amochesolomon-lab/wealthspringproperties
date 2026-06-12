import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutSection({ onLearnMore }) {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content">
          {/* Text Side */}
          <div>
            <span className="section-tag">Welcome to {siteConfig.name}</span>
            <h2 className="section-title">{siteConfig.tagline}</h2>
            <p className="welcome-desc" style={{ marginBottom: '2rem' }}>
              {siteConfig.mission}
            </p>
            <button className="btn-outline-dark" onClick={onLearnMore} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Our Story</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats Side */}
          <div>
            <p className="welcome-desc" style={{ marginBottom: '2.5rem' }}>
              We specialize in verified land investments and property acquisition opportunities within the Federal Capital Territory (FCT) and emerging growth corridors.
            </p>
            <div className="welcome-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Verified Plots Managed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Local Expertise</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,000+</span>
                <span className="stat-label">Clients Helped to Wealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
