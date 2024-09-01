import React from 'react';
import TapBar from '../components/components/TapBar';
import Board from '../components/components/Board';
import Article from '../components/components/Article';
import WhyUs from '../components/components/WhyUs';

function HomePage() {
    return (
        <div className='bg-slate-100'>
            <TapBar/>
            <Board/>
            <Article/>
            <WhyUs/>
        </div>
    );
}

export default HomePage;