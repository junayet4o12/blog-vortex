// import React from 'react';


import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import DataTable from "react-data-table-component";


// import React from 'react';



const FeaturesBlog = () => {
    
    const { data, isLoading } = useQuery({
        queryKey: ['featureddatagetting'],
        queryFn: () => fetch('http://localhost:3000/api/v1/featuresblogs')
            .then(res => res.json())
    })

    // const datawithid
    
const columns = [
    {
        name: <p className="font-bold">Serial No.</p>,
        selector: row=> <div className="flex  items-center gap-20">
            <p className="text-lg font-bold flex justify-center items-center border-2 min-w-[48px] h-12  rounded-lg bg-gray-200">{data?.indexOf(row)+1}</p>
            <div className="w-16 h-16 my-2"> <img className="rounded-full w-16 h-16" src={row?.posterImg} alt="" /></div>
        </div>,
        
    },
    {
        name: <p className="font-bold ">Blog Owner</p>,
        selector: row=><p className="font-bold">{row.posterName}</p>,
        
    },
    {
        name:  <p className="font-bold ">Blog title</p>,
        selector: row=><p className="font-bold">{row?.title}</p>
    }
]

   

   
    return (
        <div>
            <div className="px-10 sm:px-32 pt-4">
                <h2 className="text-3xl font-medium pt-5 pb-2 text-gray-600 uppercase">Discover the Top Ten   <br /> in the  <span className="text-4xl font-semibold text-black">Blog Vortex</span></h2>
                <p className="text-base font-medium pb-7 max-w-2xl">Explore the Blog Vortex&apos;s exclusive Featured Blogs section, showcasing the most extensive and captivating blog posts. Dive into the world of knowledge and creativity with our curated selection of the top ten large-description blogs.</p>

            </div>
            <div className="">
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