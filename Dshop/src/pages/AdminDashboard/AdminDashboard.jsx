import React from "react";
import "./AdminDashboard.css"
import Box from "../../assets/svg/box.svg"
import Container from "../../assets/svg/container.svg"
import Truck from "../../assets/svg/truckb.svg"
import Clover from "../../assets/svg/clover.svg"
import helpCircle from "../../assets/svg/help-circle.svg"
import Gear from "../../assets/svg/gear.svg"

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

            </div>
        </div>
    )
}

export default AdminDashboard