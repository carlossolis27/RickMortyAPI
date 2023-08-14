import React from "react";
import { useFavoriteContext } from '../context/FavoriteContext';

const FavoritesPage = () => {
    const { favoriteCharacters, removeFavoriteCharacter } = useFavoriteContext();

    const handleRemoveFavorite = (id) => {
        removeFavoriteCharacter(id); // Usar la función removeFavoriteCharacter
    };

    return (
        <div>
            <h1>Página de Favoritos</h1>
            {favoriteCharacters.map((character) => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Especie: {character.species}</p>
                    <button onClick={() => handleRemoveFavorite(character.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default FavoritesPage;