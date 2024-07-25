import React from 'react';
import './FloatingWhatsApp.css'; // Asegúrate de crear este archivo CSS

const FloatingWhatsApp = () => {
    const whatsappNumber = '51950400000'; // Número de WhatsApp en formato internacional sin el símbolo '+'
    const message = encodeURIComponent('Hola! ¿En qué puedo ayudarte hoy? Estamos aquí para resolver tus dudas y ofrecerte la mejor atención. ¡Esperamos tu mensaje!');

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <i className="fab fa-whatsapp icon"></i>
        </a>
    );
};

export default FloatingWhatsApp;
