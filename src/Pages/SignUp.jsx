import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [imageUrl, setImageUrl] = useState(null);



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 32 * 1024 * 1024) {
        alert('File size exceeds 32 MB limit.');
        return;
      }
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Image URL:", imageUrl);
  }

  return (
    <section className='font-primary min-h-screen flex items-center justify-center bg-gradient-to-r from-[#F9F9F9] to-[#E8E8E8]'>
      <div className='max-w-md w-full mx-4 bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-3xl text-[#522E2E] mb-5 text-center font-bold'>Sign Up</h1>
        <p className='text-sm text-[#66668B] text-center font-secondary mb-8'>
          Create your account to get started.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4'>
            {/* Name Input Field */}
            <div className='relative'>
              <input
                placeholder='Enter your full name'
                type="text"
                name="name"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className='text-red-600 text-sm mt-1'>{errors.name.message}</span>
              )}
            </div>

            {/* Email Input Field */}
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

            {/* Password Input Field */}
            <div className='relative'>
              <input
                placeholder='Enter your password'
                type="password"
                name="password"
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 placeholder-gray-400'
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className='text-red-600 text-sm mt-1'>{errors.password.message}</span>
              )}
            </div>

            {/* Profile Photo Upload */}
            <div className='relative'>
              <label className='block text-sm font-medium text-[#66668B] mb-2'>
                Upload Profile Photo
              </label>
              <input
                {...register("image", { required: "Image is required" })}
                onChange={handleFileChange}
                type="file"
                name="profilePhoto"
                accept="image/*"
                className='w-full p-2 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-red-600'
              />
              {errors.image && (
                <span className='text-red-600 text-sm mt-1'>{errors.image.message}</span>
              )}
            </div>
          </div>

          {/* Sign Up Button */}
          <div className='flex flex-col gap-4 mt-6'>
            <button
              type="submit"
              className='w-full bg-black text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300'
            >
              Sign Up
            </button>

            {/* Link to Login Page */}
            <p className='text-sm text-[#66668B] text-center'>
              Already have an account?{' '}
              <Link
                to="/sign-in"
                className='text-[#522E2E] hover:text-red-600 hover:underline transition duration-300'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;