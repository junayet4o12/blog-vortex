// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { EffectCube } from 'swiper/modules';
import banner from '../../assets/BlogBanner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { motion } from "framer-motion"
import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Banner = () => {

    return (
        <div>
            <div

                className=" bg-base-200 pb-7 lg:pb-0">
                <div className="flex flex-col lg:justify-between lg:flex-row-reverse overflow-hidden  gap-10 lg:gap-0 relative">
                    <div

                        className='lg:w-[60%] '>
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, EffectCube, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            
                            effect="cube"

                            scrollbar={{ draggable: true }}
                            speed={5000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}

                        >
                            <SwiperSlide>
                                <img src={banner} className="h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={banner2} className="h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={banner3} className="h-full object-cover" />
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    <motion.div
                        initial={{ x: -100, opacity: 0, scale: 0.5 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className='lg:[40%] px-5 flex flex-col justify-center absolute lg:static z-10 h-full w-full bg-[#00000091] lg:bg-transparent text-white lg:text-black'>
                        <h1 className="text-3xl sm:text-6xl  font-bold text-gray-400 lg:text-gray-700"><span className='font-medium'>News <br /> &</span> Magazine</h1>
                        <h3 className='text-2xl font-semibold py-4'>Blog Vortex</h3>
                        <p className="pb-4 font-semibold text-sm max-w-md">Your Gateway to an Infinite World of Knowledge and Inspiration. Dive into thought-provoking articles and explore a whirlwind of ideas.</p>
                        <button className="btn btn-neutral w-max">Know More</button>

                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default Banner;