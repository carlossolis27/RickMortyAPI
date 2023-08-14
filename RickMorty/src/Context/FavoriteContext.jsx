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

    // Eliminar un personaje de la lista de favoritos
    function removeFavoriteCharacter(characterId) {
        setFavoriteCharacters((prevFavorites) =>
            prevFavorites.filter((character) => character !== characterId)
        );
    }

    return (
        <FavoriteContext.Provider value={{ favoriteCharacters, addFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}