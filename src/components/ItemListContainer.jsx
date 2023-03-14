import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  
  const filtroCategory= products.filter((e)=> e.categoria === categoria)
  
  useEffect(() => {
    const db = getFirestore();
    const camisetasCollection = collection(db, "camisetas");
    getDocs(camisetasCollection).then((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(items);
    });
  }, []);

  return (
    <>
      <h1 className='titulo-camisetas'>Camisetas</h1>
      {categoria ? <ItemList prod={filtroCategory} /> : <ItemList prod={products} /> }
    </>
  )
}

export default ItemListContainer