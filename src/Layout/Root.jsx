import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchuser = async () => {
            
        };
        fetchuser()
    }, [])

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