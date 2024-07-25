import React from 'react';
import Navbar from './components/Navbar';
import NavbarMini from './components/NavbarMini';
import Footer from './components/Footer';
import Banner from './app/Banner';
import Servicios from './app/Servicios';
import ContactForm from './app/ContactForm';
import Map from './app/Map';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AboutUs from './app/AboutUs';
import MisionVision from './app/MisionVision';


function App() {
  return (
    <div className="App">
      <NavbarMini />
      <Navbar />
      <Banner/>
      <AboutUs/>
      <MisionVision />
      <Servicios/>
      <ContactForm />
      <Map />
      <FloatingWhatsApp />
      <Footer />

    </div>
  );
}

export default App;
