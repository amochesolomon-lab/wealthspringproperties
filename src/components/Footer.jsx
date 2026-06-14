import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Footer({ setCurrentPage, onEnquireClick }) {
  
  const handlePageNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={(e) => { e.preventDefault(); handlePageNavigation('home'); }}>
              <img 
                src="/Wealthspring Logo.png" 
                alt="WealthSpring Properties" 
                style={{ height: '100%' }}
              />
            </a>
            <p className="footer-desc">
              {siteConfig.mission}
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href={siteConfig.socials.linkedin || '#'} style={{ color: '#c5a880' }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={siteConfig.socials.facebook || '#'} style={{ color: '#c5a880' }} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={siteConfig.socials.instagram || '#'} style={{ color: '#c5a880' }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Abuja Properties Col */}
          <div>
            <h4 className="footer-heading">Abuja Properties</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('properties'); }}>All Land Plots</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('properties'); }}>Katampe Extension</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('properties'); }}>Maitama II</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('properties'); }}>Kuje Development</a></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('about'); }}>About Us</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('documentation'); }}>Land Documentation</a></li>
              <li><a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('blog'); }}>Media Centre</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-contact-info">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <p>{siteConfig.contact.address}</p>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <p>{siteConfig.contact.phone}</p>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WealthSpring Properties. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); onEnquireClick(); }}>Terms & Conditions</a>
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); onEnquireClick(); }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
