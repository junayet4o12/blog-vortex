// import React from 'react';
import { useEffect, useState } from 'react';
import { BsFire } from 'react-icons/bs';

const Navbar1 = () => {
    // const [currentTime, setcurrentTime] = useState('_ _: _ _: _ _')
    const [currentdate, setcurrentdate] = useState('DD')
    const [currentmonth, setcurrentmonth] = useState('MM')
    const [currentyear, setcurrentyear] = useState('YY')
    useEffect(() => {

        const intervelId = setInterval(() => {
            let date = new Date();
            const monthNames = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'
            ];
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
                    <h3 className='text-sm font-bold flex  items-center gap-1'><BsFire></BsFire> <span>Populer</span></h3>
                    <h2 className='text-sm font-medium'>Most watched score in the world</h2>
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