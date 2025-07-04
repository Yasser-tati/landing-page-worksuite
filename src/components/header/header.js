import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './worksuite-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Check which section is in view
      const sections = ['about', 'trusted', 'features', 'pricing', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add effect to handle body class
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="logo-image" alt="Worksuite Logo" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('trusted')} 
            className={`nav-link ${activeSection === 'trusted' ? 'active' : ''}`}
          >
            About-us
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          
          <div className="mobile-auth-buttons">
            <Link to="https://work.postinolabs.com/login" className="login-btn">Login</Link>
            <Link to="https://work.postinolabs.com/signup" className="get-started-btn">Get Started</Link>
          </div>
        </nav>

        <div className="auth-buttons desktop-only">
          <Link to="https://work.postinolabs.com/login" className="login-btn">Login</Link>
          <Link to="https://work.postinolabs.com/signup" className="get-started-btn">Get Started</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
