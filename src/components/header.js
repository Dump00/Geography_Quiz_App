import React from 'react';
import Logo from '../images/planet-earth.png';

const Header = () => {
    return (
        <React.Fragment>
            <div className='row row-1'>
                <img className='img mx-auto mt-5' src={Logo}/>
            </div>
            <div className='row row-2'>
                <h1 className='heading mx-auto'>Geography 101</h1>
            </div>
            <div className='row row-3'>
                <p className='mx-auto'>Test Your Geography Skill</p>
            </div>
        </React.Fragment> 
     );
}
 
export default Header;