import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {

    const { signInWithGoogle } = useAuth();
    const nagivate = useNavigate();

    const handleGoogleLogin = async () => {
        await signInWithGoogle()
            .then(() => {
                toast.success("Login successful! Welcome back! 🎉");
                nagivate('/')
            })
            .catch(error => {
                toast.error(error);
            })
    }

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                type="submit"
                className='cursor-pointer w-full flex items-center justify-center gap-3 border-gray-500 border-2 text-base font-semibold py-2 px-6 rounded-lg over:bg-red-600 transition duration-300'
            >
                <FcGoogle className='text-3xl' />
                <span className='text-nowrap'>Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoginButton;