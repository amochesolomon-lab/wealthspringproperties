import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onEnquireClick, setFilterOptions }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToProperties = (location, type = 'Any') => {
    if (setFilterOptions) {
      setFilterOptions({
        location,
        type,
        priceRange: 'Any'
      });
    }
    setCurrentPage('properties');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSubmenu = (menu) => {
    if (activeMobileSubmenu === menu) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(menu);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled || currentPage !== 'home' ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); handlePageNavigation('home'); }}>
            <img 
              src="/Wealthspring Logo.png" 
              alt="Wealthspring Logo" 
            />
          </a>

          {/* Desktop Nav Items */}
          <ul className="nav-menu">
            {/* About Dropdown */}
            <li className="nav-item">
              <span className="nav-link">
                About <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown">
                <h4 className="dropdown-header">About Us</h4>
                <ul className="dropdown-links">
                  <li>
                    <a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('about'); }}>
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('about'); }}>
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Properties Dropdown */}
            <li className="nav-item">
              <span className="nav-link">
                Properties <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown" style={{ width: '320px' }}>
                <h4 className="dropdown-header">Abuja Land Plots</h4>
                <ul className="dropdown-links">
                  <li>
                    <a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); navigateToProperties('Any'); }}>
                      View All Properties
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); navigateToProperties('Katampe Extension'); }}>
                      Katampe Extension
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); navigateToProperties('Maitama II'); }}>
                      Maitama II
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Documentation */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('documentation'); }}>
                Documentation
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('blog'); }}>
                Media Centre
              </a>
            </li>
          </ul>

          {/* Desktop Right Side Buttons */}
          <div className="nav-buttons">
            <button className="btn-gold" onClick={onEnquireClick}>
              Get in Touch
            </button>
            <div className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
              <Globe size={16} />
              <span>EN</span>
            </div>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} color="white" /> : <Menu size={26} color="white" />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li>
            <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('home'); }}>
              Home
            </a>
          </li>
          
          <li>
            <div className="mobile-nav-link" onClick={() => toggleMobileSubmenu('about')}>
              About <ChevronDown size={18} />
            </div>
            {activeMobileSubmenu === 'about' && (
              <ul className="mobile-submenu">
                <li>
                  <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('about'); }}>
                    Our Story
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div className="mobile-nav-link" onClick={() => toggleMobileSubmenu('properties')}>
              Properties <ChevronDown size={18} />
            </div>
            {activeMobileSubmenu === 'properties' && (
              <ul className="mobile-submenu">
                <li>
                  <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); navigateToProperties('Any'); }}>
                    View All
                  </a>
                </li>
                <li>
                  <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); navigateToProperties('Katampe Extension'); }}>
                    Katampe Extension
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('documentation'); }}>
              Documentation
            </a>
          </li>

          <li>
            <a href="#" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); handlePageNavigation('blog'); }}>
              Media Centre
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
          <button className="btn-gold" onClick={() => { setMobileMenuOpen(false); onEnquireClick(); }}>
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

