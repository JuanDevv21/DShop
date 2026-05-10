import React from "react";
import "./Panel.css"
import BadBunny from "../../assets/badbunny.png"
import Camion from "../../assets//svg/truck.svg"

const Panel = () => {
    return (
        <>
            <div className="panel">
                <div className="panel-izq">
                    <div className="panel-izq1">
                        <div className="panel-izq11">
                            <p>CURRENT STATUS</p>
                            <p className="leter">PRIORITY AIR</p>
                        </div>
                        <div className="panel-izq12">
                            <h2>Despacho de aduanas</h2></div>
                        <div className="panel-izq13">
                            <img src={BadBunny}></img>
                        </div>
                        <div className="panel-izq14">
                            <div className="desc1">
                                <p>Producto</p>
                                <p className="det">Adidas BadBunny Paso Fino</p>
                            </div>
                            <div className="desc2">
                                <p>ID Orden</p>
                                <p className="det">DS-0010-A-26</p>
                            </div>
                            <div className="desc3">
                                <p>Est. Entrega</p>
                                <p className="det">Nov 14, 2025</p>
                            </div>
                            <div className="desc4">
                                <p>Enviado desde</p>
                                <p className="det">Portland, OR-USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="panel-izq2">
                        <div>
                            <img src={Camion}></img>
                        </div>
                        <div>
                            <span>COMPAÑEROS DE MENSAJERIA</span>
                            <p>COORDINADORA,ENVIA Y SERVIENTREGA</p>
                        </div>
                    </div>
                </div>
                <div className="panel-der">
                    <div>
                        <h2>Logistica de entrega</h2>
                    </div>
                    <div className="journey">
                        <p className="tt">Orden generada</p>
                        <p>Nov 16 - 2025</p>
                        <span>Pago confirmado y orden transmitida al puerto regional</span>
                    </div>
                    <div className="journey">
                        <p className="tt">Envio al hangar (USA)</p>
                        <p>Nov 18 - 2025</p>
                        <span>Objeto debidamente procesado legalmente para traslado</span>
                    </div>
                    <div className="journey">
                        <p className="tt">Nacionalizacion de la mercancia</p>
                        <p>En progeso - Nov 21 - 2026</p>
                        <span>Verificacion de los documentos de exportacion/importacion para el tipo de articulo</span>
                    </div>
                    <div className="journey">
                        <p className="tt"></p>
                        <p></p>
                        <span></span>
                    </div>
                    <div className="journey">
                        <p className="tt"></p>
                        <p></p>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel
