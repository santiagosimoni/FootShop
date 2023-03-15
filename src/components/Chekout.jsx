/*import { collection, getFirestore, addDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CartContext'

export const Chekout = () => {
    const {carrito, setCarrito}=  useContext(CarritoContext)
    const [nombre, setNombre]=  useState("")
    const [phone, setPhone]=  useState("")
    const [email, setEmail]=  useState("")
    const [ordenId, setOrdenId]= useState("")

    const db = getFirestore()

  const grandTotal = ()=>{
      let total = 0
      carrito.map((i)=>{
        total += i.stock * i.precio
      })
      return total
     };

     const ordenes ={
      nombre, 
      email,
      phone,
      items: carrito, 
      total: grandTotal()
    };
  
    const handleClick = (e)=> {
      e.preventDefault();
      addDoc(ordersCollection, ordenes).then(({id})=> setOrdenId(id));
    };

    const ordersCollection = collection(db, 'orders')



  return (
    <>
      <div className='form-container'>
        <form onSubmit={()=> handleClick()}>
          <div className='celda-form'>
            <label htmlFor="nombre" className='form-label'>Nombre</label> 
            <input type="text" className='form-input' id='nombre' onInput={(e)=>{setNombre(e.target.value)}} /> 
          </div>
          <div className='celda-form'>
            <label htmlFor="telefono" className='form-label'>Numero de contacto</label> 
            <input type="text" className='form-input' id='telefono' onInput={(e)=>{setPhone(e.target.value)}} /> 
          </div>
          <div className='celda-form'>
            <label htmlFor="email" className='form-label'>Email</label> 
            <input type="text" className='form-input' id='email' onInput={(e)=>{setEmail(e.target.value)}} /> 
          </div>
          <button type="submit" className="ov-btn-slide-left">Finalizar mi compra!</button>
        </form>
      </div>
    </>
  )
}

export default Chekout*/

import React from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CartContext'

const Chekout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] =useState('')
  const [email,setEmail] = useState('');

  const db = getFirestore()
  const {carrito} = useContext(CarritoContext)
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
  };

  const grandTotal = ()=>{
    let total = 0
    carrito.map((i)=>{
      total += i.stock * i.precio
    })
    return total
   }; 

  const order ={
    name, 
    email,
    phone,
    items: carrito, 
    total: grandTotal()
  };


  const ordersCollection = collection(db, 'orden')


  return (
    <div className='form-container-tamano'>
      <form className='form-container' onSubmit={handleSubmit} method='POST'>
        <div className='form-celdas'>
          <label>
            Email
          </label>
          <input onChange={(e)=> setEmail(e.target.value)} required/>
        </div>
        <div className='form-celdas'>
          <label>
            Nombre
          </label>
          <input onChange={(e)=> setName(e.target.value)} required/>
        </div>
        <div className='form-celdas'>
          <label>
            Telefono
          </label>
          <input onChange={(e)=> setPhone(e.target.value)} required/>
        </div>
        <div>
          <button className="ov-btn-slide-left" type="submit">
            Realizar compra
          </button>
        </div>
        {orderId ? <span className='order'><span>Id de tu orden:  </span> {orderId}</span> : ''}
      </form>
    </div>
  )
}

export default Chekout