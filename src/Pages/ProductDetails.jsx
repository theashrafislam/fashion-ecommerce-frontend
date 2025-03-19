import React from 'react';
import { useParams } from 'react-router-dom';
import ActivePage from '../Components/ActivePage';
import ProductDetailsImage from '../Components/Products/ProductDetailsImage';
import ProductsDetailsContent from '../Components/Products/ProductsDetailsContent';
import ProductDetailsTabs from '../Components/Products/ProductDetailsTabs';

const ProductDetails = () => {
    const { id } = useParams();
    // console.log(id);
    return (
        <div>
            <ActivePage route={'Product Details'} mainRoute={'Home'} />
            <div className='mx-3 lg:mx-0'>
                {/* main section  */}
                <div className='max-w-7xl mx-auto my-24 flex flex-col items-start justify-between lg:flex-row gap-7'>
                    <div className='w-full lg:w-[40%]'>
                        <ProductDetailsImage />
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <ProductsDetailsContent />
                    </div>
                </div>
            </div>

            <div className='mx-3 lg:mx-0'>
                {/* tabs  */}
                <div className='max-w-7xl mx-auto my-10 font-secondary'>
                    <ProductDetailsTabs />
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;