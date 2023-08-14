import { useState, useEffect } from 'react';
import axios from 'axios';

export function useCharacterData() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            setCharacters(response.data.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
        }

        fetchCharacters();
    }, []);

    return {
        characters,
    };
}