import React from 'react';

const Categories = () => {
    return (
        <div className='font-primary'>
            <div>
                <h4 className='text-xl text-[#2E2E2E] pb-1 mb-3 border-b-2 border-[#EBEBEB]'>Categories</h4>
                
                {/* Categories */}
                <p className='cursor-pointer mb-1 hover:text-red-500 transition-colors duration-300 text-sm'>All Product</p>
                <p className='cursor-pointer mb-1 hover:text-red-500 transition-colors duration-300 text-sm'>Best Seller (5)</p>
                <p className='cursor-pointer mb-1 hover:text-red-500 transition-colors duration-300 text-sm'>Featured (4)</p>
                <p className='cursor-pointer hover:text-red-500 transition-colors duration-300 text-sm'>New Products (6)</p>
            </div>
        </div>
    );
};

export default Categories;