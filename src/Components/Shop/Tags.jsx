import React from 'react';


const tags = ['Men', 'Women', 'Fashion', 'Watch', 'Handmade', 'Lather', 'Farics'];

const Tags = () => {
    return (
        <div className='font-primary mt-8'>
            <div>
                <h4 className='text-xl text-[#2E2E2E] pb-1 mb-3 border-b-2 border-[#EBEBEB]'>Tags</h4>
                <div className='grid grid-cols-3 items-center gap-2'>
                    {tags.map((tag, index) => (
                        <h4 key={index} className='px-3 py-2 rounded-full border-1 border-gray-300 text-center cursor-pointer hover:bg-red-500 hover:text-white text-sm transition-colors duration-300'>{tag}</h4>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tags;