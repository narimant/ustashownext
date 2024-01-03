"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import {  BsFiles} from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BsBasket3 } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { IoMdExit } from "react-icons/io";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const MyAcountSidebar = () => {
    const router= usePathname();
    const routerlink=useRouter()
    const [loader,setLoader]=useState(false);
    const exitHandler=()=>{
      setLoader(true);
      const cookie=Cookies.set('auth','',{expires:0})
      routerlink.push('/login')
      setLoader(false);
    }
  return (
    <div className=" px-5 child:my-5">
      <Link href="/myacount" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg   ${ router === "/myacount" && "bg-purple-600 text-white"} `} >
        <IoHomeOutline size={20}/>
        <span>پیش خوان</span>
      </Link>
      <Link href="/myacount/userinfo" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg ${
            router.startsWith("/myacount/userinfo") && "bg-purple-600  text-white"
          }`}>
        <CiCircleInfo size={20}/>
        <span>اطلاعات </span>
      </Link>
      <Link href="/myacount/favorite" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg ${
            router.startsWith("/myacount/favorite") && "bg-purple-600  text-white"
          }`}>
        <MdFavoriteBorder size={20}/>
        <span>علاقه ها </span>
      </Link>
      <Link href="/myacount/files" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg ${
            router.startsWith("/myacount/files") && "bg-purple-600  text-white"
          }`}>
        <BsFiles size={20}/>
        <span> فایل ها</span>
      </Link>
      <Link href="/myacount/comments" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg ${
            router.startsWith("/myacount/comments") && "bg-purple-600  text-white"
          }`}>
        <VscCommentDiscussion size={20}/>
        <span> دیدگاه ها</span>
      </Link>
      <Link href="/myacount/orders" className={`flex justify-start items-center gap-3 py-3 px-3 rounded-lg ${
            router.startsWith("/myacount/orders") && "bg-purple-600  text-white"
          }`}>
        <BsBasket3 size={20}/>
        <span> سفارش ها</span>
      </Link>

      <button onClick={exitHandler}  className="flex justify-start items-center gap-3 py-3 px-3 rounded-lg bg-red-400 text-white w-full hover:bg-red-600" >
        <IoMdExit size={20}/>
        {loader ? (
           <span className="loader w-6 h-6"> </span>
        ):(
          <span> خروج</span>
        )}
       
      </button>
    </div>
  );
};

export default MyAcountSidebar;
