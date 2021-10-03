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
                <li> <a className={s.active} href="/home"> Home </a> </li>
                <li> <a href="#fields"> Tools </a> </li>
                <li> <a href="#SpaceVoid"> About </a> </li>
                <li> <a href="#middleOfNowhere"> Contact </a> </li>
                <li> <a href="/portfolio"> Portfolio </a> </li>
            </ul>
        </div>
    );
}

export default Sidebar;