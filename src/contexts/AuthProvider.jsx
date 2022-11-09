import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.confiq';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setUser(true)
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const signIn = (email, password) => {
        setUser(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setUser(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        updateUser,
        signIn,
        signInWithGoogle,
        logOut,
        user,
        loading,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log("Auth state Change", currentUser)
        })
        return unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;