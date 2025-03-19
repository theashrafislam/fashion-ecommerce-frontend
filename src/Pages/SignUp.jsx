import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import LoadingSpinner from '../Components/LoadingSpinner';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const { createUserEmailPassword, updateProfileInformation, userSignOut, loading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB limit.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`, formData, { headers: { "content-type": "multipart/form-data", } }
        );
        const imageUrl = res.data.data.url;
        setImageUrl(imageUrl);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (!imageUrl) {
      toast.error("Please wait! Image is still uploading.");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
    if (data?.password.length < 6) {
      setIsSubmitting(false);
      return toast.error('Password must be at least 6 characters long!')
    }
    try {
      data.image = imageUrl;
      const userInfo = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
        image: data?.image
      };

      // await createUserEmailPassword(data.email, data.password);
      // await updateProfileInformation(data.name, data.image);
      // await userSignOut();

      createUserEmailPassword(data?.email, data?.password)
        .then(() => {
          console.log('helo');
        })
        .catch(error => {
          console.log(error);
        })

      // const response = await axiosPublic.post('/sign-up-user-info', userInfo);

      // if (response?.data?.data?.insertedId) {
      //   toast.success('Welcome! Your account is ready.');
      //   navigate('/sign-in');
      // }
    } catch (error) {
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please use a different email.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              disabled={loading || isSubmitting}
              type="submit"
              className='w-full bg-black text-white text-base font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300'
            >
              {isSubmitting ? <LoadingSpinner /> : 'Sign up'}
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