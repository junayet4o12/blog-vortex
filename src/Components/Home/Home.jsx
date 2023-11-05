// import React from 'react';

import Banner from "./Banner";
import Blogs from "./Blogs/Blogs";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>  
           <Banner></Banner>
           <Blogs></Blogs>
           <NewsLetter></NewsLetter> 
           <ContactUs></ContactUs>
           <Footer></Footer>
           
           
           
        </div>
    );
};

export default Home;