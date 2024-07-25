// src/app/Servicios.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptop, faChartLine, faTools, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import './Servicios.css';

const Servicios = () => {
  const services = [
    { title: 'Desarrollo Web', description: 'Creación y diseño de sitios web adaptados a tus necesidades.', icon: faGlobe },
    { title: 'Consultoría IT', description: 'Asesoramiento experto para optimizar tus recursos tecnológicos.', icon: faLaptop },
    { title: 'Marketing Digital', description: 'Estrategias para aumentar tu presencia en línea y atraer más clientes.', icon: faChartLine },
    { title: 'Soporte Técnico', description: 'Asistencia continua para resolver problemas tecnológicos rápidamente.', icon: faTools },
    { title: 'Desarrollo de Apps', description: 'Desarrollo de aplicaciones móviles personalizadas para tu negocio.', icon: faMobileAlt },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="servicios" className="servicios">

      <div className="bg-gray-100 py-12 services-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
          <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${inView ? 'animate-fade-in' : ''}`}>
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
                <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <a href="#" className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                  Más Información
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
