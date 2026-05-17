import React from "react";
import "./AdminDashboard.css"
import Box from "../../assets/svg/box.svg"
import Container from "../../assets/svg/container.svg"
import Truck from "../../assets/svg/truckb.svg"
import Clover from "../../assets/svg/clover.svg"
import helpCircle from "../../assets/svg/help-circle.svg"
import Gear from "../../assets/svg/gear.svg"
import OrderTrendsChart from "./Grafico";
import AlertCircle from "../../assets/svg/alert-circle.svg"
import CheckCircle from "../../assets/svg/check-circle.svg"
import Plane from "../../assets/svg/plane.svg"
import TrasureChest from "../../assets/svg/treasure-chest.svg"
import UserBlue from "../../assets/svg/userblue.svg"


const AdminDashboard = () => {
    return (
        <div className="menu">
            <div className="menu-izq">
                <div className="menu-izq1">
                    <div className="items">
                        <img src={Clover}></img>
                        <p>OVERVIEW</p>
                    </div>
                    <div className="items">
                        <img src={Box}></img>
                        <p>INVENTARIO</p>
                    </div>
                    <div className="items">
                        <img src={Truck}></img>
                        <p>ENVIOS</p>
                    </div>
                    <div className="items">
                        <img src={Container}></img>
                        <p>CUSTOMS</p>
                    </div>
                </div>
                <div className="menu-izq1">
                    <div className="createship">
                        <p>CREATE SHIPEMENT</p>
                    </div>
                    <div className="items2">
                        <img src={Gear}></img>
                        <p>SETTINGS</p>
                    </div>
                    <div className="items2">
                        <img src={helpCircle}></img>
                        <p>SUPPORT</p>
                    </div>
                </div>
            </div>
            <div className="menu-der">
                <div className="menu-d1">
                    <div className="blo">
                        <p>ORDENES HOY</p>
                        <h2>1,284</h2>
                        <p>+12,4% Vs ayer</p>
                    </div>
                    <div className="blo">
                        <p>ITEMS EN TRANSITO</p>
                        <h2>8,432</h2>
                        <p>422 Despachados</p>
                    </div>
                    <div className="blo3">
                        <p>ENVIOS PENDIENTES</p>
                        <h2>14</h2>
                        <p>3 items requieren revision urgente</p>
                    </div>
                </div>
                <div className="menu-der2">
                    <div className="menu-dizq">
                        <div className="menu-dizq1">
                            <div className="md1">
                                <p>ANALITICAS DE RENDIMIENTO</p>
                                <h2>Volumen de ordenes</h2>
                            </div>
                            <div className="yu">
                                <p className="ac">SEMANALMENTE</p>
                                <p>MENSUALMENTE</p>
                            </div>
                        </div>
                        <div className="menu-dizq2">
                            <OrderTrendsChart></OrderTrendsChart>
                        </div>
                    </div>

                    <div className="menu-dder">
                        <div className="fae">
                            <p>ACTIVIDAD RECIENTE</p>
                        </div>
                        <div className="logisticabloq">
                            <div>
                                <img src={Plane}></img>
                            </div>
                            <div className="inf">
                                <p>Pedido DS-9423 enviado</p>
                            <span>Orlando, Puerto Cañaveral</span>
                            </div>
                        </div>
                        <div className="logisticabloq">
                            <div>
                                <img src={AlertCircle}></img>
                            </div>
                            <div className="inf">
                                <p>Paquete retenido - ID: DS-1010</p>
                            <span>JFK Nueva York</span>
                            </div>
                        </div>
                        <div className="logisticabloq"> 
                            <div>
                                <img src={UserBlue}></img>
                            </div>
                            <div className="inf">
                                <p>Nuevo miembro de logistica agregado</p>
                                <span>Sistema de seguridad - Hace 6 horas</span>
                            </div>
                        </div>
                        <div className="logisticabloq">
                            <div>
                                <img src={CheckCircle}></img>
                            </div>
                            <div className="inf">
                                <p>Restock de inventario finalizado</p>
                            <span>Bodega de Buga, Valle del Cauca</span>
                            </div>
                        </div>
                        <div className="logisticabloq">
                            <div>
                                <img src={TrasureChest}></img>
                            </div>
                            <div className="inf">
                                <p>Alerta de alta demanda</p>
                                <span>AirForce One</span>
                            </div>
                        </div>
                        <div className="fae">
                                <p>VER TODA LA ACTIVIDAD</p>
                        </div>
                    </div>
                </div>
                <div className="menu-der3">
                    <div>
                        <h3>LIVE GLOBAL SHIPMENTS</h3>
                    </div>
                    <div className="it">
                        <p>TRACKING ID</p>
                        <p>DESTINO</p>
                        <p>ESTADO</p>
                        <p>T. ESTIMADO ENTREGA</p>
                        <p>PRIORIDAD</p>
                    </div>
                    <div className="it">
                        <span style={{color: "blue"}}>#DS-9231</span>
                        <span>Bogota</span>
                        <span>Transitando</span>
                        <span>Diciembre 12, 2026</span>
                        <span>Ninguna</span>
                    </div>
                    <div className="it">
                        <span style={{color: "blue"}}>#DS-0011</span>
                        <span>Medellin</span>
                        <span>Retrasado</span>
                        <span>Diciembre 24, 2026</span>
                        <span>Retraso</span>
                    </div>
                    <div className="it">
                        <span style={{color: "blue"}}>#DS-6044</span>
                        <span>Bogota</span>
                        <span>Almacenado</span>
                        <span>Diciembre 07, 2026</span>
                        <span>Ninguna</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard