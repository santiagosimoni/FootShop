import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CarritoContext = createContext()


const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  return (
    <CarritoContext.Provider value={{carrito, setCarrito}}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CartContext