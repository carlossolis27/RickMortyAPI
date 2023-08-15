import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'
import portal from '../assets/img/rick-and-morty-portal.png';
import rick from '../assets/img/Rick-And-Morty-die.png';
import morty from '../assets/img/morty-die1.png';


const AboutPage = () => {
    return (
        <div className='container my-5 '>
            <div className="container_background ">
                <div ><img src={portal} id='portal'></img></div>
                <div ><img src={rick}  id='rick'></img></div>
                <div ><img src={morty}  id='morty'></img></div>
            </div>
        <h1 className='display-3 titulo mb-5'>Acerca el Proyecto Rick and Morty</h1>

        <p className=' txt px-4 fs-3 justify-text'>
            El Proyecto Rick and Morty es una aplicación web que proporciona información sobre los personajes
            y episodios de la famosa serie animada "Rick and Morty". Los usuarios pueden explorar la lista de
            personajes, filtrarlos según diferentes criterios y agregar sus personajes favoritos a una lista
            especial de favoritos.
        </p>
        <br/>
        <p className=' txt  px-4 fs-3 justify-text'>
            La aplicación utiliza la API pública de Rick and Morty para obtener datos actualizados sobre los
            personajes y episodios. Además, se integra con Auth0 para permitir a los usuarios registrarse e
            iniciar sesión para acceder a la funcionalidad completa de la aplicación.
        </p>
        <br/>
        <p className=' txt px-4 fs-3 justify-text'>
            Nuestro equipo de desarrolladores trabajó arduamente para crear esta aplicación y esperamos que
            los fanáticos de Rick and Morty disfruten explorando el mundo de sus personajes favoritos a través
            de nuestra plataforma.
        </p>
        <div className='mt-5 text-center'>
        {/* Enlace a la página DevelopersPage */}
        <Link to="/developers" >Conoce a los desarrolladores</Link>
        </div>
        </div>
    );
};

export default AboutPage;
