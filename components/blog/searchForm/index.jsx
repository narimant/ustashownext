"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
const BlogSearchForm = ({url}) => {

    const [searchInput,setSearchInput]=useState('');
  const router=useRouter();
  const searchHandler=(e)=>{
     const url=`/blog?keyword=${searchInput}`;
     setSearchInput('')
     router.push(url);
  }
  const searchInputHandler=(e)=>{
   
    if(e.key === "Enter")
    {
      const url=`/blog?keyword=${searchInput}`;
      setSearchInput('')
      router.push(url);
    }
  }
const removeKeyword=()=>{
  router.push("/blog")
}
    return (
        <div className="w-full h-48 bg-gradient-to-r bg-purple-300 from-purple-300 to-purple-800 rounded-lg shadow-light">
        <div className="container mx-auto flex justify-center items-center h-full flex-col">
          <div className="w-10/12 lg:w-1/2  relative ">
            <input
              type="text"
              className="py-2 px-5 w-full rounded-lg shadow-light outline-none"
              placeholder="جست و جو در مطالب وبلاگ"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={searchInputHandler}
            />
            <button type="submit" onClick={searchHandler}>
              <IoIosSearch className="absolute top-2 left-4 w-6 h-6" />
            </button>
          </div>
       {url.keyword && (
        <div className='py-5 -px-3 flex justify-center items-center  w-1/3'>
          <span className='text-white '>عبارت جست و جو شده شما : </span>
          <span className='py-1 pr-2  bg-gray-50 rounded-lg shadow-light text-sm mr-5' >
            {url.keyword}
            <button className='text-blue-600 py-1 px-2' title='حذف' onClick={removeKeyword}>X</button>
            </span>
          </div>
       )}
        </div>
      </div>
    );
};

export default BlogSearchForm;