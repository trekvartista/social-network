import s from "./Profile.module.css";
import loading from "../../images/loading.gif";
import header from "../../images/header.jpg";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Profile({ profile, isAuthorized, myUserID, getUserProfile, savePhoto }) {

    const uploadPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const history = useHistory();
    let match = useRouteMatch("/profile/:userId?");
    
    useEffect(() => {
        if (!isAuthorized) {
            history.push('/login')
        }
        let userId = match.params.userId;

        if (!userId) { 
            userId = myUserID
        }
        if (userId) {
            getUserProfile(userId);

        }

        window.scrollTo(0, 0)

    }, [history, match.params.userId, myUserID]);
    
    if (!profile) {
        return <img className={s.loading} src={loading} />;
    }
    
    return (
        <div className={s.main}>
            <div className={s.central}>
                <div className={s.header}>
                    <img
                        id={s.img}
                        src={header}
                        alt=""
                    />
                </div>
                <div className={s.ava}>
                    <img id={s.ava} src={profile.photos.small || defaultUserPhoto} alt="" />
                    <div className={s.uploadPhoto}>
                        {!match.params.userId ? <input type="file"
                            onChange={uploadPhoto}
                            >
                        </input> : null}
                    </div>
                </div>

                <div className={s.info}>
                    <p style={{ fontSize: 25 }}> {profile.fullName} </p>
                    
                    <b> About me: {profile.aboutMe} </b>

                    <div>
                        <b> Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {
                        profile.lookingForAJob &&
                        <div>
                            <b>My professional skills: </b> {profile.lookingForAJobDescription}
                        </div>
                    }

                    <div>
                        <b>Status: {profile.status}</b>
                    </div>

                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                            return profile.contacts[key] && <div><b>{key}:</b> {profile.contacts[key]}</div>
                        })}

                    </div>

                </div>

                <div className={s.posts}>
                    <MyPostsContainer className={s.child} />
                </div>
            </div>

        </div>
    );
}

export default Profile;
