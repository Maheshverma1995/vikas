import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Function to handle scroll events and add a sticky class to the navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-white border-top z-3 ${isMenuOpen ? 'open' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src="./Image/logo2.png" style={{ width: '200px' }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
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
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#" onClick={handleLinkClick}>
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={handleLinkClick}>
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={handleLinkClick}>
                    Something else here
                  </Link>
                </li>
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
          <Link data-animation="fadeInLeft" data-delay=".6s" to="appoinment" class="btn-icon ml-0" style={{animationDelay:'0.6s;'}} tabindex="0"><span>+</span>Make Appointment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
