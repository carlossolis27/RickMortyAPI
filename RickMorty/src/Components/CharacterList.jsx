import React, { useEffect, useState } from 'react';
import { fetchAllCharacters } from '../API/Api';
import Pagination from '@mui/material/Pagination';
import '../Components/CharacterList.css';

function CharacterList({ filters, currentPage, onPageChange }) {
    const [characters, setCharacters] = useState([]);
    const charactersPerPage = 20;

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllCharacters(); // Usa fetchAllCharacters en lugar de fetchCharacters
            setCharacters(data);
        }
        fetchData();
    }, []);

    if (!characters) {
        return null; // Puedes mostrar un indicador de carga o simplemente no renderizar nada
    }

    const filteredCharacters = characters.filter((character) => {
        const nameMatch = character.name.toLowerCase().includes(filters.name.toLowerCase());
        const statusMatch = filters.status === '' || character.status === filters.status;
        return nameMatch && statusMatch;
    });

    const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
    const startIndex = (currentPage - 1) * charactersPerPage;
    const visibleCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);

    return (
        <div className="character-list">
            {visibleCharacters.map((character) => (
                <div className="character-card" key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <div className="character-name">{character.name}</div>
                    <div className={`character-status ${character.status}`}>
                        <span className={`status-icon ${character.status}`}></span>
                        {character.status}
                    </div>
                    <div className="character-species">{character.species}</div>
                    <div className="character-origin">{character.origin.name}</div>
                    <div className="character-location">{character.location.name}</div>
                </div>
            ))}
            <div className="pagination">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(event, page) => onPageChange(page)}
                    color="primary"
                />
            </div>
        </div>
    );
}

export default CharacterList;
