import React from 'react';
import {AiFillStar} from 'react-icons/ai'
import { utils } from '../Util';

const StarMatch = () => {
    const stars=utils.random(1,9);
    return (
        <div className='content-center'>
            <div className=' items-center text-center pb-4'>
                <p className='text-2xl'>
                    Pick 1 or  more numbers that sum to the number of stars
                </p>
                
            </div>
            <div className=' bg-gray-300 rounded-md 
                             border-[1px] border-orange-400
                            md:mx-60  flex flex-row'>
                <div className='h-60 w-full rounded-l-md 
                    bg-orange-500 grid grid-cols-3 p-8  gap-5'
                  >
                    {utils.range(1,stars).map(starId =>
                        <div className='text-center items-center content-center' key={starId}><AiFillStar size={40} /></div>)}
                    
                    
                </div >
                <div className='h-60 w-full rounded-r-md grid grid-cols-3 bg-white gap-5 p-8'>
                    
                    {
                        utils.range(1,9).map(number=> <button  key={number} className='bg-blue-600'>{number}</button>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default StarMatch;