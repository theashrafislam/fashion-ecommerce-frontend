// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { clearUser, setUser } from "./useAuthSlice"


// export const checkAuth  = () => async (dispatch) => {
//     const axiosSecure = useAxiosSecure();
//     try {
//         const res = await axiosSecure.get('/api/current-user');
//         dispatch(setUser(res?.data))
//     } catch (error) {
//         console.log(error);
//         dispatch(clearUser())
//     }
// }