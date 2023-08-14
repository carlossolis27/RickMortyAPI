import React, { useState } from 'react';

const CharacterCard = ({ character, onOpenModal }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Función para alternar el estado de favorito del personaje
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={`character-card ${isFavorite ? 'favorite' : ''}`}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            {character.status === 'Dead' && <span>💀</span>}
            {character.status === 'Alive' && <span>🌟</span>}
            {character.species === 'Human' && <span>👤</span>}
            {character.species === 'Alien' && <span>👽</span>}
            <button onClick={() => onOpenModal(character)}>Ver Detalles</button>
        </div>
    );
};

export default CharacterCard;
