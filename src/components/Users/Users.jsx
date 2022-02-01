import React, { useState } from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import loading from "../../images/loading.gif";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg"
import { useHistory } from "react-router-dom";

let Users = (props) => {
    
    const [activeUsers, setActiveUsers] = useState(props.users)
    const history = useHistory();
    const userRef = useRef();

    useEffect(() => {

        props.getUsers(props.currentPage, props.pageSize);
        // console.log('i was \'ere')
    }, []);

    let onPageChange = (pageNum) => {
        props.setCurrentPage(pageNum);
        props.setFirstPage((pageNum - 3 <= 1) ? 1 : pageNum - 3);
        props.setLastPage((pageNum + 3  <= pagesCount) ? pageNum + 3 : pagesCount);
                
        props.getUsers(pageNum, props.pageSize);
    };

    let onSearchClick = () => {

        // debugger
        const filteredUsers = props.users.filter( u => {
            u.name.includes(userRef.current.value);
            // console.log(u.name.includes(userRef.current.value))
        })
        setActiveUsers(filteredUsers)
    }
    
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
    let pages = [];
    
    for (let i = props.firstPage; i <= props.lastPage; ++i) {
        pages.push(i);
        // console.log(firstRenderedPage, props.currentPage, lastRenderedPage)
    }

    if (props.isLoading) {
        return <img className={s.loading} src={loading} />;
    }

    return (
        <ul className={s.main}>
            <div>
                <h1>Users</h1>
            </div>
            <div className={s.searchField}>
                <input type="search" ref={userRef}/>
            </div>
            <div className={s.searchButton}>
                <button onClick={() => onSearchClick()}>Search</button>
            </div>
            <div style={{clear: "left"}}/>

            <div className={s.firstLastPage}><button onClick={() => {onPageChange(1)}}>{'<'}</button></div>
            <div className={s.firstLastPage}>
                <button
                    onClick={() =>
                        {onPageChange(props.currentPage - (props.lastPage - props.firstPage) > 1
                            ? props.currentPage - (props.lastPage - props.firstPage)
                            : 1 )}}
                > Prev </button>
            </div>
            <div>
                {pages.map((p) => {
                    return (
                        <span id={s.pages} key={p}
                        className={ props.currentPage === p ? s.selectedPage : s.page}
                        onClick={(e) => onPageChange(p)} >
                            {" "} {p} {" "}
                        </span>
                    );
                })}
            </div>
            <div className={s.firstLastPage}>
                <button
                    onClick={() =>
                        {   
                            onPageChange(props.currentPage + (props.lastPage - props.firstPage) <= pagesCount
                                ? props.currentPage + (props.lastPage - props.firstPage)
                                : props.pagesCount )}}
                > Next </button>
            </div>
            <div className={s.firstLastPage}><button onClick={() => {onPageChange(pagesCount)}}>{'>'}</button></div>
            
            {props.users.map((u) => (
                <li key={u.id} className={s.list}>
                    <NavLink to={"/profile/" + u.id}>
                        <img
                            className={s.userPhoto}
                            src={
                                u.photos.small != null
                                    ? u.photos.small
                                    : defaultUserPhoto
                            }
                            alt=""
                        />
                    </NavLink>
                    <div className={s.userInfo}>
                        <span>{u.name}</span>
                        <br />
                        <span>{u.status}</span>
                    </div>
                    {u.followed
                        ? <button
                            disabled={props.isFollowing.some(id => id === u.id)}
                            onClick={() => {props.unfollow(u.id)}}
                            className={s.btn}>
                            Unfollow
                        </button>
                        : <button
                            disabled={props.isFollowing.some(id => id === u.id)}
                            onClick={() => {
                                
                                if (!props.isAuthorized) {
                                    history.push('/login')
                                    return
                                }
                                props.follow(u.id);
                            
                            }}
                            className={s.btn}>
                            Follow
                        </button>
                    }
                </li>
            ))}
            <div style={{height: 25}}></div>
        </ul>
    );
};

export default Users;
