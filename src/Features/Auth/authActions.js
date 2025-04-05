import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { clearUser, setUser } from "./useAuthSlice"
const axiosSecure = useAxiosSecure();

export const checkAuth  = () => async (dispatch) => {
    try {
        const res = await axiosSecure.get('/api/current-user');
        dispatch(setUser(res?.data))
    } catch (error) {
        dispatch(clearUser())
    }
}