import React, { useEffect } from 'react';
import ActivePage from '../Components/ActivePage';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Carousel from '../Components/Home/Carousel';
import PromotionalBanners from '../Components/Home/PromotionalBanners';
import ServiceFeatures from '../Components/Home/ServiceFeatures';
import CustomTabs from '../Components/Home/CustomTabs';

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
            {/* Carousel section  */}
            <Carousel />

            {/* Promotional Banners */}
            <PromotionalBanners />

            {/* Service Features */}
            <ServiceFeatures />

            {/* tabs items */}
            <CustomTabs />
        </div>
    );
};

export default Home;