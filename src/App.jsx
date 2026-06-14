import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquireModal from './components/EnquireModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DocumentationPage from './pages/DocumentationPage';
import PropertiesPage from './pages/PropertiesPage';
import BlogPage from './pages/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    location: 'Any',
    type: 'Any',
    priceRange: 'Any'
  });

  const handleSearch = (options) => {
    setFilterOptions(options);
    setCurrentPage('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onSearch={handleSearch} 
            onEnquireClick={() => setEnquireModalOpen(true)}
            setCurrentPage={setCurrentPage}
            setFilterOptions={setFilterOptions}
          />
        );
      case 'about':
        return <AboutPage onEnquireClick={() => setEnquireModalOpen(true)} />;
      case 'documentation':
        return <DocumentationPage onEnquireClick={() => setEnquireModalOpen(true)} />;
      case 'properties':
        return (
          <PropertiesPage 
            key={JSON.stringify(filterOptions)}
            filterOptions={filterOptions} 
            setFilterOptions={setFilterOptions}
            onEnquireClick={() => setEnquireModalOpen(true)} 
          />
        );
      case 'blog':
        return <BlogPage onEnquireClick={() => setEnquireModalOpen(true)} />;
      default:
        return (
          <HomePage 
            onSearch={handleSearch} 
            onEnquireClick={() => setEnquireModalOpen(true)}
            setCurrentPage={setCurrentPage}
            setFilterOptions={setFilterOptions}
          />
        );
    }
  };

  return (
    <>
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onEnquireClick={() => setEnquireModalOpen(true)}
        setFilterOptions={setFilterOptions}
      />
      
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        {renderPage()}
      </main>

      <Footer 
        setCurrentPage={setCurrentPage} 
        onEnquireClick={() => setEnquireModalOpen(true)}
      />

      <EnquireModal 
        isOpen={enquireModalOpen} 
        onClose={() => setEnquireModalOpen(false)} 
      />
    </>
  );
}

export default App;
