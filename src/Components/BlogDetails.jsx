// import React from 'react';
import emptyphoto from '../../src/assets/emptyuser.jpg'
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
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
import notfounddata from '../assets/notfounddata.png';
import cannot from '../assets/cannot.svg'
import UseAxiosSecure from './Secure/UseAxiosSecure';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const BlogDetails = () => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [commentsdata, setcommentdata] = useState([]);
    const [hituseeffect, sethituseeffect] = useState(0);
    const [seemore, setseemore] = useState(true);
    const [shortdessseemore, setshortdessseemore] = useState(true);
    const [longdessseemore, setlongdessseemore] = useState(true);
    const [toggle, settoggle] = useState(true)
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const securedata = UseAxiosSecure()
    const handleseemore = () => {
        setseemore(!seemore);
    }
    const handleshortdessseemore = () => {
        setshortdessseemore(!shortdessseemore);
    }
    const handlelongdessseemore = () => {
        setlongdessseemore(!longdessseemore);
    }
    useEffect(() => {
        axios.get(`https://blog-site-backend-rouge.vercel.app/api/v1/singleblogcomments?id=${id}`)
            .then(res => {
                // console.log(hituseeffect);
                setcommentdata(res.data);
                // console.log(res.data);
            })
    }, [id, hituseeffect])
    // console.log(id);
    // const { data, isLoading } = useQuery({
    //     queryKey: ['singleblog'],
    //     queryFn: async () => fetch(`https://blog-site-backend-rouge.vercel.app/api/v1/singleblog/${id}`, {credentials: 'include'})
    //         .then(res => res.json())


    // })
    useEffect(() => {
        setisLoading(true)
        securedata.get(`/api/v1/singleblog/${id}`, { email: user?.eamil })
            .then(res => setdata(res?.data))
        setisLoading(false)
    }, [id, securedata, user?.eamil])
    // console.log(data?._id);
    if (isLoading) {
        return <div>
            <BlogsLoading></BlogsLoading>
        </div>
    }
    const { img, title, short_description, long_description, category, email, posterImg, posterName, _id } = data;

    // console.log(email);


    return (

        <div className="py-10">
            <div className="px-10 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Full Details of<br /> blog   <span className="text-4xl font-semibold text-black">{title}</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">{short_description}</p>

            </div>

            <div className="flex justify-center items-center p-10">
                <Card className="md:w-full md:max-w-[60rem] md:flex-row bg-gray-200 md:space-x-5 rounded-md md:rounded-none md:rounded-r-md flex flex-col " >
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0  shrink-0 rounded-r-none  max-w-[400px] w-full  sm:w-[420px] bg-gray-200"
                    >

                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img
                                    src={img}
                                    alt="card-image"
                                    className="h-full sm:h-[300px] md:h-[400px]  w-full object-cover rounded-t-md md:rounded-none md:rounded-l-md cursor-pointer"
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </CardHeader>
                    <CardBody className="p-4 w-full max-w-[400px] sm:max-w-full sm:w-[400px] md:w-max">
                        <div className="flex items-center gap-3 pb-5">
                            <div className="avatar">
                                <div className="w-14 h-14  rounded-full">
                                    <img src={posterImg} />
                                </div>
                            </div>

                            <Typography variant="h6" color="black" className="mb-4 uppercase">
                                {posterName}
                            </Typography>
                        </div>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            Category: {category}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            <p className={` font-medium text-base`}>{shortdessseemore ? (short_description)?.slice(0, 70) : short_description}  <span className={`${short_description?.length > 70 ? '' : 'hidden'}`}>{
                                shortdessseemore ? '......' : ''
                            }</span>
                                <span onClick={handleshortdessseemore} className={` hover:text-gray-600 font-bold cursor-pointer ${short_description?.length > 70 ? 'block' : 'hidden'}`} >{
                                    shortdessseemore ? 'See more' : 'See less'
                                }</span></p>
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            <p className={` font-medium text-sm`}>{longdessseemore ? (long_description)?.slice(0, 150) : long_description}  <span className={`${long_description?.length > 150 ? '' : 'hidden'}`}>{
                                longdessseemore ? '......' : ''
                            }</span>
                                <span onClick={handlelongdessseemore} className={` hover:text-gray-600 font-bold cursor-pointer ${long_description?.length > 150 ? 'block' : 'hidden'}`} >{
                                    longdessseemore ? 'See more' : 'See less'
                                }</span></p>
                        </Typography>
                        <div>
                            <div className={`${email !== user?.email ? 'hidden' : 'block'}`}>
                                <Link to={`/updateblog/${_id}`}>
                                    <button className="btn btn-neutral bg-black text-sm font-bold">Update</button>
                                </Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="py-7 px-4 border-2 border-gray-400 rounded-lg m-4 bg-gray-100">
                <h2 className="text-2xl font-bold text-center p-2 ">Users Comments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
                    {
                        commentsdata.slice(0, toggle ? 3 : data.length).map(commentt => <div key={commentt._id} className="flex gap-5 bg-gray-200  max-w-full  p-2 px-4 rounded-3xl">

                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={commentt?.commentedUserImg ? commentt?.commentedUserImg : emptyphoto} />
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
                    <button onClick={() => settoggle(!toggle)} className="btn bg-black btn-neutral text-sm font-bold text-white my-4">
                        {
                            toggle ? 'See More' : 'See Less'
                        }</button>
                </div>
                {
                    commentsdata?.length < 1 && <div>
                        <p className="text-4xl font-bold text-center">No comment Available!!!</p>
                        <div className="flex justify-center items-center p-4">
                            <img className="w-[250px] sm:w-[300px]" src={notfounddata} alt="" />
                        </div>
                    </div>
                }
            </div>
            <div className="bg-gray-50 m-4">
                <div className={`${email == user?.email ? 'hidden' : 'block'}`}>
                    <Comments data={data} sethituseeffect={sethituseeffect} hituseeffect={hituseeffect}></Comments>
                </div>
                <div className={`${email !== user?.email ? 'hidden' : 'block'}`}>
                    <h2 className="text-4xl pt-5 font-bold text-center ">Can not comment on own blog</h2>
                    <div className="flex justify-center items-center  px-4">
                        <img className="w-[200px] sm:w-[250px]" src={cannot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;