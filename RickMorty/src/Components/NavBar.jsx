import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './NavBar.css';


const NavBar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src= "src/assets/img/logo.png" alt="logo" className="navbar-logo" />
                </Link>
                <button
                    className="navbar-toggler border-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link lyrics-nav" to="/home">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lyrics-nav" to="/characters">
                                Personajes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lyrics-nav" to="/CharactersFiltrated">
                                Busqueda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lyrics-nav" to="/favorites">
                                Favoritos
                            </Link>
                        </li>
                        <li className="nav-item lyrics-nav">
                            <Link className="nav-link" to="/about">
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item lyrics-nav">
                            <Link className="nav-link" to="/developers">
                                Desarrolladores
                            </Link>
                        </li>
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <LogoutButton />
                            </li>
                        ) : (
                            <li className="nav-item">
                                <LoginButton />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;