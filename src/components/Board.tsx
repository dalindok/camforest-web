import React from 'react';
import leaf from '../assets/leaf.jpg';
import logo from '../assets/logo.png';

function Board() {
    return (
        <div className='relative'>
            <img src={leaf} alt="board" className='w-full h-full object-cover' />
            <img 
                src={logo} 
                alt="logo" 
                className='absolute top-10 right-72 w-80 h-auto rounded-full' 
            />
            <div className='absolute top-96 right-32 p-10'>
                <p className='text-6xl font-bold italic'>CamForest</p>
                <p className='text-5xl m-10 font-light'>We care about nature.</p>
            </div>
        </div>
    );
}

export default Board;
