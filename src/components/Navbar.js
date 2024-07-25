// src/components/Navbar.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: 'white',
    padding: '1rem',
    position: 'relative',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    height: '2.5rem',
  };

  const navListStyle = {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    flexWrap: 'wrap',
  };

  const navLinkStyle = {
    position: 'relative',
    color: '#144478',
    textDecoration: 'none',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '700',
    padding: '0.8rem 0',
    transition: 'color 0.3s ease',
  };

  const lineStyle = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '0',
    height: '2px',
    backgroundColor: '#144478',
    transition: 'width 0.3s ease',
    borderRadius: '5px',
  };

  const menuButtonStyle = {
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'none',
  };

  const mobileMenuStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '1rem',
    zIndex: 10,
  };

  // Media query styles
  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .menu-button {
        display: block;
      }
      .nav-list {
        display: none;
      }
      .mobile-menu {
        display: block;
      }
    }
  `;

  return (
    <nav style={navbarStyle}>
      <style>{mediaQueryStyles}</style>
      <div style={containerStyle}>
        {/* Logo */}
        <div>
          <img src="/img/logo.svg" alt="Logo" style={logoStyle} />
        </div>
        {/* Botón de menú móvil */}
        <div
          className="menu-button"
          style={menuButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
        {/* Enlaces de navegación para pantallas grandes */}
        <ul className="nav-list" style={navListStyle}>
          <li style={{ position: 'relative' }}>
            <a
              href="#"
              style={navLinkStyle}
              onMouseOver={(e) => (e.currentTarget.querySelector('span').style.width = '100%')}
              onMouseOut={(e) => (e.currentTarget.querySelector('span').style.width = '0')}
            >
              Nosotros
              <span style={lineStyle}></span>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="#"
              style={navLinkStyle}
              onMouseOver={(e) => (e.currentTarget.querySelector('span').style.width = '100%')}
              onMouseOut={(e) => (e.currentTarget.querySelector('span').style.width = '0')}
            >
              Servicios
              <span style={lineStyle}></span>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="#"
              style={navLinkStyle}
              onMouseOver={(e) => (e.currentTarget.querySelector('span').style.width = '100%')}
              onMouseOut={(e) => (e.currentTarget.querySelector('span').style.width = '0')}
            >
              Proyectos
              <span style={lineStyle}></span>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="#"
              style={navLinkStyle}
              onMouseOver={(e) => (e.currentTarget.querySelector('span').style.width = '100%')}
              onMouseOut={(e) => (e.currentTarget.querySelector('span').style.width = '0')}
            >
              Contáctanos
              <span style={lineStyle}></span>
            </a>
          </li>
        </ul>
        {/* Menú desplegable para móviles */}
        <div className="mobile-menu" style={mobileMenuStyle}>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            <li>
              <a
                href="#"
                style={{ display: 'block', padding: '0.8rem', color: '#144478', textDecoration: 'none' }}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: 'block', padding: '0.8rem', color: '#144478', textDecoration: 'none' }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: 'block', padding: '0.8rem', color: '#144478', textDecoration: 'none' }}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{ display: 'block', padding: '0.8rem', color: '#144478', textDecoration: 'none' }}
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
