import React from 'react';
import Cheung_Chab from '../assets/Cheung Chap.jpg'
function Type( ) {
    return (
        <div className='flex flex-row justify-between bg-white shadow-ml p-10'>
             <img src={Cheung_Chab} alt="Tree" className='w-8 h-8 rounded-full'/>
             <div className='flex flex-col'>
                <p className='font-bold'>Cheung Chap</p>
                <p>Feel free to contact us any time.</p>
                <p>We will get back to you as soon as we can.</p>
             </div>
        </div>
    );
}

export default Type;