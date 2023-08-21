import React from 'react';
import { WhatsApp, GitHub, LinkedIn,  } from '@mui/icons-material';
import './DeveloperPage.css';
import portal from '../assets/img/rick-and-morty-portal.png';
import rick from '../assets/img/Rick-And-Morty-die.png';
import morty from '../assets/img/morty-die1.png';
import fotoDeveloper1 from '../assets/img/foto_ramon.jpg';
import fotoDeveloper2 from '../assets/img/foto_carlos.jpg';
import fotoDeveloper3 from '../assets/img/foto_mike.jpg';
import fotoDeveloper4 from '../assets/img/foto_moises.jpg';
import fotoDeveloper5 from '../assets/img/foto_1.jpg';

const DevelopersPage = () => {
    
const developers = [
    {
        id: 1,
        name: 'Ramón Núñez',
        photo: fotoDeveloper1,
        email: 'ramonsolis11@gmail.com',
        whatsapp: '+50498171316',
        github: 'https://github.com/ramonsolis11',
        linkedin:'https://www.linkedin.com/in/ramonsolis-dev/',
        description: 'Desarrollador full stack jr, encargado del diseño y desarrollo de la página de PERSONAJES y del filtrado de estos en el sitio web.',
    },
    {
        id: 2,
        name: 'Carlos Solis',
        photo: fotoDeveloper2,
        email: 'carlos.solis2706@gmail.com',
        whatsapp: '+50378870461',
        github: 'https://github.com/carlossolis27',
        linkedin: 'http://linkedin.com/in/carlos-solis-4a5516274/',
        description: 'Desarrollador full stack jr, encargado del diseño y desarrollo de la página de INICIO, NOSOTROS y del filtrado de personajes en el sitio web.',
    },
    {
        id: 3,
        name: 'Michael Maldonado',
        photo: fotoDeveloper3,
        email: 'maikkel43@gmail.com',
        whatsapp: '+50377559993',
        github: 'https://github.com/Maikkel43',
        linkedin: 'https://www.linkedin.com/in/michael-rivas-683782271',
        description: 'Desarrollador full stack jr, encargado del diseño y desarrollo de la página de BIENVENIDOS y del filtrado de personajes en el sitio web.',
    },
    {
        id: 4,
        name: 'Moisés Elvir',
        photo: fotoDeveloper4,
        email: 'melvir536@gmail.com',
        whatsapp: '+50489550565',
        github: 'https://github.com/MoisesElvir',
        linkedin: 'https://www.linkedin.com/in/mois%C3%A9s-elvir-0a2862181/',
        description: 'Desarrollador full stack jr, encargado del diseño y desarrollo de la página de FAVORITOS del sitio web.',
    },
    {
        id: 5,
        name: 'Noé Hércules',
        photo: fotoDeveloper5,
        email: 'nohercules777@gmail.com',
        whatsapp: '+50373949637',
        github: 'https://github.com/NoeHercules',
        linkedin: 'https://www.linkedin.com/in/no%C3%A9-hercules-388779139/',
        description: 'Desarrollador full stack jr, encargado del diseño y desarrollo de la página de DESARROLLADORES, NOSOTROS y definicion de algunos estilos del sitio web.',
    },
];

return (
    <div className='container body-developer'>
        <div className="container_background">
            <div ><img src={portal} id='portal'></img></div>
            <div ><img src={rick}  id='rick'></img></div>
            <div ><img src={morty}  id='morty'></img></div>
        </div>
        <h1 className='m-3 display-2 titulo '>Desarrolladores</h1>
        <div className='row'>
            {developers.map((developer) => (
                <div key={developer.id} className='col-lg-4 col-md-6 col-sm-12  '>
                    <div className='card mb-4 cards text-white  cover_card container-cards'>
                        <img src={developer.photo} alt={developer.name} className='card-img-top img-fluid hover-effect' />
                        <div className='card-body '>
                            <h2 className='card-title text-center m-3'>{developer.name}</h2>
                            <div className='card-overlay card  cards text-white  cover_card border-radius '>
                            <p className='card-text text-justify mb-3'>{developer.description}</p>
                            <p>Email: {developer.email}</p>
                            <div className="justify-content-around mt-3">
                                <a href={developer.github} target="_blank" rel="noopener noreferrer">
                                    <GitHub /> {/* GitHub Icon */}
                                </a>
                                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedIn /> {/* LinkedIn Icon */}
                                </a>
                                <a href={`https://wa.me/${developer.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                    <WhatsApp /> {/* WhatsApp Icon */}
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default DevelopersPage;




