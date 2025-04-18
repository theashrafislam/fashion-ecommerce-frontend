import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../Features/Auth/useAuthSlice"
import userReducer from "../Features/user/userSlice"

const store = configureStore({
    reducer: {
        // auth: authReducer
        user: userReducer
    }
});

export default store;