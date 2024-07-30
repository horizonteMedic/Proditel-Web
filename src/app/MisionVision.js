import React, { useEffect, useRef, useState } from 'react';
import './MisionVision.css';

const MisionVision = () => {
    const [isVisible, setIsVisible] = useState(false);
    const misionVisionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.1 });

        if (misionVisionRef.current) {
            observer.observe(misionVisionRef.current);
        }

        return () => {
            if (misionVisionRef.current) {
                observer.unobserve(misionVisionRef.current);
            }
        };
    }, []);

    return (
        <div id="mision-vision" className={`mision-vision ${isVisible ? 'animate-slide-in' : ''}`} ref={misionVisionRef}>
            <div className="mision-vision-column">
                <h2>Misión</h2>
                <p>
                    Proveer servicios de tecnología y comunicación de alta calidad que optimicen los procesos empresariales y promuevan el crecimiento sostenible, mediante un enfoque personalizado y soluciones a medida para cada cliente.
                </p>
            </div>
            <div className="mision-vision-column">
                <h2>Visión</h2>
                <p>
                    Ser líderes en la provisión de soluciones tecnológicas innovadoras que transformen el panorama empresarial, impulsando el progreso y la competitividad a nivel global.
                </p>
            </div>
        </div>
    );
};

export default MisionVision;
