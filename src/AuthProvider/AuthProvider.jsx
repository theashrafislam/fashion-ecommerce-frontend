import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUserEmailPassword = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    const updateProfileInformation = async (displayName, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoUrl
        }).finally(() => setLoading(false));
    };

    const signInEmailPassword = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    }

    const userSignOut = async () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                const response = await axios.get('')
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        createUserEmailPassword,
        updateProfileInformation,
        userSignOut,
        user,
        loading,
        signInEmailPassword,
        signInWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;