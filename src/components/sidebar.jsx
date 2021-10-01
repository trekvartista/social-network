import React from 'react';

function Sidebar() {

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

    return (
        <div>
            <ul id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <li> <a className="active" href="#someForest"> Home </a> </li>
                <li> <a href="#fields"> Tools </a> </li>
                <li> <a href="#SpaceVoid"> About </a> </li>
                <li> <a href="#School"> Contact </a> </li>
                <li> <a href="#Middle_of_nowhere"> Portfolio </a> </li>
            </ul>
        </div>
    );
}

export default Sidebar;