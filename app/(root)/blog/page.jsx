import BlogPostBox from "@/components/blog/blogPage";
import Pager from "@/components/blog/pager";
import Link from "next/link";
import React from "react";
const getData = async ({ searchParams: { page } }) => {
  const pageNumber = page || 1;

  const result = await fetch(
    `https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-blog-page-posts?pn=${pageNumber}`
  );
  const data = await result.json();
  return data;
};

const Blog = async (props) => {

  const posts = await getData(props);
  return (
    <div className="container mx-auto">
    <div className=" flex justify-center h-40 items-center">
    <h1 className="text-3xl font-bold ">
      وبلاگ اوستاشو
      <div className="bg-purple-600 h-[2px] rounded-2xl mt-5"></div>
    </h1>
    </div>
    <div className="grid grid-cols-4 gap-5 my-8">
        {
            posts.GolPosts.map((post,index)=>(
                <BlogPostBox key={index} post={post} />
            ))
        }

    </div>
      <div>
        <Pager data={posts.AllPostsNum}/>
      </div>
    </div>
  );
};

export default Blog;
