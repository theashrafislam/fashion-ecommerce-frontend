import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import GoogleLoginButton from '../Components/GoogleLoginButton';
import LoadingSpinner from '../Components/LoadingSpinner';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useDispatch } from 'react-redux';
import { createUsingEmailPassword } from '../Features/Auth/useAuthSlice';


const SignIn = () => {

  const location = useLocation();
  const { signInEmailPassword } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  // console.log(location?.state?.pathname);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    // signInEmailPassword(data?.email, data?.password)
    //   .then(async () => {
    //     navigate(location?.state?.pathname || '/');
    //     toast.success("Login successful! Welcome back! 🎉");
    //     setLoading(false);
    //     // }
    //   })
    //   .catch(error => {
    //     setLoading(false);
    //     toast.error(error?.message)
    //     // console.log(error);
    //   })
    dispatch(createUsingEmailPassword({email: data?.email, password: data?.password}))
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
              disabled={isLoading}
              type="submit"
              className='w-full bg-black text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300'
            >
              {isLoading ? <LoadingSpinner /> : 'Login'}
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