import React from "react";
import "./HeroTracking.css"
import busqueda from "../../assets/svg/search-alt.svg"

const HeroTracking = () => {
    return (
        <>
            <div className="hero-tracking">
                <div className="hero-sub"><p>INTELIGENCIA LOGISTICA</p></div>
                <div className="hero-tit"><h1>Sigue Tu Pedido.</h1></div>
                <div className="hero-find">
                    <img src={busqueda}></img>
                    <input
                    placeholder="Ingrese la guia de su pedido"
                    type="text"></input>
                    <div><p>FIND ORDER</p></div>
                </div>
            </div>
        </>
    )
}

export default HeroTracking