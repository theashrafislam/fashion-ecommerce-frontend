import React from 'react';

const DiscountBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl mx-auto mb-20 font-primary group'>
            <div className='relative w-full'>
                <div className='absolute top-1/2 left-8 -translate-y-1/2'>
                    <p className='text-lg text-[#6C6C6C]'>Up to <span className='text-[#FF4545] text-2xl font-semibold'>50%</span> Off</p>
                    <h5 className='text-2xl font-bold text-[#2E2E2E] my-3'>Office Dress</h5>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white font-semibold text-sm rounded-md transition-colors duration-300 group-hover:bg-black">Shop Now</button>
                </div>
                <img src="/card-img.webp" alt="" className='w-full' />
            </div>
            <div className='relative w-full'>
                <div className='absolute top-1/2 left-8 -translate-y-1/2'>
                    <p className='text-lg text-[#6C6C6C]'>Up to <span className='text-[#FF4545] text-2xl font-semibold'>40%</span> Off</p>
                    <h5 className='text-2xl font-bold text-[#2E2E2E] my-3'>All Products</h5>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-white font-semibold text-sm rounded-md transition-colors duration-300 group-hover:bg-black">Shop Now</button>
                </div>
                <img src="/card-img-1.webp" alt="" className='w-full' />
            </div>
        </div>
    );
};

export default DiscountBanner;