// import React from 'react';

import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion"
import Categories from "../Category/Categories";
import Banner from "./Banner";
import Blogs from "./Blogs/Blogs";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div>
           

            <div className="relative " ref={ref}>
                <div className="sticky top-16 z-40 px-2">
                   
                    <motion.div style={{ scaleX }} className=" h-2 bg-gray-500 shadow-xl rounded-md"></motion.div>
                </div>
                <div >
                    <Banner></Banner>
                    <Categories></Categories>

                    <Blogs></Blogs>


                    <NewsLetter></NewsLetter>
                    <ContactUs></ContactUs>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;