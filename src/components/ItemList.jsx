import React from 'react'
import Item from './Item'

const ItemList = ({prod}) => {
  return (
    <>
      <div className='contenido-principal'>
        {prod ?.map((remera)=>(
            <Item
              key={remera.id}
              id ={remera.id}
              nombre ={remera.nombre}
              precio ={remera.precio}
              desc ={remera.desc}
              stock ={remera.cantidad}
              img={remera.img}
              categoria={remera.categoria}
              />
          
          ))}
      </div >
    </>
  )
}

export default ItemList