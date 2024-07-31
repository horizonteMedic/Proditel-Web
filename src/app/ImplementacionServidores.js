// src/app/ImplementacionServidores.js
import React from 'react';
import './ImplementacionServidores.css'; // Importa el CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import OtrosServicios from './OtrosServicios';
const bannerImage = '/img/servidores.jpg'; // Ruta desde la carpeta public

const ImplementacionServidores = () => {
  return (
    <>
      <div 
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-content">
          <div className="text-with-line">
            <h1 className="mb-4">IMPLEMENTACIÓN DE SERVIDORES</h1>
            <p>Configuración de servidores para gestionar datos y aplicaciones de manera segura y eficiente.</p>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>¿Por qué elegir nuestro servicio de Implementación de Servidores?</h2>
        <p>Ofrecemos soluciones completas para la implementación y configuración de servidores, asegurando un manejo de datos y aplicaciones eficiente y seguro. Nuestro equipo se especializa en la instalación y mantenimiento de servidores que optimizan la infraestructura de tu empresa, garantizando alta disponibilidad y rendimiento.</p>
        <ul className="service-list">
          <li><i className="fas fa-check-circle"></i> Análisis y planificación de infraestructura</li>
          <li><i className="fas fa-check-circle"></i> Instalación y configuración de servidores</li>
          <li><i className="fas fa-check-circle"></i> Migración y actualización de sistemas</li>
          <li><i className="fas fa-check-circle"></i> Monitoreo y mantenimiento continuo</li>
          <li><i className="fas fa-check-circle"></i> Soluciones personalizadas para tu empresa</li>
        </ul>
      </div>
      <OtrosServicios /> 

    </>
  );
};

export default ImplementacionServidores;
