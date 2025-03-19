import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ActivePage from '../Components/ActivePage';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex flex-col min-h-screen scroll-smooth font-primary'>
            <header className='sticky top-0 z-50 bg-white shadow-lg'>
                <Navbar />
            </header>
            <main className='flex-grow'>
                <ActivePage mainRoute={'Home'} route={"404 Error"} />
                <div className='my-16 flex flex-col items-center justify-center mx-3 lg:mx-0'>
                    <h1 className='text-7xl lg:text-9xl scale-150 text-red-500 font-bold text-center'>404</h1>
                    <h1 className='text-2xl font-semibold text-[#2E2E2E] text-center mb-3 mt-10'>Opps! PAGE NOT BE FOUND</h1>
                    <p className='text-[#666666] text-center'>Sorry but the page you are looking for does not exist, have been <br />
                        removed, name changed or is temporarily unavailable</p>
                    <Link
                        to={"/"}
                        className='w-full md:w-fit px-8 md:px-10 py-3 hover:bg-black text-white bg-red-500 hover:text-white font-semibold font-primary mt-5 md:mt-7'>
                        Back To Home
                    </Link>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default ErrorPage;