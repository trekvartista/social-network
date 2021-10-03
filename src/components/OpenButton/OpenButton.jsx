import React from "react";
import s from './OpenButton.module.css'

const OpenButton = () => {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    return (
        <div>
            <span className={s.open} onClick={openNav}>
                {" "}
                &#9776; Open{" "}
            </span>
        </div>
    );
};

export default OpenButton;
