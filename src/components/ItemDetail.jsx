import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CarritoContext } from '../context/CartContext';

const ItemDetail = ({prod}) => {

  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const camisetaId = doc(db, "camisetas", `${id}`);

    getDoc(camisetaId).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.id ,snapshot.data());
      } else {
        console.log("No se encontro el documento");
      }
    });
  }, []);

  const camFilter = prod.filter((prods) => prods.id === id);

  return camFilter.map((prods) =>{
    return(
      <div className='contenedor-detail' key={prods.id}>
            <div className='contenedor-ancho-detail'>
             <div className='columna-detail'>
               <div className='contenedor-imagen-detail'>
                 <img src={prods.img} alt="imagen camiseta" />
               </div>
               <div className='details-products'> 
                 <h2 className='detail-nombre'>{prods.nombre}</h2>
                 <h2 className='detail-desc'><p>{prods.desc}</p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio suscipit repellendus ipsa inventore temporibus explicabo rem dolores. Perferendis autem aliquid fugit hic harum tempore molestiae, at iste deleniti ut sed.</h2>
                 <h2 className='detail-precio'>Su valor sin contar envio es de: <p>${prods.precio}</p></h2>
                 <h2>Stock del producto: {prods.cantidad}</h2>
                 <span> <ItemCount 
                 prod = {prods}/> 
                 </span>
               </div>
             </div >
            </div>
          </div>
    )
  })
}

export default ItemDetail