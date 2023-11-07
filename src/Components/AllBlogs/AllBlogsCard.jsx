/* eslint-disable react/prop-types */
// import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import { BiSolidAddToQueue } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { useState } from 'react';
import './AllBlogsCard.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Authantication/AuthProviders';
import toast from 'react-hot-toast';
import axios from 'axios';
const ExpandMore = styled((props) => {
    const {  ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const AllBlogsCard = ({ blog }) => {
    const {user} = useContext(AuthContext);
    const [jumpbtn, setjumpbtn] = useState(true);
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
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handlewishlist = () => {
        if (!user?.email) {
            return toast.error('Please Log in first!!!')
        }

        const newblog = {
            posterImg,
             img,
             title,
             blogid: _id,
             short_description,
             long_description,
             category,
             posterName,
             email,
             post_date, 
             listerUser : user?.email
        }
        
        axios.post('http://localhost:3000/api/v1/wishlistBlog', newblog)
            .then(res => {
                console.log(res.data);
                toast.success('Add to Wishlist successfully!!!')
            })
    }
    return (
        <div className='fullcardhover'>
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

                <div className='pr-2'>
                    <Typography variant="body2" color="text.secondary" fontWeight="bold" fontSize="18px" padding={`10px 15px`}>
                        {title}
                    </Typography>


                    <Typography className='whitespace-nowrap overflow-hidden ' paddingX={` 15px`} variant="body2" color="text.secondary">
                        {short_description}
                    </Typography>
                </div>

                <CardActions className='flex justify-start items-center gap-2'>
                <Link to={`/details/${_id}`}>
                        <button className='btn btn-xs btn-neutral flex gap-1 rounded-sm'><span className='text-lg'><CgDetailsMore></CgDetailsMore></span>Details</button>
                    </Link>
                    <button onClick={handlewishlist} className='btn  btn-neutral flex flex-row btn-xs gap-1 rounded-sm'><span className='text-lg '><BiSolidAddToQueue></BiSolidAddToQueue> </span>wishlist</button>

                </CardActions>
                <CardActions disableSpacing>

                    <div onClick={() => setjumpbtn(!jumpbtn)} className={`ml-auto ${jumpbtn ? 'cardDetailsbtn' : ''}`}>
                        <ExpandMore

                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </div>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description</Typography>
                        <Typography paragraph>
                            {short_description}
                        </Typography>
                        <Typography paragraph>
                            {long_description}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default AllBlogsCard;