// src/app/OtrosServicios.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faCode, faServer, faVideo, faSignal } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './OtrosServicios.css'; // Importa el CSS

const otrosServicios = [
  { title: 'Cableado Estructurado', icon: faNetworkWired, link: '/cableado-estructurado' },
  { title: 'Desarrollo de Software', icon: faCode, link: '/desarrollo-software' },
  { title: 'Implementación de Servidores', icon: faServer, link: '/implementacion-servidores' },
  { title: 'Centros de Monitoreo CCTV', icon: faVideo, link: '/monitoreo-cctv' },
  { title: 'Enlace de Fibra', icon: faSignal, link: '/enlace-fibra' }
];

const OtrosServicios = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <div className="otros-servicios">
      <h2>Otros Servicios</h2>
      <div className="services-container">
        {otrosServicios.map((servicio, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={servicio.icon} />
            <h3>{servicio.title}</h3>
            <Link to={servicio.link}>Más Información</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtrosServicios;
