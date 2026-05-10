import React from "react";
import "./HeroTracking.css"
import busqueda from "../../assets/svg/search-alt.svg"

const HeroTracking = ({numGuia, setNumGuia, onBuscar}) => {

    return (
        <>
            <div className="hero-tracking">
                <div className="hero-sub"><p>INTELIGENCIA LOGISTICA</p></div>
                <div className="hero-tit"><h1>Sigue Tu Pedido.</h1></div>
                <div className="hero-find">
                    <img src={busqueda}></img>
                    <input
                    placeholder="Ingrese la guia de su pedido"
                    type="text"
                    value={numGuia}
                    onChange={(e) => setNumGuia(e.target.value)}></input>
                    <div onClick={() => {console.log("Botón presionado con guía:", numGuia); onBuscar();}}>
                        <p>FIND ORDER</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTracking