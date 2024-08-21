import React from 'react';
import Wed1 from './assets/pics/wed (1).jpg';
import Wed2 from './assets/pics/wed (2).jpg';
function Gallery() {
    return (
        <div id='gallery' className='flex flex-col w-full '>
            <img src={Wed2} alt='wed2' className='rounded-[40px] ' />
        </div>
    );
}

export default Gallery;
