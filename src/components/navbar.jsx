import React from 'react';

function Navbar() {
    const navLinks = {
        Home: '/',
        About: '/about',
        Contact: '/contact',
        'Book Now': '/book',
    };

    return (
        <div className='flex justify-between text-white py-5'>
            <h1 className='text-3xl font-semibold'>CLASSYPICTURES</h1>
            <ul className='flex gap-10 text-xl'>
                {Object.entries(navLinks).map(([key, value], index) => (
                    <li key={index}>
                        <a href={value}>{key}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
