import React from 'react';
import TapBar from '../components/Type/TapBar';
import Search from '../components/Type/Search';
import Type from '../components/Type/Type';

function type() {
    return (
        <div>
            <TapBar/>
            <Search/>
            <p className='underline underline-offset-8 font-bold text-3xl text-center m-10'>Type</p>
            <Type/>
        </div>
    );
}

export default type;