import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadingSpinner from '../Components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <LoadingSpinner />
    }
    if(!user){
        return <Navigate replace to='/sign-in' state={location}/>
    }
    return children;
};

export default PrivateRoute;