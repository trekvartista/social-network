import React from "react";
import ava from "../../images/avatarka.png";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile(props) {

    let profileElements = props.state.profileInfo.map((p) => (
        <ProfileInfo
            name={p.name}
            city={p.city}
            dateOfBirth={p.dateOfBirth}
            education={p.education}
        />
    ));
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
                <img id={s.ava} src={ava} width="200px" alt="" />
            </div>

            <div className={s.info}>
                {profileElements}
            </div>

            <div className={s.posts}>
                <MyPosts state={props.state.posts}
                            newText={props.state.newText}
                            dispatch={props.dispatch}
                                className={s.child}/>
            </div>
        </div>
    );
}

export default Profile;
