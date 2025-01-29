import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    //create user using email and password
    const createUserEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const authInfo = {
        createUserEmailPassword,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;