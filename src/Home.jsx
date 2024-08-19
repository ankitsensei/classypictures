import React from 'react';
import Wed1 from './assets/pics/wed (1).jpg';
import Wed2 from './assets/pics/wed (2).jpg';
import Logo from './assets/pics/logo.png';

function Home() {
    return (
        <div className='text-white pt-24'>
            <img src={Logo} alt='logo' />
            <img src={Wed2} alt='wed2' className='rounded-[40px] ' />
        </div>
    );
}

export default Home;
