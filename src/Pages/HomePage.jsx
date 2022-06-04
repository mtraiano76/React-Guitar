import React,{Component} from "react"
import Modelos from "../Components/Modelos"

//nombre de la class igual que el archivo (Home)
//en el div, no se usa div class por que class esta resrvada para React

class HomePage extends Component{
    render(){
        return(
            <div className="">
                <Modelos />
            </div>
        )
    }

}
export default HomePage