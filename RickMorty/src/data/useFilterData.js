import { useState } from 'react';

export function useFilterData(characters) {
    const [filterName, setFilterName] = useState('');
    const [filterSpecies, setFilterSpecies] = useState('');
    const [filterType, setFilterType] = useState('');

    const handleFilter = (filter) => {
        if (filter.name) {
            setFilterName(filter.name);
        }
        if (filter.species) {
            setFilterSpecies(filter.species);
        }
        if (filter.type) {
            setFilterType(filter.type);
        }
    };

    const handleReset = () => {
        setFilterName('');
        setFilterSpecies('');
        setFilterType('');
    };

    const filteredCharacters = characters.filter((character) => {
        const nameMatch = character.name.toLowerCase().includes(filterName.toLowerCase());
        const speciesMatch = filterSpecies === '' || character.species.toLowerCase() === filterSpecies.toLowerCase();
        const typeMatch = filterType === '' || character.type.toLowerCase() === filterType.toLowerCase();
        return nameMatch && speciesMatch && typeMatch;
    });

    return {
        filterName,
        filterSpecies,
        filterType,
        handleFilter,
        handleReset,
        filteredCharacters,
    };
}