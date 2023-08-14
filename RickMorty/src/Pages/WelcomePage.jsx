import React from 'react'
import LoginButton from '../Components/LoginButton'
import '../Pages/welcome.css'

export default function WelcomePage() {
  return (
    <div className='background contenedor'>
      <div className='row container m-auto caja text-light' >
      <div className='introduction col-md-8 col-lg-6'>
          <h2 className='title text-center'>Welcome!</h2>
          <h3 className='text-center'>Rick and Morty API</h3>
          <p>
          ¿Eres un fanático acérrimo de algún personaje en particular? No hay problema, 
          puedes buscar y guardar tus personajes favoritos para acceder fácilmente a su información en el futuro. ¡Así que prepárate para 
          embarcarte en una aventura interdimensional mientras disfrutas de la colección más completa de 
          personajes de Rick and Morty en línea!.
          </p>
      </div>
      <div className='col-md-4 login col-lg-6 p-5'>
        <div className='text-center'>
          <h1 className='title text-center title'>!Registrate y Disfruta¡</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <LoginButton />
        </div>
      </div>
      </div>
    </div>
  )
}
