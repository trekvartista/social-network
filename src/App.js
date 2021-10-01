import React from 'react';
import './components/sidebar'
import Sidebar from './components/sidebar';

function App() {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    return (
        <div>
            <h1 style={{marginLeft: 100, color: '#555'}}> a Very useful website... </h1>
            <p>Click on the element below to open the side navigation menu.</p>
            <Sidebar />
            <span className="openbtn" onClick={openNav}> &#9776; Open </span>
        </div>
    );
}

export default App;
