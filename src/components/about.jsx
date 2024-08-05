import React from 'react';
import collage1 from '../assets/pics/collage1.png';

function about() {
    return (
        <div className='flex justify-between mt-20'>
            <div>
                <h1>ClassyPictures</h1>
            </div>
            <img src={collage1} alt='img2' className='rounded-xl' />
        </div>
    );
}

export default about;
