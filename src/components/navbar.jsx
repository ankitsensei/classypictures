import React from 'react';

function navbar() {
    return (
        <div className='flex justify-between py-5'>
            <p>ClassyPictures</p>
            <div className='flex gap-10'>
                {['Home', 'About', 'Contact'].map((item, index) => (
                    <p className='hover:underline' key={index}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default navbar;
