import React from 'react';
import ActivePage from '../Components/ActivePage';
import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from 'react-icons/cg';
import { TfiMenuAlt } from "react-icons/tfi";
import MenuCategories from '../Components/Shop/MenuCategories';
import Categories from '../Components/Shop/Categories';



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

                    {/* Menu Categories */}
                    <MenuCategories />


                    {/* Categories */}
                    <Categories />

                </div>
                <div className='w-full md:w-[75%]'>
                    {/* header  */}
                    <div className='flex justify-between border-1 items-center border-gray-300 px-4 py-2'>

                        <p className='font-secondary text-sm text-[#212121]'>Showing 1-12 of 39 results</p>

                        <div className='flex gap-3 items-center'>
                            {/* selete by anyone  */}
                            <div className='font-secondary text-sm text-[#212121]'>
                                <select name="" id="" className='px-3 py-2 border-1 border-gray-300 focus:border-red-500 outline-none'>
                                    <option value="Hello" className="hover:bg-transparent">Hello</option>
                                    <option value="Hello 1" className="hover:bg-transparent">Hello 1</option>
                                    <option value="Hello 2">Hello 2</option>
                                    <option value="Hello 3">Hello 3</option>
                                </select>
                            </div>

                            {/* sort by something  */}
                            <div className='font-secondary text-sm text-[#212121]'>
                                <select name="" id="" className='px-3 py-2 border-1 border-gray-300 focus:border-red-500 outline-none'>
                                    <option value="Sort by default">Sort by default</option>
                                    <option value="Sort by price">Sort by price</option>
                                    <option value="Sort by rated">Sort by rated</option>
                                    <option value="Sort by lasted">Sort by lasted</option>
                                </select>
                            </div>

                            {/* how to show cards  */}
                            <div className='flex gap-3 items-center'>
                                <CgMenuGridR className='text-3xl p-1 border-1 border-gray-300' />
                                <TfiMenuAlt className='text-3xl p-1 border-1 border-gray-300' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;