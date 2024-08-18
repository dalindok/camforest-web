import React from 'react';
import Cheung_Chab from '../assets/Cheung Chap.jpg'
function Type( ) {
    return (
        <div>
            <div className='flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300'>
                <img src={Cheung_Chab} alt="Tree" className='w-80 h-auto rounded-lg'/>
                <div className='flex flex-col ml-auto pl-48'>
                    <p className='font-bold text-center text-3xl'>Flower</p>
                    <p className='text-xl mt-14 font-light'>Plant's reproductive structure, featuring petals, stamens, and pistils, 
                    essential for seed production and attracting pollinators.</p>
                </div>
            </div>
            <div className='flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300'>
                <img src={Cheung_Chab} alt="Tree" className='w-80 h-auto rounded-lg'/>
                <div className='flex flex-col ml-auto pl-48'>
                    <p className='font-bold text-center text-3xl'>Ivy</p>
                    <p className='text-xl mt-14 font-light'>An evergreen climbing plant with lobed leaves, commonly found growing on trees and forest floors.</p>
                </div>
            </div>
            <div className='flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300'>
                <img src={Cheung_Chab} alt="Tree" className='w-80 h-auto rounded-lg'/>
                <div className='flex flex-col ml-auto pl-48'>
                    <p className='font-bold text-center text-3xl'>Tree</p>
                    <p className='text-xl mt-14 font-light'>A tree is a tall, woody plant with a trunk, branches, and leaves, essential for oxygen and habitats in ecosystems.</p>
                </div>
            </div>
        </div>
    );
}

export default Type;