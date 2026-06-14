import { useState } from 'react';
import { articles } from '../data/mockData';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage({ onEnquireClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derive unique categories dynamically
  const categories = ['All', ...new Set(articles.map(art => art.category))];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(art => art.category === selectedCategory);

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <img 
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1920&q=80" 
          alt="Abuja Real Estate Market" 
          className="page-hero-img" 
        />
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <span className="section-tag" style={{ color: '#c5a880' }}>Insights</span>
          <h1 className="page-hero-title">WealthSpring Media Centre</h1>
        </div>
      </div>

      {/* Category Filter and Article Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid rgba(100, 137, 146, 0.1)', paddingBottom: '1rem' }}>
            <div className="tabs-nav" style={{ border: 'none' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ fontSize: '1rem', paddingBottom: '0.75rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
              Showing {filteredArticles.length} articles
            </p>
          </div>

          <div className="media-grid">
            {filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className="media-card" 
                style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', border: '1px solid rgba(100,137,146,0.05)' }}
                onClick={onEnquireClick}
              >
                <div className="media-img-wrap" style={{ margin: '-1.5rem -1.5rem 1.5rem -1.5rem', borderRadius: 'var(--border-radius) var(--border-radius) 0 0' }}>
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
                  <h3 className="media-title" style={{ fontSize: '1.2rem', minHeight: '3.4rem' }}>{article.title}</h3>
                  <p className="media-excerpt" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                  <a 
                    href="#" 
                    className="card-link" 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEnquireClick(); }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
