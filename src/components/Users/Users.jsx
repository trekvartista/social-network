import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import loading from "../../images/loading.gif";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg"
import { useHistory } from "react-router-dom";

let Users = (props) => {
    
    const history = useHistory();
    const userRef = useRef();
    const filterRef = useRef();

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize, props.filter);
    }, []);
    
    let setPages = (pageNum = 1, pagesCount) => {
        props.setCurrentPage(pageNum);
        props.setFirstPage((pageNum - 3 <= 1) ? 1 : pageNum - 3);
        props.setLastPage((pageNum + 3  <= pagesCount) ? pageNum + 3 : (pagesCount < 1 ? 1 : pagesCount) );
    }
    
    let onPageChange = (pageNum) => {
        setPages(pageNum, pagesCount)
        props.getUsers(pageNum, props.pageSize, props.filter);
    };

    let onFilterChange = () => {
        const searchValue = userRef.current.value
        const filterValue = filterRef.current.value

        props.setFilter({ searchValue, filterValue })

        if (!props.isAuthorized && filterValue !== 'All') {
            history.push('/login')
        }
    }

    let onSearchClick = async () => {
        const data = await props.getUsers(1, props.pageSize, props.filter)

        let pagesCount = Math.ceil(data.totalCount / props.pageSize)
        setPages(1, pagesCount)
    }
    
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
    let pages = [];
    
    for (let i = props.firstPage; i <= props.lastPage; ++i) {
        pages.push(i);
    }
    
    if (props.isLoading) {
        return <img className={s.loading} src={loading} alt="loading..."/>;
    }

    return (
        <ul className={s.main}>
            <div>
                <h1>Users</h1>
            </div>

            <div className={s.searchField}>
                <input type="search" ref={userRef} value={props.filter.searchValue} placeholder='Search...' onChange={() => { onFilterChange() }}/>
            </div>

            <div className={s.searchFilter}>
                <select ref={filterRef} value={props.filter.filterValue} onChange={() => { onFilterChange() }}> 
                    <option> All </option>
                    <option> Followed </option>
                    <option> Not followed </option>
                </select>
            </div>

            <div className={s.searchButton}>
                <button onClick={() => onSearchClick()}>Find</button>
            </div>


            <div style={{clear: "left"}}/>


            <div className={s.firstLastPage}><button onClick={() => { onPageChange(1) }}>{'<'}</button></div>
            <div className={s.firstLastPage}>
                <button
                    onClick={() =>
                        {onPageChange(props.currentPage - (props.lastPage - props.firstPage) > 1
                            ? props.currentPage - (props.lastPage - props.firstPage)
                            : 1 ); console.log(props.firstPage, props.currentPage, props.lastPage) }}
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
            <div className={s.firstLastPage}><button onClick={() => {onPageChange( pagesCount < 1 ? 1 : pagesCount )}}>{'>'}</button></div>
            

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
