import React from 'react';

const DiscountBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl mx-auto mb-20'>
            <div className='relative'>
                <div className='absolute top-[40%] left-10'>
                    <p>Up to <span>50%</span> Off</p>
                    <h5>Office Dress</h5>
                    <button>Shop Now</button>
                </div>
                <img src="/card-img.webp" alt="" className='w-full'/>
            </div>
            <div>
                <img src="/card-img-1.webp" alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default DiscountBanner;