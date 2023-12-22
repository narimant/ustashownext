import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full shadow-light border-b border-gray-200 bg-white ">
      <div className="container flex justify-between mx-auto py-4">
        <div className="flex justify-start items-center gap-4 py-4">
          <Link href="/" ><Image src={logo} width={60} height={40} alt="logo" className="w-auto h-auto"/></Link>
          <nav>
            <ul className="flex justify-start items-center gap-4">
              <li>
                <Link href="/" className="hover:text-purple-600">
                  صفحه اصلی
                  </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600"> بازی کامپیوتری</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600"> طرح گرافیکی</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-600"> وبلاگ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-100 w-48 rounded-2xl py-4 px-4 outline-none transition-all duration-200 ease-in-out focus:w-72  text-gray-700"
              placeholder="جست و جو"
            />
            <button>
              <IoIosSearch className="absolute top-4 left-4 w-6 h-6" />
            </button>
          </div>
         
            <button className=" bg-gray-100 p-3 rounded-full hover:bg-gray-200"><IoMoonOutline className="w-6 h-6 " /></button>
        

          <Link
            href="/myacount"
            className=" inline-block bg-purple-400 p-2 text-white rounded-lg"
          >
            <FaRegUser className=" h-6 w-6" />
          </Link>

          <Link
            href="cart"
            className=" inline-block bg-green-400 p-2 text-white rounded-lg"
          >
     
            <SlBasket className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
