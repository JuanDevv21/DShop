import React, { useState } from 'react';
import HeroTracking from './HeroTracking';
import Panel from './Panel';
import Envios from '../../data/Envios';

const Tracking = () => {

    const [numGuia, setNumGuia] = useState("")
    const [resultado, setResultado] = useState(null)

    const buscarPedido = () => {
        const encontrado = Envios.find(envio => envio.guia === numGuia)

        if (encontrado) {
            setResultado(encontrado)
        } else {
            alert("Guia no encontrada, verifica el numero")
            setResultado(null)
        }
    }

    return (
        <>
            <HeroTracking numGuia={numGuia} 
                setNumGuia={setNumGuia} 
                onBuscar={buscarPedido}></HeroTracking>
                {resultado && <Panel orden={resultado} />}
        </>
    )
};

export default Tracking;
