// import React from 'react';

import { TextField } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion"

const NewsLetter = () => {

    const handlesubscribe = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email);
        const user = { subscriber: email }
        axios.post('https://blog-site-backend-rouge.vercel.app/api/v1/subscribers', user)
            .then(res => {
                console.log(res.data);
                if(res?.data?.acknowledged){
                    toast.success('Thank you for subscribing !!')
                    e.target.reset()
                }

            })
    }
    return (
        <div className="py-7">
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.5 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }} className="px-10 sm:px-36">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Stay in the Loop <br /> with <span className="text-4xl font-semibold text-black">Blog Vortex</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl"> Get the latest trends, insightful articles, and exclusive content from Blog Vortex. Subscribe now to receive updates, join our community, and dive into a world of knowledge and ideas <br /> Don&apos;t miss out—subscribe today!</p>
            </motion.div>

            <motion.div
                initial={{ y: -100, opacity: 0, scale: 0.5 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}>
                <form onSubmit={handlesubscribe} className="text-sm flex justify-center items-center gap-7 flex-wrap px-5">

                    <TextField name="email" type="email"
                        className="w-[300px] sm:w-[400px]  md:w-[500px]"
                        placeholder="Your email"
                        required
                        id="outlined-required"
                        label="Your Email"
                    />

                    <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold font-sm">Subscribe</button>
                </form>
            </motion.div>
        </div>
    );
};

export default NewsLetter;