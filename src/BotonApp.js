import React, { useState } from 'react';


const botonImages = require.context('./assets', true);


export const BotonApp = ({valor}) => {
  
  const [estado , setEstado] = useState(valor);
  

  const cambio = () => {
    console.log(estado);

      (estado=="OFF")? setEstado(valor = "ON") : setEstado(valor = "OFF");

   
  }
 
    return (
    <>
    <h1>Boton App</h1>
    <h2>{estado}</h2>
    <hr></hr>
    <button onClick={cambio} > BOTON </button>

    <img src={botonImages('./off.png')}/>

   
    

    </>
  
  )
}

