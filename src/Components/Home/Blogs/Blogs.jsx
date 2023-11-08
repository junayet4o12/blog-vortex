// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion"
const Blogs = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['blogsData'],
        queryFn: async () => fetch('https://blog-site-backend-rouge.vercel.app/api/v1/latestblogs')
            .then(res => res.json())
    })
    console.log(data, isLoading);
    return (
        <div className="py-7 px-2 bg-gray-100 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="px-10">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Latest <span className="text-4xl font-semibold text-black">Blogs</span></h2>
                <p className="text-lg font-medium pb-7 uppercase">Here some latest blogs posted by Clients</p>
            </motion.div>
            <motion.div
                initial={{  scale: 0.8 }}
                whileInView={{  scale: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center gap-10">
                {
                    data?.map((blog,idx) => <BlogCard key={blog._id} blog={blog} idx={idx}></BlogCard>)
                }
            </motion.div>
        </div>
    );
};

export default Blogs;