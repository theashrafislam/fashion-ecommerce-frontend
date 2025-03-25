// import axios from 'axios';
// import { useContext, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import useAuth from './useAuth';

// const axiosSecure = axios.create({
//     baseURL: 'http://localhost:3000',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { userSignOut } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {

//         axiosSecure.interceptors.response.use(function (response) {
//             return response;
//         }, function (error) {
//             if (error?.response?.status === 401 || error?.response?.status === 403) {
//                 userSignOut()
//                     .then(() => {
//                         navigate('/sign-in')
//                     })
//                     .catch(error => {

//                     })
//                 // console.log("Logout the user");
//             }
//         });

//     }, [])

//     return axiosSecure;

// };

// export default useAxiosSecure;