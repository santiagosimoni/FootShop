import React from 'react'
import { Link, useParams } from 'react-router-dom'
import productos from '../productos.json'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'


const ItemListContainer = () => {
  
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  
  const filtroCategory= productos.filter((e)=> e.categoria === categoria)
  
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
      setProducts(prodFetched)
    }catch(err) {
      console.log(err)
    }
  }


  useEffect(()=>{
    fetchingProd()
  },[categoria])

  return (
    <>
      {categoria ? <ItemList prod={filtroCategory} /> : <ItemList prod={productos} /> }
    </>
  )
}

export default ItemListContainer