import React from 'react';

import './User.css';

import { UserImg } from '../UserImg/UserImg';
import { UserInfo } from '../UserInfo/UserInfo';

export const User = ({user}) => {

    return (
        <div className= 'd-flex user'>
            <UserImg picture = {user.picture.thumbnail}/>
            <UserInfo name = {user.name.first}  email={user.email} dateOfBirth={user.dob.date} />
            
        </div>

    )

}