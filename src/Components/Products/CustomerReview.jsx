import React from 'react';
import StarRating from '../Rating/StarRating';

const CustomerReview = () => {
    return (
        <div className='font-secondary'>
            {/* image and text section  */}
            <div className='flex items-start gap-5'>
                <img src="/1.webp" alt="" />
                <div className='border border-gray-300 p-3'>
                    <StarRating />
                    <div>
                        <p className='text-lg text-[#2E2E2E]'>Admin - <span className='text-sm text-[#666666]'>January 19, 2023</span></p>
                        <p className='mt-2 text-[#535353] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra ex, vitae vestibulum arcu. Duis sollicitudin metus sed lorem commodo, eu dapibus libero interdum. Morbi convallis viverra erat, et aliquet orci congue vel. Integer in odio enim. Pellentesque in dignissim leo. Vivamus varius ex sit amet quam tincidunt iaculis.</p>
                    </div>
                </div>
            </div>
            {/* review section  */}
            <div className='my-5'>
                <h6 className='text-lg text-[#2E2E2E]'>Add a review</h6>
                <p className='text-sm py-2 text-[#666666]'>Your email address will not be published. Required fields are marked *</p>
                <p className='text-base text-[#2E2E2E] mb-1'>Your Rating</p>
                <StarRating />
            </div>
            {/* review create box  */}
            <div className='flex items-center justify-between gap-6'>
                {/* name  */}
                <div className='flex-col gap-1 flex w-[50%]'>
                    <label htmlFor="name" className='text-base text-[#666666]'>Name *</label>
                    <input type="text" name="name" id="name" className='p-2 border border-gray-300 focus:border-red-500 focus:outline-none w-full'/>
                </div>
                {/* email  */}
                <div className='flex-col gap-1 flex w-[50%]'>
                    <label htmlFor="name" className='text-base text-[#666666]'>Email *</label>
                    <input type="text" name="email" id="email" className='p-2 border border-gray-300 focus:border-red-500 focus:outline-none w-full'/>
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <label htmlFor="comment" className='text-base text-[#666666]'>Comment</label>
                <textarea name="comment" id="comment" rows={5} cols={5} className='p-2 border border-gray-300 focus:border-red-500 focus:outline-none w-full'></textarea>
            </div>
            <div className='mt-5'>
                <button className='text-base px-8 py-4 uppercase font-primary font-semibold bg-black text-white rounded-lg hover:bg-red-500 hover:text-white'>Submit</button>
            </div>
        </div>
    );
};

export default CustomerReview;