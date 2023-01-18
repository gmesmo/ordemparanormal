import React from 'react';

import BTN from './Button';

import './Header.css'

const Header = () => {
    return ( 
        <>
            <div className='Header'>
                <div className="Header-Content">
                    <BTN texto={"TEXTO"}/>
                </div>
            </div>
        </>
     );
}
 
export default Header;