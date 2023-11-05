// import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const BlogsLoading = () => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-20 h-[60vh]'>
            <div>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-5'>
                        <Skeleton variant="circular" width={45} height={45} />
                        <div>
                            <Skeleton variant="rectangular" width={205} height={20} />
                            <Skeleton variant="rectangular" width={205} height={20} />
                        </div>
                    </div>
                    <Skeleton variant="rectangular" width={270} height={200} />
                </div>
                <div>
                    <Skeleton variant="rectangular" width={270} height={25} />
                    <Skeleton variant="rectangular" width={270} height={25} />
                </div>
                <div className='flex gap-2 mt-3'>
                    <Skeleton variant="rounded" width={70} height={20} />
                    <Skeleton variant="rounded" width={70} height={20} />
                </div>
            </div>
            <div>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-5'>
                        <Skeleton variant="circular" width={45} height={45} />
                        <div>
                            <Skeleton variant="rectangular" width={205} height={20} />
                            <Skeleton variant="rectangular" width={205} height={20} />
                        </div>
                    </div>
                    <Skeleton variant="rectangular" width={270} height={200} />
                </div>
                <div>
                    <Skeleton variant="rectangular" width={270} height={25} />
                    <Skeleton variant="rectangular" width={270} height={25} />
                </div>
                <div className='flex gap-2 mt-3'>
                    <Skeleton variant="rounded" width={70} height={20} />
                    <Skeleton variant="rounded" width={70} height={20} />
                </div>
            </div>
            <div>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-5'>
                        <Skeleton variant="circular" width={45} height={45} />
                        <div>
                            <Skeleton variant="rectangular" width={205} height={20} />
                            <Skeleton variant="rectangular" width={205} height={20} />
                        </div>
                    </div>
                    <Skeleton variant="rectangular" width={270} height={200} />
                </div>
                <div>
                    <Skeleton variant="rectangular" width={270} height={25} />
                    <Skeleton variant="rectangular" width={270} height={25} />
                </div>
                <div className='flex gap-2 mt-3'>
                    <Skeleton variant="rounded" width={70} height={20} />
                    <Skeleton variant="rounded" width={70} height={20} />
                </div>
            </div>
             
        </div>
    );
};

export default BlogsLoading;