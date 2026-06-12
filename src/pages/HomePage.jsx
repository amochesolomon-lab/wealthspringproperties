import React from 'react';
import HeroSlider from '../components/HeroSlider';
import PropertySearch from '../components/PropertySearch';
import AboutSection from '../components/AboutSection';
import PropertyShowcase from '../components/PropertyShowcase';
import VerificationSection from '../components/VerificationSection';
import AwardsSection from '../components/AwardsSection';
import MediaSection from '../components/MediaSection';

export default function HomePage({ onSearch, onEnquireClick, setCurrentPage, setFilterOptions }) {
  const handleLearnMore = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVerifyClick = () => {
    setCurrentPage('documentation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMediaClick = () => {
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllProperties = (country) => {
    if (setFilterOptions) {
      setFilterOptions({
        country,
        type: 'Any',
        bedroom: 'Any',
        priceRange: 'Any'
      });
    }
    setCurrentPage('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Header and Slider */}
      <HeroSlider />
      
      {/* Absolute Search Filter Bar */}
      <PropertySearch onSearch={onSearch} />

      {/* Main Home Sections */}
      <AboutSection onLearnMore={handleLearnMore} />
      <PropertyShowcase onEnquireClick={onEnquireClick} onViewAllProperties={handleViewAllProperties} />
      <VerificationSection onVerifyClick={handleVerifyClick} />
      <AwardsSection />
      <MediaSection onMediaClick={handleMediaClick} />
    </>
  );
}
