import React from 'react'
import ig from '../imagenes/instagram-original (2).svg'
import fb from '../imagenes/facebook-fill.svg'
import tw from '../imagenes/twitter (1).svg'

const Footer = () => {
  return (
    <>
      <div className='container-footer'>
          <div className='seccion-footer'>
            <h2>Footshop</h2>
            <h5>Web creada con reactJS </h5>
            <section className='redes-footer'>
              <a href="#"><img src={ig} alt="icono instagram" /></a>
              <a href="#"><img src={fb} alt="icono facebook" /></a>
              <a href="#"><img src={tw} alt="icono twitter" /></a>
            </section>
          </div>
      </div>
    </>
  )
}

export default Footer