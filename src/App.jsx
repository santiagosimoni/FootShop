import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Inicio />}/>
          <Route exact path='/catalogo' element={<ItemListContainer />}/>
          <Route exact path='/catalogo/:categoria' element={<ItemListContainer />}/>
          <Route exact path='/detail/:id' element={<ItemDetailContainer />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App