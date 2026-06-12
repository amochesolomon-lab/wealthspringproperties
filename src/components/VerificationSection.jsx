import React from 'react';
import { documentationStandards } from '../data/mockData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function VerificationSection({ onVerifyClick }) {
  return (
    <section className="cbi-section">
      <div className="cbi-bg-pattern"></div>
      <div className="container cbi-container">
        {/* Info Column */}
        <div>
          <span className="section-tag" style={{ color: '#c5a880' }}>Secure Investment</span>
          <h2 className="section-title cbi-title">Verified Land Ownership</h2>
          <p className="cbi-desc">{documentationStandards.intro}</p>
          
          <button 
            className="btn-gold" 
            onClick={onVerifyClick} 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
          >
            <span>View Documentation Guide</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="cbi-cards">
          {documentationStandards.types.map((type, idx) => {
            return (
              <div key={idx} className="cbi-benefit-card" style={{ background: 'white' }}>
                <div className="cbi-icon-wrap">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="cbi-card-title">{type.title}</h3>
                  <p className="cbi-card-desc">{type.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
