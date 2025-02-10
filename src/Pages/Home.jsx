import React, { useEffect } from 'react';
import ActivePage from '../Components/ActivePage';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Home = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    useEffect(() => {
        axiosSecure.get('/get-all')
            .then(res => {
                console.log(res);
            })
    }, [user, axiosSecure])
    return (
        <div>j
            hello i am home















            <h1 className='mt-40'>hello</h1>
            <ActivePage route={'My Account'} mainRoute={'Home'} />
        </div>
    );
};

export default Home;