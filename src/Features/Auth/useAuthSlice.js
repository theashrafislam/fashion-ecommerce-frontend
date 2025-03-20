import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";



const auth = getAuth(app);


export const createUsingEmailPassword = createAsyncThunk(
    'auth/createUser',
    async (email, password) => {
        try {
            const userCredential = createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            return userCredential?.user
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: true,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUsingEmailPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUsingEmailPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
                state.error = null;
            })
            .addCase(createUsingEmailPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;