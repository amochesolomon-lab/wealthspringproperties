import { useState } from 'react';
import { Search } from 'lucide-react';

export default function PropertySearch({ onSearch }) {
  const [country, setCountry] = useState('Any');
  const [type, setType] = useState('Any');
  const [bedroom, setBedroom] = useState('Any');
  const [priceRange, setPriceRange] = useState('Any');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ country, type, bedroom, priceRange });
  };

  return (
    <div className="search-filter-container">
      <form onSubmit={handleSubmit} className="search-filter-grid">
        <div className="search-field">
          <label htmlFor="search-country">Country</label>
          <select 
            id="search-country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Any">All Regions</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Caribbean">Caribbean</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-type">Property Type</label>
          <select 
            id="search-type" 
            value={type} 
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Any">All Types</option>
            <option value="Apartment">Apartments</option>
            <option value="Townhouse">Townhouses</option>
            <option value="Villa">Villas</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-beds">Bedrooms</label>
          <select 
            id="search-beds" 
            value={bedroom} 
            onChange={(e) => setBedroom(e.target.value)}
          >
            <option value="Any">Any Bedrooms</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
            <option value="5 Bedroom">5 Bedroom</option>
          </select>
        </div>

        <div className="search-field">
          <label htmlFor="search-price">Starting Price</label>
          <select 
            id="search-price" 
            value={priceRange} 
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="Any">Any Price</option>
            <option value="low">Under $500,000 / 1.8M AED</option>
            <option value="mid">$500,000 - $1.5M / 1.8M - 5.5M AED</option>
            <option value="high">Above $1.5M / 5.5M AED</option>
          </select>
        </div>

        <button type="submit" className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
          <Search size={16} />
          <span>Find Properties</span>
        </button>
      </form>
    </div>
  );
}
