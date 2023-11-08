// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar1 from "./Navbar/Navbar1";
import Navbar2 from "./Navbar/Navbar2";

const Layout = () => {
    return (
        <div>
            <Navbar1></Navbar1>
            <div className="sticky top-0 z-50">
                <Navbar2></Navbar2>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;