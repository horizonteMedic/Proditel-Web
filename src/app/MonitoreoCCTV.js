// src/app/MonitoreoCCTV.js
import React from 'react';
import './MonitoreoCCTV.css'; // Importa el CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import OtrosServicios from './OtrosServicios'; // Importa el nuevo componente

const bannerImage = '/img/monitoreo.jpg'; // Ruta desde la carpeta public

const MonitoreoCCTV = () => {
  return (
    <>
      <div 
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-content">
          <div className="text-with-line">
            <h1 className="mb-4">CENTROS DE MONITOREO CCTV</h1>
            <p>Instalación y gestión de sistemas de vigilancia por cámaras para seguridad en tiempo real.</p>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>¿Por qué elegir nuestro servicio de Monitoreo CCTV?</h2>
        <p>Ofrecemos soluciones completas para la instalación y gestión de sistemas de vigilancia por cámaras, asegurando la seguridad en tiempo real de tus instalaciones. Nuestro equipo se especializa en el diseño, instalación y monitoreo de sistemas de CCTV que brindan alta calidad de imagen y acceso remoto.</p>
        <ul className="service-list">
          <li><i className="fas fa-check-circle"></i> Diseño y planificación del sistema</li>
          <li><i className="fas fa-check-circle"></i> Instalación de cámaras y equipos</li>
          <li><i className="fas fa-check-circle"></i> Configuración y mantenimiento</li>
          <li><i className="fas fa-check-circle"></i> Monitoreo en tiempo real</li>
          <li><i className="fas fa-check-circle"></i> Soluciones personalizadas para tu empresa</li>
        </ul>
      </div>
      <OtrosServicios /> 
    </>
  );
};

export default MonitoreoCCTV;
