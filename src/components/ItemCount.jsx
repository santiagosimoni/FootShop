import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CartContext'

const ItemCount = ({prod}) => {
  const [contador, setContador]= useState(1)
  const { carrito, setCarrito } = useContext(CarritoContext)
  const [showNotification, setShowNotification] = useState(false);

  function sumar(){
    if(contador < prod.cantidad ? setContador (contador+1): '');
  }


function restar(){
  if(contador <=1 ? contador == 1 : setContador(contador -1));
}

const agregarCarrito = (prod) => {
  const productoExistente = carrito.some((item) => item.id === prod.id);

  if (productoExistente) {
    setCarrito(
      carrito.map((item) =>
        item.id === prod.id
          ? { ...item, stock: item.stock + contador }
          : item
      )
    );
  } else {
    setCarrito([...carrito, { ...prod, stock: contador }]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);
  }
};

return (
  <>
    <div className="contenedor-contador">
      <button onClick={sumar}>+</button>
      <span>{contador}</span>
      <button onClick={restar}>-</button>
      <div className="detail-boton">
        <button onClick={() => agregarCarrito(prod)}>Sumar al carrito!</button>
      </div>
    </div>
    {showNotification && (
      <div className="notificacion">
        {prod.nombre} agregado al carrito!
      </div>
    )}
  </>
);
};

export default ItemCount