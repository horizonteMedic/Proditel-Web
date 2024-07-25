// src/app/Banner.js
import React from 'react';
import './Banner.css'; // Asegúrate de importar el archivo CSS

const Banner = () => {
  const bannerStyle = {
    position: 'relative', // Necesario para el contenedor de superposición
    backgroundImage: 'url(/img/fondopantalla.png)', // Ruta a la imagen en la carpeta pública
    backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat', // No repetir la imagen
    height: '85vh', // Altura del banner
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayStyle = {
    position: 'absolute', // Posición absoluta para superponer el contenido
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Color del texto
    textAlign: 'center',
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle} className="banner-overlay">
        <div className="px-4 md:px-8 lg:px-16">
          <p className="banner-text text-lg md:text-xl lg:text-2xl mb-6">
            En Proditel, nos dedicamos a ofrecer soluciones integrales para satisfacer las necesidades tecnológicas y
            de comunicación de nuestros clientes. Nuestro compromiso es brindar servicios de alta calidad que impulsan el crecimiento y la eficiencia de
            las empresas en diversos sectores.
          </p>
          <a
            href="#contact"
            className="contact-button"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
