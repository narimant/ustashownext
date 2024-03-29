"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/appContext";
import ThemeSwitcher from "../darkMode/ThemeSwitcher"; 
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [close,setClose]=useState(false);
  const closeHandler=()=>{
    setClose(!close);
  }

  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  
const [authCookie,setAuthCookie]=useState(Cookies.get("auth"));
const {cartNumber,setCartNumber}=useAppContext();
  useEffect(() => {
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/cart-number", { headers: {auth:authCookie} })
      .then((data) =>setCartNumber(data.data.number))
      .catch((error) => console.log(error));
     
  },[]);
  const searchHandler = (e) => {
    const url = `/shop?keyword=${searchInput}`;
    setSearchInput("");
    router.push(url);
  };
  const searchInputHandler = (e) => {
    if (e.key === "Enter") {
      const url = `/shop?keyword=${searchInput}`;
      setSearchInput("");
      router.push(url);
    }
  };
  return (
    <>
    <div className="w-full shadow-light border-b border-gray-200 bg-white  dark:bg-slate-800 dark:border-slate-600 dark:text-white">
      <div className="container flex justify-between mx-auto py-4 px-5">
        <button className="lg:hidden " onClick={()=>setClose(true)}>
          <FiMenu size={25}/>
        </button>
        <div className="flex justify-start items-center gap-4 py-4">
          <Link href="/">
            <Image
              src={logo}
              width={60}
              height={40}
              alt="logo"
              className="w-auto h-auto"
            />
          </Link>
          <nav className="hidden lg:block"> 
            <ul className="flex justify-start items-center gap-4">
              <li>
                <Link href="/" className="hover:text-purple-600">
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-purple-600">
             
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-600">
               
                  وبلاگ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="hidden lg:block relative ">
            <input
              type="text"
              className="bg-gray-100  w-48 rounded-2xl py-4 px-4 outline-none transition-all duration-200 ease-in-out focus:w-72  text-gray-700 dark:text-white dark:bg-transparent dark:border dark:border-slate-600"
              placeholder=" جست و جو محصولات "
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={searchInputHandler}
            />
            <button type="submit" onClick={searchHandler}>
              <IoIosSearch className="absolute top-4 left-4 w-6 h-6" />
            </button>
          </div>

          {/* <button className=" bg-gray-100 p-3 rounded-full hover:bg-gray-200">
            <IoMoonOutline className="w-6 h-6 " />
          </button> */}
          <span className="hidden lg:inline">
          <ThemeSwitcher />
          </span>

          <Link
            href="/myacount"
            className=" inline-block bg-purple-400 p-2 text-white rounded-lg"
          >
            <FaRegUser className=" h-6 w-6" />
          </Link>

          <Link
            href="/cart"
            className="relative inline-block bg-green-400 p-2 text-white rounded-lg"
          >
            <span className="absolute -top-2 -left-2 h-5 w-5 text-xs bg-red-600 rounded-full flex justify-center items-center">
              {cartNumber}
            </span>
            <SlBasket className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>




    {/* -------mobile menu -------- */}

    <div className={`fixed inset-0 bg-black/50  z-40 duration-300 ${close===false && ('hidden ')} `} onClick={closeHandler}>
      </div>



      <div className={`bg-white dark:bg-slate-600 w-[300px] z-50 h-full fixed right-0 top-0 bottom-0 flex flex-col justify-between duration-500 ${close===false && ('translate-x-[300px]')}`}  onClick={(e)=>e.stopPropagation()}>
     
     <div className="flex flex-col justify-between">
      <div className="flex justify-between items-center py-4 px-4">
      <div className=" relative ">
            <input
              type="text"
              className="bg-gray-100  w-48 rounded-2xl py-3 px-2 outline-none transition-all duration-200 ease-in-out focus:w-72  text-gray-700 dark:text-white dark:bg-slate-800  "
              placeholder=" جست و جو  "
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={searchInputHandler}
            />
            <button type="submit" onClick={searchHandler}>
              <IoIosSearch className="absolute top-4 left-4 w-6 h-6" />
            </button>
          </div>

          <button onClick={()=>setClose(false)}>
            <IoMdClose size={25}/>
          </button>
        </div>

        <div className="px-5">
        <Link href="/"  className="block py-2">خانه</Link>
          <Link href="/shop"  className="block py-2">فروشگاه</Link>
          <Link href="/blog" className="block py-2">وبلاگ</Link>

          
        </div>
        </div>

      <div className="border-t border-gray-200 py-5 px-5 flex justify-start gap-5">
      <span><ThemeSwitcher /></span><span>تم روشن / دارک </span>
      </div>
        </div>

    </>
  );
};

export default Header;
