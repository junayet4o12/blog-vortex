// import React from 'react';
import notfounddata from '../../assets/notfounddata.png'
import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProviders";
// import { useQuery } from "@tanstack/react-query";
// import BlogsLoading from "../AllBlogs/BlogsLoading";
import WishlistCard from "./WishlistCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UseAxiosSecure from "../Secure/UseAxiosSecure";
import BlogsLoading from '../AllBlogs/BlogsLoading';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const [refetch, setrefetch] = useState(0)
    const secureData = UseAxiosSecure()
    // const { data, isLoading} = useQuery({
    //     queryKey: ['singlewishlistitemhascome'],
    //     queryFn: () => fetch(`https://blog-site-backend-rouge.vercel.app/api/v1/singuserwishlistblog/${user?.email}`)
    //         .then(res => res.json()),

    // })

    // if (isLoading) {
    //     return <BlogsLoading></BlogsLoading>
    // }

    useEffect(() => {
        setisLoading(false);
        secureData.get(`/api/v1/singlewishlistBlog?email=${user?.email}`, { email: user?.email })
            .then(res => {
                
                // console.log(res.data);
                setdata(res?.data)
                setisLoading(true);
            })
        // console.log(refetch);
        
    }, [user?.email, refetch, secureData])
    if (!isLoading) {
        return <BlogsLoading></BlogsLoading>
    }

    return (
        <div className='py-20'>
            <div className="flex flex-wrap justify-center  gap-5 ">
                {
                    data?.map(datum => <WishlistCard key={datum?._id} datum={datum} setrefetch={setrefetch} refetch={refetch} ></WishlistCard>)
                }
            </div>
            <div>
                {
                    data?.length < 1 && <div>
                        <p className="text-2xl sm:text-4xl font-bold text-center">No Blogs Added To The Wishlist!!!</p>
                        <div className="flex justify-center items-center p-4">
                            <img className="w-[250px] sm:w-[300px]" src={notfounddata} alt="" />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Wishlist;