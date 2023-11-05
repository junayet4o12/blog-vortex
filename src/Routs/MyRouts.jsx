// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home/Home";
import Login from "../Login";
import Register from "../Register";
import Error404 from "../Components/404/Error404";
import AllBlogs from "../Components/AllBlogs/AllBlogs";

const MyRouts = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error404></Error404>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          
        },
        {
          path: '/allblogs',
          element: <AllBlogs></AllBlogs>,
          
        }
      ]
    },
    {
      path: '/login',
      element:<Login></Login>
    },
    {
      path: '/register',
      element:<Register></Register>
    }
  ]);

export default MyRouts;