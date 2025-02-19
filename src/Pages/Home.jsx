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
import PromoBanner from '../Components/Home/PromoBanner';
import DiscountBanner from '../Components/Home/DiscountBanner';

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

            {/* PromoBanner */}
            <PromoBanner />

            {/* DiscountBanner */}
            <DiscountBanner />
        </div>
    );
};

export default Home;