import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import OpenButton from './components/OpenButton/OpenButton'
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
        <div>
            <h1> a Very useful website... </h1>
            <p> Click on the element below to open the side navigation menu. </p>
            <Sidebar />
            <OpenButton />
            <div>
                <Route path='/home' component={HomePage} />
                <Route path='/portfolio' component={Portfolio} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
