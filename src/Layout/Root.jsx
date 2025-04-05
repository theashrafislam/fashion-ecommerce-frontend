import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../Features/Auth/authActions';

const Root = () => {

    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);
    console.log(user);

    if (loading) return <p>Loading...</p>;

    return (
        <section className='flex flex-col min-h-screen scroll-smooth'>
            <header className='sticky top-0 z-50 bg-white shadow-lg'>
                <Navbar />
            </header>
            <main className='flex-grow'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Root;