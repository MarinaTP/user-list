import React from 'react';
import './CardUserImg.css'
export const CardUserImg =({image})=>{
    return(
     <div className='card-img-top' > <img src={image} className='img-full'/> </div>
    )
}