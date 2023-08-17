import React from 'react';
import CharacterCard from '../components/CharacterCard';
import { useFilterData } from "../data/useFilterData";
import Filters from '../Components/Filters';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    const {
        filterName,
        filterSpecies,
        filterType,
        handleFilter,
        handleReset,
        filteredCharacters,
    } = useFilterData(characters);

    // Ordenar los personajes alfabéticamente por nombre
    const sortedCharacters = filteredCharacters.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div>
            <Filters
                filterName={filterName}
                filterSpecies={filterSpecies}
                filterType={filterType}
                handleFilter={handleFilter}
                handleReset={handleReset}
            />

            {filteredCharacters.length === 0 && (
                <p>No hay ningún personaje que coincida con la palabra {filterName || filterSpecies || filterType}</p>
            )}

            <div className="character-list">
                {sortedCharacters.map(character => (
                    <Link to={`/characters/${character.id}`} key={character.id}>
                        <CharacterCard character={character} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;