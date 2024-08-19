import React from 'react';

function Navbar() {
    return (
        <div className='flex justify-between text-white py-5'>
            <h1 className='text-3xl font-semibold'>CLASSYPICTURES</h1>
            <ul className='flex gap-10 text-xl'>
                <li>
                    <a href='#'>HOME</a>
                </li>
                <li>
                    <a href='#'>ABOUT</a>
                </li>
                <li>
                    <a href='#'>CONTACT</a>
                </li>
                <li>
                    <a href='#'>BOOK NOW</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
