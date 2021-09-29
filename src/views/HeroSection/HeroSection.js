import React from 'react';
import './HeroSection.scss';
import { FiArrowRightCircle } from "react-icons/fi";
import stefano from '../../images/stefano.jpg'
import joaco from '../../images/joaco.jpg'
const HeroSection = () => {
    return (
        <div className="container">
            <div className="hero-inner">
                <div className="hero-content">
                    <h1>
                        <div className="hero-content-line">
                            <div className="hero-content-line-inner">Innovación en cada</div>    
                        </div>
                        <div className="hero-content-line">
                            <div className="hero-content-line-inner">Detalle para la mejor</div>    
                        </div>
                        <div className="hero-content-line">
                            <div className="hero-content-line-inner">Experiencia de Usuario</div>    
                        </div>
                    </h1>
                    <p>
                        Ofrecemos la mejor calidad de diseño, innovación y tendencia en cada uno de nuestros proyectos de software 
                    </p>
                    <div className="btn-row">
                        <button className="explore-btn">
                            Explorar
                            <FiArrowRightCircle className="right-circle"/> 
                        </button>
                    </div>
                </div>

                <div className="hero-images">
                    <div className="hero-images-inner">
                        <div className="hero-image stefano">
                            <img src={stefano} alt="stefanoImg"/>
                        </div>
                        <div className="hero-image joaco">
                            <img src={joaco} alt="joacoImg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
