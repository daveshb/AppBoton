import React, { useState } from 'react';
import ImgBoton from './components/ImgBoton';



export const BotonApp = ({valor}) => {
  
  const [estado , setEstado] = useState(valor);
  
  const cambio = () => {
    // console.log(estado);

      (estado=="OFF")? setEstado(valor = "ON") : setEstado(valor = "OFF");
   
  }
 
    return (

    <>

   <ImgBoton valor={estado} /> 

    <h1>Boton App</h1>
    <h2>{estado}</h2>
    <hr></hr>
    <button onClick={cambio} > BOTON </button>

        
    </>
  
  )
}

