import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import loading from "../../images/loading.gif";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg"
import { useHistory } from "react-router-dom";

let Users = (props) => {

    const history = useHistory();

    useEffect(() => {

        props.getUsers(props.currentPage, props.pageSize);
        // console.log('i was \'ere')
    }, []);

    let onPageChange = (pageNum) => {
        props.setCurrentPage(pageNum);
        props.setFirstPage((pageNum - 5 <= 1) ? 1 : pageNum - 5);
        props.setLastPage((pageNum + 5  <= pagesCount) ? pageNum + 5 : pagesCount);
                
        props.getUsers(pageNum, props.pageSize);
    };
    
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

            <div className={s.firstLastPage}><button onClick={() => {onPageChange(1)}}>{'<'}</button></div>
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
        </ul>
    );
};

export default Users;
