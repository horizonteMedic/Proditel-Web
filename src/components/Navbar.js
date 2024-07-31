import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'; // Import the CSS stylesheet
import { Link } from 'react-scroll'; // Import the scroll function
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom for logo link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <RouterLink to="/">
            <img src="/img/logo.svg" alt="Logo" />
          </RouterLink>
        </div>
        {/* Mobile menu button */}
        <div
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
        {/* Navigation links for larger screens */}
        <ul className={`nav-list ${isOpen ? 'nav-list-open' : ''}`}>
          <li>
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
              <span className="underline"></span>
            </Link>
          </li>
          <li>
            <Link
              to="servicios"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Servicios
              <span className="underline"></span>
            </Link>
          </li>
          <li>
            <Link
              to="proyectos"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
              <span className="underline"></span>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
              <span className="underline"></span>
            </Link>
          </li>
        </ul>
        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
          <ul>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="servicios"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
            </li>
            {/* <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
