import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import useAuth from '../../Hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinner from '../LoadingSpinner';
import toast from 'react-hot-toast';

const AccountDetails = () => {
    
    const {user, loading} = useAuth();


    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Account Details</h1>
            <form
                // onSubmit={handleFormSubmit}
                className="text-[#666666] font-secondary">
                {/* profile photo  */}
                <div className='flex justify-center items-center py-6'>
                    <div className="relative w-28 h-28">
                        <img

                            src={"/default-avatar.png"}
                            // alt={accountInfo?.data?.data?.name}
                            className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                        />
                        <label
                            htmlFor="profilePhoto"
                            className="absolute bottom-1 right-1 bg-gray-800 text-white p-1 rounded-full cursor-pointer hover:bg-red-500 transition"
                        >
                            <CgProfile className='text-2xl' />
                        </label>
                    </div>
                </div>
                {/* input feilds  */}
                <div className="w-full">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-base text-[#66666]  font-medium">
                                First Name
                            </label>
                            <input
                                readOnly
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-base text-[#66666] font-medium">
                                Last Name
                            </label>
                            <input
                                readOnly
                                // value={accountInfo?.data?.data?.name.split(" ").slice(1).join(" ")}
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            />
                        </div>
                    </div>
                    {/* Display Name */}
                    <div className="mb-4">
                        <label htmlFor="displayName" className="block text-base text-[#66666] font-medium">
                            Display Name
                        </label>
                        <input
                            // onChange={(e) => setName(e.target.value)}
                            // defaultValue={accountInfo?.data?.data?.name}
                            type="text"
                            id="displayName"
                            placeholder="Display Name"
                            className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    {/* Email Address */}
                    <div>
                        <label htmlFor="emailAddress" className="block text-base text-[#66666] font-medium">
                            Email Address
                        </label>
                        <input
                            readOnly
                            // value={accountInfo?.data?.data?.email}
                            type="email"
                            id="emailAddress"
                            placeholder="Email Address"
                            className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    {/* password box  */}
                    <div className='mt-6'>
                        <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Password change</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="newPassword" className="block text-base text-[#66666] font-medium">
                                    New Password
                                </label>
                                <input
                                    // onChange={(e) => setNewPassword(e.target.value)}
                                    type="password"
                                    id="newPassword"
                                    placeholder="New Password"
                                    className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-base text-[#66666] font-medium">
                                    Confirm Password
                                </label>
                                <input
                                    // disabled={newPassword.length === 0}
                                    // onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    // disabled={!isChanged}
                    className='w-full mt-4 md:w-fit px-10 py-3 bg-black text-white hover:bg-red-500 hover:text-white font-semibold font-primary'>Save Changes</button>
            </form>
        </div>
    );
};

export default AccountDetails;