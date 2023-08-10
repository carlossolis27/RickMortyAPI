import { createContext, useContext, useState } from "react";
const FavoriteContext = createContext();
export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
};
export function FavoriteProvider({ children }) {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    function addFavoriteCharacter(characterId) {
        setFavoriteCharacters((prevFavorites) => [...prevFavorites, characterId]);
    }
    function removeFavoriteCharacter(characterId) {
        setFavoriteCharacters((prevFavorites) =>
            prevFavorites.filter((character) => character !== characterId)
        );
    }
    return (
        <FavoriteContext.Provider
            value={{ favoriteCharacters, addFavoriteCharacter, removeFavoriteCharacter }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}