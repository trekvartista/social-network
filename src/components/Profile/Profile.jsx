import React from 'react';
import ava from '../../images/avatarka.png'
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <img
                    id={s.img}
                    src="https://wallpapers.com/images/high/dual-monitor-vaporwave-city-3vn0dif6tnz55r2x.jpg"
                    width="1000px"
                    height="200px"
                    alt=""
                />
            </div>
            <div className={s.ava}>
                <img
                    id={s.ava}
                    src={ava}
                    width="150px"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Profile;