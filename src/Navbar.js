import React, { useState } from 'react';
import './Navbar.css';
import logo from './images/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrollToSection, refs, onBuyAccountClick, onRefundClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  return (
    <>
      <div className="scrolling-banner">
        <div className="scrolling-text">
          Welcome to CreativeXperts Technological Solutions
        </div>
      </div>

      <nav className={`navbar ${menuOpen ? 'expanded' : ''}`}>
        <div className="navbar-top">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <button onClick={() => handleClick(() => scrollToSection(refs.servicesRef))} className="nav-btn">About us</button>
          <button onClick={() => handleClick(() => scrollToSection(refs.homeRef))} className="nav-btn">Services</button>
          <button onClick={() => handleClick(onBuyAccountClick)} className="nav-btn">Buy Account</button>
          <button onClick={() => handleClick(onRefundClick)} className="nav-btn">Refund</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
