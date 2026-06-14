import { awards } from '../data/mockData';

export default function AwardsSection() {
  return (
    <section className="awards-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag">Recognized for Excellence</span>
        <h2 className="section-title" style={{ margin: '0 auto 1rem', maxWidth: '600px' }}>Awards & Achievements</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 3rem' }}>
          Our commitment to delivering exceptional beachfront architecture and world-class guest experiences has earned us prestigious honors globally.
        </p>

        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-item">
              <span className="award-badge" role="img" aria-label="badge">
                {award.badge}
              </span>
              <h3 className="award-name">{award.name}</h3>
              <p className="award-org">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
