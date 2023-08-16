import React, { useState, useEffect } from 'react';
import Filters from '../Components/Filters';
import CharacterList from '../Components/CharacterList';
import { getAllCharacters } from "../API/Api";

const FilterPage = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('all');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        async function fetchCharacters() {
            const charactersData = await getAllCharacters();
            setCharacters(charactersData);
            setFilteredCharacters(charactersData);
        }
        fetchCharacters();
    }, []);

    useEffect(() => {
        const filtered = characters.filter((character) => {
            const nameMatch = name === '' || character.name.toLowerCase().includes(name.toLowerCase());
            const statusMatch = status === 'all' || character.status === status;
            return nameMatch && statusMatch;
        });
    
        setFilteredCharacters(filtered);
    }, [name, status, characters]);

    return (
        <div>
            <h1>Filter Page</h1>
            <Filters 
                onNameChange={handleNameChange} 
                onStatusChange={handleStatusChange} 
                name={name} 
                status={status} 
            />
            <CharacterList characters={filteredCharacters} />
        </div>
    );
};

export default FilterPage;





































