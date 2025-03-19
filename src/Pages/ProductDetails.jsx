import React from 'react';
import { useParams } from 'react-router-dom';
import ActivePage from '../Components/ActivePage';

const ProductDetails = () => {
    const { id } = useParams();
    // console.log(id);
    return (
        <div>
            <ActivePage route={'Product Details'} mainRoute={'Home'} />
            {/* main section  */}
            <div className='max-w-7xl mx-auto my-14 flex flex-col items-start justify-between md:flex-row gap-5'>
                <div className='w-full lg:w-[40%]'>
                    hello i am image
                </div>
                <div className='w-full lg:w-[60%]'>
                    hello i am details
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;