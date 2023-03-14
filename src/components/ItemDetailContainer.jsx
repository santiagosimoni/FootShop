import React from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);



  
  useEffect(() => {
    const db = getFirestore();
    const camisetasCollection = collection(db, "camisetas");
    getDocs(camisetasCollection).then((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(items);
    });
  }, []);



  return (
    <>
      <ItemDetail prod={product} />        
    </>
)
}

export default ItemDetailContainer