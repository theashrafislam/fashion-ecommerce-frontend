import React from 'react';
import ActivePage from '../Components/ActivePage';
import CartTable from '../Components/Cart/CartTable';

const Cart = () => {
    return (
        <div className='font-primary'>
            <ActivePage route={'Shopping Cart'} mainRoute={'Home'} />
            <div className='mx-3 lg:mx-0'>
                <div className='max-w-7xl mx-auto my-14 flex flex-col gap-8 items-end'>
                    <div className='w-full'>
                        <CartTable />

                        <div className="border border-gray-300 p-4 rounded-lg">
                            {/* Coupon Section */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                {/* Input & Apply Button */}
                                <div className="flex flex-col lg:flex-row w-full md:w-auto items-center gap-2">
                                    <input
                                        type="text"
                                        className="p-3 border border-gray-300 rounded-md text-base w-full lg:w-max"
                                        placeholder="Enter Your Coupon Code"
                                    />
                                    <button className="px-6 py-3 w-full bg-black text-white font-semibold rounded-md hover:bg-red-500 transition duration-300">
                                        Apply Coupon
                                    </button>
                                </div>

                                {/* Separate Button for Large Screens */}
                                <button className="px-6 py-3 w-full md:w-auto bg-black text-white font-semibold rounded-md hover:bg-red-500 transition duration-300">
                                    Update Cart
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white border border-gray-200 p-6 rounded-md shadow-md w-full lg:w-[35%]">
                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

                        {/* Totals List */}
                        <div className="space-y-3 font-secondary">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600 font-medium">Sub Total</span>
                                <span className="text-black font-semibold">$230</span>
                            </div>

                            <div className="flex justify-between border-b pb-2">
                                <span className="text-gray-600 font-medium">Shipping</span>
                                <span className="text-black font-semibold">$70</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Total</span>
                                <span className="text-red-500 font-bold text-lg">$300</span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button className="px-6 py-3 mt-1 bg-black text-white font-semibold rounded-md hover:bg-red-500 transition duration-300 w-full">
                            Proceed To Checkout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;