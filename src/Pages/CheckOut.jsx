import React, { useState } from "react";
import ActivePage from '../Components/ActivePage';


const countries = ["Bangladesh", "USA", "UK", "Canada", "Australia", "Germany", "France", "Japan"];

const CheckOut = () => {

    const [selectedCountry, setSelectedCountry] = useState("");

    return (
        <div>
            <ActivePage route={'Checkout'} mainRoute={'Home'} />
            <div className="mx-3 lg:mx-0">
                <div className='max-w-7xl mx-auto my-14 flex flex-col lg:flex-row items-start gap-7 font-secondary'>
                    {/* Billing Details */}
                    <div className='w-full lg:w-[60%]'>
                        <h4 className='font-primary text-2xl font-semibold pb-2 border-b-2 border-gray-300 mb-6 text-[#2E2E2E]'>Billing Details</h4>

                        <form>

                            {/* Country  */}
                            <label className="block text-sm text-[#212121] mb-1">Country *</label>
                            <select
                                className="w-full p-3 border border-gray-300"
                                required
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option value="" disabled>Choose a country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>

                            {/* First Name & Last Name */}
                            <div className="flex gap-6 my-6">
                                {/* First Name */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">First Name *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-sm text-[#212121] mb-1">Company Name *</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300"
                                    required
                                />
                            </div>

                            {/* Address & Town/City */}
                            <div className="flex flex-col gap-4 my-6">
                                {/* Address */}
                                <div>
                                    <label className="block text-sm text-[#212121] mb-1">Address *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                                {/* Town/City */}
                                <div>
                                    <label className="block text-sm text-[#212121] mb-1">Town / City *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* State/County & Postcode/Zip - flex-row */}
                            <div className="flex gap-6">
                                {/* State/County */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">State / County *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                                {/* Postcode/Zip */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">Postcode / Zip *</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email & Phone - flex-row */}
                            <div className="flex gap-6 my-6">
                                {/* Email */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                                {/* Phone */}
                                <div className="w-1/2">
                                    <label className="block text-sm text-[#212121] mb-1">Phone *</label>
                                    <input
                                        type="tel"
                                        className="w-full p-3 border border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Order Notes */}
                            <div className="mb-4">
                                <label className="block text-sm text-[#212121] mb-1">Order Notes (Optional)</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded"
                                    placeholder="Enter any special instructions for your order"
                                    rows="4"
                                ></textarea>
                            </div>

                        </form>

                    </div>

                    {/* your order card  */}
                    <div className='w-full lg:w-[40%] p-6 border border-gray-300'>
                        <h4 className='font-primary text-2xl font-semibold pb-2 border-b-2 border-gray-300 mb-6 text-[#2E2E2E]'>Your order</h4>

                        <div className='flex items-center justify-between py-4 border-b border-gray-300'>
                            <p className='uppercase text-[#212121] text-base font-semibold'>Product</p>
                            <p className='uppercase text-[#212121] text-base font-semibold'>Total</p>
                        </div>

                        <div className='flex items-center justify-between text-[#666666] text-base py-3 border-b border-gray-300'>
                            <p>Some Winter Collections <span className='font-bold'>× 2</span></p>
                            <p>$ 145.00</p>
                        </div>

                        <div className='flex items-center justify-between text-[#666666] text-base py-3 border-b border-gray-300'>
                            <p>Small Scale Style <span className='font-bold'>× 4</span></p>
                            <p>$ 204.00</p>
                        </div>

                        <div className='flex items-center justify-between font-bold text-[#212121] text-base py-3 border-b border-gray-300'>
                            <p>Cart Subtotal</p>
                            <p>$ 349.00</p>
                        </div>

                        <div className='flex items-center justify-between font-bold text-[#212121] text-base py-3'>
                            <p>Order Total</p>
                            <p className='text-xl'>$ 349.00</p>
                        </div>

                        <div className='w-full'>
                            <button className='px-8 w-full mt-2 py-3 hover:bg-red-500 text-white bg-black hover:text-white font-semibold font-primary'>Place Order</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;