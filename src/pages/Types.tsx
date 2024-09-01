import React from 'react';
import TapBar from '../components/components/TapBar';
import Search from '../components/components/Search';
import Type from '../components/components/Type';

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