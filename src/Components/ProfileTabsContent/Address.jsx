import React from 'react';
import { FaEdit } from 'react-icons/fa';

const Address = () => {
    return (
        <div>
            <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Billing Address</h1>
            <div className="text-[#666666] font-secondary text-base space-y-6">
                {/* name  */}
                <h4 className='font-semibold text-lg'>Ashraful Islam</h4>

                {/* address  */}
                <p>1234 Market ##, Suite 900 <br />
                    Lorem Ipsum, ## 12345</p>

                {/* mob  */}
                <p>Mobile: (123) 123-456789</p>
                <button className='w-full md:w-fit px-10 py-3 bg-black text-white hover:bg-red-500 flex items-center gap-2 hover:text-white font-semibold font-primary'><FaEdit className='text-xl'/>Edit Address</button>
            </div>
        </div>
    );
};

export default Address;