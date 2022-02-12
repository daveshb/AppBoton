

import React from 'react'

const botonImages = require.context('../assets', true);

export const ImgBoton = ({valor}) => {
  return  <img src={botonImages(`./${valor}.png`)} />;
}

export default ImgBoton;
