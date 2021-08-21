import React from 'react';
import './Header.css';
import { Button } from '../Button/Button';

export const Header = ({forBut}) => {
    return (
        <div className='header navbar container-fluid'>
            
            <h1>React Users</h1>
            <Button forBut={forBut}/>


            </div>
    )
}