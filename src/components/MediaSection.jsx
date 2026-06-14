import { articles } from '../data/mockData';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function MediaSection({ onMediaClick }) {
  return (
    <section className="media-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <span className="section-tag">Latest Updates</span>
            <h2 className="section-title" style={{ margin: '0' }}>Media & Press Centre</h2>
          </div>
          <button 
            className="btn-outline-dark" 
            onClick={onMediaClick}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>All Articles</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="media-grid">
          {articles.map((article) => (
            <div key={article.id} className="media-card" style={{ cursor: 'pointer' }} onClick={onMediaClick}>
              <div className="media-img-wrap">
                <img src={article.image} alt={article.title} className="media-img" />
              </div>
              <div>
                <div className="media-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Tag size={12} />
                    {article.category}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={12} />
                    {article.date}
                  </span>
                </div>
                <h3 className="media-title">{article.title}</h3>
                <p className="media-excerpt">{article.excerpt}</p>
                <span 
                  className="card-link" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
