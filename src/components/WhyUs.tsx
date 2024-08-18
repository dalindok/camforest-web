import React from 'react';
import WhyUS from '../assets/WhyUs.jpg'

function WhyUs() {
    return (
        <div className='flex flex-row mt-10 bg-white'>
            <img src={WhyUS} alt="righ side of Why us" className='w-full h-96'/>
            <div className='text-center p-20'>
                <p className='font-bold text-xl'>Why Us?</p>
                <p className='text-lg'>At CamForest we inspire and educate people to appreciate and protect forests. Our informative and interactive platform offers a unique learning experience for nature lovers of all ages. Join us in exploring, understanding, and conserving the world’s forests.</p>
            </div>
        </div>
    );
}

export default WhyUs;