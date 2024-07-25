// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Importa la hoja de estilo

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-12 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Sección de Información */}
        <div className="info">
          <img src="/img/logo.svg" alt="Proditel Logo" className="logo mb-4" />
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <p>Mercurio 493 Trujillo</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <p>+51 950 400 000</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <p><a href="mailto:rgarcia@proditel.com.pe" className="email-link">rgarcia@proditel.com.pe</a></p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <p><a href="mailto:Ventas@proditel.com.pe" className="email-link">Ventas@proditel.com.pe</a></p>
          </div>
        </div>
        {/* Sección de Enlaces Rápidos */}
        <div className="quick-links">
          <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul>
            <li><a href="#" className="footer-link">Inicio</a></li>
            <li><a href="#" className="footer-link">Servicios</a></li>
            <li><a href="#" className="footer-link">Proyectos</a></li>
            <li><a href="#" className="footer-link">Contáctanos</a></li>
          </ul>
        </div>
        {/* Sección de Redes Sociales */}
        <div className="social-media">
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p>&copy; 2024 Proditel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
