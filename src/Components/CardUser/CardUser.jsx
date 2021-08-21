import React from 'react';
import './CardUser.css';
import { CardUserImg } from '../CardUserImg/CardUserImg';
import { CardUserInfo } from '../CardUserInfo/CardUserInfo';
export const CardUser =({user})=>{
    return (
      <div className='card' >
      <CardUserImg image={user.picture.large} />
      <CardUserInfo name={user.name.first} email={user.email} dateBirth={user.dob.date} />
     </div>
    )
}