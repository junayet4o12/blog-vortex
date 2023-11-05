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
        <div className="py-7 px-2">
            <div className="flex flex-wrap justify-center gap-10">
           {
            data?.map(blog=> <BlogCard key={blog._id} blog={blog}></BlogCard>)
           }
            </div>
        </div>
    );
};

export default Blogs;