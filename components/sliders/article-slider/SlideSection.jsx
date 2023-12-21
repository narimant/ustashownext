import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const SlideSection = ({title,price,image,category}) => {
    return (
        <div className="w-full min-h-52 shadow-light rounded-lg overflow-hidden">
            <Image src={image} width={300} height={260} alt={title} className="w-full"  />
            <div className="p-2">
                {category?.map((item,index)=>(
                    <Link href="#" key={index} className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200">{item}</Link>
                ))}
            </div>
            <h2 className="text-lg p-3"> {title}</h2>
            <div className=" px-4 text-sm font-light line-clamp-3">
            حلقه‌ها از مهم‌ترین مفاهیم پایه در زبان برنامه‌نویسی پایتون هستند. حلقه ‌ها در پایتون برای اجرای کارهای تکراری در پایتون برای اجرای کارهای تکراری در برنامه‌نویسی به وجود آمده‌اند و موجب می‌شوند که برنامه برنامه‌نویسی به وجود آمده‌اند و موجب می‌شوند که برنامه
            </div>
            <div className="flex justify-between items-center m-3 border-t text-xs py-4">
                <div className="flex justify-start bg-gray-200 py-1 px-2 rounded-lg">
                1402/2/15
                </div>
               <div className="flex justify-end items-center   bg-gray-200 py-1 px-2 rounded-lg">
               4 دیدگاه
               </div>
               
            </div>
        </div>
    );
};

export default SlideSection;