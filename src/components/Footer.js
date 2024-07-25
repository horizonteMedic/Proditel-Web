// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importa la hoja de estilo

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sección de Información */}
        <div className="info mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Proditel</h2>
          <p className="mb-2">Mercurio 493 Trujillo</p>
          <p className="mb-2">+51 950 400 000</p>
          <p>rgarcia@proditel.com.pe</p>
          <p>Ventas@proditel.com.pe</p>
        </div>
        {/* Sección de Enlaces Rápidos */}
        <div className="quick-links mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
          <ul>
            <li><a href="#" className="footer-link">Inicio</a></li>
            <li><a href="#" className="footer-link">Servicios</a></li>
            <li><a href="#" className="footer-link">Proyectos</a></li>
            <li><a href="#" className="footer-link">Contáctanos</a></li>
          </ul>
        </div>
        {/* Sección de Redes Sociales */}
        <div className="social-media">
          <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2024 Proditel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
