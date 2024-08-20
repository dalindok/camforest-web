import React from 'react';
import logo from '../assets/logo.png';
import { TbLanguage } from "react-icons/tb";

function TapBar() {
    return (
        <div className='justify-between flex flex-row seld-center bg-white'>
             <img src={logo} alt="logo page" className='w-8 h-8 rounded-full'/>
             <div className='flex space-x-8 font-bold'>
                <p> Home</p>
                <p className='underline'>Tree</p>
                <p className='underline'>About</p>
            </div>
            <TbLanguage className='w-8 h-8'/>
        </div>
    );
}

export default TapBar;