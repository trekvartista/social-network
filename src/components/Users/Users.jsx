import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';


class Users extends React.Component {
    
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
            // console.log('i was \'ere')
    }

    onPageChange = (pageNum) => {

        this.props.setCurrentPage(pageNum)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.totalUsersCount}`)
            .then(response => {
                // console.log(this.props.currentPage)  // store will return the changed number of page only AFTER this 'onClick' is handled
            });
    }
    
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 0; i < pagesCount; ++i) {
            pages.push (i + 1);
        }

        return <ul className={s.main}>
            <div> 
                <h1>Users</h1>
            </div>

            <div>
                {
                    pages.map( p => {
                        return <span
                            id={s.pages}
                            className={this.props.currentPage === p && s.selectedPage } 
                            onClick={(e) => this.onPageChange(p)}
                        >  {p} </span>
                    } )
                }
            </div>
            {
                this.props.users.map( u => <li key={u.id} className={s.list}>
                    <img className={s.userPhoto} src={ u.photos.small != null ? u.photos.small : "https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg" } alt=""/>
                    <div className={s.userInfo}>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                    </div>
                    {u.isFriend
                        ? <button onClick={() => { this.props.unfollow(u.id) } } className={s.btn}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) } } className={s.btn}>Follow</button>
                    }
                    </li>
                )
            }
        </ul>
    }
}

export default Users;