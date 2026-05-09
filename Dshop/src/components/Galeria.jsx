import React from "react";
import { useState } from "react";
import "./Galeria.css"
import ProductCard from "./ProductCard";
import Productos from "../data/Productos";

const Galeria = () => {

    const [filtro, setFiltro] = useState("Todos")

    const productosFiltrados = filtro === "Todos" ? Productos : Productos.filter(p => p.marca === filtro)

    return (
        <>
            <div className="galeria">
                <div className="galeria-title"><h2>ALGUNOS DE NUESTROS PRODUCTOS</h2></div>
                <div className="galeria-sub">
                    <p>Importaciones de calidad, precision tecnica y logistica en cada movimiento</p>
                    <div className="filter">
                        <p onClick={() => setFiltro("Todos")} className={filtro === "Todos" ? "active": ""}>Todos</p>
                        <p onClick={() => setFiltro("Nike")} className={filtro === "Nike" ? "active" : ""}>Nike</p>
                        <p onClick={() => setFiltro("Adidas")} className={filtro === "Adidas" ? "active": ""}>Adidas</p>
                        <p onClick={() => setFiltro("Bape")} className={filtro === "Bape" ? "active" : ""}>Bapesta</p>
                    </div>
                </div>
                <div className="rejilla">
                    {productosFiltrados.map(prod => (
                        <ProductCard key={prod.id} producto={prod}></ProductCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Galeria