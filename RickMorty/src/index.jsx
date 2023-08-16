import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

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