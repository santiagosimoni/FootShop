import React from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const db = getFirestore();
    const camisetasCollection = collection(db, "camisetas");
    getDocs(camisetasCollection).then((querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(items);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <ItemDetail prod={product} />
      )}
    </>
  );
}

export default ItemDetailContainer