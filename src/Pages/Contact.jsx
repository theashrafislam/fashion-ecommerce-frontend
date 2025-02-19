import React from 'react';
import ActivePage from '../Components/ActivePage';

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
                </div>
            </div>
        </div>
    );
};

export default Contact;