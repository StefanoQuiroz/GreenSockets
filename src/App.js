import React, { useEffect, useRef } from 'react'
import './App.scss';
import HeroSection from './views/HeroSection/HeroSection';
import {gsap} from 'gsap';


function App() {
  let app = useRef(null);

  useEffect(() => {
    //TweenMax.to(app, 0, {css: {visibility: "visible"}})//(target, duration, {variables de configuración});
    gsap.to(app, {duration: 0, css: {visibility: "visible"}})
    console.log(app)
  }, [])
  return (
    <div className="app" ref={el => app = el}>
      <HeroSection/>
    </div>
  );
}

export default App;
