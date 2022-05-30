import React,{useState,useEffect} from "react"
import Modelo from "./Modelo"

function Modelos(){
    const [loading,setLoading] = useState(true)
    const [modelos,setModelos] = useState([])
    const [buscar,setBuscar] = useState('')
   




    useEffect(
        ()=>{
            setTimeout(() =>{
                setModelos([

                    {
                        marca:"Marca: Gibson",
                        estilo:"Modelo: Les Paul",
                        descripcion:"Descripcion: Se trata de una guitarra de cuerpo macizo, sin caja de resonancia. generalmente de caoba y con una tapa convexa de arce, cuyo acabado puede ser tanto en colores opacos como en otros traslúcidos que permiten ver las vetas de la madera. El mástil, encolado, lleva inserta un alma regulable y está rematado por un diapasón de 22 trastes, que suele ser de palo rosa. Incorpora dos fonocaptores o «pastillas» de bobinado doble o «humbuckers» y un puente Tune-o-matic sin palanca de vibrato, todos patentes de la propia fabricante del instrumento.",
                        precio: "Precio: $ 172.000",
                        sku:"SKU: GIBSTANDART",
                        cantidad:"Cantidad: 10"
                    },
                    {
                        marca:"Marca: Gibson",
                        estilo:"Modelo: Explorer",
                        descripcion:"Descripcion: Gibson Explorer, o X-plorer (desde 2002) es una guitarra eléctrica de cuerpo macizo fabricada por Gibson. Fue presentada en 1958, como desarrollo de un prototipo previo denominado «Futura». Se pretendía con ella introducir en el mercado un modelo de líneas radicales e inspiración futurista, como ocurría con sus hermanas, la Flying V y la Gibson Moderne. Inicialmente fracasó y dejó de fabricarse en 1959. Sin embargo, en 1975, Gibson comienza la reedición de la Explorer debido al éxito de diseños similares de otras compañías.",
                        precio:"Precio: $ 253.000",
                        sku:"SKU: GIBEXP",
                        cantidad:"Cantidad: 10"
                    },
                    {
                        marca:"Marca: Gibson",
                        estilo:"Modelo: Flying V",
                        descripcion:"Descripcion: La Gibson Flying V es una guitarra eléctrica popular. Sacada al mercado en 1958 por Gibson, su principal característica es su diseño en forma de flecha. Es muy utilizada por guitarristas de heavy metal.",
                        precio:"Precio: $ 235.000",
                        sku:"SKU: GIBFLY",
                        cantidad:"Cantidad: 10"
                    },
              
                ])
                setLoading(false)

            },2000)
        },
        []
    )

    useEffect(
        ()=>{
            console.log("ComponentDidUpdate")
            setModelos([
                {
                    marca:"Marca: Gibson",
                    estilo:"Modelo: Flying V",
                    descripcion:"Descripcion: La Gibson Flying V es una guitarra eléctrica popular. Sacada al mercado en 1958 por Gibson, su principal característica es su diseño en forma de flecha. Es muy utilizada por guitarristas de heavy metal.",
                    precio:"Precio: $ 235.000",
                    sku:"SKU: GIBFLY",
                    cantidad:"Cantidad: 10"
                },
            ])
        },
        [buscar]
    )
  
    const handleClick = ()=>{
        setModelos([
            {
                marca:"Marca: Gibson",
                    estilo:"Modelo: Explorer",
                    descripcion:"Descripcion: Gibson Explorer, o X-plorer (desde 2002) es una guitarra eléctrica de cuerpo macizo fabricada por Gibson. Fue presentada en 1958, como desarrollo de un prototipo previo denominado «Futura». Se pretendía con ella introducir en el mercado un modelo de líneas radicales e inspiración futurista, como ocurría con sus hermanas, la Flying V y la Gibson Moderne. Inicialmente fracasó y dejó de fabricarse en 1959. Sin embargo, en 1975, Gibson comienza la reedición de la Explorer debido al éxito de diseños similares de otras compañías.",
                    precio:"Precio: $ 253.000",
                    sku:"SKU: GIBEXP",
                    cantidad:"Cantidad: 9"     
            }   
        ])
    }
    
    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const titulo = "Listado de productos"
        return(
            <div>
            <h2>{titulo}</h2>
            {modelos.map(modelo=><Modelo marca={modelo.marca} estilo={modelo.estilo} descripcion={modelo.descripcion} precio={modelo.precio} sku={modelo.sku} cantidad={modelo.cantidad} />)}
            <button onClick={handleClick}>Filtrar</button>
            <button onClick={()=>setBuscar('gibson')}>Buscar</button>
        </div>
        )
    }
    
    
}



export default Modelos