import s from "./Profile.module.css";
import loading from "../../images/loading.gif";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Profile(props) {

    const uploadPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const history = useHistory();
    let match = useRouteMatch("/profile/:userId?");
    
    useEffect(() => {
        if (!props.isAuthorized) {
            history.push('/login')
        }
        let userId = match.params.userId;

        if (!userId) { 
            userId = props.myUserID
        }
        if (userId) {
            props.getUserProfile(userId);

        }

    }, [history, match.params.userId, props.myUserID]);
    
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
                <img id={s.ava} src={props.profile.photos.small || defaultUserPhoto} alt="" />
            </div>

            <div className={s.info}>
                <p style={{ fontSize: 25 }}> {props.profile.fullName} </p>
                <p> {props.profile.aboutMe} </p>
                {!match.params.userId ? <input type="file"
                    onChange={uploadPhoto}
                    className={s.uploadPhoto}>
                </input> : null}
            </div>

            <div className={s.posts}>
                <MyPostsContainer className={s.child} />
            </div>
        </div>
    );
}

export default Profile;
