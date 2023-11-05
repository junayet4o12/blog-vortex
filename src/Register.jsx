// import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import { MdLogin, MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from './Authantication/AuthProviders';
import auth from './Authantication/firebase.config';
import registerimg from './assets/register.svg'

const Register = () => {
    const [doneerror, setdoneerror] = useState('')
    const [showpass, setshowpass] = useState(true);
    const [passvalue, setpassvalue] = useState(null)
    const { createuser, googlelogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handlepassvalue = (e) => {
        e.preventDefault()
        setpassvalue(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        setdoneerror('');
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9\s!@#$%^&*(),.?":{}|<>]{6,}$/.test(password)) {
            return setdoneerror(<p className="text-red-500">Password must be at least 6 characters long, contain at least one capital letter and special charecter.</p>)
        }


        createuser(email, password)
            .then(result => {
                console.log(result.user);

                updateProfile(auth.currentUser, {
                    displayName: name,

                }).then(() => {

                }).catch((error) => {
                    console.log(error);
                });
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })

                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
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


                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error);
                setdoneerror(<p className="text-red-500">{error.message.split('/')[1].split(')')[0].replace(/-/g, ' ')}</p>)
            })
    }
    return (
        <div className="py-7 px-7 flex ">
            <div className='w-[50%]  justify-center hidden lg:block items-center'>
                <div className='h-full flex justify-center items-center'>
                    <img className='w-[500px] h-[400px]  object-cover' src={registerimg} alt="" />
                </div>
            </div>
            <form onSubmit={handlesubmit} className="max-w-[550px] bg-gray-500 mx-auto ">
                <div className=" bg-gradient-to-b from-gray-900  to-gray-300 py-10">
                    <h1 className='text-white font-medium text-3xl text-center uppercase'>Wc to registration</h1>

                    <p className='font-bold text-sm text-white text-center max-w-[400px] px-3 mx-auto pt-4'>If you don&apos;t have an account, please complete the registration form below to create a user account. This will provide you with access to our platform and services.</p>
                </div>
                <div className="mx-auto w-[100%] p-5 bg-gray-200 pb-10 text-black  ">
                    <h2 className="text-3xl font-bold uppercase  text-center mb-6 text-gray-600 ">User Register</h2>
                    <div className="flex flex-col justify-center items-center gap-9 text-sm font-medium">
                        <div className="relative w-full sm:w-[450px]">
                            <input name="name" className="w-full  sm:w-[450px]  bg-gray-50 p-3 px-10 rounded-3xl " type="text" placeholder="name" required />
                            <p className='text-xl absolute top-3.5 left-3 '><MdOutlineDriveFileRenameOutline></MdOutlineDriveFileRenameOutline></p>
                        </div>
                        <div className="relative w-full sm:w-[450px]">
                            <input required name="email" className="w-full  sm:w-[450px]  bg-gray-50 p-3 px-10 rounded-3xl " type="email" placeholder="email" />
                            <p className='text-xl absolute top-3.5 left-3 '><HiOutlineMail></HiOutlineMail></p>
                        </div>
                        <div className="relative w-full sm:w-[450px]">
                            <input required onChange={handlepassvalue} type={showpass ? 'password' : 'text'} name="password" className="w-full  sm:w-[450px]  bg-gray-50 p-3 px-10 rounded-3xl " placeholder="password" />
                            <p className='text-xl absolute top-3 left-3 '><RiLockPasswordLine></RiLockPasswordLine></p>
                            <p onClick={() => (setshowpass(!showpass))} className={`absolute top-2 right-0 mr-2 cursor-pointer text-lg  p-1 ${!passvalue && 'hidden'}`}>{showpass ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</p>
                            <div className="text-sm font-bold">{doneerror}</div>
                            <div className='flex justify-between p-2 '>
                                <p className='text-sm font-medium'>Already have an Account? <br /> <Link to='/login'><span className='font-bold Register text-gray-700 hover:text-gray-900 cursor-pointer flex gap-1 hover:underline items-center'><MdLogin></MdLogin>Log in</span></Link></p>

                            </div>
                        </div>
                        <div className='w-full flex flex-col  justify-center items-center gap-2'>
                            <button type='submit' className='btn bg-gradient-to-r from-gray-900 via-gray-700  to-gray-400 w-full  sm:w-[450px]  text-white font-bold rounded-3xl border-none hover:bg-gradient-to-r hover:to-gray-900 hover:via-gray-700  hover:from-gray-400'><GiArchiveRegister></GiArchiveRegister> Register</button>
                            <p>Or</p>
                            <p onClick={handlegooglelogin} className='btn bg-gradient-to-l from-gray-900 via-gray-700  to-gray-400 w-full  sm:w-[450px]  text-white font-bold rounded-3xl border-none hover:bg-gradient-to-l hover:to-gray-900 hover:via-gray-700  hover:from-gray-400'><span className='text-2xl'><FcGoogle></FcGoogle></span> Login with google</p>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Register;