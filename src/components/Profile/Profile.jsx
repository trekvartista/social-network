import React from "react";
import axios from "axios";
import loading from "../../images/loading.gif";
import ProfileInfo from "./ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

function Profile(props) {
    // const OnAvaSelected = (e) => {
    //     if (e.target.files.length) {
    //         props.savePhoto(e.target.file[0]);
    //     }
    let match = useRouteMatch("/profile/:userId?");
    let userId = match.params.userId;

    useEffect(() => {


        if (!userId) { userId = 21912 }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                // debugger
                props.setUserProfile(response.data);
                // console.log(response.data)
            });
    }, [userId]);

    if (!props.profile) {
        return <img className={s.loading} src={loading} />;
    }

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
                <img id={s.ava} src={props.profile.photos.small} alt="" />
            </div>

            <div className={s.info}>
                <p style={{ fontSize: 25 }}> {props.profile.fullName} </p>
                <p> {props.profile.aboutMe} </p>
            </div>

            <div className={s.posts}>
                <MyPostsContainer className={s.child} />
            </div>
        </div>
    );
}

export default Profile;
