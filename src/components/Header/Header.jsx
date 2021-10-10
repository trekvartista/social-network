import React from "react";
import s from './Header.module.css'

function Header() {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    return (
        <div>
            <h1> a Very useful website... </h1>
            <span className={s.open} onClick={openNav}>
                &#9776; Open
            </span>
        </div>
    );
}

export default Header;
