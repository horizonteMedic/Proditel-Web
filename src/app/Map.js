// src/app/Map.js
import React from 'react';

const Map = () => {
  return (
    <div className=" justify-center items-center bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0724073060555!2d-79.04718682544119!3d-8.094098780946094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3dc062f77c19%3A0x49c2b307626a16ed!2sMercurio%20493%2C%20Trujillo%2013011!5e0!3m2!1ses-419!2spe!4v1721932358447!5m2!1ses-419!2spe"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
