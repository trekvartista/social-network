import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <div className={s.main}>
        <div> 
            <h1>Users</h1>
        </div>
        {
            props.users.map( u => <div key={u.id}>
                <div>
                        <div>
                            <img src={u.avatarUrl} className={s.userPhoto}/>
                        </div>
                        
                        <div>
                            {
                                u.isFriend
                                    ? <button onClick={() => props.unfollow(u.id)}> Unfollow </button>
                                    : <button onClick={() => props.follow(u.id)}> Follow </button>
                            }
                        </div>

                        <div> {u.firstName} </div>
                        <div> {u.status} </div>
                </div>
            </div>
            )
        }
        </div>
}

export default Users;