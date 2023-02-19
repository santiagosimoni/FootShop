import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, nombre, categoria, stock, img}) => {
  return (
    <>
      <div className='tarjetas' key={id}>
        <div className='contenido-tarjetas'>
          <img src={img} alt="imagen camiseta" />
          <h2 className='nombre'>{nombre}</h2>
          <h2 className='categoria'>{categoria}</h2>
          <h3 className='stock'>Cantidad disponible: {stock}</h3>
          <Link to={`/detail/${id}`}>
            <button className='boton-prod'>Ver mas</button>
          </Link >
        </div >
      </div>
    </>
  )
}

export default Item