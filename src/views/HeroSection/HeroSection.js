import React, { useEffect, useRef } from 'react';
import './HeroSection.scss';
import { FiArrowRightCircle } from "react-icons/fi";
import stefano from '../../images/stefano.jpg'
import joaco from '../../images/joaco.jpg'
import {gsap, Power3} from 'gsap';

/* Link Interesante */
//https://greensock.com/3-migration/

const HeroSection = () => {
    let images = useRef(null);
    let content = useRef(null);
    let tl = gsap.timeline();
    useEffect(()=>{
        /* Hero Images */
        //variables de imágenes
        const joaco = images.firstElementChild;
        const stefano = images.lastElementChild;
        //console.log(images,joaco, stefano);
        tl.from(joaco, {duration: 1.2, y:1280, ease: Power3.easeOut}, "Start");//target, duración, vertical 
        tl.from(joaco.firstElementChild,{duration: 2, scale: 1.6, ease: Power3.easeOut, delay: 0.2});// le da un zoom alto a menos
        tl.from(stefano, {duration: 1.2, y:1280, ease: Power3.easeOut, delay: 0.2});
        tl.from(stefano.firstElementChild, {duration: 2, scale: 1.6, ease: Power3.easeOut, delay: 0.2});// le da un zoom alto a menos
        /* Hero-content */
        const firstLine = content.children[0].children[0];//para acceder a h1 => y luego el div
        const secondLine = firstLine.nextSibling;// proximo hermano
        //const thirdLine = secondLine.nextSibling;// proximo hermano
        
        const contentP = content.children[1];// para p tag
        const contentButton = content.children[2];//para button tag
        //console.log(firstLine, secondLine, thirdLine, contentP, contentButton);
        //content animation

        tl.to(
            [firstLine.children, secondLine.children], 
            {
                y: 40,
                ease: "power3.easeOut", 
                delay: 0.8,
                //stagger: {each: 0.1, from:"center"},
                stagger: 0.5,
                duration: 1               
            },
            "Start"
        )
        tl.from(contentP, {duration: 1, y:20, opacity:0, ease: Power3.easeOut} ,0.4)
        tl.from(contentButton, {duration: 1, y:20, opacity:0, ease: Power3.easeOut}, 0.4);
        
        /* gsap.to([firstLine.children, secondLine.children, thirdLine.children], 1, {
            scale: 0.1, 
            y: 60,
            yoyo: true, 
            repeat: -1, 
            ease: "power1.inOut",
            delay:1,
            stagger: {
              amount: 1.5, 
              grid: "auto",
              from: "center"
            }
          }); */

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
                        <div className="hero-image joaco">
                            <img src={joaco} alt="joacoImg"/>
                        </div>
                        <div className="hero-image stefano">
                            <img src={stefano} alt="stefanoImg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
