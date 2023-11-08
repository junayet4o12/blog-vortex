// import React from 'react';


import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import DataTable from "react-data-table-component";


// import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const FeaturesBlog = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['featureddatagetting'],
        queryFn: () => fetch('https://blog-site-backend-rouge.vercel.app/api/v1/featuresblogs')
            .then(res => res.json())
    })

    // const datawithid
    if (isLoading) {
        return <div className='flex  flex-col gap-20 h-[60vh] p-4'>
            <div>
                <div className="flex flex-wrap gap-10 justify-around items-center">

                    <Skeleton variant="rectangular" width={80} height={40}></Skeleton>

                    <div className="w-16 h-16 rounded-full">
                        <Skeleton variant="circular" width={80} height={80} />
                    </div>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap gap-10 justify-around items-center">

                    <Skeleton variant="rectangular" width={80} height={40}></Skeleton>

                    <div className="w-16 h-16 rounded-full">
                        <Skeleton variant="circular" width={80} height={80} />
                    </div>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap gap-10 justify-around items-center overflow-hidden">

                    <Skeleton variant="rectangular" width={80} height={40}></Skeleton>

                    <div className="w-16 h-16 rounded-full">
                        <Skeleton variant="circular" width={80} height={80} />
                    </div>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                    <Skeleton variant="rectangular" width={220} height={40}></Skeleton>
                </div>
            </div>

        </div>
    }

    const columns = [
        {
            name: <p className="font-bold">Serial No.</p>,
            selector: row => <div className="flex  items-center gap-20">
                <p className="text-lg font-bold flex justify-center items-center border-2 min-w-[48px] h-12  rounded-lg bg-gray-200">{data?.indexOf(row) + 1}</p>
                <div className="w-16 h-16 my-2"> <img className="rounded-full w-16 h-16" src={row?.posterImg} alt="" /></div>
            </div>,

        },
        {
            name: <p className="font-bold ">Blog Owner</p>,
            selector: row => <p className="font-bold">{row.posterName}</p>,

        },
        {
            name: <p className="font-bold ">Blog title</p>,
            selector: row => <p className="font-bold">{row?.title}</p>
        }
    ]




    return (
        <div>
            <div className="px-10 sm:px-32 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Discover the Top Ten   <br /> in the  <span className="text-4xl font-semibold text-black">Blog Vortex</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">Explore the Blog Vortex&apos;s exclusive Featured Blogs section, showcasing the most extensive and captivating blog posts. Dive into the world of knowledge and creativity with our curated selection of the top ten large-description blogs.</p>

            </div>
            <div>
                <DataTable
                    columns={columns}
                    data={data}

                >

                </DataTable>
            </div>
        </div>
    );
};
export default FeaturesBlog;