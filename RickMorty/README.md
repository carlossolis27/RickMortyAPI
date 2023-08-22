# Rick y Morty

#### Grupo #3

### Estructura de datos

```
RickMortyAPI/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── Api/
│   │   └── api.jsx
│   ├── assets/
│   │   ├── img/
│   │   │   ├── rick-and-morty-background.jpg
│   │   │   └── ... (otras imágenes)
│   │   └── ... (otros recursos)
│   ├── components/
│   │   ├── CharacterCard.css
│   │   ├── CharacterDetail.jsx
│   │   ├── CharacterList.css
│   │   ├── CharacterList.jsx
│   │   ├── Filters.css
│   │   ├── Filters.jsx
│   │   ├── LoginButton.jsx
│   │   ├── LogoutButton.jsx
│   │   ├── Modal.css
│   │   ├── Modal.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── Pagination.css
│   │   ├── Pagination.jxs
│   ├── contexts/
│   │   ├── FavoriteContext.jsx
│   │   ├── FavoriteProvider.jsx
│   ├── pages/
│   │   ├── AboutPage.css
│   │   ├── AboutPage.jsx
│   │   ├── CharacterPage.css
│   │   ├── CharacterPage.jsx
│   │   ├── DeveloperPage.css
│   │   ├── DeveloperPage.jsx
│   │   ├── FavoritePage.jsx
│   │   ├── FavoritesPage.css
│   │   ├── FilterPage.jsx
│   │   ├── HomePage.css
│   │   ├── HomePage.jsx
│   │   ├── welcome.css
│   │   ├── WelcomePage.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
<div align="center">
    <img src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47y8hzp27x5wtjrw7bpv10ot6yvmxgk7rws3ra3nig&ep=v1_gifs_related&rid=giphy.gif&ct=g" width="200">

# Proyecto Website API Rick and Morty

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-FINALIZADO-brightgreen">
</p>

Visita mi [sitio web](https://rickandmortyapp1.netlify.app/) para obtener más información.

![Portada](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/169137be-f654-423b-9ea9-d4f03b5dcfeb)

![Auth0](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/30541021-24d6-4eb8-a6d9-51475c563725)

![HomePage](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/e9b75a93-4b86-43e5-85c5-09d51dc0e75e)

![Personajes](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/ac9708d7-9726-4ab8-826d-8d07b6c8a94c)

![Filtrado](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/ebc71932-5644-49db-8c97-0531a5c50fad)

![Responsive 1](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/c6dbfeb5-5751-4680-ab67-54414e11f868)

![Responsive 2](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/c71ec25e-947c-412e-a75a-3e90f8a1091d)

![Responsive 3](https://github.com/carlossolis27/RickMortyAPI/assets/80738178/5f676a38-84f3-4677-b0ee-2ae63a73e094)


   <h4 align="center">Proyecto finalizado</h4>

Este proyecto consiste en la elaboraión de un sitio web utilizando los datos almacenados en la API de Rick and Morty. El objetivo principal es practicar y demostrar habilidades en el desarrollo web utilizando tecnologías como HTML, JavaScript, React (principalmente) y Bootstrap.

## Descripción del proyecto

El proyecto se desarrolló como parte de la asignatura FSJ-18 bajo la tutoría de Kenia Yaneth Paiz Chacón. ...

## Creación del proyecto

El proyecto se desarrolló como parte de la asignatura FSJ-18 bajo la tutoría de Kenia Yaneth Paiz Chacón. La fecha de inicio del proyecto fue el 29 de julio de 2023, y la fecha de entrega fue el 16 de agosto de 2023. Durante el proyecto, se abordaron los siguientes apartados:

1. Página de bienvenida.
2. Página de inicio con inicio de sesion con auth0
3. Página de Personajes, con busqueda y páginacion hacia todos los prsonajes de la serie.
4. Página de Busqueda con filtrado de personajes. clasificados por genero, status, alien y humano.
5. Página de Favoritos, que al entrar en la pagina de Personajes puedes seleccionar los que a ti mas te gustan.
6. Página de Nosotros, hablando acerca del proyecto.
7. Página de Desarrolladores, que brinda información de los encargados del diseño y desarrollo total del sitio web.

<h4 align="center">Creacion del proyecto</h4>

1. npm create vite@latest
2. colocamos el nombre del proyecto
3. seleccionamos el framework (react)
4. seleccionamos el lenguaje de programacion (javascript)
5. entramos a la carpeta del proyecto (cd nombre)
6. instalamos las dependencias (npm install)
npm install => instala las dependencias de node

<h5 align="center">Dependientes utilizadas:</h5>

npm install axios
npm install @auth0/auth0-react
npm install react-router-dom@5.3.0
npm install bootstrap
npm install react-icons
npm install @mui/icons-material

<div align="center">
    <h3>🔨 Lenguajes y Herramientas:</h3>
    <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" width="50" height="50"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="50" height="50"/>
    </div>
</div>

## Colaboradores

| [<img src="https://avatars.githubusercontent.com/u/80738178?s=400&u=bf225aa72af9e37f869241a241e08254bb04d972&v=4" width=115><br><sub>Ramón Nuñez</sub>](https://github.com/ramonsolis11) | [<img src="https://avatars.githubusercontent.com/u/86701019?v=4" width=115><br><sub>Moises Elvir</sub>](https://github.com/MoisesElvir) | [<img src="https://avatars.githubusercontent.com/u/127003959?v=4" width=115><br><sub>Michael Maldonado</sub>](https://github.com/Maikkel43) | [<img src="https://avatars.githubusercontent.com/u/80052500?v=4" width=115><br><sub>Carlos Solis</sub>](https://github.com/carlossolis27) | [<img src="https://avatars.githubusercontent.com/u/132025425?s=400&u=ae584811753231ca3f06b0b8165577468354da00&v=4" width=115><br><sub>Noe Hercules</sub>](https://github.com/NoeHercules) |
| :---: | :---: | :---: | :---: | :---: |

Se agradece la contribución de todos los colaboradores en la finalización exitosa de este proyecto.

