// import React from 'react';
import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query";
import AllBlogsCard from "./AllBlogsCard";
import { useEffect, useState } from "react";

import nodatafound from '../../assets/notfounddata.png'

import 'react-loading-skeleton/dist/skeleton.css'
import BlogsLoading from "./BlogsLoading";
import axios from "axios";
const AllBlogs = () => {
    const [blogs, setblogs] = useState([])
    const [searchingtext, setsearchingtext] = useState('')
    const [category, setcategory] = useState('')
    const { data, isLoading } = useQuery({
        queryKey: ['getallblogs'],
        queryFn: async () => fetch('https://blog-site-backend-rouge.vercel.app/api/v1/allblogs')
            .then(res => res.json())

    })
    useEffect(() => {
        setsearchingtext('')
        setblogs(data)
    }, [data])

    const inputsearch = e => {
        console.log(e.target.value);
        setcategory('')

        setsearchingtext(e.target.value);
        // const searchedBlogs = data.filter(datum => datum.title.toLowerCase().includes((e.target.value).toLowerCase()));
        // setblogs(searchedBlogs);
    }
    const handlesearch = () => {
        const searchedBlogs = data.filter(datum => datum.title.toLowerCase().includes(searchingtext.toLowerCase()));
        console.log(searchedBlogs);
        setblogs(searchedBlogs);
    }
    const handleCategory = (e) => {
        setcategory(e.target.value)
        setsearchingtext('')
        axios.get(`https://blog-site-backend-rouge.vercel.app/api/v1/searchbycat?category=${e.target.value}`)
        .then(res=> {
            setblogs(res.data);
        })
        // const newdata = data.filter(datum => datum.category.toLowerCase().includes((e.target.value).toLowerCase()))
        // setblogs(newdata)
    }
    if (isLoading) {
        return <div className="mt-10 h-[70vh] overflow-hidden">
            <BlogsLoading></BlogsLoading>
        </div>
    }
    return (
        <div className="overflow-hidden">

            <motion.div
                initial={{ x: 100, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="px-10 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Unleash <br /> Your  <span className="text-4xl font-semibold text-black">Curiosity</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">Explore a World of Knowledge, Inspiration, and Creativity through Our Diverse Collection of Engaging Blog Posts. Your Source for Thought-Provoking Ideas and Valuable Insights.</p>

            </motion.div>
            {/* searchbar */}
            <motion.div initial={{  scale:0.4 }}
                        whileInView={{  scale:1 }}
                        transition={{ duration: 1 }} className="  flex flex-col-reverse md:flex-row gap-5 justify-center items-center p-4">
                <div className="sm:w-[30%] ">
                    <div className="relative h-11  w-[200px] ">
                        <select value={category} onChange={handleCategory}
                            className="w-full border  border-black h-full px-3  font-sans text-sm  transition-all bg-transparent  rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 font-bold"

                        >

                            <option value="" disabled>Select category</option>
                            <option>Travel</option>
                            <option>Sports</option>
                            <option>Technology</option>
                            <option>Food and Cooking</option>
                            <option>Fashion</option>
                            <option>Personal Finance</option>
                        </select>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Select Category
                        </label>
                    </div>
                </div>

                <div className="flex justify-center
                 items-center sm:w-[70%]  gap-7">
                    <div className="relative h-11 w-full min-w-[200px] max-w-[600px]">
                        <input value={searchingtext} onChange={inputsearch}
                            className="w-full border  border-black h-full px-3 py-3 font-sans text-sm  transition-all bg-transparent  rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 font-bold"
                            placeholder=" "
                        />
                        <label className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 font-bold">
                            Search Blog
                        </label>
                    </div>

                    <button onClick={handlesearch} className="btn btn-neutral text-sm font-bold bg-black ">Search</button>
                </div>

            </motion.div>
            <div>




            </div>
            <motion.div initial={{  scale:0.9 }}
                        whileInView={{ scale:1 }}
                        transition={{ duration: 1 }} className="flex flex-wrap justify-center gap-10 gap-y-16">
                {
                    blogs?.map((blog, idx) => <AllBlogsCard key={blog._id} blog={blog} idx={idx}></AllBlogsCard>)
                }
            </motion.div>
            {
                blogs?.length < 1 ? <div className=" flex justify-center items-center">
                    <img className="w-[280px] sm:w-[400px] md:w-[600px] object-cover" src={nodatafound} alt="" />
                </div> : ''
            }
        </div>

    );
};

export default AllBlogs;