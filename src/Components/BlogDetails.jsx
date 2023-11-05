// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BlogsLoading from "./AllBlogs/BlogsLoading";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,

} from "@material-tailwind/react";
import Comments from "./Comments/Comments";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authantication/AuthProviders";
const BlogDetails = () => {
    const [commentsdata, setcommentdata] = useState([]);
    const [hituseeffect, sethituseeffect] = useState(0);
    const [seemore, setseemore] = useState(true);
    const [toggle , settoggle] = useState(true)
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const handleseemore = () => {
        setseemore(!seemore);
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/singeblogcomments?id=${id}`)
            .then(res => {
                console.log(hituseeffect);
                setcommentdata(res.data);
                console.log(res.data);
            })
    }, [id, hituseeffect])
    console.log(id);
    const { data, isLoading } = useQuery({
        queryKey: ['singleblog'],
        queryFn: () => fetch(`http://localhost:3000/api/v1/signleblog?id=${id}`)
            .then(res => res.json())


    })
    console.log(data?._id);
    if (isLoading) {
        return <div>
            <BlogsLoading></BlogsLoading>
        </div>
    }
    const { img, title, short_description, long_description, category, email } = data;

    console.log(email);


    return (

        <div className="py-10">
            <div className="px-10 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Full Details of<br /> blog   <span className="text-4xl font-semibold text-black">{title}</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">{short_description}</p>

            </div>

            <div className="flex justify-center items-center">
                <Card className="md:w-full md:max-w-[48rem] md:flex-row bg-gray-200 md:space-x-5 rounded-md md:rounded-none md:rounded-r-md flex flex-col " >
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0  shrink-0 rounded-r-none w-[280px] sm:w-[400px]"
                    >
                        <img
                            src={img}
                            alt="card-image"
                            className="h-full w-full object-cover rounded-t-md md:rounded-none md:rounded-l-md"
                        />
                    </CardHeader>
                    <CardBody className="p-4 w-[280px] sm:w-[400px] md:w-max">
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            Category: {category}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {short_description}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {long_description}
                        </Typography>

                    </CardBody>
                </Card>
            </div>
            <div className="py-7 px-4">
                <h2 className="text-2xl font-bold text-center p-2 py-5">Users Comments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {
                        commentsdata.slice(0, toggle ? 3 : data.length).map(commentt => <div key={commentt._id} className="flex gap-5 bg-gray-200  max-w-full  p-2 px-4 rounded-3xl">

                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={commentt?.commentedUserImg} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-sm font-bold">{commentt?.commentedUser}</h2>
                                <p className={`font font-medium `}>{seemore ? (commentt?.comment)?.slice(0, 150) : commentt?.comment}  <span className={`${commentt?.comment?.length > 150 ? '' : 'hidden'}`}>{
                                    seemore ? '......' : ''
                                }</span>
                                    <span onClick={handleseemore} className={` hover:text-gray-600 font-bold cursor-pointer ${commentt?.comment?.length > 150 ? 'block' : 'hidden'}`} >{
                                        seemore ? 'See more' : 'See less'
                                    }</span></p>
                            </div>
                        </div>)
                    }
                </div>
                <div className={`text-center ${commentsdata.length > 3 ? 'block' : 'hidden'}`}>
                    <button onClick={()=> settoggle(!toggle)} className="btn bg-black btn-neutral text-sm font-bold text-white my-4">
                        {
                            toggle ? 'See More' : 'See Less'
                        }</button>
                </div>
                {
                    commentsdata?.length < 1 && <p className="text-4xl font-bold text-center">No comment Available!!!</p>
                }
            </div>
            <div className={`${email == user?.email ? 'hidden' : 'block'}`}>
                <Comments data={data} sethituseeffect={sethituseeffect} hituseeffect={hituseeffect}></Comments>
            </div>
        </div>
    );
};

export default BlogDetails;