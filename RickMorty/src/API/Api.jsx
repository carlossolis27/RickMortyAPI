import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

// La función genérica para hacer llamadas a la API
async function fetchData(endpoint, params = {}) {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
            params: { ...params },
        });
        return response.data.results;
    } catch (error) {
        console.error(`Error fetching data from "${endpoint}":`, error);
        return [];
    }
}

export async function getAllCharacters() {
    return fetchData('character');
}

export async function getCharacterById(id) {
    return fetchData(`character/${id}`);
}

export async function getCharactersByPage(page) {
    return fetchData('character', { page });
}

export async function getCharactersByQuery(query) {
    return fetchData('character', { name: query });
}

export async function getCharactersByFilters(name, status) {
    return fetchData('character', { name, status });
}

export async function getEpisodes() {
    return fetchData('episode');
}

export async function getEpisodeById(id) {
    return fetchData(`episode/${id}`);
}

export async function getEpisodesByPage(page) {
    return fetchData('episode', { page });
}

export async function getEpisodesByQuery(query) {
    return fetchData('episode', { name: query });
}

export async function getEpisodesByFilters(name, episode) {
    return fetchData('episode', { name, episode });
}

export async function getLocations() {
    return fetchData('location');
}

export async function getLocationById(id) {
    return fetchData(`location/${id}`);
}



