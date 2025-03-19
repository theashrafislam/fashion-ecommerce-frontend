import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductsDetailsContent = () => {
    const [value, setValue] = React.useState(3);

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='font-primary'>

            <h3 className='text-2xl font-semibold text-[#2e2e2e] mb-2'>Sample product</h3>

            <p className='flex items-center gap-2'>
                <span className='font-bold text-lg text-[#ff4545]'>$80.00</span>
                <del className='text-lg text-[#666666] mb-2'>$90.00</del>
            </p>

            <Box sx={{ '& > legend': { mt: 2 } }} className={'mb-3'}>
                <Rating name="read-only" value={value} readOnly />
            </Box>

            <p className='text-sm text-[#666666] mb-3'>SKU: 12345</p>

            <p className='text-sm text-[#535353] mb-3 font-medium'>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

            <div className='flex items-center gap-2'>
                <span className='text-base text-[#666666]'>Size:</span>
                <div className='font-bold flex items-center gap-2'>
                    <span className='text-base'>S</span>
                    <span className='text-base'>M</span>
                    <span className='text-base'>L</span>
                    <span className='text-base'>XL</span>
                </div>
            </div>

            {/* quentity  */}
            <div className="flex my-6 items-center border border-gray-400 rounded w-28 h-10">
                {/* Minus Button */}
                <button
                    onClick={decreaseQuantity}
                    className="flex items-center justify-center w-1/3 h-full border-r border-gray-400 hover:bg-gray-100"
                >
                    <AiOutlineMinus size={14} />
                </button>

                {/* Quantity Display */}
                <span className="w-1/3 text-center text-lg font-semibold">{quantity}</span>

                {/* Plus Button */}
                <button
                    onClick={increaseQuantity}
                    className="flex items-center justify-center w-1/3 h-full border-l border-gray-400 hover:bg-gray-100"
                >
                    <AiOutlinePlus size={14} />
                </button>
            </div>

            {/* button  */}
            <div>
                <button className=''>ADD TO CART</button>
                <button className=''>ADD TO WISHLIST</button>
            </div>

        </div>
    );
};

export default ProductsDetailsContent;