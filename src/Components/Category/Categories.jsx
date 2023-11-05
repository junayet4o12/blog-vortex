// import React from 'react';
import Marquee from "react-fast-marquee";
import sports from '../../assets/sports.jpg'
import technology from '../../assets/technology.jpg'
import food from '../../assets/chockolate.jpg'
import finance from '../../assets/finance.jpg'
import fashion from '../../assets/fashion.jpg'
import tourist from '../../assets/tourist.jpg'
const Categories = () => {

    return (
        <div>
            <div>
                <div className="px-10 sm:px-36">
                    <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Explore Our  <br />  <span className="text-4xl font-semibold text-black">Diverse Categories</span></h2>
                    <p className="text-base font-medium pb-7 max-w-2xl">Explore our diverse categories to discover articles that match your interests. Dive into knowledge, inspiration, and entertainment, all neatly organized for your convenience.</p>
                </div>
            </div>
            <Marquee

                pauseOnHover={true}
                speed={20}
            >
                <div className="w-[250px] sm:w-[400px] mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Sports</h2>
                        <p className="text-sm font-medium">Your Gateway to Sporting Excitement</p>
                    </div >
                    <img className="w-full rounded-md h-[155px] sm:h-[250px]" src={sports} alt="" />
                </div>
                <div className="w-[250px] sm:w-[400px]  mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Tourist</h2>
                        <p className="text-sm font-medium">Explore the World with Us</p>
                    </div >
                    <img className="w-full rounded-md h-[155px]  sm:h-[250px] " src={tourist} alt="" />
                </div>
                <div className="w-[250px] sm:w-[400px]  mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Finance</h2>
                        <p className="text-sm font-medium">Your Guide to Financial Wellness</p>
                    </div >
                    <img className="w-full rounded-md h-[155px] sm:h-[250px]" src={finance} alt="" />
                </div>
                <div className="w-[250px] sm:w-[400px]  mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Food</h2>
                        <p className="text-sm font-medium">Savoring Culinary Adventures</p>
                    </div >
                    <img className="w-full rounded-md h-[155px] sm:h-[250px]" src={food} alt="" />
                </div>
                <div className="w-[250px] sm:w-[400px]  mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Technology</h2>
                        <p className="text-sm font-medium"> Navigating the Digital Universe</p>
                    </div >
                    <img className="w-full rounded-md h-[155px] sm:h-[250px]" src={technology} alt="" />
                </div>

                <div className="w-[250px] sm:w-[400px]  mx-7">
                    <div className=" p-2">
                        <h2 className="text-lg font-bold uppercase">Fashion</h2>
                        <p className="text-sm font-medium"> Unveiling the Art of Fashione</p>
                    </div >
                    <img className="w-full h-[155px] sm:h-[250px]" src={fashion} alt="" />
                </div>

            </Marquee>
        </div>
    );
};

export default Categories;