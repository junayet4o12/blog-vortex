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


import { BiSolidAddToQueue } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Authantication/AuthProviders';
import toast from 'react-hot-toast';
import axios from 'axios';



const BlogCard = ({ blog, idx }) => {
    const { user } = useContext(AuthContext)
    const { posterImg, img, _id, title, short_description, long_description, category, posterName, email, post_date } = blog;
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const date = new Date(post_date)
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const handlewishlist = () => {
        if (!user?.email) {
            return toast.error('Please Log in first!!!')
        }

        const newblog = {
            posterImg,
            blogid: _id,
            img,
            title,
            short_description,
            long_description,
            category,
            posterName,
            email,
            post_date,
            listerUser: user?.email
        }

        axios.post('http://localhost:3000/api/v1/wishlistBlog', newblog)
            .then(res => {
                console.log(res.data);
                toast.success('Add to Wishlist successfully!!!')
            })
    }
    return (
        <motion.div initial={{ x: ((idx + 1) % 2 ? 100 : -100), }}
            whileInView={{ x: 0, }}
            transition={{ duration: 1 }}>
            <Card
                sx={{ maxWidth: 345 }}>
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

                <CardMedia
                    component="img"
                    className='h-[250px] '
                    image={img}
                    alt="Paella dish"
                />

                <Typography variant="body2" color="text.secondary" fontWeight="bold" fontSize="18px" padding={`10px 15px`}>
                    {title}
                </Typography>


                <Typography paddingX={` 15px`} variant="body2" color="text.secondary">
                    {short_description}
                </Typography>

                <CardActions className='flex justify-start items-center gap-2'>
                    <Link to={`/details/${_id}`}>
                        <button className='btn btn-xs btn-neutral flex gap-1 rounded-sm'><span className='text-lg'><CgDetailsMore></CgDetailsMore></span>Details</button>
                    </Link>
                    <button onClick={handlewishlist} className='btn  btn-neutral flex flex-row btn-xs gap-1 rounded-sm'><span className='text-lg '><BiSolidAddToQueue></BiSolidAddToQueue> </span>wishlist</button>

                </CardActions>

            </Card>
        </motion.div>
    );
};

export default BlogCard;