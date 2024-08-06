import React from 'react';

function contact() {
    return (
        <div className='w-full h-72 bg-zinc-800 rounded-xl text-center px-40'>
            <h1 className='text-7xl font-bold py-10'>CONTACT</h1>
            <div className='flex justify-between mx-20'>
                <div className='text-left text-2xl'>
                    <p>ClassyPictures</p>
                    <p>classypictures@gmail.com</p>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <img
                        src='https://www.pngplay.com/wp-content/uploads/5/Instagram-Logo-PNG-Image-PNG.png'
                        alt='insta'
                        className='w-10 h-10'
                    />
                    <img
                        src='https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'
                        alt='facebook'
                        className='w-14 h-14'
                    />
                    <img
                        src='https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png'
                        alt='tiktok'
                        className='w-14 h-14'
                    />
                </div>
            </div>
        </div>
    );
}

export default contact;
