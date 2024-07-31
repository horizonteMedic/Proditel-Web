// src/app/DesarrolloSoftware.js
import React from 'react';
import './DesarrolloSoftware.css'; // Importa el CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import OtrosServicios from './OtrosServicios';
const bannerImage = '/img/soft.png'; // Ruta desde la carpeta public

const DesarrolloSoftware = () => {
  return (
    <>
      <div 
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-content">
          <div className="text-with-line">
            <h1 className="mb-4">DESARROLLO DE SOFTWARE</h1>
            <p>Creación de aplicaciones y sistemas a medida para satisfacer necesidades específicas.</p>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>¿Por qué elegir nuestro servicio de Desarrollo de Software?</h2>
        <p>Ofrecemos soluciones personalizadas de desarrollo de software para ayudar a las empresas a alcanzar sus objetivos. Nos especializamos en el diseño y la implementación de aplicaciones robustas y escalables que se adaptan a las necesidades específicas de cada cliente. Nuestro equipo de expertos utiliza las últimas tecnologías para asegurar la máxima calidad y eficiencia en cada proyecto.</p>
        <ul className="service-list">
          <li><i className="fas fa-check-circle"></i> Desarrollo de aplicaciones web</li>
          <li><i className="fas fa-check-circle"></i> Desarrollo de aplicaciones móviles</li>
          <li><i className="fas fa-check-circle"></i> Sistemas de gestión empresarial</li>
          <li><i className="fas fa-check-circle"></i> Soluciones de comercio electrónico</li>
          <li><i className="fas fa-check-circle"></i> Integración de sistemas</li>
        </ul>
      </div>
      <OtrosServicios />
    </>
  );
};

export default DesarrolloSoftware;
