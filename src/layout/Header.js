import React from 'react';
import {Link}  from 'react-router-dom';

import images from '../assets/images';

const Header = () => {
    return ( 
        <header className='back-yellow container-fluid text-center'>
            <Link to='/'>
                <img src={images.logoHeader} alt='Logo Comfeco' className='w-25 img-fluid '/>
            </Link>
            
        </header>
     );
}
 
export default Header;