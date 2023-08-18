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
    <h1 className='text-center titulo m-3'>Filtrado de personajes</h1>
        <div className='container d-flex justify-content-center align-items-center'>
        <form className='row m-1 '>
            <div className='col-md-5 m-3 ' >
                <label className='form-label text-white'>Nombre</label>
            <input className='form-control' type="text" name='name' placeholder="Buscar por nombre" onChange={handleInputChange} />
            </div>
            <div className='col-md-5 m-3'>
                <label className='form-label text-white'>Estado</label>
            <input className='form-control' type="text" name='status' placeholder='Ej: Alive, Dead o unknown ' onChange={handleInputChange} />
            </div>
            <div className='col-md-5 m-3'>
                <label className='form-label text-white'>Origen</label>
            <input className='form-control' type="text" name='origin' placeholder='Ej: Earth, dimension o unknown' onChange={handleInputChange} />
            </div> 
            <div className='col-md-5 m-3'>
                <label className='form-label text-white'>Especie</label>
            <input className='form-control' type="text" name='species' placeholder='Ej: Human, Alien, Robot, animal o unknown' onChange={handleInputChange} />
            </div>
        </form>
        </div>
    <div className='row '>
        {filteredCHaracters.map((character) =>{
                return(
                    <div className='col-md-12 col-lg-4 container '>
                        <div className='row m-3 border border-5 border-success rounded'>
                        <div className='col-md-6 p-0'>
                            <img src={character.image} alt={character.name} className='img-fluid' style={{height: '25rem'}} />
                        </div>
                        <div className='col-md-6 bg-white  '>
                            <h2 className='text-center text-success py-3 fw-bold fs-2'>{character.name}</h2>
                            <p className='text-success text-star fs-5 px-3'>Estado: <span className='text-secondary'>{character.status}</span></p>
                            <p className='text-success text-star fs-5 px-3'>Species: <span className='text-secondary'>{character.species}</span></p>
                            <p className='text-success text-star fs-5 px-3'>Gender: <span className='text-secondary'>{character.gender}</span></p>
                            <p className='text-success text-star fs-5 px-3'>Origin: <span className='text-secondary'>{character.origin.name}</span></p>
                            <p className='text-success text-star fs-5 px-3'>Location: <span className='text-secondary'>{character.location.name}</span></p>
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
