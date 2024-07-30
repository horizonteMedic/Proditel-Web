// src/app/CableadoEstructurado.js
import React from 'react';
import './CableadoEstructurado.css'; // Importa el CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome

const bannerImage = '/img/Cableado-estructurado.jpeg'; // Ruta desde la carpeta public

const CableadoEstructurado = () => {
  return (
    <>
      <div 
        className="banner-container"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-content">
          <div className="text-with-line">
            <h1 className=" mb-4">CABLE ESTRUCTURADO</h1>
            <p>Instalación de sistemas de cableado para redes de comunicación eficientes y organizadas en edificios.</p>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>¿Por qué elegir nuestro servicio de Cableado Estructurado?</h2>
        <p>En nuestra empresa, ofrecemos soluciones integrales de cableado estructurado para garantizar redes de comunicación robustas y confiables. Nos especializamos en la instalación de sistemas de cableado que optimizan el rendimiento y la organización de tu infraestructura de red. Con un enfoque en la calidad y la eficiencia, aseguramos que cada proyecto cumpla con los estándares más altos y se adapte a tus necesidades específicas.</p>
        <ul className="service-list">
          <li><i className="fas fa-check-circle"></i> Planificación y diseño de redes</li>
          <li><i className="fas fa-check-circle"></i> Instalación de cableado y equipos</li>
          <li><i className="fas fa-check-circle"></i> Certificación de sistemas de cableado</li>
          <li><i className="fas fa-check-circle"></i> Revisión y mantenimiento continuo</li>
          <li><i className="fas fa-check-circle"></i> Soluciones personalizadas para tu empresa</li>
        </ul>
      </div>
    </>
  );
};

export default CableadoEstructurado;
