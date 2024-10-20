import React from 'react';

function Cr() {
    return (
        <>
            <h1 className='text-center font-sans m-2 font-bold text-[30px] underline'>Meet Our</h1>
        <div className='  w-full gap-4 grid lg:grid-cols-2 md:cols-2 sm:cols-1 '>
            <div className='ps-3' >
                
        
                <h1 className='mt-5'>
                S.S. Institute of pharmacy is well equipped with modern tools & facilities which makes us one of the most popular institute in the zone. We feel happy to become a part of one of the most noble profession in the world, it’s because we know we are creating skills in people today & they will serve the world & treat the pain tomorrow.
                </h1>
                <span className='font-bold text-blue-700 '>DIRECTOR :- Mohan kushawaha</span>
            </div>
            <div className=' ' >
            <img className='h-[40vh] img mx-auto m-2 border-2 border-black shadow-2xl' src="mohan.jpeg" alt="" />
            </div>

           </div>
        </>
    );
}

export default Cr;