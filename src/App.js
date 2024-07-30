// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import CableadoEstructurado from './app/CableadoEstructurado';
import DesarrolloSoftware from './app/DesarrolloSoftware';
import ImplementacionServidores from './app/ImplementacionServidores';
import MonitoreoCCTV from './app/MonitoreoCCTV';
import EnlaceFibra from './app/EnlaceFibra';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMini />
        <Navbar />
        <Routes>
          <Route path="/cableado-estructurado" element={<CableadoEstructurado />} />
          <Route path="/desarrollo-software" element={<DesarrolloSoftware />} />
          <Route path="/implementacion-servidores" element={<ImplementacionServidores />} />
          <Route path="/monitoreo-cctv" element={<MonitoreoCCTV />} />
          <Route path="/enlace-fibra" element={<EnlaceFibra />} />
          <Route path="/" element={
            <>
              <Banner />
              <AboutUs />
              <MisionVision/>

              <Servicios />
              {/* <ContactForm /> */}
              <Map />
            </>
          } />
        </Routes>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
