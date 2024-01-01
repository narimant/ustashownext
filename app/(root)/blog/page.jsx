import BlogMainSide from "@/components/blog/blogMainSide";
import BlogPostBox from "@/components/blog/blogPage";
import Pager from "@/components/blog/pager";
import BlogSearchForm from "@/components/blog/searchForm";
import Link from "next/link";

import React from "react";




const Blog = ({ searchParams }) => {

  return (
    <div className="container mx-auto">
      <div className=" flex justify-center h-40 items-center">
        <h1 className="text-3xl font-bold ">
       <Link href="/blog">   وبلاگ اوستاشو</Link>
          <div className="bg-purple-600 h-[2px] rounded-2xl mt-5"></div>
        </h1>
      </div>
     <BlogSearchForm  url={searchParams}/>
     
      
        <BlogMainSide   url={searchParams}/>
     
    
    </div>
  );
};

export default Blog;
