import React from "react";
import s from './Header.module.css'

function Header() {

    let openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
    }

    return (
        <div className={s.main}>
            <span className={s.open} onClick={openNav}>
                &#9776; Open
            </span>
            <h2> It's a very-very useful website... </h2>
        </div>
    );
}

export default Header;
