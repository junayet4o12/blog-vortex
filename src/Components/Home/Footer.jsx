// import React from 'react';

import { Typography } from "@material-tailwind/react";
import logo from '../../assets/BlogLogo.png'
const Footer = () => {

    const AllCategoris = [
        {
            Category: "Company",
            CategoryName: ["About Us", "Careers", "Our Team", "Projects"],
        },
        {
            Category: "Help Center",
            CategoryName: ["Discord", "Twitter", "GitHub", "Contact Us"],
        },
        {
            Category: "Resources",
            CategoryName: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
        },
        {
            Category: "Products",
            CategoryName: ["Templates", "UI Kits", "Icons", "Mockups"],
        },
    ];
    return (
        <div className="bg-gray-200">
            <div className="w-full  px-8 pt-8">
                <div className="flex flex-wrap items-center justify-start gap-x-6  text-center">
                    <img src={logo} alt="logo-ct" className="w-16" />
                   <h2 className="text-4xl font-bold">Blog Vortex</h2>
                </div></div>
            <footer className="relative w-full">
                <div className=" w-full px-8">
                    <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {AllCategoris.map(({ Category: title, CategoryName: links }, key) => (
                            <div key={key} className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-4 font-bold uppercase opacity-50"
                                >
                                    {title}
                                </Typography>
                                <ul className="space-y-1">
                                    {links.map((link, key) => (
                                        <Typography key={key} as="li" color="blue-gray" className="font-normal">
                                            <a
                                                href="#"
                                                className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                            >
                                                {link}
                                            </a>
                                        </Typography>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                        >
                            &copy; 2023 <a >Blog Vortex</a>. All
                            Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {/* Insert SVG path data here */}
                                </svg>
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {/* Insert SVG path data here */}
                                </svg>
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {/* Insert SVG path data here */}
                                </svg>
                            </Typography>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;