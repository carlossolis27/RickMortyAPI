import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import Modal from '../components/Modal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import './CharacterPage.css';
import { useFavoriteContext } from '../context/FavoriteContext';
import Filters from '../components/Filters';



const CharacterPage = () => {
    const { favoriteCharacters, addFavorite } = useFavoriteContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCharacters, setPageCharacters] = useState([]);
    const [charactersPerPage] = useState(20);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const [filterName, setFilterName] = useState('');
    const [filterSpecies, setFilterSpecies] = useState('');
    const [filterType, setFilterType] = useState('');

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
            .then(response => {
                const sortedCharacters = response.data.results.sort((a, b) => a.name.localeCompare(b.name));
                setPageCharacters(sortedCharacters);
            })
            .catch(error => console.error(error));
    }, [currentPage]);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    const handleAddToFavorite = (character) => {
        if (!favoriteCharacters.some(favorite => favorite.id === character.id)) {
            addFavorite(character);
        }
    };

    const handleFilter = (filterName, filterValue) => {
        switch (filterName) {
            case 'name':
                setFilterName(filterValue);
                break;
            case 'species':
                setFilterSpecies(filterValue);
                break;
            case 'type':
                setFilterType(filterValue);
                break;
            default:
                break;
        }
    };

    const filteredCharacters = pageCharacters.filter(character => {
        return character.name.toLowerCase().includes(filterName.toLowerCase())
            && character.species.toLowerCase().includes(filterSpecies.toLowerCase())
            && character.type.toLowerCase().includes(filterType.toLowerCase());
    });

    const handleReset = () => {
        setFilterName('');
        setFilterSpecies('');
        setFilterType('');
    };

    return (
        <div className="container">
            <Filters
                filterName={filterName}
                handleFilter={handleFilter}
                handleReset={handleReset}
            />
            <Grid container spacing={2}>
                {filteredCharacters.map(character => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                        <CharacterCard
                            character={character}
                            onOpenModal={handleOpenModal}
                            isFavorite={favoriteCharacters.some(favorite => favorite.id === character.id)}
                            onAddToFavorite={handleAddToFavorite}
                        />
                    </Grid>
                ))}
            </Grid>
            {selectedCharacter && (
                <Modal
                    character={selectedCharacter}
                    onCloseModal={handleCloseModal}
                    isFavorite={favoriteCharacters.some(favorite => favorite.id === selectedCharacter.id)}
                    onAddToFavorite={handleAddToFavorite}
                />
            )}
            <Stack justifyContent="center" mt={4}>
                <Pagination
                    count={Math.ceil(826 / charactersPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Stack>
        </div>
    );
};

export default CharacterPage;
