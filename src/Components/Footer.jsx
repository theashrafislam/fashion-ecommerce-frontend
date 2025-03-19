import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <section className='font-secondary'>
            {/* first section  */}
            <div className='bg-[#F6F7F7] '>
                <div className='flex flex-col px-3 md:px-3 lg:px-0 md:flex-row justify-between gap-5 max-w-7xl mx-auto py-12'>
                    {/* contact us  */}
                    
                    <div className='md:w-[30%]'>
                        <h4 className='mb-7 font-primary text-xl text-[#2E2E2E]'>Contact Us</h4>
                        <p className='mb-4 font-secondary text-sm text-[#535353]'>We'd love to hear from you! Feel free to reach out through any of the following methods.</p>
                        <p className='mb-1 font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Address:</strong> Mirpur, Dhaka, Bangladesh.</p>
                        <p className='mb-1 font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Call to:</strong> +880 1639568198</p>
                        <p className='font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Mail to:</strong> theashrafislam@gmail.com</p>
                        {/* icons */}
                        <div className='flex items-center gap-3 mt-3'>
                            <a target='_blank' href="https://www.facebook.com/theashrafislam/"><FaFacebookF className='text-xl hover:text-red-500'/></a>
                            <a target='_blank' href="https://www.instagram.com/theashrafislam/"><FaInstagram className='text-xl hover:text-red-500'/></a>
                            <a target='_blank' href="https://www.linkedin.com/in/theashrafislam/"><IoLogoLinkedin className='text-xl hover:text-red-500'/></a>
                            <a target='_blank' href="https://github.com/theashrafislam"><FaGithub className='text-xl hover:text-red-500'/></a>
                        </div>
                    </div>
                    {/* information  */}
                    <div className='md:w-[20%] md:pl-5'>
                        <h4 className='text-xl font-primary text-[#2E2E2E] mb-7'>Information</h4>
                        <div className='flex flex-col gap-2 text-sm text-[#666666]'>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>About Us</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Delivery Information</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Privacy Policy</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Terms & Conditions</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Customer Service</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Return Policy</a>
                        </div>
                    </div>
                    {/* my account  */}
                    <div className='md:w-[20%] md:pl-5'>
                        <h4 className='text-xl text-[#2E2E2E] mb-7 font-primary'>My Account</h4>
                        <div className='flex flex-col gap-2 text-sm text-[#666666]'>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>My Account</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Wishlist</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Newsletter</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Help Center</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Conditin</a>
                            <a href="#" className='hover:text-red-500 hover:translate-x-1 transition duration-300'>Term Of Use</a>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className='md:w-[30%]'>
                        <h4 className='text-xl text-[#2E2E2E] mb-7 font-primary'>Newsletter</h4>
                        <p className='mb-4 font-secondary text-sm text-[#535353]'>Get E-mail updates about our latest shop and special offers.</p>
                        <input type="email" name="" id="" placeholder='Enter you email here.' className='border-b-1 w-full mb-5 p-2 text-base focus:outline-none focus:border-b-red-500 text-[#666666]' /> <br />
                        <button className='text-white font-bold py-2 px-8 hover:bg-black rounded-md bg-red-500'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* second section  */}
            <div className='bg-[#E7E8E8]'>
                <p className='font-primary text-sm text-[#5A5A5A] text-center py-8'>&copy; 2025 <span className='text-[#212121] font-bold'>FashionEra</span> Made width ❤ by <span className='text-[#212121] font-bold'>ASHRAFUL</span>.</p>
            </div>
        </section>
    );
};

export default Footer;