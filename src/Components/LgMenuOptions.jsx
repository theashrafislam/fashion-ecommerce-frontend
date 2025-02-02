import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const LgMenuOptions = () => {
    const { user } = useAuth();
    return (
        <div className='hidden lg:flex'>
            <ul className='flex items-center justify-center gap-8'>
                <Link to="/" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Home
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/shop" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Shop
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/blogs" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Blogs
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/about" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    About
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Contact
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                { !user && <Link to="/sign-in" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Login
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>}
            </ul>
        </div>
    );
};

export default LgMenuOptions;