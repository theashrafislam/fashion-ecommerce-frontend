import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/useAuthSlice"

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;