import React from 'react';
import NavBar from './components/navbar';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-screen text-xl px-20'>
            <NavBar />
            <div className='text-8xl font-MuseoModerno font-semibold tracking-tighter mt-32'>
                <h1>YOU MAKE MEMORIES AND</h1>
                <h1>LET US CAPTURE IT FOR YOU</h1>
            </div>
        </div>
    );
}

export default App;
