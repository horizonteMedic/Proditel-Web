import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import MisionVision from './MisionVision';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutUsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);

    return (
        <section id="about-us" className={`about-us ${isVisible ? 'animate-slide-in' : ''}`} ref={aboutUsRef}>
            <div className="container">
                <h1>¿Quiénes Somos?</h1>
                <p>
                    En <strong>Proditel</strong>, nos especializamos en transformar las necesidades tecnológicas y de comunicación en soluciones efectivas y a medida. Nuestro equipo de expertos se dedica a ofrecer servicios que no solo optimizan procesos, sino que también potencian el crecimiento y la eficiencia de las empresas.
                </p>
                <p>
                    Con un enfoque en la innovación y la adaptabilidad, nos comprometemos a ser el socio estratégico que te prepara para el futuro. En <strong>Proditel</strong>, cada solución está diseñada para superar expectativas y contribuir al éxito sostenible de tu empresa. <strong>Conéctate con nosotros y descubre cómo podemos ayudarte a alcanzar tus metas.</strong>
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
