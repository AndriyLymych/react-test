import React from "react";
import style from './Profile.module.css';
import Preloader from "../Preloader/Preloader";
import userAvatar from '../../assets/img/user.png'
import Status from "./Status/Status";


const Profile = props => {


    if (props.profile === null) {
        return <Preloader/>
    }

    const setUserPhoto = (e) => {
        if (e.target.files.length) {
            props.setAvatar(e.target.files[0])
        }
    };
    return (

        <div>
            <h1>Profile user number {props.profile.userId}: </h1>

            <div>Status: <Status status={props.status} updateStatus={props.updateStatus}/></div>

            <img src={props.profile.photos.large !== null ? props.profile.photos.large : userAvatar}/>
            <div>
                {props.isOwner && <input type="file" onChange={setUserPhoto}/>}
            </div>
            <div className={style.name}>Nickname: {props.profile.fullName}</div>
            <div className={style.name}>About
                me: {props.profile.aboutMe !== null ? props.profile.aboutMe : ' Nothing to say :('}</div>
            <div className={style.name}>Looking for
                job: {props.profile.lookingForAJobDescription !== null ? props.profile.lookingForAJobDescription : ' Not searching :('}</div>
        </div>
    )
};

export default Profile