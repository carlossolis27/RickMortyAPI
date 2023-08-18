import React, { useState } from "react";
import { useFavoriteContext } from '../Context/FavoriteContext';
import './FavoritesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';



const FavoritesPage = () => {
    const { favoriteCharacters, removeFavoriteCharacter, updateFavoriteCharacterName } = useFavoriteContext();
    const [orden, setOrden] = useState("nombre");
    const [editCharacterId, setEditCharacterId] = useState(null);
    const [editedName, setEditedName] = useState("");

    const handleRemoveFavorite = (id) => {
        removeFavoriteCharacter(id);
    };

    const handleEditClick = (id) => {
        const characterToEdit = favoriteCharacters.find((character) => character.id === id);
        if (characterToEdit) {
            setEditCharacterId(id);
            setEditedName(characterToEdit.name);
        }
    };

    const handleSaveEdit = () => {
        updateFavoriteCharacterName(editCharacterId, editedName);
        setEditCharacterId(null);
        setEditedName("");
    };

    const ordenarFavoritos = (a, b) => {
        if (orden === "nombre") {
            return a.name.localeCompare(b.name);
        } else if (orden === "estado") {
            return a.status.localeCompare(b.status);
        } else if (orden === "especie") {
            return a.species.localeCompare(b.species);
        }
    };

    return (
        <div>
            <h1 className="titulo display-1"><center>Favoritos</center></h1>
            <div className="select-container container d-flex justify-content-center align-items-center">
                <span className="select-label">Ordenar por:</span>
                <select className="select" onChange={(e) => setOrden(e.target.value)}>
                    <option value="nombre">Nombre</option>
                    <option value="estado">Estado</option>
                    <option value="especie">Especie</option>
                </select>
            </div>
            <br/>
            <div className="character-grid row gx-3 gy-3">
                {favoriteCharacters.sort(ordenarFavoritos).map((character) => (
                    <div key={character.id} className="character-card ">
                        <img src={character.image} alt={character.name} className="character-image" />
                        <div>
                            {editCharacterId === character.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                        className="edit-input"
                                    />
                                    <button onClick={() => handleSaveEdit()} className="save-button">Guardar</button>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="m-3 text-dark">{character.name}</h3>
                                    <p className='text-light fs-5 px-3'>Status: {character.status}</p>
                                    <p className='text-light fs-5 px-3'>Especie: {character.species}</p>
                                    <center>
                                        <button onClick={() => handleEditClick(character.id)} className="edit-button">
                                            <FontAwesomeIcon icon={faEdit} /> Editar
                                        </button>
                                        <button onClick={() => handleRemoveFavorite(character.id)} className="remove-button">
                                            <FontAwesomeIcon icon={faTrash} /> Eliminar
                                        </button>
                                    </center>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;