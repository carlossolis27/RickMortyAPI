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
                <button className="close-modal-btn btn " onClick={onCloseModal}>
                    Cerrar
                </button>
                <h2 className='m-3'>{character.name}</h2>
                <img src={character.image} alt={character.name} className='rounded-4 '/>
                <p className='fw-bold text-info text-star fs-5 px-3'>Status: {character.status}</p> 
                <p className='fw-bold text-info text-star fs-5 px-3'>Species: {character.species}</p>
                <p className='fw-bold text-info text-star fs-5 px-3'>Gender: {character.gender}</p>
                <p className='fw-bold text-info text-star fs-5 px-3'>Origin: {character.origin.name}</p>
                {/* Agregar más detalles aquí si es necesario */}
                <button 
                    className={`favorite-button btn btn-secondary m-3 ${isFavorite ? 'favorite' : ''}`} 
                    onClick={handleFavoriteClick} boton >
                    <FaHeart color={isFavorite ? 'red' : 'black'} className='m-1' />    
                    Agregar a Favoritos
                </button>
            </div>
        </div>
    );
};

export default Modal;