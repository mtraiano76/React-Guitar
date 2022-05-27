import React, {Component} from "react";

class Modelo extends Component {
    render(){
        console.log("Modelo",this.props)
        return(
            <div>
                <ul>
                    <li>{this.props.marca}</li>
                    <li>{this.props.estilo}</li>
                    <p>{this.props.descripcion}</p>
                    <li>{this.props.precio}</li>
                    <li>{this.props.sku}</li>
                </ul>
            </div>    
        )
    }
}
export default Modelo