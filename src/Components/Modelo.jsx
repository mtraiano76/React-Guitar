import React from "react";


function Modelo(props){
    const{marca,estilo,descripcion,precio,sku,cantidad} = props
    return(
        <div>
            <ul>
                <li>{marca}</li>
                <li>{precio}</li>


                <label>
                    <button type="button">Ver Detalle</button>
                    </label>

            </ul>
        </div>
    )
}
export default Modelo