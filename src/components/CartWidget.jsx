import React from 'react'

const CartWidget = () => {
  return (
    <>
        <div className='cart'> 
                <i className='fa-solid fa-cart-shopping' id='verCarrito'></i>
                <span id='count'>0</span>
            </div>
    </>
  )
}

export default CartWidget