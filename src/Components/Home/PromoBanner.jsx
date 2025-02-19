import React from 'react';

const PromoBanner = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20 group overflow-hidden'>
            <div className='mx-3 md:mx-0'>
                <img src="/big-banner.webp" alt="" className='w-full transition-transform duration-300 hover:scale-110' />
            </div>
        </div>
    );
};

export default PromoBanner;