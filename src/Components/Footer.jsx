import React from 'react';

const Footer = () => {
    return (
        <section className='font-secondary'>
            {/* first section  */}
            <div className='bg-[#F6F7F7] '>
                <div className='flex justify-between gap-5 max-w-7xl mx-auto py-12'>
                    {/* contact us  */}
                    
                    <div className='w-[30%]'>
                        <h4 className='mb-7 font-primary text-xl text-[#2E2E2E]'>Contact Us</h4>
                        <p className='mb-4 font-secondary text-sm text-[#535353]'>We'd love to hear from you! Feel free to reach out through any of the following methods.</p>
                        <p className='mb-1 font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Address:</strong> 123 Main Street, Anytown, CA 12345, USA.</p>
                        <p className='mb-1 font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Call to:</strong> (012) 800 456 789-987</p>
                        <p className='font-secondary text-sm text-[#535353]'><strong className='text-[#666666]'>Mail to:</strong> theashrafislam@gmail.com</p>
                    </div>
                    {/* information  */}
                    <div className='w-[20%] pl-5'>
                        <h4 className='text-xl font-primary text-[#2E2E2E] mb-7'>Information</h4>
                        <div className='flex flex-col gap-2 text-sm'>
                            <a href="#" className='hover:text-red-500'>About Us</a>
                            <a href="#" className='hover:text-red-500'>Delivery Information</a>
                            <a href="#" className='hover:text-red-500'>Privacy Policy</a>
                            <a href="#" className='hover:text-red-500'>Terms & Conditions</a>
                            <a href="#" className='hover:text-red-500'>Customer Service</a>
                            <a href="#" className='hover:text-red-500'>Return Policy</a>
                        </div>
                    </div>
                    {/* my account  */}
                    <div className='w-[20%] pl-5'>
                        <h4 className='text-xl text-[#2E2E2E] mb-7 font-primary'>My Account</h4>
                        <div className='flex flex-col gap-2 text-sm'>
                            <a href="#" className='hover:text-red-500'>My Account</a>
                            <a href="#" className='hover:text-red-500'>Wishlist</a>
                            <a href="#" className='hover:text-red-500'>Newsletter</a>
                            <a href="#" className='hover:text-red-500'>Help Center</a>
                            <a href="#" className='hover:text-red-500'>Conditin</a>
                            <a href="#" className='hover:text-red-500'>Term Of Use</a>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className='w-[30%]'>
                        <h4 className='text-xl text-[#2E2E2E] mb-7 font-primary'>Newsletter</h4>
                        <p className='mb-4 font-secondary text-sm text-[#535353]'>Get E-mail updates about our latest shop and special offers.</p>
                        <input type="email" name="" id="" placeholder='Enter you email here.' className='border-b-2 w-full mb-5 p-2 text-base focus:outline-none focus:border-b-red-500' /> <br />
                        <button className='text-white font-bold py-2 px-6 rounded-lg bg-red-500'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* second section  */}
            <div className='bg-[#E7E8E8]'>
                <p className='font-primary text-sm text-[#5A5A5A] text-center py-8'>&copy; 2025 <span className='text-[#212121] font-bold'>Destry</span> Made width ❤ by <span className='text-[#212121] font-bold'>ASHRAFUL</span>.</p>
            </div>
        </section>
    );
};

export default Footer;