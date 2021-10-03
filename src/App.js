import React from 'react';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import OpenButton from './components/OpenButton/OpenButton'

function App() {

    return (
        <div>
            <h1> a Very useful website... </h1>
            <p> Click on the element below to open the side navigation menu. </p>
            <Sidebar />
            <OpenButton />

        </div>
    );
}

export default App;
