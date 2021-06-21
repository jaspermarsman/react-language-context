import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import LanguageProvider from "./contexts/LanguageProvider";



function App() {
    return (
        <LanguageProvider>
        <Router>
            <Header
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about-us">
                    <AboutUs />
                </Route>
                <Route path="/all-plants">
                    <AllPlants />
                </Route>
            </Switch>
        </Router>
        </LanguageProvider>
    );
}

export default App;