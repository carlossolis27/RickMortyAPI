import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className='container'>
        <h1 className='title'>Acerca el Proyecto Rick and Morty</h1>
        <br/>
        <p className='text-center txt'>
            El Proyecto Rick and Morty es una aplicación web que proporciona información sobre los personajes
            y episodios de la famosa serie animada "Rick and Morty". Los usuarios pueden explorar la lista de
            personajes, filtrarlos según diferentes criterios y agregar sus personajes favoritos a una lista
            especial de favoritos.
        </p>
        <br/>
        <p className='text-center txt'>
            La aplicación utiliza la API pública de Rick and Morty para obtener datos actualizados sobre los
            personajes y episodios. Además, se integra con Auth0 para permitir a los usuarios registrarse e
            iniciar sesión para acceder a la funcionalidad completa de la aplicación.
        </p>
        <br/>
        <p className='text-center txt'>
            Nuestro equipo de desarrolladores trabajó arduamente para crear esta aplicación y esperamos que
            los fanáticos de Rick and Morty disfruten explorando el mundo de sus personajes favoritos a través
            de nuestra plataforma.
        </p>
        {/* Enlace a la página DevelopersPage */}
        <Link to="/developers">Conoce a los desarrolladores</Link>
        </div>
    );
};

export default AboutPage;
