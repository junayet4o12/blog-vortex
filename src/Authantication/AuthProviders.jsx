/* eslint-disable react/prop-types */
//* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";




// import React from 'react';
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true);
   
   
      
    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginuser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setloading(true)
        return signOut(auth);
    }
    const provider = new GoogleAuthProvider();
    const googlelogin = () => {
        setloading(true)
      return  signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    
    const authInfo = { createuser, user, logout, loginuser,googlelogin, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;