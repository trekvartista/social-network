import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = (props) => {

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }

    return (
        <div>
            <ul id="mySidebar" className={s.sidebar}>
                <a href="javascript:void(0)" className={s.closebtn} onClick={closeNav}>&times;</a>
                <li> <a className={s.active} href="#someForest"> Home </a> </li>
                <li> <a href="#fields"> Tools </a> </li>
                <li> <a href="#SpaceVoid"> About </a> </li>
                <li> <a href="#School"> Contact </a> </li>
                <li> <a href="#Middle_of_nowhere"> Portfolio </a> </li>
            </ul>
        </div>
    );
}

export default Sidebar;