import React from 'react';
import ActivePage from '../Components/ActivePage';
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='font-primary'>
            <ActivePage mainRoute={'Home'} route={'Contact Us'} />
            <div className='max-w-7xl mx-auto flex flex-col justify-center md:flex-row gap-6 my-16'>
                {/* Get In Touch */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='pb-4 border-b-2 border-[rgb(235,235,235)] text-3xl text-[#2E2E2E]'>Get In Touch</h1>
                    <form
                        className='my-10 space-y-6'
                    >
                        {/* name and email input  */}
                        <div className='flex flex-col md:flex-row gap-3 items-center'>
                            <div className='w-full'>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter you name"
                                    className="mt-1 block w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                            <div className='w-full'>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter you email"
                                    className="mt-1 block w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                        </div>
                        {/* subject input feild  */}
                        <div className='w-full'>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter you subject"
                                className="mt-1 block w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            />
                        </div>
                        <textarea
                            rows="8"
                            placeholder="Enter your message"
                            className="mt-1 block w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        >

                        </textarea>
                        <button
                            className='w-full md:w-fit px-8 md:px-10 py-3 hover:bg-red-500 text-white bg-black hover:text-white font-semibold font-primary mt-5 md:mt-7'
                        >
                            Send A Message
                        </button>
                    </form>
                </div>

                {/* Contact Inf */}
                <div className='w-full md:w-[30%]'>
                    <h1 className='pb-4 border-b-2 border-[rgb(235,235,235)] text-3xl text-[#2E2E2E]'>Contact Info</h1>
                    <div className='my-10 space-y-6'>
                        {/* Postal Address */}
                        <div className='flex gap-4'>
                            <FaLocationDot className='text-2xl mt-1' />
                            <div>
                                <h3 className='text-lg text-[#212121] mb-1'>Postal Address</h3>
                                <p className='font-secondary text-sm text-[#666666]'>PO Box 123456, Street/Road <br />
                                    Country-State</p>
                            </div>
                        </div>
                        {/* Contact Us Anytime */}
                        <div className='flex gap-4'>
                            <FaMobileAlt className='text-2xl mt-1' />
                            <div>
                                <h3 className='text-lg text-[#212121] mb-1'>Contact Us Anytime</h3>
                                <p className='font-secondary text-sm text-[#666666]'>Mobile: 012 345 678 <br />
                                    Fax: 123 456 789</p>
                            </div>
                        </div>
                        {/* Support Overall  */}
                        <div className='flex gap-4'>
                            <MdEmail className='text-2xl mt-1' />
                            <div>
                                <h3 className='text-lg text-[#212121] mb-1'>Support Overall</h3>
                                <p className='font-secondary text-sm text-[#666666]'>Support24/7@example.com <br />
                                    <span className='hover:text-red-500 hover:cursor-pointer'>info@example.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;