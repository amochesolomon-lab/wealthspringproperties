import React from 'react';
import { documentationStandards } from '../data/mockData';
import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function DocumentationPage({ onEnquireClick }) {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d11e5f886f4a?auto=format&fit=crop&w=1920&q=80" 
          alt="Land Documentation" 
          className="page-hero-img" 
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <span className="section-tag" style={{ color: '#c5a880' }}>Secure Investment</span>
          <h1 className="page-hero-title">Abuja Land Documentation</h1>
        </div>
      </div>

      {/* Intro section */}
      <section className="cbi-page-intro">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span className="section-tag">Verification Matters</span>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>Secure Ownership in Abuja</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            {documentationStandards.intro}
          </p>
          <button className="btn-gold" onClick={onEnquireClick}>
            Get Expert Verification Support
          </button>
        </div>
      </section>

      {/* Standards Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Key Documents We Verify</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {documentationStandards.types.map((type, idx) => (
              <div key={idx} className="cbi-benefit-card" style={{ background: 'white', border: '1px solid rgba(100, 137, 146, 0.08)' }}>
                <div className="cbi-icon-wrap"><ShieldCheck size={24} /></div>
                <div>
                  <h3 className="cbi-card-title" style={{ color: 'var(--primary-dark)' }}>{type.title}</h3>
                  <p className="cbi-card-desc" style={{ color: 'var(--text-muted)' }}>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
