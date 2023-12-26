"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';



import { useEffect, useState } from 'react';


const RelatedPost =({relatedPostData}) => {

const [posts,setPosts]=useState([-1])
useEffect(()=>{
    const sendData={goalIds:relatedPostData};
   const url="https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-related-post";
    axios.post(url,sendData).then(data=>{setPosts(data.data);}).catch(error=>console.log(error));

},[])

    return (
        <div className='container mx-auto my-8'>
         <div className='flex justify-between text-xl py-8'>
            <h1 className='font-semibold'>مطالب مرتبط</h1>
            
         </div>
     
         <div className='grid grid-cols-4 gap-4'>
            {
                    posts.map((post,index)=>(
                        <div key={index} className="w-full min-h-52 shadow-light rounded-lg overflow-hidden">
        
                        <Link href={`blog/${post.slug}`}> <Image  width={300} height={260}  className="w-full" src={post.image}  alt={post.imageAlt}/></Link>
                         <div className="p-2">
                             {post.tags?.map((item,index)=>(
                                 <Link href="#" key={index} className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200">{item}</Link>
                             ))}
                         </div>
                         <Link href={`blog/${post.slug}`}><h2 className="text-lg p-3"> {post.title}</h2></Link>
                         <div className=" px-4 text-sm font-light line-clamp-3">
                                     {post.shortDesc}
                         </div>
                         <div className="flex justify-between items-center m-3 border-t text-xs py-4">
                             <div className="flex justify-start bg-gray-200 py-1 px-2 rounded-lg">
                                 {post.updatedAt}
                             </div>
                            <div className="flex justify-end items-center   bg-gray-200 py-1 px-2 rounded-lg">
                                 {post.pageView}
                            </div>
                            
                         </div>
                     </div>
                    ))
            }
            
           


         </div>
        </div>
    );
};

export default RelatedPost;