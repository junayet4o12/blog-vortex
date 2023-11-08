/* eslint-disable react/prop-types */
// import React from 'react';
import { motion } from "framer-motion"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Authantication/AuthProviders';
import toast from 'react-hot-toast';
import axios from 'axios';
import UseAxiosSecure from '../Secure/UseAxiosSecure';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const WishlistCard = ({ datum, setrefetch, refetch, idx }) => {
    // console.log(setrefetch, refetch);
    const secureData = UseAxiosSecure()
    const { posterImg, img, _id, title, short_description, category, posterName, post_date, blogid } = datum;
    // console.log(_id);
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const date = new Date(post_date)
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const handleDelete = () => {
        secureData.delete(`/api/v1/wishlistBlog/${_id}`)
            .then(res => {
                console.log(res.data);
                if (res?.data?.deletedCount > 0) {
                    toast.success('Deleted Successfullly!!')
                    setrefetch(refetch + 1)
                }

            })
    }

    return (
        <motion.div initial={{ x: ((idx + 1) % 2 ? 100 : -100) }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }} >
            <Card sx={{ width: 300 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src={posterImg} alt="" />
                        </Avatar>
                    }

                    title={posterName}
                    subheader={`${month} ${day}, ${year}`}
                />

                <Typography variant="body2" color="text.secondary" fontWeight="bold" fontSize="18px" padding="5px">
                    {category}
                </Typography>

                <PhotoProvider>
                    <PhotoView src={img}>
                        <CardMedia
                            component="img"
                            className='h-[250px] cursor-pointer'
                            image={img}

                            alt="Paella dish"
                        />
                    </PhotoView>
                </PhotoProvider>

                <Typography variant="body2" color="text.secondary" fontWeight="bold" fontSize="18px" padding={`10px 15px`}>
                    {title}
                </Typography>


                <Typography paddingX={` 15px`} variant="body2" color="text.secondary" height={70} overflow={'hidden'}>
                    {short_description}
                </Typography>

                <CardActions className='flex justify-start items-center gap-2'>
                    <Link to={`/details/${blogid}`}>
                        <button className='btn btn-xs btn-neutral flex gap-1 rounded-sm'><span className='text-lg'><CgDetailsMore></CgDetailsMore></span>Details</button>
                    </Link>
                    <button onClick={handleDelete} className='btn  btn-neutral flex flex-row btn-xs gap-1 rounded-sm'><span className='text-base '><RiDeleteBin6Fill></RiDeleteBin6Fill> </span>Delete</button>

                </CardActions>

            </Card>
        </motion.div>
    );
};

export default WishlistCard;