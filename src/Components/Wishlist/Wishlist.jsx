// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProviders";
// import { useQuery } from "@tanstack/react-query";
// import BlogsLoading from "../AllBlogs/BlogsLoading";
import WishlistCard from "./WishlistCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [data, setdata] = useState([])
    const [refetch, setrefetch] = useState(0)
   
    // const { data, isLoading} = useQuery({
    //     queryKey: ['singlewishlistitemhascome'],
    //     queryFn: () => fetch(`http://localhost:3000/api/v1/singuserwishlistblog/${user?.email}`)
    //         .then(res => res.json()),
        
    // })
    
    // if (isLoading) {
    //     return <BlogsLoading></BlogsLoading>
    // }
   
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/singlewishlistBlog?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setdata(res.data)
            })
            console.log(refetch);
    }, [user?.email, refetch ])

    
    return (
        <div>
            <div className="flex flex-wrap justify-center  gap-5 py-20">
                {
                    data?.map(datum => <WishlistCard key={datum._id} datum={datum} setrefetch={setrefetch} refetch={refetch} ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;