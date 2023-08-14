import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

const Modal = ({
    character,  
    onCloseModal,
    isFavorite,
    onAddToFavorite,
    onRemoveFromFavorite 
}) => {
    const handleFavoriteClick = () => { 
        if (isFavorite) { 
            onRemoveFromFavorite(character);
        } else {  
            onAddToFavorite(character);
        }
    };

    return ( 
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-modal-btn" onClick={onCloseModal}>
                    Cerrar
                </button>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p> 
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                {/* Agregar más detalles aquí si es necesario */}
                <button
                    className={`favorite-button ${isFavorite ? 'favorite' : ''}`} 
                    onClick={handleFavoriteClick} 
                >
                    <FaHeart color={isFavorite ? 'red' : 'black'} />    
                    Agregar a Favoritos
                </button>
            </div>
        </div>
    );
};

export default Modal;