import React from 'react';
import ActivePage from '../Components/ActivePage';
import WishlistTable from '../Components/Wishlist/WishlistTable';

const Wishlist = () => {
    return (
        <div className='font-primary'>
            <ActivePage route={'Wishlist'} mainRoute={'Home'}/>
            <div className='max-w-7xl mx-auto my-14'>
                <WishlistTable />
            </div>
        </div>
    );
};

export default Wishlist;