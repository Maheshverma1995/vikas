import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbar = () => {
  const [Top, setTop] = useState(false);
  const [close, setClose] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeNav = () => {
    setClose(true);
  };

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY === 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  // Function to scroll to the top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // You can change this to 'auto' for an instant scroll
    });
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-2 ${Top ? 'fixed-top bg-white' : ''}`}>
        <div className="container">
          <Link
            className="navbar-brand"
            onClick={() => {
              closeNav();
              scrollToTop();
            }}
            to="/"
          >
            <img style={{ width: '200px' }} className="img-fluid" src="./Image/logo2.png" alt="" />
          </Link>
          <button
            className="navbar-toggler pink-bg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClose(!close)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${close ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark active"
                  aria-current="page"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-dark dropdown-toggle"
                  to="service"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  Services
                </Link>
                <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`} id="dropdown1">
                <div className="d-flex">
                  <ul>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="knee">
                    Total Knee Replacement
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="hip">
                    Total Hip Replacement2
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="acl-reconstruction">
                    Acl Reconstruction
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="meniscus">
                    Meniscus Repair
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="partial-knee">
                    Partial Knee Replacement
              </Link></li>
              <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="reverse-shoulde">
              Total & Reverse Shoulder Replacement
              </Link></li>
                  </ul>
                  <ul>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="Shoulder">
                    Shoulder Surgery
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="bankart">
                    Bankart Repair
              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="dislocation">
                    Shoulder Dislocation Management

              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="cuff">
                    Rotator Cuff Repair

              </Link></li>
                    <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="revision">
                    Revision Knee & Hip Replacement
              </Link></li>
              <li><Link id='nav-link-a' className="nav-link letter-spacing text-dark" onClick={() => { closeNav(); scrollToTop(); }}to="unicompartmental">
              Unicompartmental (Partial) Knee 
              </Link></li>
                  </ul>
                </div>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/career"
                >
                  Career
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  id="nav-link-a"
                  className="nav-link text-dark"
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
