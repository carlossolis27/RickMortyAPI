import React from 'react';  // Importar React
import ReactDOM from 'react-dom';   // Importar ReactDOM
import { Auth0Provider } from '@auth0/auth0-react'; // Importar Auth0Provider
import { BrowserRouter } from 'react-router-dom';   // Importar BrowserRouter
import App from './App.jsx';    // Importar el componente App

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-hajdrkfgepsads5l.us.auth0.com"
        clientId="Axqv2GgrHpzmTdwjgTrWcVL9r7wqBfhV"
        redirectUri={window.location.origin}
        onRedirectCallback={() => {
            // Optional: Implement your own logic here
        }}
        authorizationParams={{
            redirect_uri: window.location.origin // Actualiza el redirect_uri aquí
        }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
);