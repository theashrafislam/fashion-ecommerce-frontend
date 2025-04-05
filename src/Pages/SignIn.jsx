import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

import GoogleLoginButton from '../Components/GoogleLoginButton';
import LoadingSpinner from '../Components/LoadingSpinner';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';



const SignIn = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      email: data?.email,
      password: data?.password
    }
    try {
      const response = await axiosPublic.post('/api/login', userInfo);
      console.log(response);
      if(response?.status === 200){
        toast.success(response?.data?.message);
        reset();
        navigate('/')
      }
    } catch (error) {
      if (error?.response) {
        if (error?.response?.status === 401) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
        else if (error?.response?.status === 404) {
          toast.error(error?.response?.data?.message);
          setLoading(false);
        }
        else {
          toast.error(error?.response?.data?.message || "Something went wrong.");
          setLoading(false);
        }
      } else {
        toast.error("Network error. Please check your connection.");
        setLoading(false);
      }
    } finally{
      setLoading(false);
    }
  }


  return (
    <section className='font-primary min-h-screen flex items-center justify-center bg-gradient-to-r from-[#F9F9F9] to-[#E8E8E8]'>
      <div className='max-w-md w-full mx-4 bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-3xl text-[#522E2E] mb-5 text-center font-bold'>Login</h1>
        <p className='text-sm text-[#66668B] text-center font-secondary mb-8'>
          Please login using account detail below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4'>
            <div className='relative'>
              <input
                placeholder='Enter your email'
                type="email"
                name="email"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className='text-red-600 text-sm mt-1'>{errors.email.message}</span>
              )}
            </div>
            <div className='relative'>
              <input
                {...register("password", { required: "Password is required" })}
                placeholder='Enter your password'
                type="password"
                name="password"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
              />
              {errors.password && (
                <span className='text-red-600 text-sm mt-1'>{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-6'>
            <button
              // disabled={isLoading}
              type="submit"
              className='w-full bg-black text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300'
            >
              {loading ? <LoadingSpinner /> : 'Sign In'}
            </button>
            <Link
              to="/sign-up"
              className='text-sm text-[#66668B] text-center hover:text-red-600 hover:underline transition duration-300'
            >
              Don't have an account? <span className='font-semibold'>Create Account</span>
            </Link>
          </div>
        </form>
        {/* google login  */}
        <div className='my-2'>
          <GoogleLoginButton />
        </div>
      </div>
    </section>
  );
};

export default SignIn;