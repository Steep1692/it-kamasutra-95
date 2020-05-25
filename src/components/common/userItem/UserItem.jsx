import React from "react";

import s from './UserItem.module.css';

import defaultAvatar from '../../../assets/images/profileAvatar.png';
import {NavLink} from "react-router-dom";
import Avatar from "../avatar/Avatar";

const UserItem = ({user, onFollowBtnClick, followBtnDisabled}) => {
    const {
        id,
        name,
        status,
        followed,
        photos,
    } = user;

    const userLink =`/profile/${id}`;
    const photoSmall = photos.small;
    const photoLarge = photos.large;
    const avatar = photoSmall || photoLarge;

    const followBtnText = (followed)
        ? 'Unfollow'
        : 'Follow';
    const _onFollowBtnClick = () => {
        onFollowBtnClick(user);
    };

    return (
        <div className={s.userItem}>
            <div className={s.left}>
                <div className={s.wrapAvatar}>
                    <NavLink to={userLink}>
                        <Avatar image={avatar}/>
                    </NavLink>
                </div>
                <div className={s.actions}>
                    <button disabled={followBtnDisabled} onClick={_onFollowBtnClick}>{followBtnText}</button>
                </div>
            </div>
            <div className={s.right}>
                <NavLink to={userLink}>
                    <span className={s.fullname}>
                        {name}
                    </span>
                </NavLink>
                <div className={s.status}>
                    {status}
                </div>
            </div>
        </div>
    );
};

export default UserItem;