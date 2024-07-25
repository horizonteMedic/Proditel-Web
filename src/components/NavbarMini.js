import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './NavbarMini.css'; // Importar la hoja de estilos

const NavbarMini = () => {
  return (
    <div className="navbar-mini">
      {/* Información de contacto */}
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Mercurio 493 Trujillo</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>Ventas@proditel.com.pe</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+51 950 400 000</span>
        </div>
      </div>
      {/* Iconos de redes sociales */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMini;
