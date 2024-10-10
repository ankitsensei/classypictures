import React from 'react'
import Logo from '../assets/pics/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center mx-20 py-2'>
                <div className='flex items-center gap-14'>
                    <img src={Logo} alt="logo" className='h-14'/>
                    <ul className='flex gap-14'>
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <ul className='flex gap-8 items-center'>
                    <li className='border-2 border-white px-10 py-2 rounded-[20px]'>Join</li>
                    <li className='bg-white border-2 border-white text-black px-10 py-2 rounded-[20px]'>Book</li>
                </ul>
            </div>
        <hr className='h-[1px] bg-white'/>
        </div>
    )
}

export default Navbar