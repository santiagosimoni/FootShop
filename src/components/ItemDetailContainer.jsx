import React from 'react'
import productos from '../productos.json'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    
  const {id} = useParams()

  const [product, setProduct] = useState([]);


function modProductos (){
    return new Promise ((resolve, reject) =>{
        if(productos.length === 0){
            reject (new Error("No se encontraron productos en este momento"))
        }
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}


async function fetchingProd(){
    try {
      const prodFetched = await modProductos()
      setProduct(prodFetched.find((item)=> item.id === parseInt(id)))
    }catch(err) {
      console.log(err)
    }
  }

useEffect(()=>{
    fetchingProd()
  },[id])

  return (
    <>
      <ItemDetail product={product} />        
    </>
)
}

export default ItemDetailContainer