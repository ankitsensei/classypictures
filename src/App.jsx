import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';
import BookNow from './BookNow.jsx';

function App() {
    return (
        <div className='bg-zinc-900 w-full h-full px-10'>
            <Navbar />
            <Home />
            <Gallery />
            <About />
        </div>
    );
}

export default App;
