/* eslint-disable react/prop-types */
// import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { BiSolidAddToQueue } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const BlogCard = ({ blog }) => {
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
    // const [expanded, setExpanded] = useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
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
                
                
                    <Typography  paddingX={` 15px`} variant="body2" color="text.secondary">
                        {short_description}
                    </Typography>
                
                <CardActions className='flex justify-start items-center'>
                   <button className='btn btn-xs btn-neutral flex gap-1 rounded-sm'><span className='text-lg'><CgDetailsMore></CgDetailsMore></span>Details</button>
                   <button className='btn  btn-neutral flex flex-row btn-xs gap-1 rounded-sm'><span className='text-lg '><BiSolidAddToQueue></BiSolidAddToQueue> </span>wishlist</button>

                </CardActions>

            </Card>
        </div>
    );
};

export default BlogCard;