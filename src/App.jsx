import React from 'react';
import NavBar from './components/navbar';
import About from './components/about';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-full text-xl px-20'>
            <NavBar />
            <div className='w-full h-screen rounded-xl text-8xl  bg-wedding1 bg-cover'>
                <div className='font-semibold tracking-tighter flex flex-col justify-center items-center h-screen'>
                    <h1>YOU MAKE MEMORIES AND</h1>
                    <h1>LET US CAPTURE IT FOR YOU</h1>
                </div>
            </div>
            <About />
        </div>
    );
}

export default App;
