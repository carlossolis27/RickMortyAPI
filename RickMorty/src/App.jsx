import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FavoriteProvider } from './Context/FavoriteContext';
import Navbar from './Components/Navbar';
import WelcomePage from "./Pages/WelcomePage";
import HomePage from "./Pages/HomePage";
import CharacterPage from "./Pages/CharacterPage";  
import FavoritePage from "./Pages/FavoritePage";    
import AboutPage from "./Pages/AboutPage";          
import DeveloperPage from "./Pages/DeveloperPage";  

const App = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <FavoriteProvider>
                <Switch>
                    <Route path="/" exact component={WelcomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/characters" component={CharacterPage} />
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

