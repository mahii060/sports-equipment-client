import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => setActiveUser(user))
        return () => unsubscribe()
    }, [])

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = { userSignUp, userSignIn, activeUser, setActiveUser }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;