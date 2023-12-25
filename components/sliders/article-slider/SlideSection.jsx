import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const SlideSection = ({data:{title,image,slug,imageAlt,shortDesc,tags,pageView,updatedAt}}) => {
    return (
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
    );
};

export default SlideSection;