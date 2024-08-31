import React from 'react';
import Dp from './assets/pics/dp.jpeg';
function About() {
    return (
        <div className='text-white py-40 font-sans' id='about'>
            <div className='flex justify-center gap-20 '>
                <div className='w-2/3 flex flex-col justify-center items-left  gap-10 px-20'>
                    <h1 className='text-9xl font-semibold text-sky-600'>
                        Intro
                    </h1>
                    <div className='text-2xl flex flex-col gap-10 text-balance'>
                        <p>
                            I’m <b>Abhishek Dikshit</b>, a <u>photographer</u>{' '}
                            and <u>videographer</u> from Chakradharpur, India,
                            specializing in <u>cinematic videography</u>.
                        </p>
                        <p>
                            I capture life’s most important moments — whether
                            weddings, birthdays, or special events — with a
                            focus on creating visually stunning and emotionally
                            rich memories.
                        </p>
                        <p>
                            My goal is to deliver a professional and
                            personalized experience that turns your stories into
                            timeless visuals.
                        </p>
                    </div>
                </div>
                <div className='w-1/3'>
                    <img
                        src={Dp}
                        alt='dp'
                        className='w-[400px] h-[600px] flex justify-center items-center rounded-2xl'
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
