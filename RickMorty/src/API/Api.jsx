import axios from 'axios';

export async function fetchAllCharacters() {
    try {
        const characters = [];
        let page = 1;

        while (page <= 42) {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            characters.push(...response.data.results);
            page++;
        }

        return characters;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

