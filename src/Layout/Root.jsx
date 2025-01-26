import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <section className='flex flex-col min-h-screen'>
            <header>
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