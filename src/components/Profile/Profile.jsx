import s from "./Profile.module.css";
import loading from "../../images/loading.gif";
import header from "../../images/header.jpg";
import vk from "../../images/vk-logo.png";
import facebook from "../../images/facebook-logo.png";
import instagram from "../../images/instagram-logo.png";
import twitter from "../../images/twitter-logo.png";
import youtube from "../../images/youtube-logo.png";
import mainLink from "../../images/linkedin-logo.png";
import github from "../../images/github-logo.png";

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
        // console.log('RENDER!', userId, myUserID)

        // console.log(isOwner)
        
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
    }, [history, isAuthorized, match.params.userId]);

    if (!profile) {
        return <img className={s.loading} src={loading} alt="loading..."/>;
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

    const contacts = {
        facebook,
        vk,
        twitter,
        instagram,
        youtube,
        mainLink,   // linkedin
        github
    }

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

                    const contactURL = profile.contacts[key] &&
                        profile.contacts[key].includes('https://') ? profile.contacts[key] : 'https://' + profile.contacts[key]

                    return (
                        profile.contacts[key] && (
                            <a key={key} href={contactURL} target="_blank" rel="noreferrer">
                                <img src={contacts[key]} className={s.logo} alt=""/>
                            </a>
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
        handleSubmit
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
                    debugger
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
                        autoComplete="off"
                        defaultValue={profile.fullName}
                    />
                </div>

                <div className={s.field}>
                    <b> About me: </b>
                    <input
                        className={s.input}
                        {...register("aboutMe")}
                        placeholder="About me:"
                        autoComplete="off"
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
                            autoComplete="off"
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
                        autoComplete="off"
                        defaultValue={profile.status}
                    />
                </div>

                <div className={s.contacts} >
                    <b>Contacts:</b>
                    {Object.keys(profile.contacts).map((key, index) => {
                        return (
                                <div key={index}>
                                    <b>{key}:</b> 
                                    <input className={s.input}
                                            {...register( `contacts.${key}` )}
                                            defaultValue={profile.contacts[key]}
                                            autoComplete="off"
                                    />
                                </div>
                        );
                    })}
                </div>
            </form>

        </div>
    );
};

export default Profile;
