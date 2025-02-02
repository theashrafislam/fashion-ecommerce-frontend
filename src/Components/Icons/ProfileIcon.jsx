import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { CgProfile } from 'react-icons/cg';

const ProfileIcon = () => {
    const {user} = useAuth();
    return <Link to={`/in/${user?.email}`} className='py-8 hover:text-red-500'><CgProfile className='text-xl lg:text-2xl' /></Link>

};

export default ProfileIcon;