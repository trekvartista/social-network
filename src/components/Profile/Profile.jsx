import React from "react";
import ava from "../../images/avatarka.png";
import ProfileInfo from "./ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    // console.log(props.store)
    // debugger
    let state = props.store.getState();
    let profileElements = state.profilePage.profileInfo.map((p) => (
        <ProfileInfo
            name={p.name}
            city={p.city}
            dateOfBirth={p.dateOfBirth}
            education={p.education}
        />
    ));
// const OnAvaSelected = (e) => {
//     if (e.target.files.length) {
//         props.savePhoto(e.target.file[0]);
//     }

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
                <input type={"file"}/>
            </div>

            <div className={s.posts}>
                <MyPostsContainer store={props.store}
                                    className={s.child}/>
            </div>
        </div>
    );
}

export default Profile;
