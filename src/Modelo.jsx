import React from "react";


function Modelo(props){
    const{marca,estilo,descripcion,precio,sku,cantidad} = props
    return(
        <div>
            <ul>
                <li>{marca}</li>
                <li>{estilo}</li>
                <p>{descripcion}</p>
                <li>{precio}</li>
                <li>{sku}</li>
                <li>{cantidad}</li>
              
           
                <label>
                    <input class="button" type="submit" value="Comprar"></input>
                    </label>
           
                
            </ul>
        </div>
    )
}
export default Modelo