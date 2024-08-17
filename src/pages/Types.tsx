import React from 'react';
import TapBar from '../components/TapBar';
import Search from '../components/Search';
import Type from '../components/Type';

function type() {
    return (
        <div>
            <TapBar/>
            <Search/>
            <p className='md:underline-offset-8 text-3xl text-center'>Type</p>
            <div className='m-10'>
                <Type/>
                <Type/>
            </div>
            
        </div>
    );
}

export default type;