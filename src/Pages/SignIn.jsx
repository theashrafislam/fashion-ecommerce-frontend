import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

  

  return (
    <section className='font-primary min-h-screen flex items-center justify-center bg-gradient-to-r from-[#F9F9F9] to-[#E8E8E8]'>
      <div className='max-w-md w-full mx-4 bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-3xl text-[#522E2E] mb-5 text-center font-bold'>Login</h1>
        <p className='text-sm text-[#66668B] text-center font-secondary mb-8'>
          Please login using account detail below.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='relative'>
              <input
                placeholder='Enter your email'
                type="email"
                name="email"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
              />
            </div>
            <div className='relative'>
              <input
                placeholder='Enter your password'
                type="password"
                name="password"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-6'>
            <button
              type="submit"
              className='w-full bg-black text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300'
            >
              Login
            </button>
            <Link
              to="/sign-up"
              className='text-sm text-[#66668B] text-center hover:text-red-600 hover:underline transition duration-300'
            >
              Don't have an account? <span className='font-semibold'>Create Account</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;