import s from "./Profile.module.css";
import loading from "../../images/loading.gif";
import header from "../../images/header.jpg";
import defaultUserPhoto from "../../images/defaultUserPhoto.jpg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Profile({ profile, isAuthorized, myUserID, getUserProfile, savePhoto }) {

    const [editMode, setEditMode] = useState(false)
    const history = useHistory();
    let match = useRouteMatch("/profile/:userId?");
    let userId = match.params.userId;
    
    useEffect(() => {
        if (!isAuthorized) {
            history.push('/login')
        }

        if (!userId) { 
            userId = myUserID;
        }
        if (userId) {
            getUserProfile(userId);
        }

        window.scrollTo(0, 0)

    }, [history, match.params.userId, myUserID]);

    const uploadPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    
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
                        {!userId ? <input type="file"
                            onChange={uploadPhoto}
                            >
                        </input> : null}
                    </div>
                </div>
                { editMode
                        ? <ProfileInfoForm profile={profile}/>
                        : <ProfileInfo profile={profile} isOwner={!userId} editModeOn={() => {setEditMode(true)}}/>
                }

                <div className={s.posts}>
                    <MyPostsContainer className={s.child} />
                </div>
            </div>

        </div>
    );
}

const ProfileInfo = ({ profile, isOwner, editModeOn }) => {

    return (
        <div className={s.info}>

            { isOwner &&
                <div>
                    <button onClick={editModeOn}>
                        Edit
                    </button>
                </div>
            }

            <b className={s.name}> Full name: {profile.fullName} </b>
            
            <div className={s.field}>    
                <b> About me: </b> {profile.aboutMe}
            </div>

            <div className={s.field}>
                <b> Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div className={s.field}>
                    <b>My professional skills: </b> {profile.lookingForAJobDescription}
                </div>
            }

            <div className={s.field}>
                <b>Status: {profile.status}</b>
            </div>

            <div className={s.contacts}>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return profile.contacts[key] && <div><b>{key}:</b> {profile.contacts[key]}</div>
                })}

            </div>

        </div>
    )
}

const ProfileInfoForm = ({ profile }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className={s.info}>
                <div>
                    <button>
                        Save
                    </button>
                </div>
            <form onSubmit={handleSubmit(data => {console.log(data)})}>
                <div className={s.name}>
                    <b> Full name: </b>
                    <input className={s.input}
                        {...register("name")}
                        placeholder="Full name"
                    />
                </div>

                <div className={s.field}>
                    <b> About me: </b>
                    <input className={s.input}
                        {...register("aboutMe")}
                        placeholder="About me:"
                    />
                </div>

                <div className={s.field}>
                    <b>Looking for a job:</b>
                    <input className={s.input}
                        {...register("lookingForAJob")}
                        type="checkbox"
                        style={{marginLeft: "-100px"}}
                    />
                </div>

                <div className={s.field}>
                    <b>Status:</b>
                    <input className={s.input}
                        {...register("status")}
                        placeholder="Status"
                    />
                </div>
            </form>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b> {profile.lookingForAJobDescription}
                </div>
            }

            <div className={s.contacts}>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return profile.contacts[key] && <div><b>{key}:</b> {profile.contacts[key]}</div>
                })}

            </div>

        </div>
    )
}

export default Profile;
