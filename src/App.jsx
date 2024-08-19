import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

function App() {
    return (
        <div className='bg-zinc-900 w-full h-full px-10'>
            <Navbar />
            <Home />
            <About />
        </div>
    );
}

export default App;
