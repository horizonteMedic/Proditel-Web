// src/app/EnlaceFibra.js
import React from 'react';
import './EnlaceFibra.css'; // Importa el CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import OtrosServicios from './OtrosServicios';
const bannerImage = '/img/fibra.jpg'; // Ruta desde la carpeta public

const EnlaceFibra = () => {
  return (
    <>
      <div 
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-content">
          <div className="text-with-line">
            <h1 className="mb-4">ENLACE DE FIBRA</h1>
            <p>Configuración de conexiones de alta velocidad y baja interferencia mediante fibra óptica para redes de datos.</p>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>¿Por qué elegir nuestro servicio de Enlace de Fibra?</h2>
        <p>Ofrecemos soluciones completas para la configuración de conexiones de fibra óptica, asegurando una transmisión de datos de alta velocidad y baja interferencia. Nuestro equipo se especializa en la instalación y mantenimiento de redes de fibra óptica que optimizan la conectividad de tu empresa.</p>
        <ul className="service-list">
          <li><i className="fas fa-check-circle"></i> Análisis y planificación de red</li>
          <li><i className="fas fa-check-circle"></i> Instalación de cables de fibra óptica</li>
          <li><i className="fas fa-check-circle"></i> Configuración y pruebas de rendimiento</li>
          <li><i className="fas fa-check-circle"></i> Mantenimiento preventivo y correctivo</li>
          <li><i className="fas fa-check-circle"></i> Soluciones personalizadas para tu empresa</li>
        </ul>
      </div>
      <OtrosServicios />
    </>
  );
};

export default EnlaceFibra;
