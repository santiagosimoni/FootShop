import React from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CartContext'

const Chekout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] =useState('')
  const [email,setEmail] = useState('');

  const db = getFirestore()
const { carrito, setCarrito } = useContext(CarritoContext)
const ordersCollection = collection(db, 'orden')

const handleSubmit = (e) => {
  e.preventDefault();
  addDoc(ordersCollection, order)
    .then(({ id }) => {
      setOrderId(id);
      Swal.fire({
        title: '¡Compra realizada!',
        text: `El id de tu orden es ${id}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    })
    .then(() => setCarrito([]))
};

const grandTotal = () => {
  let total = 0;
  carrito.map((i) => {
    total += i.stock * i.precio;
  });
  return total;
};

const order = {
  name,
  email,
  phone,
  items: carrito,
  total: grandTotal()
};

return (
  <div className='form-container-tamano'>
    <form className='form-container' onSubmit={handleSubmit} method='POST'>
      <div className='form-celdas'>
        <label>
          Email
        </label>
        <input onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div className='form-celdas'>
        <label>
          Nombre
        </label>
        <input onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div className='form-celdas'>
        <label>
          Telefono
        </label>
        <input onChange={(e) => setPhone(e.target.value)} required/>
      </div>
      <div>
        <button className="ov-btn-slide-left" type="submit">
          Realizar compra
        </button>
      </div>
      {orderId ? <span className='order'><span>Id de tu orden:  </span> {orderId}</span> : ''}
    </form>
  </div>
);
}

export default Chekout