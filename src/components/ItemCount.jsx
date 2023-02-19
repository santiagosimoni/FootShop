import React, { useState } from 'react'

const ItemCount = ({stock}) => {
  const [contador, setContador]= useState(0)

  function sumar(){
    if(contador < stock ? setContador (contador+1): '');
  }


function restar(){
  if(contador <=0 ? contador == 0 : setContador(contador -1));
}

  return (
    <>
      <div className='contenedor-contador'>
        <button onClick={sumar}>+</button>
        <span>{contador}</span>
        <button onClick={restar}>-</button>
      </div>
    </>
  )
}

export default ItemCount