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
                    <li><p>Selecciones nacionales</p></li>
                  </Link >
                <Link to={`/catalogo/${"Futbol argentino"}`} style={{ textDecoration: 'none' }}>
                  <li><p>Futbol argentino</p></li>
                </Link>
                <Link to={`/catalogo/${"Futbol europeo"}`} style={{ textDecoration: 'none' }}>
                  <li><p>Futbol europeo</p></li>
                </Link>
              </ul>
            </nav >
          <CartWidget />
      </div >          
    </>
  )
}

export default NavBar