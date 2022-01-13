import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <ul className={s.main}>
        <div> 
            <h1>Users</h1>
        </div>
        {
            props.users.map( u => <li key={u.id} className={s.list}>
                <img className={s.userPhoto} src={u.avatarUrl} />
                <div className={s.userInfo}></div>
                {u.isFriend
                    ? <button onClick={() => { props.unfollow(u.id) } } className={s.btn}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) } } className={s.btn}>Follow</button>
                }
                </li>
            )
        }
        </ul>
}

export default Users;