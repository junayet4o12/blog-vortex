// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
const Blogs = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['blogsData'],
        queryFn: async () => fetch('http://localhost:3000/api/v1/latestblogs')
            .then(res => res.json())
    })
    console.log(data, isLoading);
    return (
        <div className="py-7 px-2 bg-gray-100">
            <div className="px-10">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Latest <span className="text-4xl font-semibold text-black">Blogs</span></h2>
                <p className="text-lg font-medium pb-7 uppercase">Here some latest blogs posted by Clients</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    data?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;