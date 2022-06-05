import React from "react";


function Modelo(props){
    const{marca,precio} = props
    return(
        <div>
            <ul>
                <li>{marca}</li>
                <p>$ {precio}</p>
                <button type="button">Comprar</button>
                <button type="button">Ver Detalle</button>
            </ul>
        </div>
    )
}

export default Modelo