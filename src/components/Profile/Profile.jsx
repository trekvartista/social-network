import React from "react";
import ava from "../../images/avatarka.png";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {

    let profileElements = props.state.profileInfo.map((p) => (
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

// }

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
                <MyPostsContainer posts={props.state.posts}
                                    newText={props.state.newText}
                                    dispatch={props.dispatch}
                                    className={s.child}/>
            </div>
        </div>
    );
}

export default Profile;
