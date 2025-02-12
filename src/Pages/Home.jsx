import React, { useEffect } from 'react';
import ActivePage from '../Components/ActivePage';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Carousel from '../Components/Home/Carousel';

const Home = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // useEffect(() => {
    //     axiosSecure.get('/get-all')
    //         .then(res => {
    //             console.log(res);
    //         })
    // }, [user, axiosSecure])
    return (
        <div>
            <Carousel />
            <ActivePage route={'My Account'} mainRoute={'Home'} />
        </div>
    );
};

export default Home;