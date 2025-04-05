// import axios from 'axios';
// import { useContext, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import useAuth from './useAuth';

// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:3000',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { userSignOut } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {

//         axiosSecure.interceptors.response.use(function (response) {
//             return response;
//         }, function (error) {
//             if (error?.response?.status === 401 || error?.response?.status === 403) {
//                 userSignOut()
//                     .then(() => {
//                         navigate('/sign-in')
//                     })
//                     .catch(error => {

//                     })
//                 // console.log("Logout the user");
//             }
//         });

//     }, [])

//     return axiosSecure;

// };

// export default useAxiosSecure;

import axios from "axios";
import React, { useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async (error) =>  {
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                const response = await axiosPublic.get('/token-remove');
                if(response?.data?.status === 200){
                    navigate('navigate')
                }
            }
        });
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;