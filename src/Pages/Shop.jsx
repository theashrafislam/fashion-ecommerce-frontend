import React from 'react';
import ActivePage from '../Components/ActivePage';
import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from 'react-icons/cg';
import { TfiMenuAlt } from "react-icons/tfi";

const Shop = () => {
    return (
        <div className='font-primary'>
            <ActivePage mainRoute={'Home'} route={'Shop'} />

            {/* main section  */}

            <div className='max-w-7xl mx-auto my-14 flex flex-col md:flex-row gap-7'>
                <div className='w-full md:w-[25%]'>
                    <h4 className='text-xl text-[#2E2E2E] pb-1 border-b-2 border-[#EBEBEB]'>Search</h4>

                    {/* search feild  */}
                    <div className='mt-5 flex items-center'>
                        <input type="text" name="" id="" placeholder='Search Our Store' className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500" />
                        <button className='bg-black p-3 hover:bg-red-500'><IoSearch className='text-white text-lg font-bold' /></button>
                    </div>

                </div>
                <div className='w-full md:w-[75%]'>
                    {/* header  */}
                    <div className='flex justify-between border-1 items-center border-[#666666] px-4 py-2'>

                        <p>Showing 1-12 of 39 results</p>

                        <div className='flex gap-3 items-center'>
                            {/* selete by anyone  */}
                            <div>
                                <select name="" id="" className='px-3 py-2 border-1 border-gray-300'>
                                    <option value="Hello">Hello</option>
                                    <option value="Hello 1">Hello 1</option>
                                    <option value="Hello 2">Hello 2</option>
                                    <option value="Hello 3">Hello 3</option>
                                </select>
                            </div>

                            {/* sort by something  */}
                            <div>
                                <select name="" id="" className='px-3 py-2 border-1 border-gray-300'>
                                    <option value="Hello">Sort by default</option>
                                    <option value="Hello 1">Sort by price</option>
                                    <option value="Hello 2">Sort by rated</option>
                                    <option value="Hello 3">Sort by lasted</option>
                                </select>
                            </div>

                            {/* how to show cards  */}
                            <div className='flex gap-3 items-center'>
                                <CgMenuGridR className='text-3xl' />
                                <TfiMenuAlt className='text-3xl' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;