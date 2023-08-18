import React, { useState } from 'react';

const CharacterCard = ({ character, onOpenModal }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Función para alternar el estado de favorito del personaje
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`character-card ${isFavorite ? 'favorite' : ''} h-100`} >
            <img src={character.image} alt={character.name} />
            <h3 className='m-3 text-light'>{character.name}</h3>
            {character.status === 'Dead' && <span>💀</span>}
            {character.status === 'Alive' && <span>🌟</span>}
            {character.species === 'Human' && <span>👤</span>}
            {character.species === 'Alien' && <span>👽</span>}
            <button onClick={() => onOpenModal(character)} className='btn btn-light m-1'>Ver Detalles</button>
        </div>
    );
};

export default CharacterCard;
