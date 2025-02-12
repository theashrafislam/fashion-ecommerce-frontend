import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


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

    const changePassword = async (newPassword) => {
        setLoading(true);
        const user = auth.currentUser;
        return updatePassword(user, newPassword)
            .finally(() => setLoading(false))
    }

    const userSignOut = async () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const email = currentUser?.email || user?.email;
            if (currentUser) {
                // axios.get(`http://localhost:3000/jwt?email=${email}`, { withCredentials: true })
                axiosPublic.get(`/jwt?email=${email}`)
                    .then(res => {
                        // console.log(res);
                    })
            } else {
                // axios.get(`http://localhost:3000/token-remove`, { withCredentials: true })
                axiosPublic.get(`/token-remove`)
                    .then(res => {
                        // console.log(res);
                    })
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
        signInWithGoogle,
        changePassword
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;