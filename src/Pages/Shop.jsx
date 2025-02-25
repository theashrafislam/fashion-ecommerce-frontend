import React from 'react';
import ActivePage from '../Components/ActivePage';

const Shop = () => {
    return (
        <div className='font-primary'>
            <ActivePage mainRoute={'Home'} route={'Shop'} />

            {/* main section  */}

            <div className='max-w-7xl mx-auto my-14 flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-[25%]'>
                    <h4 className='text-xl text-[#2E2E2E] pb-1 border-b-2 border-[#EBEBEB]'>Search</h4>

                    {/* search feild  */}
                    <div>
                        <input type="text" name="" id="" />
                        <button></button>
                    </div>
                    
                </div>
                <div className='w-full md:w-[75%]'>
                    hello 2
                </div>
            </div>
        </div>
    );
};

export default Shop;