import React from 'react';
import collage1 from '../assets/pics/collage1.png';

function about() {
    return (
        <div className='flex justify-between mt-20'>
            <div>
                <h1>ClassyPictures</h1>
                <p className='bg-rose-900 p-20 rounded-xl'>
                    At ClassyPictures, we specialize in capturing moments with
                    elegance and sophistication. Our mission is to deliver
                    stunning, high-quality images that tell your unique story.
                    Whether you're celebrating a special occasion, looking to
                    enhance your professional portfolio, or simply want to
                    preserve everyday moments, our expert photographers bring a
                    blend of creativity and professionalism to every shoot. With
                    a keen eye for detail and a commitment to excellence,
                    ClassyPictures ensures that every photograph is a timeless
                    work of art.
                </p>
            </div>
            <img src={collage1} alt='img2' className='rounded-xl w-1/2 p-20' />
        </div>
    );
}

export default about;
