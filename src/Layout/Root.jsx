import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuth } from '../Features/Auth/authActions';
// import useAxiosSecure from '../Hooks/useAxiosSecure';
// import { setUser } from '../Features/Auth/useAuthSlice';

const Root = () => {
    // const axiosSecure = useAxiosSecure();
    // const dispatch = useDispatch();
    // const { user, loading } = useSelector(state => state.auth);

    // useEffect(() => {
    //     const checkUserAuth = async () => {
    //         try {
    //             const response = await axiosSecure.get("/api/current-user");
    //             dispatch(setUser(response?.data));
    //         } catch (error) {
    //             console.log(error);
    //             dispatch(clearUser()); 
    //         }
    //     };
    //     checkUserAuth();
    // }, [axiosSecure, dispatch]);
    // console.log("User Info: ", user);

    // if (loading) return <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    //     <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
    // </div>;

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