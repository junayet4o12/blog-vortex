// import React from 'react';
import { useContext, useState } from 'react';
import blogimg from '../../assets/addblog.svg'
import formbg from '../../assets/formbg.jpg'
import { AuthContext } from '../../Authantication/AuthProviders';
import axios from 'axios';
import toast from 'react-hot-toast';
import UseAxiosSecure from '../Secure/UseAxiosSecure';
const AddBlogs = () => {
    const [blogcategory, setblogcategory] = useState('')
    const { user } = useContext(AuthContext);
    const handleCategory = (e) => {
        setblogcategory(e.target.value)
    }
    const secureDate = UseAxiosSecure()

    secureDate.get('/api/v1/checkingclients', { email: user?.email })
        .then(res => console.log(res.data))
    const handlesubmit = e => {
        e.preventDefault()
        const form = e.target;

        const title = form.title.value;
        const short_description = form.shortDescription.value;
        const long_description = form.longDescription.value;

        const category = blogcategory;
        const img = form.imgUrl.value;
        const posterImg = user?.photoURL;
        const posterName = user?.displayName;
        const email = user?.email;
        const post_date = Date.parse(new Date());
        const blog = {
            title,
            short_description,
            long_description,
            category,
            img,
            posterImg,
            posterName,
            email,
            post_date
        }
        console.log(blog);
        secureDate.post('/api/v1/allblogs', blog)
            .then(res => {
                console.log(res.data);
                if (res?.data?.acknowledged) {
                    toast.success('Blog Added Successfully')
                    form.title.value = '';
                    form.shortDescription.value = '';
                    form.longDescription.value = '';


                    form.imgUrl.value = '';
                    setblogcategory('')
                }


            })
    }
    return (
        <div>
            <div className="px-10 sm:px-32 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Add a New Blog Post <br /> to the  <span className="text-4xl font-semibold text-black">Blog Vortex</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">Contribute to the Blog Vortex community by sharing your unique perspective and expertise. Create and publish a new blog post that resonates with our readers. Fill out the details below to get started and engage with our audience.</p>

            </div>
            <div className="py-7 px-7 flex ">
                <div className='w-[50%]  justify-center hidden lg:block items-center' >
                    <div className='h-full flex justify-center items-center'>
                        <img className='w-[500px] h-[400px]  object-cover' src={blogimg} alt="" />
                    </div>
                </div>
                <form style={{ backgroundImage: `url(${formbg})` }} onSubmit={handlesubmit} className="bg-cover bg-center   rounded-md font-bold text-sm w-full max-w-[550px]   mx-auto flex flex-col gap-3 border-[1.5px] border-gray-400 shadow-xl shadow-[#bdb9b9]">
                    <div className='h-full w-full p-4 py-7 flex flex-col bg-[#ffffffb3] gap-5 rounded-md '>
                        <h2 className='text-4xl font-bold text-center py-5'>Create Your Own Blog</h2>
                        <div className='flex gap-4 flex-col '>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name='title' required
                                    className="font-bold w-full   border-black h-full px-3  font-sans text-sm transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border-[1.5px] placeholder-shown:border-blue-black placeholder-shown:border-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                                    placeholder=" "
                                />
                                <label className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    <span className='font-bold'>Blog Title</span>
                                </label>
                            </div>
                            <div className="relative h-11   w-full min-w-[200px]">
                                <select required value={blogcategory} onChange={handleCategory}
                                    className="font-bold w-full cursor-pointer   border-black h-full px-3  font-sans text-sm transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border-[1.5px] placeholder-shown:border-blue-black placeholder-shown:border-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"

                                >

                                    <option value="" disabled>Select category</option>
                                    <option>Travel</option>
                                    <option>Sports</option>
                                    <option>Technology</option>
                                    <option>Food and Cooking</option>
                                    <option>Fashion</option>
                                    <option>Personal Finance</option>
                                </select>
                                <label className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    <span className='font-bold'>Select Category</span>
                                </label>
                            </div>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input name='imgUrl' required
                                className="font-bold w-full   border-black h-full px-3  font-sans text-sm transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border-[1.5px] placeholder-shown:border-blue-black placeholder-shown:border-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                                placeholder=" "
                            />
                            <label className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='font-bold'>Img Url</span>
                            </label>
                        </div>

                        <div className="relative h-[100px] w-full min-w-[200px]">
                            <textarea name='shortDescription' required
                                className="font-bold w-full   border-black h-full px-3 py-3 font-sans text-sm transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border-[1.5px] placeholder-shown:border-blue-black placeholder-shown:border-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                                placeholder=" "
                            ></textarea>
                            <label className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='font-bold'>Short Description</span>
                            </label>
                        </div>
                        <div className="relative h-[170px] w-full min-w-[200px]">
                            <textarea name='longDescription' required
                                className="font-bold w-full   border-black h-full px-3 py-3 font-sans text-sm transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-black outline outline-0 placeholder-shown:border-[1.5px] placeholder-shown:border-blue-black placeholder-shown:border-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-black"
                                placeholder=" "
                            ></textarea>
                            <label className="font-bold before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-black peer-placeholder-shown:after:border-black peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-black peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='font-bold'> Long Description</span>
                            </label>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-neutral bg-black text-sm font-bold px-10 text-white'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;