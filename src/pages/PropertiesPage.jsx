import React, { useState, useEffect } from 'react';
import { properties } from '../data/mockData';
import { Square, ArrowRight, MapPin } from 'lucide-react';

export default function PropertiesPage({ filterOptions, setFilterOptions, onEnquireClick }) {
  const [localFilters, setLocalFilters] = useState({
    location: 'Any',
    type: 'Any',
    priceRange: 'Any'
  });

  // Sync with incoming filterOptions from app state
  useEffect(() => {
    if (filterOptions) {
      setLocalFilters(filterOptions);
    }
  }, [filterOptions]);

  const handleFilterChange = (key, value) => {
    const updated = { ...localFilters, [key]: value };
    setLocalFilters(updated);
    if (setFilterOptions) {
      setFilterOptions(updated);
    }
  };

  const resetFilters = () => {
    const reset = {
      location: 'Any',
      type: 'Any',
      priceRange: 'Any'
    };
    setLocalFilters(reset);
    if (setFilterOptions) {
      setFilterOptions(reset);
    }
  };

  // Filter logic
  const filtered = properties.filter((prop) => {
    // Location filter (simple string match)
    if (localFilters.location !== 'Any' && !prop.location.includes(localFilters.location)) {
      return false;
    }
    // Type filter
    if (localFilters.type !== 'Any' && prop.type !== localFilters.type) {
      return false;
    }
    // Price range filter (simplified for NGN)
    if (localFilters.priceRange !== 'Any') {
      if (localFilters.priceRange === 'low' && prop.price >= 10000000) return false;
      if (localFilters.priceRange === 'mid' && (prop.price < 10000000 || prop.price > 50000000)) return false;
      if (localFilters.priceRange === 'high' && prop.price <= 50000000) return false;
    }
    return true;
  });

  return (
    <div className="properties-page">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Land Portfolio</span>
          <h1 className="section-title" style={{ margin: '0' }}>Prime Land Plots in Abuja</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Discover verified, strategically located land investments for residential or commercial development across Abuja.
          </p>
        </div>

        <div className="properties-layout">
          {/* Filters Sidebar */}
          <aside className="properties-filter-sidebar">
            <h3 className="filter-section-title">Filter Plots</h3>
            
            <div className="form-group">
              <label htmlFor="filter-location">Location Area</label>
              <select
                id="filter-location"
                className="form-control"
                value={localFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="Any">All Areas</option>
                <option value="Katampe Extension">Katampe Extension</option>
                <option value="Maitama II">Maitama II</option>
                <option value="Kuje">Kuje</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="filter-type">Property Type</label>
              <select
                id="filter-type"
                className="form-control"
                value={localFilters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="Any">All Types</option>
                <option value="Land">Land Plot</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="filter-price">Price Range (NGN)</label>
              <select
                id="filter-price"
                className="form-control"
                value={localFilters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="Any">Any Price</option>
                <option value="low">Under 10M</option>
                <option value="mid">10M - 50M</option>
                <option value="high">Above 50M</option>
              </select>
            </div>

            <button 
              className="btn-outline-dark" 
              onClick={resetFilters} 
              style={{ width: '100%', marginTop: '1rem', padding: '0.65rem' }}
            >
              Reset Filters
            </button>
          </aside>

          {/* Results Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
                Showing <strong>{filtered.length}</strong> available plots
              </p>
            </div>

            {filtered.length === 0 ? (
              <div style={{ background: 'white', borderRadius: 'var(--border-radius)', padding: '5rem 2rem', textAlign: 'center', border: '1px solid rgba(100, 137, 146, 0.1)' }}>
                <h3 style={{ color: '#092c38', fontSize: '1.5rem', marginBottom: '0.5rem' }}>No Plots Match Filters</h3>
                <p style={{ color: '#5e6f73', marginBottom: '1.5rem' }}>Try adjusting some of your search parameters.</p>
                <button className="btn-gold" onClick={resetFilters}>Clear All Filters</button>
              </div>
            ) : (
              <div className="property-grid">
                {filtered.map((prop) => (
                  <div key={prop.id} className="property-card">
                    <div className="card-img-wrapper">
                      <img src={prop.image} alt={prop.title} className="card-img" />
                      <span className="card-tag">{prop.type}</span>
                      {prop.verified && <span className="card-cbi" style={{ backgroundColor: '#10b981' }}>Verified</span>}
                    </div>

                    <div className="card-body">
                      <div className="card-location" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={14} />
                        {prop.location}
                      </div>
                      <h3 className="card-title">{prop.title}</h3>
                      <p className="card-desc">{prop.desc}</p>
                      
                      <div className="card-specs">
                        <div className="spec-item">
                          <Square size={14} />
                          <span>{prop.size}</span>
                        </div>
                      </div>

                      <div className="card-footer-info">
                        <span className="card-price">
                          {prop.currency} {prop.price.toLocaleString()}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
