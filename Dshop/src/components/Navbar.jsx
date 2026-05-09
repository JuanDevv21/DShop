import React from "react";
import "./Navbar.css"
import ProfileUser from "./UserProfileSVG";
import Cart from "./Cart";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-izq"><h2>Dshop</h2></div>
            <div className="nav-center">
                <a><p>Store</p></a>
                <a><p>Tracking</p></a>
                <a><p>Dashboard</p></a>
                <a><p>Logistica</p></a>
            </div>
            <div className="nav-der">
                <div className="prof"><ProfileUser></ProfileUser></div>
                <div className="cart"><Cart></Cart></div>
            </div>
        </nav>
    )
}

export default Navbar