import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
        <div id="wrapper">
            <Header />
            <Sidebar />
            <div>
                <Route path='/home' render={() => <HomePage />} />
                <Route path='/contact' render={() => <Contact />} />
                <Route path='/portfolio' render={() => <Portfolio />} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
