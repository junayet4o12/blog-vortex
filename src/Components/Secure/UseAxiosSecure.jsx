import axios from "axios";

import { useEffect } from "react";
import auth from "../../Authantication/firebase.config";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import auth from "../Firebase/firebase.config";

// import React from 'react';
const secureAxios = axios.create({
    baseURL: 'https://blog-site-backend-rouge.vercel.app',
    withCredentials: true
})
const UseAxiosSecure = () => {
    const navigate = useNavigate();
    useEffect(() => {
        secureAxios.interceptors.response.use(res => {
            return res
        }, error => {
            if (error?.response?.status == 401 || error?.response?.status == 403) {
                console.log('unauthorised');
                toast.error('Please log in!!!')
                signOut(auth)
                navigate('/login')
            }
        })
    }, [navigate])
    return secureAxios
};

export default UseAxiosSecure;