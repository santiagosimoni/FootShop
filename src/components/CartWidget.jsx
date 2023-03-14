import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CartContext'

const CartWidget = () => {
  const {carrito} = useContext(CarritoContext)
  

  return (
    <>
        <div className='cart'> 
                <Link to={`/cart`}>
                  <i className='fa-solid fa-cart-shopping' id='verCarrito'></i>
                </Link>
                <span id='count'>{carrito.length}</span>
            </div>
    </>
  )
}

export default CartWidget