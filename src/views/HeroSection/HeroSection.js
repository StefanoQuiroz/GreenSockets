import React, { useEffect, useRef } from 'react';
import './HeroSection.scss';
import { FiArrowRightCircle } from "react-icons/fi";
import stefano from '../../images/stefano.jpg'
import joaco from '../../images/joaco.jpg'
import {gsap, Power3} from 'gsap';


const HeroSection = () => {
    let images = useRef(null);
    let content = useRef(null);
    let tl = gsap.timeline();
    useEffect(()=>{
        /* Hero Images */
        //variables de imágenes
        const stefano = images.firstElementChild;
        const joaco = images.lastElementChild;
        //console.log(images,joaco, stefano);
        tl.from(joaco, {duration: 1.2, y:1280, ease: Power3.easeOut});
        tl.from(joaco.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, 1.2);// le da un zoom alto a menos
        tl.from(stefano, {duration: 1.2, y:1280, ease: Power3.easeOut}, 0.2);
        tl.from(stefano.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, 0.8);// le da un zoom alto a menos
        /* Hero-content */
        const firstLine = content.children[0].children[0];
        const secondLine = firstLine.nextSibling;
        const thirdLine = secondLine.nextSibling;
        //const contentP = content.children[1];
        //const contentButton = content.children[2];
        //console.log(firstLine, secondLine, thirdLine, contentP, contentButton);
        //content animation
        tl.staggerFrom([firstLine.children, secondLine.children, thirdLine.children], 1, {y:44, ease: Power3.easeOut, delay: .8})

    },[tl])

    return (
        <div className="container">
            <div className="hero-inner" ref={el => content = el}>
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
                    <div className="hero-images-inner" ref={el => images = el}>
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
