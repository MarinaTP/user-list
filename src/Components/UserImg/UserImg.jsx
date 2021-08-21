import React from 'react';
import './UserImg.css';


export const UserImg = ({picture}) => {

    return (
       <div> <img src = {picture} className='user-img'/></div>
    )

}
