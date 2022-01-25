import React from "react";
import s from './Header.module.css';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {

    useEffect(() => {
        props.authMe();
    }, []);

    let openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
    }

    return (
        <div className={s.main}>
            <span className={s.open} onClick={openNav}>
                &#9776; Open
            </span>
            <div className={s.login}>
                { props.isAuthorized
                    ? <div>
                        <NavLink to='/profile'>{props.login}</NavLink>
                        <button onClick={() => props.logout()}>Log out</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
            <h2> It's a very-very useful website... </h2>
        </div>
    );
}

export default Header;