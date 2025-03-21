import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
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
    async ({ displayName, photoUrl }, { rejectWithValue }) => {
        try {
            const user = auth.currentUser;
            if (!user) throw new Error('No authenticated user found.');

            // Token refresh to prevent expiration issues
            await user.getIdToken(true);

            await updateProfile(user, {
                displayName: displayName,
                photoURL: photoUrl
            });

            await user.reload(); // Reload user to get updated info
            console.log("Updated User Info:", user);

            return {
                displayName: user.displayName,
                photoURL: user.photoURL,
            };
        } catch (error) {
            console.error("Profile Update Error:", error);
            return rejectWithValue(error.message || 'Failed to update profile');
        }
    }
);

export const userSignOut = createAsyncThunk(
    'user/signOut',
    async () => {
        try {
            await signOut(auth);
            return "User signed out successfully";
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
                state.user = {
                    ...state.user,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL
                }
                state.user.displayName = action.payload.displayName;
                state.user.photoURL = action.payload.photoURL;
            })
            .addCase(updateProfileInformation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(userSignOut.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userSignOut.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
            .addCase(userSignOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


// export const listenForAuthChanges = () => (dispatch) => {
//     onAuthStateChanged(auth, (currentUser) => {
//         dispatch(setUser(currentUser)); 
//     });
// };

export const { setUser } = authSlice.actions;
export default authSlice.reducer;