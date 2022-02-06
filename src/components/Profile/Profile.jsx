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

function Profile({
    profile,
    isAuthorized,
    userId,
    myUserID,
    getUserProfile,
    savePhoto,
    saveProfile
}) {
    const [editMode, setEditMode] = useState(false);
    const history = useHistory();
    let match = useRouteMatch("/profile/:userId?");
    let URLuserId = parseInt(match.params.userId);

    useEffect(() => {

        // TODO: figure out all this mess
        URLuserId = parseInt(match.params.userId);
        console.log('RENDER!', userId, myUserID)
        
        if (!isAuthorized) {
            history.push("/login");
        }
        
        if (!URLuserId && myUserID) {
            // debugger
            // history.push("/profile")
            // console.log('my from that props', myUserID)
            URLuserId = myUserID;
            // console.log('something wrong happens here')
            // userId = myUserID
        }
        // console.log(userId ==  myUserID, '!!!', userId, myUserID);

        // IMPORTANT: match.params.userId returns STRING, NOT A NUMBER
        if (URLuserId === myUserID) {
            // console.log('WHYYY?!?', userId, myUserID)
            history.push('/profile')
        }

        // because there is request to /profile/NaN (or /profile/null) and this check prevents to send it
        if (URLuserId) {
            // debugger
            getUserProfile(URLuserId);
        }

        window.scrollTo(0, 0);
    }, [history, URLuserId]);

    if (!profile) {
        return <img className={s.loading} src={loading} />;
    }

    return (
        <div className={s.main}>
            <div className={s.central}>
                <div className={s.header}>
                    <img id={s.img} src={header} alt="" />
                </div>

                {editMode ? (
                    <ProfileInfoForm profile={profile} isOwner={!URLuserId} savePhoto={savePhoto}
                        saveProfile={(data) => {saveProfile(data)}} 
                        editModeOff={() => { setEditMode(false); }} />
                ) : (
                    <ProfileInfo
                        profile={profile} isOwner={!URLuserId}
                        editModeOn={() => { setEditMode(true); }} />
                )}

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

            <div className={s.ava}>
                <img
                    id={s.ava}
                    src={profile.photos.small || defaultUserPhoto}
                    alt=""
                />

            </div>

            {isOwner && (
                <div>
                    <button onClick={editModeOn}>Edit</button>
                </div>
            )}

            <b className={s.name}> Full name: {profile.fullName} </b>

            <div className={s.field}>
                <b> About me: </b> {profile.aboutMe}
            </div>

            <div className={s.field}>
                <b> Looking for a job: </b>{" "}
                {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && (
                <div className={s.field}>
                    <b>My professional skills: </b>{" "}
                    {profile.lookingForAJobDescription}
                </div>
            )}

            <div className={s.field}>
                <b>Status: {profile.status}</b>
            </div>

            <div className={s.contacts}>
                <b>Contacts:</b>{" "}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        profile.contacts[key] && (
                            <div>
                                <b>{key}:</b> {profile.contacts[key]}
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

const ProfileInfoForm = ({ profile, isOwner, savePhoto, editModeOff, saveProfile }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // console.log(watch())

    const uploadPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.info}>
            <div className={s.ava}>
                <img
                    id={s.ava}
                    src={profile.photos.small || defaultUserPhoto}
                    alt=""
                />
                <div className={s.uploadPhoto}>
                    {isOwner ? (
                        <input type="file" onChange={uploadPhoto}></input>
                    ) : null}
                </div>
            </div>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                    saveProfile(data);
                    editModeOff();
                })}
            >
                <div>
                    <button>Save</button>
                </div>

                <div className={s.name}>
                    <b> Full name: </b>
                    <input
                        className={s.input}
                        {...register("fullName")}
                        placeholder="Full name"
                        defaultValue={profile.fullName}
                    />
                </div>

                <div className={s.field}>
                    <b> About me: </b>
                    <input
                        className={s.input}
                        {...register("aboutMe")}
                        placeholder="About me:"
                        defaultValue={profile.aboutMe}
                    />
                </div>

                <div className={s.field}>
                    <b>Looking for a job:</b>
                    <input
                        className={s.input}
                        {...register("lookingForAJob")}
                        type="checkbox"
                        // defaultValue={profile.lookingForAJob}
                        style={{ marginLeft: "-100px" }}
                    />
                </div>

                 {/* {profile.lookingForAJob && ( */}

                     <div className={s.field}>
                        <b>My professional skills: </b>{" "}
                        <input className={s.input}
                            {...register("lookingForAJobDescription")}
                            placeholder="Description"
    
                            defaultValue={profile.lookingForAJobDescription}
                        />
                    </div>
                {/* )} */}

                <div className={s.field}>
                    <b>Status:</b>
                    <input
                        className={s.input}
                        {...register("status")}
                        placeholder="Status"
                        
                        defaultValue={profile.status}
                    />
                </div>
            </form>

            <div className={s.contacts}>
                <b>Contacts:</b>{" "}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        profile.contacts[key] && (
                            <div>
                                <b>{key}:</b> {profile.contacts[key]}
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Profile;
