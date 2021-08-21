import React from 'react';
export let Button=({forBut})=>{
// const check=()=>{
//  console.log(mode)
//   if(mode === true){
//      mode=false;
//   }
//   else mode=true;
 return(
    <button className='ms-5' button onClick={forBut} >Change mode</button>
 )
}