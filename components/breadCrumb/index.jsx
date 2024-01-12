import Link from "next/link";
import React from "react";

const BreadCrumb = ({title,refLink}) => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide dark:bg-slate-600  bg-white rounded-lg shadow-light px-4 my-8 h-14 leading-[56px] font-light text-sm " >
      <div className="container flex justify-start items-center overflow-x-scroll scrollbar-hide">
        <div className="flex justify-between items-center gap-1 px-2 dark:text-white text-gray-500  hover:text-purple-600">
          <Link href="/" className="">خانه</Link>
          <span>/</span>
        </div>
        <div className="flex justify-between items-center gap-1 px-2 dark:text-white text-gray-500 hover:text-purple-600">
         {
          refLink==="shop" ? ( <Link href="/shop">فروشگاه</Link>) : ( <Link href="/blog">وبلاگ</Link>)
         }
          <span>/</span>
        </div>
        <div className="font-bold dark:text-white text-gray-500">
          <span>  {title}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
