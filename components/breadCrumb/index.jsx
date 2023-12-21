import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-light px-4 my-8 h-14 leading-[56px] font-light text-sm " >
      <div className="container flex justify-start items-center">
        <div className="flex justify-between items-center gap-1 px-2 text-gray-500  hover:text-purple-600">
          <Link href="#" className="">خانه</Link>
          <span>/</span>
        </div>
        <div className="flex justify-between items-center gap-1 px-2 text-gray-500 hover:text-purple-600">
          <Link href="#">وبلاگ</Link>
          <span>/</span>
        </div>
        <div className="font-bold text-gray-500">
          <span>چرا nextjs بهتر از همه فریم ورکهای جاوا اسکریپت دیگر است</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
