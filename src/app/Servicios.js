// src/app/Servicios.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faCode, faServer, faVideo, faSignal } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Servicios.css';

const Servicios = () => {
  const services = [
    { title: 'Cableado estructurado', description: 'Instalación de sistemas de cableado para redes de comunicación eficientes y organizadas en edificios.', icon: faNetworkWired, link: '/cableado-estructurado' },
    { title: 'Desarrollo de software', description: 'Creación de aplicaciones y sistemas a medida para satisfacer necesidades específicas.', icon: faCode, link: '/desarrollo-software' },
    { title: 'Implementación de servidores', description: 'Configuración de servidores para gestionar datos y aplicaciones de manera segura y eficiente.', icon: faServer, link: '/implementacion-servidores' },
    { title: 'Centros de monitoreo CCTV', description: 'Instalación y gestión de sistemas de vigilancia por cámaras para seguridad en tiempo real.', icon: faVideo, link: '/monitoreo-cctv' },
    { title: 'Enlace de Fibra', description: 'Configuración de conexiones de alta velocidad y baja interferencia mediante fibra óptica para redes de datos.', icon: faSignal, link: '/enlace-fibra' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="servicios" className="servicios">
      <div className="services-section">
        <div className="container">
          <h2 className='titulo'>Nuestros Servicios</h2>
          <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${inView ? 'animate-fade-in' : ''}`}>
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <FontAwesomeIcon icon={service.icon} className="fa-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link}>
                  Más Información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
