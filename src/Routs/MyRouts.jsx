// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home/Home";
import Login from "../Login";
import Register from "../Register";

const MyRouts = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
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