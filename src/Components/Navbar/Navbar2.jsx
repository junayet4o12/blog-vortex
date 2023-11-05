// import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdAppRegistration } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import { MdLibraryAdd, MdFeaturedPlayList } from 'react-icons/md';
import { BsReplyAllFill } from 'react-icons/bs';
import { TbListSearch } from 'react-icons/tb';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { LuLogIn } from 'react-icons/lu';
import './Navbar2.css'
import bloglogo from '../../assets/BlogLogo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Authantication/AuthProviders';
const Navbar2 = () => {
    const { user, logout } = useContext(AuthContext);
    const navitem = <>
        <li> <NavLink className=' hover:underline hover:bg-transparent font-medium flex  items-center gap-1' to='/'><RxHome></RxHome>Home</NavLink> </li>
        <li> <NavLink className=' hover:underline hover:bg-transparent font-medium flex  items-center gap-1' to='/addblog'><span className='text-base'><MdLibraryAdd></MdLibraryAdd></span>Add Blog</NavLink> </li>
        <li> <NavLink className=' hover:underline hover:bg-transparent font-medium' to='/allblogs'><span className='text-base rotate-180'><BsReplyAllFill></BsReplyAllFill></span>All Blogs</NavLink> </li>
        <li> <NavLink className=' hover:underline hover:bg-transparent font-medium' to='/featuredblogs'><span className='text-base'><MdFeaturedPlayList></MdFeaturedPlayList></span>Featured Blogs</NavLink> </li>
        <li> <NavLink className=' hover:underline hover:bg-transparent font-medium' to='/wishlist'><span className='text-base'><TbListSearch></TbListSearch></span>Wishlist</NavLink> </li>
        {
            user ? '' : <li> <NavLink className=' hover:underline hover:bg-transparent font-medium' to='/login'><span className='text-base'><LuLogIn></LuLogIn></span>LogIn</NavLink> </li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="navbar-start">

                    <div className=" block lg:hidden ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn text-xl bg-transparent border-none hover:bg-transparent"> <AiOutlineMenuUnfold></AiOutlineMenuUnfold></label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content activeChanger ">
                                {navitem}

                            </ul>
                        </div>
                    </div>
                    <div className='w-max'><img className='w-10 navicon' src={bloglogo} alt="" /></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  activelink">
                        {navitem}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex gap-1 justify-center items-center">
                        {
                            user ? <>
                                <div className='mr-2  flex flex-col justify-center items-center'>
                                    <div className='w-10 h-10 rounded-full bg-white overflow-hidden'>
                                        <img className="w-full h-full" src={user.photoURL ? user.photoURL : ''} alt="" />
                                    </div>

                                </div>
                                <p onClick={() => logout()} className={`btn flex flex-col justify-center items-center   w-max   font-bold border-none bg-[#b23b3b] text-white hover:bg-[#d33333] gap-1`}><span>logOut</span><span className="text-lg"><RiLogoutBoxLine></RiLogoutBoxLine></span></p>

                            </> : <Link to='/register'>
                                <button className="btn btn-neutral bg-black text-white font-bold border-none flex flex-col justify-center items-center gap-1"><span>Register</span><span className="text-lg"><MdAppRegistration></MdAppRegistration></span></button>
                            </Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;