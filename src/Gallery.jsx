import React from 'react';
// import Wed1 from './assets/pics/wed (1).jpg';
import Wed2 from './assets/pics/wed (2).jpg';
import CP1 from './assets/gallery/CP (1).jpg';
import CP2 from './assets/gallery/CP (2).jpg';
import CP3 from './assets/gallery/CP (3).jpg';
import CP4 from './assets/gallery/CP (4).jpg';
import CP5 from './assets/gallery/CP (5).jpg';
import CP6 from './assets/gallery/CP (6).jpg';
import CP7 from './assets/gallery/CP (7).jpg';
import CP8 from './assets/gallery/CP (8).jpg';
import CP9 from './assets/gallery/CP (9).jpg';
import CP10 from './assets/gallery/CP (10).jpg';
import CP11 from './assets/gallery/CP (11).jpg';
import CP12 from './assets/gallery/CP (12).jpg';
import CP13 from './assets/gallery/CP (13).jpg';
import CP14 from './assets/gallery/CP (14).jpg';
import CP15 from './assets/gallery/CP (15).jpg';
import CP16 from './assets/gallery/CP (16).webp';
import CP17 from './assets/gallery/CP (17).webp';
import CP18 from './assets/gallery/CP (18).webp';
function Gallery() {
    return (
        <div id='gallery' className='flex flex-col w-full gap-20'>
            <img src={Wed2} alt='wed2' className='rounded-[40px] ' />
            <div className='flex wrap gap-8'>
                <img className='galleryImgs' src={CP1} alt='cp1' />
                <img className='galleryImgs' src={CP2} alt='cp2' />
                <img className='galleryImgs' src={CP3} alt='cp3' />
                <img className='galleryImgs' src={CP4} alt='cp4' />
                <img className='galleryImgs' src={CP5} alt='cp5' />
                <img className='galleryImgs' src={CP6} alt='cp6' />
                <img className='galleryImgs' src={CP7} alt='cp7' />
                <img className='galleryImgs' src={CP8} alt='cp8' />
                <img className='galleryImgs' src={CP9} alt='cp9' />
                <img className='galleryImgs' src={CP10} alt='cp10' />
                <img className='galleryImgs' src={CP11} alt='cp11' />
                <img className='galleryImgs' src={CP12} alt='cp12' />
                <img className='galleryImgs' src={CP13} alt='cp13' />
                <img className='galleryImgs' src={CP14} alt='cp14' />
                <img className='galleryImgs' src={CP15} alt='cp15' />
                <img className='galleryImgs' src={CP16} alt='cp16' />
                <img className='galleryImgs' src={CP17} alt='cp17' />
                <img className='galleryImgs' src={CP18} alt='cp18' />
            </div>
        </div>
    );
}

export default Gallery;
