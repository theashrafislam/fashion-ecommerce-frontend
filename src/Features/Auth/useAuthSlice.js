import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";



const auth = getAuth(app);


export const createUsingEmailPassword = createAsyncThunk(
    'auth/createUser',
    async ({ email, password }) => {
        try {
            const userCredential = createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            return userCredential?.user
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const updateProfileInformation = createAsyncThunk(
    'auth/updateProfile',
    async ({ displayName, photoUrl }) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoUrl
            })
            return {
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

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
            .addCase(updateProfileInformation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfileInformation.fulfilled, (state, action) => {
                state.loading = false;
                state.uesr = action.payload;
            })
            .addCase(updateProfileInformation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;