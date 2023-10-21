import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [Top, setTop] = useState(false); // Added Top state
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        setTop(true); // Update the Top state
        navbar.classList.add('sticky');
      } else {
        setTop(false); // Update the Top state
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-white border-top ${isMenuOpen ? 'open' : ''
        } ${Top ? 'fixed-top' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src="./Image/logo2.png" style={{ width: '200px' }} alt="" />
        </Link>
        <button
          className="navbar-toggler pink-bg "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-dark fs-5 active"
                aria-current="page"
                to=""
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-dark fs-5 dropdown-toggle"
                to="service"
                
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleLinkClick}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                Services
              </Link>
              <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`} id="dropdown1">
                <div className="d-flex">
                  <ul className='ps-5'>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="knee" onClick={handleLinkClick}>
                    Total Knee Replacement
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="hip" onClick={handleLinkClick}>
                    Total Hip Replacement2
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="acl-reconstruction" onClick={handleLinkClick}>
                    Acl Reconstruction
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="meniscus" onClick={handleLinkClick}>
                    Meniscus Repair
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="partial-knee" onClick={handleLinkClick}>
                    Partial Knee Replacement
              </Link></li>
              <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="reverse-shoulde" onClick={handleLinkClick}>
              Total & Reverse Shoulder Replacement
              </Link></li>
                  </ul>
                  <ul>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="Shoulder" onClick={handleLinkClick}>
                    Shoulder Surgery
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="bankart" onClick={handleLinkClick}>
                    Bankart Repair
              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="dislocation" onClick={handleLinkClick}>
                    Shoulder Dislocation Management

              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="cuff" onClick={handleLinkClick}>
                    Rotator Cuff Repair

              </Link></li>
                    <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="revision" onClick={handleLinkClick}>
                    Revision Knee & Hip Replacement
              </Link></li>
              <li><Link className="nav-link text-dark" style={{textAlign:'start'}} to="unicompartmental" onClick={handleLinkClick}>
              Unicompartmental (Partial) Knee 
              </Link></li>
                  </ul>
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="contact-us" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            data-animation="fadeInLeft"
            data-delay=".6s"
            to="appointment"
            className="btn-icon ml-0"
            style={{ animationDelay: '0.6s' }}
            tabIndex="0"
          >
            <span>+</span>Make Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
