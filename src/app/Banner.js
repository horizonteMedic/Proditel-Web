// src/app/Banner.js
import React from 'react';

const Banner = () => {
  const bannerStyle = {
    position: 'relative', // Necesario para el contenedor de superposición
    backgroundImage: 'url(/img/fondopantalla.png)', // Ruta a la imagen en la carpeta pública
    backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat', // No repetir la imagen
    height: '85vh', // Altura del banner
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
      <div style={overlayStyle}>
        <div>
          <p className="text-lg  mb-6" style={{marginTop:'5em'}}>En Proditel, nos dedicamos a ofrecer soluciones integrales para satisfacer las necesidades tecnológicas y <br></br> de comunicación de nuestros clientes. Nuestro compromiso es brindar servicios de alta calidad que impulsan <br></br> el crecimiento y la eficiencia de las empresas en diversos sectores.</p>
          <a href="#contact" className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold transition-transform transform hover:scale-105">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
