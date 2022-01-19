import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import loading from "../../images/loading.gif";
import { getUsers } from "../../api/api";

let Users = (props) => {

    useEffect(() => {
        props.switchLoading(true);

        getUsers(props.currentPage, props.pageSize)
            .then((response) => {
                // debugger
                props.switchLoading(false);
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });


        // console.log('i was \'ere')
    }, []);

    let onPageChange = (pageNum) => {
        props.switchLoading(true);
        props.setCurrentPage(pageNum);
        getUsers(pageNum, props.pageSize)
            .then((response) => {
                props.switchLoading(false);
                props.setUsers(response.data.items);
                // console.log(this.props.currentPage)  // store will return the changed number of page only AFTER this 'onClick' is handled
            });
    };

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );

    let pages = [];

    for (let i = 0; i < pagesCount; ++i) {
        pages.push(i + 1);
    }

    if (props.isLoading) {
        return <img className={s.loading} src={loading} />;
    }

    return (
        <ul className={s.main}>
            <div>
                <h1>Users</h1>
            </div>

            <div>
                {pages.map((p) => {
                    return (
                        <span id={s.pages}
                            className={ props.currentPage === p && s.selectedPage }
                            onClick={(e) => onPageChange(p)} >
                            {" "} {p} {" "}
                        </span>
                    );
                })}
            </div>
            {props.users.map((u) => (
                <li key={u.id} className={s.list}>
                    <NavLink to={"/profile/" + u.id}>
                        <img
                            className={s.userPhoto}
                            src={
                                u.photos.small != null
                                    ? u.photos.small
                                    : "https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg"
                            }
                            alt=""
                        />
                    </NavLink>
                    <div className={s.userInfo}>
                        <span>{u.name}</span>
                        <br />
                        <span>{u.status}</span>
                    </div>
                    {u.isFriend
                        ? <button
                            onClick={() => {props.unfollow(u.id); }}
                            className={s.btn}>
                            Unfollow
                        </button>
                        : <button
                            onClick={() => {props.follow(u.id); }}
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
