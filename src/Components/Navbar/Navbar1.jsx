// import React from 'react';
import { useEffect, useState } from 'react';
import { BsFire } from 'react-icons/bs';
import { LiaBuromobelexperte, LiaConnectdevelop } from 'react-icons/lia';
import { MdPermDeviceInformation, MdNotificationsActive, MdBrowserUpdated } from 'react-icons/md';
import { FaConnectdevelop, FaBuromobelexperte } from 'react-icons/fa6';
import './Navbar2.css'
const Navbar1 = () => {
    // const [currentTime, setcurrentTime] = useState('_ _: _ _: _ _')
    const [currentdate, setcurrentdate] = useState('DD')
    const [currentmonth, setcurrentmonth] = useState('MM')
    const [currentyear, setcurrentyear] = useState('YY')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const textTitles = ["Expert Writers, Engaging.", " Informative Content, Credible.", "Active Community Engagement.", "Regular Updates, Connection.", "Connect: Blog Vortex."];
    // const logo = [<GrUserExpert></GrUserExpert>, <MdPermDeviceInformation></MdPermDeviceInformation>, <MdNotificationsActive></MdNotificationsActive>, <GrDocumentUpdate></GrDocumentUpdate>, <FaConnectdevelop></FaConnectdevelop>];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentTextIndex < textTitles.length - 1) {

                setTimeout(() => {
                    setCurrentTextIndex(currentTextIndex + 1);

                }, 500);
            }
            else {
                setCurrentTextIndex(0);
            }
        }, 3000);


        return () => clearTimeout(timer);
    }, [currentTextIndex, textTitles]);
    useEffect(() => {

        const intervelId = setInterval(() => {
            let date = new Date();
            const monthNames = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
            ];
            // console.log(Date.parse(date));
            let day = String(date.getDate()).padStart(2, '0')
            let month = monthNames[date.getMonth()].slice(0, 3)
            let fullyear = date.getFullYear()
            // const hours = String(date.getHours()).padStart(2, '0');
            // const ampm = hours >= 12 ? 'PM' : 'AM';
            // const hours12 = String(hours % 12 || 12).padStart(2, '0');
            // let minutes = String(date.getMinutes()).padStart(2, '0');
            // let seconds = String(date.getSeconds()).padStart(2, '0');
            // let time = `  ${hours12}: ${minutes}: ${seconds} ${ampm}`
            // let dates = `  ${day} / ${month} / ${fullyear}`

            // setcurrentTime(time)
            setcurrentdate(day)
            setcurrentmonth(month)
            setcurrentyear(fullyear)
        }, 1000);
        return () => clearInterval(intervelId);
    }, []);
    return (
        <div>
            <nav className="bg-black text-white flex justify-between p-2 px-5">
                <div className='flex gap-5 justify-center items-center'>
                    <h3 className='text-sm font-bold flex  items-center gap-1'><BsFire></BsFire> <span>Popular</span></h3>
                    {/* <h2 className='text-sm font-medium'>Most watched score in the world</h2> */}
                    <p className={` text-sm font-bold hidden sm:flex gap-1 text-white items-center `}>
                        <span className='text-base font-bold'>
                            {currentTextIndex === 0 && <LiaBuromobelexperte></LiaBuromobelexperte>}
                            {currentTextIndex === 1 && <MdPermDeviceInformation></MdPermDeviceInformation>}
                            {currentTextIndex === 2 && <MdNotificationsActive></MdNotificationsActive>}
                            {currentTextIndex === 3 && <MdBrowserUpdated></MdBrowserUpdated>}
                            {currentTextIndex === 4 && <LiaConnectdevelop></LiaConnectdevelop>}
                        </span>
                        {textTitles[currentTextIndex]}</p>
                </div>
                <div>
                    <div className='flex  items-center gap-2'>
                        <p className='text-xl font-bold'>{currentdate}</p>
                        <div>
                            <p className='text-xs font-medium'>{currentmonth}</p>
                            <p className='text-xs font-medium'>{currentyear}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar1;