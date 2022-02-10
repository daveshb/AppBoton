

import React, { useState } from 'react'

const botonImages = require.context('../assets', true);

export const ImgBoton = ({valor}) => {

  console.log(valor);

  return (

<>
     <img src={botonImages(`./${valor}.png`)} />

    </>
  )
}

export default ImgBoton;