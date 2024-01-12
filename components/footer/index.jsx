"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
const Footer = () => {
  const goTopCtrl = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-white shadow-light mt-8 dark:bg-slate-700">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 p-8">
        <div className="flex flex-col justify-center items-center p-8 text-center  text-sm">
          <Image src="/images/logo.png" width={100} height={80} alt="logo" className="w-auto h-auto" />
          <p className="px-12 pt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>

        <div className="flex justify-around items-start pt-4">
          <div>
            <h3 className="text-xl">دسترسی سریع</h3>
            <ul className="pt-4 text-sm">
              <li >
                <Link href="/about" className="flex justify-start items-center gap-1  py-1 hover:text-purple-700">
                  <IoIosArrowBack size={12}/>
                  <span>درباره ما</span>
                </Link>
              </li>
              <li>
              <Link href="/blog" className="flex justify-start items-center gap-1  py-1  hover:text-purple-700">
              <IoIosArrowBack size={12}/>
                  <span>وبلاگ</span>
                </Link>
              </li>
              <li>
              <Link href="#" className="flex justify-start items-center gap-1  py-1  hover:text-purple-700" >
              <IoIosArrowBack size={12}/>
                  <span>حریم خصوصی</span>
                </Link>
              </li>
              <li>
              <Link href="/contact" className="flex justify-start items-center  py-1  hover:text-purple-700">
              <IoIosArrowBack size={12}/>
                  <span>تماس با ما</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">راهنمای خرید</h3>
            <ul className="text-sm pt-4">
              <li>
              <Link href="/help" className="flex justify-start items-center gap-1  py-1  hover:text-purple-700">
              <IoIosArrowBack size={12}/>
                  <span>سوالات متداول</span>
                </Link>
              </li>
              <li>
              <Link href="/help" className="flex justify-start items-center gap-1  py-1  hover:text-purple-700">
              <IoIosArrowBack size={12}/>
                  <span>چگونه خرید کنم؟</span>
                </Link>
              </li>
              <li>
              <Link href="/help" className="flex justify-start items-center gap-1 py-1  hover:text-purple-700">
              <IoIosArrowBack size={12}/>
                  <span>قوانین استفاده از محصولات</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <Image
            src="/images/licens/1.png"
            width={150}
            height={150}
            alt="licens"
            className="w-auto h-auto"
          />
          <Image
            src="/images/licens/2.png"
            width={150}
            height={150}
            alt="licens"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center py-8">
        <p className="font-extralight text-sm">
          تمامی حقوق مادی و معنوی این قالب متعلق به سایت اوستا شو میباشد
        </p>
        <button
          onClick={() => goTopCtrl()}
          className=" fixed bottom-5 left-5 py-4 px-4 bg-purple-100 text-purple-500 transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-100 rounded-md shadow-light font-light"
        >
        
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
