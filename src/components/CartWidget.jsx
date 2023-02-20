import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <>
        <div className='cart'> 
                <Link to={`/cart`}>
                  <i className='fa-solid fa-cart-shopping' id='verCarrito'></i>
                </Link>
                <span id='count'>0</span>
            </div>
    </>
  )
}

export default CartWidget