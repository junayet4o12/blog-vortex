// import React from 'react';
import { motion } from "framer-motion"
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdLogin } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { AuthContext } from './Authantication/AuthProviders';
import loginimg from './assets/login.svg'
import toast from "react-hot-toast";

const Login = () => {
    const [loggedinuser, setloggedinuser] = useState('')
    const [showpass, setshowpass] = useState(true);
    const [passvalue, setpassvalue] = useState(null)
    const { loginuser, googlelogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handlepassvalue = (e) => {
        e.preventDefault()
        setpassvalue(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setloggedinuser('');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        loginuser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                e.target.reset();

                navigate('/')
            })
            .catch(error => {
                console.log(error);
                toast.error(`Something else in email or password..`)
                setloggedinuser(<p className="text-red-500">Something else in email or password..</p>)
            })
    }

    const handlegooglelogin = () => {
        googlelogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })


                navigate( '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message.split('/')[1].split(')')[0].replace(/-/g, ' '))
                setloggedinuser(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
            })
    }
    return (
        <div className="py-7 px-7 flex overflow-hidden">
            <motion.div
                initial={{ y: -100,  }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }} className='w-[50%]  justify-center hidden lg:block items-center'>
                <div className='h-full flex justify-center items-center'>
                <img  className='w-[500px] h-[400px]  object-cover' src={loginimg} alt="" />
                </div>
            </motion.div>
            <motion.form initial={{ y: 100,  }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }} onSubmit={handlesubmit} className="max-w-[550px] bg-blue-500 mx-auto ">
                <div className=" bg-gradient-to-b from-gray-900  to-gray-300 py-10">
                    <h1 className='text-white font-medium text-3xl text-center uppercase'>hello and welcome</h1>

                    <p className='font-bold text-sm text-white text-center max-w-[400px] px-3 mx-auto pt-4'>We encourage you to log in to access a broader range of features and services offered on our platform. Logging in enhances your experience .</p>
                </div>
                <div className="mx-auto w-[100%] p-5 bg-gray-200 pb-10 text-black  ">
                    <h2 className="text-3xl font-bold uppercase  text-center mb-6 text-gray-600 ">User Log In</h2>
                    <div className="flex flex-col justify-center items-center gap-9 text-sm font-medium">
                        <div className="relative w-full sm:w-[450px]">
                            <input required name="email" className="w-full  sm:w-[450px]  bg-gray-50 p-3 px-10 rounded-3xl " type="email" placeholder="email" />
                            <p className='text-xl absolute top-3.5 left-3 '><HiOutlineMail></HiOutlineMail></p>
                        </div>
                        <div className="relative w-full sm:w-[450px]">
                            <input required onChange={handlepassvalue} type={showpass ? 'password' : 'text'} name="password" className="w-full  sm:w-[450px]  bg-gray-50 p-3 px-10 rounded-3xl " placeholder="password" />
                            <p className='text-xl absolute top-3 left-3 '><RiLockPasswordLine></RiLockPasswordLine></p>
                            <p onClick={() => (setshowpass(!showpass))} className={`absolute top-2 right-0 mr-2 cursor-pointer text-lg  p-1 ${!passvalue && 'hidden'}`}>{showpass ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</p>
                            <div className="text-sm font-bold">{loggedinuser}</div>
                            <div className='flex justify-between p-2 gap-3'>
                                <p className='text-sm font-medium'>Don&apos;t have an Account? <br /> <Link to='/register'><span className='font-bold Register text-gray-700 hover:text-gray-900 cursor-pointer flex gap-1 hover:underline items-center'><GiArchiveRegister></GiArchiveRegister>Register</span></Link></p>
                                <p className='text-sm font-medium '>Forgot password?</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col  justify-center items-center gap-2'>
                            <button type='submit' className='btn bg-gradient-to-r from-gray-900 via-gray-700  to-gray-400 w-full  sm:w-[450px]  text-white font-bold rounded-3xl border-none hover:bg-gradient-to-r hover:to-gray-900 hover:via-gray-700  hover:from-gray-400'><MdLogin></MdLogin> Log in</button>
                            <p>Or</p>
                            <p onClick={handlegooglelogin} className='btn bg-gradient-to-l from-gray-900 via-gray-700  to-gray-400 w-full  sm:w-[450px]  text-white font-bold rounded-3xl border-none hover:bg-gradient-to-l hover:to-gray-900 hover:via-gray-700  hover:from-gray-400'><span className='text-2xl'><FcGoogle></FcGoogle></span> Login with google</p>
                        </div>
                    </div>

                </div>
            </motion.form>
        </div>
    );
};

export default Login;