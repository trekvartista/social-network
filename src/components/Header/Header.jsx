import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import * as axios from 'axios';

function Header(props) {

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true})
            .then((response) => {
                debugger
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    props.authUser(userId, email, login);
                }
            });
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
                    ? <NavLink to='/profile'>{props.login}</NavLink>
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
            <h2> It's a very-very useful website... </h2>
        </div>
    );
}

export default Header;
