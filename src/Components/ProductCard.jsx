import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ProductCard = () => {
    const [value, setValue] = React.useState(2);
    return (
        <div className='font-primary p-5 border-1 rounded-md border-[#999999]'>
            <img src="/product-img/1.webp" alt="" />
            <div className='flex items-center justify-center flex-col'>
                <p className='text-sm text-[#212121] mb-3'>Studio Desgin</p>
                <h4 className='text-base text-[#2E2E2E] font-bold mb-2'>Simple Women Fabrics</h4>
                <div className='mb-2'>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                </div>
                <div className='flex items-center gap-2 justify-center font-secondary text-sm mb-3'>
                    <p className='text-[#FF4545] font-bold'>$45.50</p>
                    <p className='text-[#999999]'><del>$48.85</del></p>
                </div>
                <button className='py-2 px-3 border border-1.5 border-[#212121] text-sm rounded-md text-[#212121] hover:bg-red-500 hover:border-0 hover:text-white cursor-pointer'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductCard;