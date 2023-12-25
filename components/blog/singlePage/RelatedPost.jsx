
import Link from 'next/link';


import { MdArrowBackIos } from "react-icons/md";
import Pager from '@/components/blog/pager';

const getData=async()=>{
    const result=await fetch("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-new-post",{cache:"no-store"})
    const data=await result.json();
    return data;
}
const RelatedPost = async() => {
const posts=await getData();
    return (
        <div className='container mx-auto my-8'>
         {/* <div className='flex justify-between text-xl py-8'>
            <h1 className='font-semibold'>مطالب مرتبط</h1>
            
         </div>
     
         <div className='grid grid-cols-4 gap-4'>
            {
                    posts.map((post,index)=>(
                        <div className="w-full min-h-52 shadow-light rounded-lg overflow-hidden">
           
                        <Link href={`blog/${slug}`}> <Image src={image} width={300} height={260} alt={imageAlt} className="w-full"  /></Link>
                         <div className="p-2">
                             {tags?.map((item,index)=>(
                                 <Link href="#" key={index} className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200">{item}</Link>
                             ))}
                         </div>
                         <Link href={`blog/${slug}`}><h2 className="text-lg p-3"> {title}</h2></Link>
                         <div className=" px-4 text-sm font-light line-clamp-3">
                                     {shortDesc}
                         </div>
                         <div className="flex justify-between items-center m-3 border-t text-xs py-4">
                             <div className="flex justify-start bg-gray-200 py-1 px-2 rounded-lg">
                                 {updatedAt}
                             </div>
                            <div className="flex justify-end items-center   bg-gray-200 py-1 px-2 rounded-lg">
                                 {pageView}
                            </div>
                            
                         </div>
                     </div>
                    ))
            }
            
           


         </div> */}
        </div>
    );
};

export default RelatedPost;