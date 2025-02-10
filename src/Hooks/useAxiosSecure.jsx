import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const useAxiosSecure = async () => {
    const { userSignOut } = useAuth();
    const nagivate = useNavigate();

    useEffect(() => {
        axios.interceptors.response.use(response => {
            return response;
        }, (error) => {
            if (error?.response.status === 401 || error?.response?.status === 403) {
                userSignOut()
                    .then(() => {
                        nagivate('/sign-in');
                    })
                    .catch(() => {

                    })
            }
        });
    }, [])

    return axiosSecure;

};

export default useAxiosSecure;