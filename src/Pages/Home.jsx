import React from 'react';
import ActivePage from '../Components/ActivePage';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>j
            hello i am home















            <h1 className='mt-40'>hello</h1>
            <ActivePage route={'My Account'} mainRoute={'Home'} />
        </div>
    );
};

export default Home;