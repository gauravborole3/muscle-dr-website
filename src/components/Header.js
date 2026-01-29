import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="The Muscle Dr Logo" className="logo-img" />
          <span className="clinic-name">The Muscle Dr</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
        </button>

         <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/shorts" 
            className={`nav-link ${isActive('/shorts') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Top Picks
          </Link>
          <Link 
            to="/testimonials" 
            className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${isActive('/products') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
