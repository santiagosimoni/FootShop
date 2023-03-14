import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CartContext'

const ItemCount = ({prod}) => {
  const [contador, setContador]= useState(1)
  const { carrito, setCarrito } = useContext(CarritoContext)

  function sumar(){
    if(contador < prod.cantidad ? setContador (contador+1): '');
  }


function restar(){
  if(contador <=1 ? contador == 1 : setContador(contador -1));
}

const agregarCarrito = (prod) =>{
  const productoRepeat= carrito.find((item) => item.id === prod.id)
  if(productoRepeat){
    setCarrito(carrito.map((item) => (item.id === prod.id ? { ...prod, stock: productoRepeat.stock + contador } : item)));
  }else{
    setCarrito([...carrito, prod]) ;

  }
}

  return (
    <>
      <div className='contenedor-contador'>
        <button onClick={sumar}>+</button>
        <span>{contador}</span>
        <button onClick={restar}>-</button>
        <div className='detail-boton'><button onClick={() =>agregarCarrito(prod)}>Sumar al carrito!</button></div >
      </div>
    </>
  )
}

export default ItemCount