import React, { useEffect, useState } from 'react';
import ImgBoton from './components/ImgBoton';

const iconOFF = "OFF";
const iconON = "ON";

export const BotonApp = () => {
  const [estado , setEstado] = useState(false);
  const [icon, setIcon] = useState(iconOFF);

  useEffect(()=>{
    if(estado){
     setIcon(iconON);
    }else{
     setIcon(iconOFF);
    }
  }, [estado]);
  
  useEffect(()=>{
    console.log("Entra la primera vez");
  }, []);

    return (
    <>
      <ImgBoton valor={icon} /> 
      <h1>Boton App</h1>
      <h2>{icon}</h2>
      <hr></hr>
      <button onClick={()=>setEstado(estado ? false : true)}>BOTON</button>  
    </>
  )
}

