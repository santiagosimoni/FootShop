import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import abrir from '../imagenes/menu.png'
import cerrar from '../imagenes/cerrar.png'

const NavBar = () => {


  const[ver, setVer]= useState('lista-menu visible')
  const [clase, setClase] =useState('lista-menu')


  return (
    <>
      <div className='contenedor-menu'>
        <div className='contenedor-menu-nombre'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h2>Footshop</h2>
          </Link>
        </div >
        <img src={abrir} alt="" className='abrir-menu' onClick={()=>{setClase(ver)}} />
          <nav className={clase} onClick={()=>{setClase('lista-menu')}}>
            <img src={cerrar} alt="" className='cerrar-menu' />
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