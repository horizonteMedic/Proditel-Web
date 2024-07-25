import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'; // Importa la hoja de estilo CSS
import { Link } from 'react-scroll'; // Importa la función de desplazamiento

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/img/logo.svg" alt="Logo" />
        </div>
        {/* Botón de menú móvil */}
        <div
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
        {/* Enlaces de navegación para pantallas grandes */}
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
        {/* Menú desplegable para móviles */}
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
            <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
