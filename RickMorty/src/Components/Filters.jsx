import React from 'react';
import './Filters.css';

const Filters = ({ onNameChange, onStatusChange, name, status }) => {
    return (
        <div className="filters-container">
            <input 
                type="text" 
                placeholder="Search by name" 
                value={name} 
                onChange={onNameChange} 
                className="name-input"
            />
            <select value={status} onChange={onStatusChange} className="status-select">
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
};

export default Filters;

