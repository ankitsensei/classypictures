import React from 'react';
import collage1 from '../assets/pics/collage1.png';

function about() {
    return (
        <div className='flex justify-between items-center my-20  gap-20'>
            <div className=''>
                <h1 className='text-7xl font-bold text-center'>
                    CLASSYPICTURES
                </h1>
                <p className='bg-camerapic bg-cover p-20 rounded-xl h-[500px] opacity-80 text-justify'>
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
            <img src={collage1} alt='img2' className='rounded-xl w-1/3 py-20' />
        </div>
    );
}

export default about;
