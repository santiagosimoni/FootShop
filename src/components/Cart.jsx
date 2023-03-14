import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CartContext'

const Cart = () => {

  const {carrito, setCarrito} = useContext(CarritoContext)

  const eliminarProd = (id)=>{
    const foundId = carrito.find((element)=> element.id === id)

    const nuevoCarrito = carrito.filter((element) =>{
      return element !== foundId
    })

    setCarrito(nuevoCarrito)
  }
  
   return (carrito.map((elem) =>{
    return(
    <>
      <div className='carrito-content' key={elem.id}>
        <img src={elem.img} alt="imagen camiseta" />
        <h2>{elem.nombre}</h2>
        <h3>${elem.precio}</h3>
        <h3>Cantidad a comprar: {elem.stock}</h3>
        <h3>Total de producto : ${elem.stock*elem.precio}</h3>
        <h3 className='eliminar-prod' onClick={()=> eliminarProd(elem.id)}>X</h3>
      </div>
    </>
    )
  }
  )
  )
}


export default Cart