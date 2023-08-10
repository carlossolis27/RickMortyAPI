import React, { createContext, useState } from 'react';
const FavoriteContext = createContext({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    favorite: {},
    loading: false,
    error: null,
    });
    const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [favorite, setFavorite] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const addFavorite = (favorite) => {
        setFavorites([...favorites, favorite]);
    };
    const removeFavorite = (id) => {
        const newFavorites = favorites.filter((favorite) => favorite.id !== id);
        setFavorites(newFavorites);
    };
    const values = {
        favorites,
        addFavorite,
        removeFavorite,
        favorite,
        loading,
        error,
    };
    return (
        <FavoriteContext.Provider value={values}>
        {children}
        </FavoriteContext.Provider>
    );
};
