import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  
  const { categoria } = useParams();

  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  
  const filteredProducts = categoria ? products.filter((e) => e.categoria === categoria) : products;
  
  async function loadProducts() {
  const db = getFirestore();
  const camisetasCollection = collection(db, "camisetas");
  const querySnapshot = await getDocs(camisetasCollection);
  const items = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  setProducts(items);
}

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      loadProducts().then(() => {
        setIsLoading(false);
    });
  }, 1500);
}, []);

  return (
    <>
      <h1 className='titulo-camisetas animate__animated animate__slideInDown' >Camisetas</h1>
      {isLoading ? (
      <p className='loading'>Loading...</p>
      ) : (
      <ItemList prod={filteredProducts} />
)}
    </>
  )
}

export default ItemListContainer