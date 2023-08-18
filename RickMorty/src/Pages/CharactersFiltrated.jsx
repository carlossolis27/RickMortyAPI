import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharactersFiltrated() {
    //almacenando los personajes
    const [characters, setCharacters] = useState([]);
    //personajes filtrados
    //const [filteredCharacters, setFilteredCharacters] = useState([]);
    //busqueda
    const [searchValue, setSearhvalue] = useState({
        name: '',
        status: '',
        origin: '',
        species: '',
    });
    //personajes filtrados
    const [filteredCHaracters, setFilteredCharacters] = useState([])

    //efecto para mostrar todos los personajes
    useEffect(() => {
        async function fetchAllCharacters(){
            const allCharacters = [];
            let totalPages = 42;
            for(let page = 0; page <= totalPages; page++ ){
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                allCharacters.push(...response.data.results);   
            }
            setCharacters(allCharacters);
        }
        fetchAllCharacters();
    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearhvalue(prevValues => ({ ...prevValues, [name]: value }));
}

useEffect(() => {
    if (searchValue.name !== '') {
        const filtered = characters.filter(character =>
            character.name.toLowerCase().includes(searchValue.name.toLowerCase()) &&
            character.status.toLowerCase().includes(searchValue.status.toLowerCase()) &&
            character.origin.name.toLowerCase().includes(searchValue.origin.toLowerCase()) &&
            character.species.toLowerCase().includes(searchValue.species.toLowerCase())
        );
        setFilteredCharacters(filtered);
    } else {
        setFilteredCharacters([]);
    }
}, [searchValue,characters]);



return (
    <div>
    <h1 className='text-center text-danger'>Rick and Morty Character Search</h1>
        <form className='row container m-auto'>
            <div className='col-md-6 my-3' >
                <label className='form-label'>Search By Name</label>
            <input className='form-control' type="text" name='name' placeholder="Search by name" onChange={handleInputChange} />
            </div>
            <div className='col-md-6 my-3'>
                <label className='form-label'>Search By Status</label>
            <input className='form-control' type="text" name='status' placeholder='Search by status' onChange={handleInputChange} />
            </div>
            <div className='col-md-6 my-3'>
                <label className='form-label'>Search By Origin</label>
            <input className='form-control' type="text" name='origin' placeholder='Search by origin' onChange={handleInputChange} />
            </div> 
            <div className='col-md-6 my-3'>
                <label className='form-label'>Search By Species</label>
            <input className='form-control' type="text" name='species' placeholder='Search by species' onChange={handleInputChange} />
            </div>
        </form>
    <div className='row container'>
        {filteredCHaracters.map((character) =>{
                return(
                    <div className='col-md-6 container '>
            <div className='row m-3 border border-5 border-success rounded'>
            <div className='col-md-6 p-0'>
                <img src={character.image} alt={character.name} className='img-fluid' style={{height: '25rem'}} />
            </div>
            <div className='col-md-6 bg-dark py-4'>
                <h1 className='text-center text-success'>{character.name}</h1>
                <p className='text-danger text-center'>Estado: <span className='text-secondary'>{character.status}</span></p>
                <p className='text-danger text-center'>Species: <span className='text-secondary'>{character.species}</span></p>
                <p className='text-danger text-center'>Gender: <span className='text-secondary'>{character.gender}</span></p>
                <p className='text-danger text-center'>Origin: <span className='text-secondary'>{character.origin.name}</span></p>
                <p className='text-danger text-center'>Location: <span className='text-secondary'>{character.location.name}</span></p>

            </div>
            </div>
            </div>
                )
        })}
    </div>
</div>
    )

}

export default CharactersFiltrated;
