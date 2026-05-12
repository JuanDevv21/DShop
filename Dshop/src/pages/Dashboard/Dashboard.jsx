import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="login">
                <div className="cont">
                    <div className="log1">
                    <h2>Staff Access</h2>
                    <span>Inicia sesion para acceder a el deshboard logistico</span>
                </div>
                <div className="log2">
                    <span>EMAIL</span>
                    <input type="email" placeholder="example@dshop.com"></input>
                </div>
                <div className="log2">
                    <span>PASSWORD</span>
                    <input type="password"></input>
                </div>
                <div className="log1">
                    <div className="log11">
                        <input type="checkbox"></input>
                        <p>Mantener sesion iniciada</p>
                    </div>
                    <div className="log12">
                        <Link to="/AdminDashboard"><p>INICIAR SESION</p></Link>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="ft">
                <div className="ft1"><p>2026 DSHOP LOGISTICS</p></div>
                <div className="ft2">
                    <p>TERMINOS DE SERVICIO</p>
                    <p>POLITICAS DE PRIVACIDAD</p>
                    <p>TERMINOS TRANSPORTISTA</p>
                    <p>CONTACTE SOPORTE</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard