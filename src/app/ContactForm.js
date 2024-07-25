// src/app/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSuccess('Your message has been sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh',
    backgroundImage: 'url(/img/soft.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '1rem',
  };

  const formWrapperStyle = {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '2px',
    width: '100%',
    maxWidth: '400px', // Ajustado para reducir el ancho del formulario
    height: 'auto',
  };

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5rem',
    width: '100%',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem', // Reducido padding
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '50%', // Reducido ancho del botón
    fontSize: '0.875rem',
    transition: 'background-color 0.3s ease',
    margin: '0 auto', // Centrando el botón
    display: 'block',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <section id="contact" className="contact-form">

    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h2 className="text-lg font-semibold mb-3 text-center">Contáctanos</h2>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-3 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium text-sm">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-sm">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, height: '80px' }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
    </section>

  );
};

export default ContactForm;
