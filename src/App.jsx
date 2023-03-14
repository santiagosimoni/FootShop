import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import CartElements from './components/CartElements'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import StateComponent from './context/CartContext'

function App() {
  
  return (
    <>
      <StateComponent>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Inicio />}/>
            <Route exact path='/catalogo' element={<ItemListContainer />}/>
            <Route exact path='/catalogo/:categoria' element={<ItemListContainer />}/>
            <Route exact path='/detail/:id' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<CartElements />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </StateComponent>
    </>
  )
}

export default App