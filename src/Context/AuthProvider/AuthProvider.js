import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerSignIn = (provider) => {
        setLoading(true);
        return (signInWithPopup(auth, provider))
    }
    const providerFacebookSignIn = (provider) => {
        setLoading(true);
        return (signInWithPopup(auth, provider))
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('sate change', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();

        }
    }, [])

    const authInfo = {
        user,
        loading,
        providerSignIn,
        providerFacebookSignIn,
        logOut,
        createUser,
        updateUserProfile,
        logIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;