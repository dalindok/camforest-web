import React from 'react';
import TapBar from '../components/TapBar';
import Board from '../components/Board';
import Article from '../components/Article';
import WhyUs from '../components/WhyUs';

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