import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({product}) => {
  return (
    <>
      <div className='contenedor-detail'>
           <div className='contenedor-ancho-detail'>
              <div className='columna-detail'>
                <div className='contenedor-imagen-detail'>
                  <img src={product.img} alt="imagen camiseta" />
                </div>
                <div className='details-products'> 
                  <h2 className='detail-nombre'>{product.nombre}</h2>
                  <h2 className='detail-desc'><p>{product.desc}</p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio suscipit repellendus ipsa inventore temporibus explicabo rem dolores. Perferendis autem aliquid fugit hic harum tempore molestiae, at iste deleniti ut sed.</h2>
                  <h2 className='detail-precio'>Su valor sin contar envio es de: <p>${product.precio}</p></h2>
                  <h2>Stock del producto: {product.cantidad}</h2>
                  <span> <ItemCount stock={product.cantidad} /> </span>
                  <div className='detail-boton'><button>Sumar al carrito!</button></div >
                </div>
              </div >
           </div>
      </div>
    </>
  )
}

export default ItemDetail