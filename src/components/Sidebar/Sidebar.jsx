import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = (p) => {
    function closeNav() {
        // document.getElementById("ddt").setAttribute('aria-expanded', 'false');
        // console.log(document.getElementById("ddt").getAttribute('aria-expanded'));
        document.getElementById("mySidebar").style.width = "0";
    }

    return (
        <div>
            <ul id="mySidebar" className={s.sidebar}>
                <a href="javascript:void(0)" className={s.closebtn} onClick={closeNav}>&times;</a>
                <li>
                    <NavLink activeClassName={s.active} to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <a href="#toolsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Tools </a>
                    <ul className="collapse list-unstyled" id="toolsSubmenu">
                        <li>
                            <NavLink to="/calculator" activeClassName={s.active}> Calculator </NavLink>
                        </li>
                        <li>
                            <NavLink to="#"> something else. </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="#SpaceVoid"> About </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={s.active} to="/portfolio">
                        Portfolio
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
