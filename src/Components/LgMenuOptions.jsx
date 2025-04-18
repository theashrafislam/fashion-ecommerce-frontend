import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const LgMenuOptions = () => {
    const { user, userSignOut } = useAuth();
    const nagivate = useNavigate();

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                toast.success("Logged out successfully! See you again! 👋");
                // nagivate('/sign-in')
            })
            .catch(error => {
                toast.error(error)
            })
    };

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

                {user ? <Link onClick={handleLogOut} className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Logout
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link> : <Link to="/sign-in" className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                    Login
                    <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>}

            </ul>
        </div>
    );
};

export default LgMenuOptions;