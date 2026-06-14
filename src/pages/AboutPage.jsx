import { teamMembers } from '../data/mockData';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage({ onEnquireClick }) {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
          alt="Abuja Land Property" 
          className="page-hero-img" 
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <span className="section-tag" style={{ color: '#c5a880' }}>About Us</span>
          <h1 className="page-hero-title">Your Partner in Abuja Land Ownership</h1>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Built on Trust, Founded on Vision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {siteConfig.mission}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                WealthSpring Properties simplifies the land acquisition process in Abuja. We understand that finding reliable, verified land is the cornerstone of building future wealth. Our team works tirelessly to bridge the gap between discerning investors and prime, secured real estate assets in Nigeria's capital.
              </p>
              <button className="btn-gold" onClick={onEnquireClick}>
                Get in Touch
              </button>
            </div>
            <div className="story-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" 
                alt="Land Plot Development" 
                className="story-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="team-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Our Team</span>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Meet the WealthSpring Experts</h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-img-container">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
