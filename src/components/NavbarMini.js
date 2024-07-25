// src/components/NavbarMini.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const NavbarMini = () => {
  const navbarMiniStyle = {
    backgroundColor: '#ff5100', // Color de fondo
    color: 'white', // Color del texto
    padding: '0.5rem 1rem', // Espaciado
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem', // Espaciado entre ítems
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem', // Espaciado entre ícono y texto
    fontSize: '10px', // Tamaño de texto reducido
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1rem', // Espaciado entre íconos
  };

  const iconStyle = {
    color: 'white', // Color de los íconos
    fontSize: '1.2rem', // Tamaño de los íconos
    transition: 'color 0.3s ease', // Transición para el hover
  };

  const iconHoverStyle = {
    color: '#e0a400', // Color de los íconos al pasar el mouse por encima
  };

  return (
    <div style={navbarMiniStyle}>
      {/* Información de contacto */}
      <div style={contactInfoStyle}>
        <div style={contactItemStyle}>
          <i className="fas fa-map-marker-alt"></i>
          <span>Mercurio 493 Trujillo</span>
        </div>
        <div style={contactItemStyle}>
          <i className="fas fa-envelope"></i>
          <span>Ventas@proditel.com.pe</span>
        </div>
        <div style={contactItemStyle}>
          <i className="fas fa-phone"></i>
          <span>+51 950 400 000</span>
        </div>
      </div>
      {/* Iconos de redes sociales */}
      <div style={socialIconsStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMini;
