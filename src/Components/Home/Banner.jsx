// import React from 'react';
import banner from '../../assets/BlogBanner.jpg'
import { motion } from "framer-motion"
const Banner = () => {
    
    return (
        <div>
            <div

                className=" min-h-screen bg-base-200 pb-7 md:pb-0">
                <div className="flex flex-col md:justify-between md:flex-row-reverse overflow-hidden ">
                    <motion.div
                        initial={{ x: 100, opacity: 0, scale:0.5 }}
                        whileInView={{ x: 0, opacity: 1, scale:1 }}
                        transition={{ duration: 1 }}
                        className='md:w-[55%] md:h-screen'>
                        <img src={banner} className="h-full object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, scale: 0.5 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='md:[45%] px-5 flex flex-col justify-center'>
                        <h1 className="text-6xl font-bold"><span className='font-medium'>News <br /> &</span> Magazine</h1>
                        <h3 className='text-4xl font-semibold py-4'>Blog Vortex</h3>
                        <p className="pb-4 font-semibold text-sm max-w-md">Your Gateway to an Infinite World of Knowledge and Inspiration. Dive into thought-provoking articles and explore a whirlwind of ideas.</p>
                        <button className="btn btn-neutral w-max">Know More</button>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;