import React from 'react';
import Laptop from '../components/assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'></img>
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-purple-800'>Data Analytics Dashboard</p>
                    <h1 className='py-3 font-bold md:text-4xl sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className='text-purple-500 bg-black my-3 py-3 w-[200px] m-auto rounded-md'>Get Started</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default Analytics;