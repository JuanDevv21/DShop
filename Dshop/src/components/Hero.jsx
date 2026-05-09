import React from "react";
import "./Hero.css"
import ImgHero from "../assets/img-hero.png"

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-izq">
                    <div className="hero-izq1"><p>Nueva temporada de lanzamientos</p></div>
                    <div className="hero-izq2">
                        <h2>VELOCIDAD</h2>
                        <h2 className="aze">ELITE</h2>
                        <p>Importamos los sneakers mas exclusivos del mercado, Drops limitados, calidad garantizada y modelos que marcan la tendencia en la cultura urbana</p>
                    </div>
                    <div className="hero-izq3">
                        <div className="hero-izqb1"><a>COLECCIONES</a></div>
                        <div className="hero-izqb2"><a>DETALLES</a></div>
                    </div>
                </div>
                <div className="hero-der">
                    <img src={ImgHero}></img>
                </div>
            </div>
        </>
    )
}

export default Hero