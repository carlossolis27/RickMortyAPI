import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
};

export function FavoriteProvider({ children }) {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

    const addFavorite = (character) => {
        setFavoriteCharacters([...favoriteCharacters, character]);
    };

    const removeFavoriteCharacter = (characterId) => {
        setFavoriteCharacters((prevFavorites) =>
            prevFavorites.filter((character) => character.id !== characterId)
        );
    };

    const updateFavoriteCharacterName = (characterId, newName) => {
        setFavoriteCharacters((prevFavorites) =>
            prevFavorites.map((character) =>
                character.id === characterId ? { ...character, name: newName } : character
            )
        );
    };

    const values = {
        favoriteCharacters,
        addFavorite,
        removeFavoriteCharacter,
        updateFavoriteCharacterName,
    };

    return (
        <FavoriteContext.Provider value={values}>
            {children}
        </FavoriteContext.Provider>
    );
}
