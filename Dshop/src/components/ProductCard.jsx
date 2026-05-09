import Productos from "../data/Productos"
import "./ProductCard.css"


const ProductCard = ({producto}) => {

    const {id, nombre, precio, imagen} = producto

    return (
        <div className="card">
            <div className="image-section">
                <img src={producto.imagen}></img>
            </div>
            <div className="info">
                <div>
                    <h3>{producto.nombre}</h3>
                    <span>${producto.precio}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard