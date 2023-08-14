import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import './Filters.css';

const Filters = ({ filterName, handleFilter, handleReset, handleStatusChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('name');
    const [selectedCategoryValue, setSelectedCategoryValue] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleNameChange = (event) => {
        const nameValue = event.target.value;
        if (selectedCategory === 'name' && nameValue.trim() === '') {
            handleFilter('name', ''); // Mostrar todos los personajes si se borra el valor
        } else {
            handleFilter(selectedCategory, selectedCategory === 'name' ? nameValue : selectedCategoryValue);
        }
    };

    const categoryValues = {
        species: ['Human', 'Alien', 'Mytholog'],
        gender: ['Male', 'Female', 'Genderless', 'unknown'],
        status: ['Alive', 'Dead', 'unknown'],
    };

    return (
        <form className="filters">
            <TextField
                label="Buscar por nombre"
                variant="outlined"
                onChange={handleNameChange}
                className="input-field"
            />
            <FormControl>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Select
                    value={selectedStatus}
                    onChange={handleStatusChange} // Utilizar la función handleStatusChange pasada como prop
                    inputProps={{
                        name: 'status',
                        id: 'status',
                    }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Alive">Alive</MenuItem>
                    <MenuItem value="Dead">Dead</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
};

Filters.propTypes = {
    handleFilter: PropTypes.func,
    handleReset: PropTypes.func,
    handleStatusChange: PropTypes.func, // Asegúrate de que este prop sea una función
};

export default Filters;
