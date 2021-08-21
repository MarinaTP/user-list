import React from 'react';
import './CardUserInfo.css'
export let CardUserInfo =({name,email,dateBirth})=>{
  return(
     <div className='card-body' > 
      <p className='card-text name'>{name}</p>
      <p className='card-text' >Email:{email}</p>
      <p className='card-text' >Date of Birth:{dateBirth}</p>
     </div> 
  )
}