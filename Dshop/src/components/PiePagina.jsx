import React from "react";
import "./PiePagina.css"
import {Link} from "react-router-dom"

const PiePagina = () => {
    return (
    <>
        <div className="contenedor">
            <div className="contenedor1">
                <h2>GLOBAL LOGISTICS, LOCAL SPEED.</h2>
            </div>
            <div className="contenedor2">
                <span>Nuestro sistema de logistica es una obra maestra de precision, Sigue tu pedido desde la salida internacional hasta la llegada a tu puerta</span>
            </div>
            <div className="contenedor3">
                <input
                type="text"
                placeholder="INGRESE LA GUIA DE SU PEDIDO"></input>
                <Link to="/Tracking"><p>TRACK SHIPMENT</p></Link>
            </div>
            <div className="contenedor4">
                <div>
                    <p>04-06</p>
                    <span>DIAS HABILES DE ENTREGA</span>
                </div>
                <div>
                    <p>24/7</p>
                    <span>SEGUIMIENTO EN TIEMPO REAL</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default PiePagina