import React from 'react';

const ServiceFeatures = () => {
    return (
        <div className='max-w-7xl mx-auto mb-24'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div className='flex items-center lg:justify-center justify-around gap-2 group'>
                        <img src="/icons/1.webp" alt="" className='transition-transform duration-300 group-hover:scale-110'/>
                        <div>
                            <h4 className='font-medium text-lg text-[#2E2E2E] font-primary uppercase'>Free shipping</h4>
                            <p className='text-sm font-secondary text-[#2E2E2E]'>Free shipping on all order</p>
                        </div>
                    </div>
                    <div className='flex items-center lg:justify-center justify-around gap-2 group'>
                        <img src="/icons/2.webp" alt="" className='transition-transform duration-300 group-hover:scale-110'/>
                        <div>
                            <h4 className='font-medium text-lg text-[#2E2E2E] font-primary uppercase'>support 24/7</h4>
                            <p className='text-sm font-secondary text-[#2E2E2E]'>Support 24 hours a day</p>
                        </div>
                    </div>
                    <div className='flex items-center lg:justify-center justify-around gap-2 group'>
                        <img src="/icons/3.webp" alt="" className='transition-transform duration-300 group-hover:scale-110'/>
                        <div>
                            <h4 className='font-medium text-lg text-[#2E2E2E] font-primary uppercase'>Moeny return</h4>
                            <p className='text-sm font-secondary text-[#2E2E2E]'>Back guarantee under 5 days</p>
                        </div>
                    </div>
                    <div className='flex items-center lg:justify-center justify-around gap-2 group'>
                        <img src="/icons/4.webp" alt="" className='transition-transform duration-300 group-hover:scale-110'/>
                        <div>
                            <h4 className='font-medium text-lg text-[#2E2E2E] font-primary uppercase'>Order discount</h4>
                            <p className='text-sm font-secondary text-[#2E2E2E]'>Onevery order over $150</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;