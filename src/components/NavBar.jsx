import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <div className='contenedor-menu'>
        <div className='contenedor-menu-nombre'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h2>Footshop</h2>
          </Link>
        </div >
          <nav className='lista-menu'>
              <ul>
                <Link to='/catalogo' style={{ textDecoration: 'none' }}>
                  <li><p>Todo el catalogo</p> </li>
                </Link>
                  <Link to={`/catalogo/${"Selecciones nacionales"}`} style={{ textDecoration: 'none' }}>
                    <li>Selecciones nacionales</li>
                  </Link >
                <Link to={`/catalogo/${"Futbol argentino"}`} style={{ textDecoration: 'none' }}>
                  <li>Futbol argentino</li>
                </Link>
                <Link to={`/catalogo/${"Futbol europeo"}`} style={{ textDecoration: 'none' }}>
                  <li>Futbol europeo</li>
                </Link>
              </ul>
            </nav >
          <CartWidget />
      </div >          
    </>
  )
}

export default NavBar

/*
<div className='categorias'>
        <div className='categorias-nombre'>
          <h2>Categorias de las camisetas</h2>
        </div >
        <div className='categorias-lista'>
          <ul>
            <Link to={`/category/${"Selecciones nacionales"}`}>
              <li>Selecciones nacionales</li>
            </Link>
            <Link to={`/category/${"Futbol argentino"}`}>
              <li>Futbol argentino</li>
            </Link>
            <Link to={`/category/${"Futbol europeo"}`}>
              <li>Futbol europeo</li>
            </Link>
          </ul>
        </div>
      </div>
      */