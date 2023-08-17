import React, { useState } from 'react';


function Filters({ onFilterChange }) {
    const [nameFilter, setNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const handleNameFilterChange = (event) => {
        const newNameFilter = event.target.value;
        setNameFilter(newNameFilter);
        onFilterChange({ name: newNameFilter, status: statusFilter });
    };

    const handleStatusFilterChange = (event) => {
        const newStatusFilter = event.target.value;
        setStatusFilter((prevStatus) => {
            onFilterChange({ name: nameFilter, status: newStatusFilter });
            return newStatusFilter;
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={nameFilter}
                onChange={handleNameFilterChange}
            />
            <select value={statusFilter} onChange={handleStatusFilterChange}>
                <option value="">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
}

export default Filters;