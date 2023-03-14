import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CartContext'
import Cart from './Cart'
import CartTotal from './CartTotal'



const CartElements = () => {
  const {carrito} = useContext(CarritoContext)

  return carrito.length > 0 ? (
    <>
      <Cart />
      <CartTotal />
    </>
  ):(
    <div className='carrito-vacio'>
      <h2>El carrito se encuentra vacio!</h2>
      <Link to={'/catalogo'}>
        <button> Volver a la tienda</button>
      </Link>
    </div>
  );
};

export default CartElements