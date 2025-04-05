import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { clearUser, setUser } from "./useAuthSlice"
const axiosSecure = useAxiosSecure();

export const checkAuth  = () => async (dispatch) => {
    try {
        console.log('call it');
        const res =  axiosSecure.get('/api/current-user');
        console.log(res);
        dispatch(setUser(res?.data))
    } catch (error) {
        dispatch(clearUser())
    }
}