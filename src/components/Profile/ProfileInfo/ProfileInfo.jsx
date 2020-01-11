import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../components/common/Preloader/preloader';
import photoinst from './../../../assets/images/Inst.png';
import styles from "./ProfileInfo.module.css";
import Phot from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
    if(!profile){
        return <Preloader />
    };

    return (
        <div>
            <div className={s.status}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large != null ? profile.photos.large : Phot} className={styles.userPhoto} />
                
                <div >{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.twitter}</div>
                <div><img src={photoinst} className={s.photos}/>{profile.contacts.instagram}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
