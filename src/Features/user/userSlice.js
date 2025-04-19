import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (email, {extra}) => {
        // ekhane ektu problem ache ekhane theke shikhar kichu ache, try korte hobe apadoto brack for enjoy
        // const axiosSecure = extra.useAxiosSecure();
        const response = await axios.get(`/api/user-info?email=${email}`);
        return response?.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;