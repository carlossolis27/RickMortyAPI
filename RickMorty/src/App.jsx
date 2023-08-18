import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FavoriteProvider } from './Context/FavoriteContext';
import NavBar from './Components/NavBar';
import WelcomePage from "./Pages/WelcomePage";
import HomePage from "./Pages/HomePage";
import CharacterPage from "./Pages/CharacterPage";
import CharactersFiltrated from "./Pages/CharactersFiltrated";
import FavoritePage from "./Pages/FavoritePage";    
import AboutPage from "./Pages/AboutPage";          
import DeveloperPage from "./Pages/DeveloperPage";  
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Router>
            <div>
                <NavBar />
                <FavoriteProvider>
                    <Switch>
                        <Route path="/" exact>
                            {isAuthenticated ? <Redirect to="/home" /> : <WelcomePage />}
                        </Route>
                        <Route path="/home" component={HomePage} />
                        <Route path="/characters" component={CharacterPage} />
                        <Route path="/CharactersFiltrated" component={CharactersFiltrated} />
                        <Route path="/favorites" component={FavoritePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/developers" component={DeveloperPage} />
                    </Switch>
                </FavoriteProvider>
            </div>
        </Router>
    );
};

export default App;

