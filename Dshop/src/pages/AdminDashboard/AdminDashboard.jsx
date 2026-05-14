import React from "react";
import "./AdminDashboard.css"
import Box from "../../assets/svg/box.svg"
import Container from "../../assets/svg/container.svg"
import Truck from "../../assets/svg/truckb.svg"
import Clover from "../../assets/svg/clover.svg"
import helpCircle from "../../assets/svg/help-circle.svg"
import Gear from "../../assets/svg/gear.svg"
import OrderTrendsChart from "./Grafico";

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
                            GRAFICA
                        </div>
                    </div>



                    <div className="menu-dder">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard