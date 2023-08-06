import React from 'react';      
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Navbar from './components/Navbar';
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import DevelopersPage from "./pages/DevelopersPage";

const App = () => {

    return (
        <Router> 
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={WelcomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/characters" component={CharacterPage} />
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/developers" component={DevelopersPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

