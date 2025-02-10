import React from 'react';
import { CgProfile } from "react-icons/cg";
import useAuth from '../../Hooks/useAuth';

const AccountDetails = () => {
    const {user, loading} = useAuth();
    console.log(user);
    return (
        <div>
            <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Account Details</h1>
            <div className="text-[#666666] font-secondary">
                {/* profile photo  */}
                <div className='flex justify-center items-center py-6'>
                    <div className="relative w-28 h-28">
                        <img
                            // src={photo || "/default-avatar.png"}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                        />
                        <label
                            htmlFor="profilePhoto"
                            className="absolute bottom-1 right-1 bg-gray-800 text-white p-1 rounded-full cursor-pointer hover:bg-red-500 transition"
                        >
                            <CgProfile className='text-2xl'/>
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
                            type="email"
                            id="emailAddress"
                            placeholder="Email Address"
                            className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                </div>
                {/* paswrod box  */}
                <h1 className="mt-8 font-primary text-[#212121] text-2xl font-semibold pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Password change</h1>
                {/* Current Password */}
                <div className='mb-4'>
                    <label htmlFor="currentPassword" className="block text-base text-[#66666] font-medium">
                        Current Password
                    </label>
                    <input
                        type="password"
                        id="currentPassword"
                        placeholder="Current Password"
                        className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                {/* New Password and Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* New Password */}
                    <div>
                        <label htmlFor="newPassword" className="block text-base text-[#66666] font-medium">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="New Password"
                            className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    {/* New Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-base text-[#66666] font-medium">
                            Confirm Password

                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className="mt-1 block w-full p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                </div>
                <button className='w-full md:w-fit px-10 py-3 bg-black text-white hover:bg-red-500 hover:text-white font-semibold font-primary'>Save Changes</button>
            </div>
        </div>
    );
};

export default AccountDetails;