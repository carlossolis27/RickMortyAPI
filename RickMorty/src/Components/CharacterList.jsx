import React from 'react';
import './CharacterList.css';
import noResultsImage from '../assets/img/rick-morty.png';

const CharacterList = ({ characters }) => {
    return (    
        <ul className="character-list">    
            {characters.length > 0 ? (
                characters.map((character) => (    
                    <li key={character.id} className="character-card">
                        <img src={character.image} alt={character.name} />
                        <div>
                            <h3 style={{ color: '#fde803' }}>{character.name}</h3>
                            {character.species === 'Alien' && <p>👽</p>}
                            {character.species === 'Human' && <p>👤</p>}
                            {character.status === 'Dead' && <p>💀</p>}
                            {character.status === 'Alive' && <p>🌟</p>}
                            {character.status === 'unknown' && <p>❓</p>}
                        </div>
                    </li>
                ))
            ) : (
                <div className="no-results">
                    <img src={noResultsImage} alt="No se encontro lo que buscas" />
                    <p>No characters found.</p>
                </div>
            )}
        </ul>
    );
};

export default CharacterList;
