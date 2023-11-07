/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Authantication/AuthProviders";
import BlogsLoading from "../AllBlogs/BlogsLoading";

const PrivateRouts = ({ children}) => {
    const { user, loading  } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <BlogsLoading></BlogsLoading>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouts;