// import React from 'react';

const ContactUs = () => {
    return (
        <div className="py-7 bg-gray-50">
            <div className="px-10 sm:px-36">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Reach Out and Connect <br /> with <span className="text-4xl font-semibold text-black">Blog Vortex</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">This description invites visitors to get in touch with your blog and emphasizes the idea of establishing a connection or communication with your audience.</p>
            </div>
            <div className="text-black">
                <div className="flex flex-wrap  justify-center items-center gap-x-4 p-4 gap-y-7">
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-200 border-[1px] rounded text-sm font-semibold" type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-200 border-[1px] rounded text-sm font-semibold" type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-200 border-[1px] rounded text-sm font-semibold" type="text" name="country" placeholder="Your Country Name" />
                    </div>
                    <div className="w-full md:w-[360px] lg:w-[480px] flex justify-center items-center">
                        <input className="w-[70%]  md:w-[360px] lg:w-[480px] py-3 px-4 bg-gray-200 border-[1px] rounded text-sm font-semibold" type="text" name="number" placeholder="Your Phone Number" />
                    </div>
                </div>
                <div className="flex justify-center items-center mb-7">
                    <textarea className=" border-[1.5px]  rounded-lg h-[200px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] p-4 text-sm font-semibold bg-gray-200" placeholder="Write your experience...."></textarea>
                </div>
                <div className="text-center">
                    <button className="btn rounded-lg btn-neutral bg-black  text-white font-bold text-sm border-none">send email</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;