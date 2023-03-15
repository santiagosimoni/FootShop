import React, { useContext } from 'react'
import { CarritoContext } from '../context/CartContext';
import Chekout from './Chekout';

const CartTotal = () => {

  const {carrito} = useContext(CarritoContext)

  const grandTotal = ()=>{
    let total = 0
    carrito.map((i)=>{
      total += i.stock * i.precio
    })
    return total
   };


  return (
    <>
      <div className='total-prod'>
        <h2>El precio total de los prodcutos es de ${grandTotal()}</h2>
      </div>
      <Chekout />
    </>
  )
}

export default CartTotal