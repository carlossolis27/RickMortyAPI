import React from 'react';
import CharacterCard from './CharacterCard';
import { useFilterData } from './useFilterData';
import Filters from './Filters';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Importa el componente Grid de Material-UI
import './CharacterList.css'; // Agrega tus estilos personalizados

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
                <Grid container spacing={2}> {/* Utiliza Grid container para organizar las tarjetas */}
                    {sortedCharacters.map(character => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <Link to={`/characters/${character.id}`} key={character.id}>
                                <CharacterCard character={character} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default CharacterList;