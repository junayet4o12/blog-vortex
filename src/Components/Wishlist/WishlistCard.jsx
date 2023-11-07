/* eslint-disable react/prop-types */
// import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


import {  RiDeleteBin6Fill } from 'react-icons/ri';
import { CgDetailsMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Authantication/AuthProviders';
import toast from 'react-hot-toast';
import axios from 'axios';
const WishlistCard = ({datum, setrefetch, refetch}) => {
    // console.log(setrefetch, refetch);
    
    const { posterImg, img, _id, title, short_description,  category, posterName,  post_date,blogid } =datum;
    console.log(_id);
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
      axios.delete(`http://localhost:3000/api/v1/wishlistBlog/${_id}`) 
      .then(res=>{
        console.log(res.data);
        toast.success('Deleted Successfullly!!')
        setrefetch(refetch+1)
      })  
    }
   
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
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
                    <Link to={`/details/${blogid}`}>
                        <button className='btn btn-xs btn-neutral flex gap-1 rounded-sm'><span className='text-lg'><CgDetailsMore></CgDetailsMore></span>Details</button>
                    </Link>
                    <button onClick={handleDelete} className='btn  btn-neutral flex flex-row btn-xs gap-1 rounded-sm'><span className='text-base '><RiDeleteBin6Fill></RiDeleteBin6Fill> </span>Delete</button>

                </CardActions>

            </Card>
        </div>
    );
};

export default WishlistCard;