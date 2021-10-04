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
        <div>
            <Header />
            <Sidebar />
            <Route path='/home' component={HomePage} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />

        </div>
        </BrowserRouter>
    );
}

export default App;
