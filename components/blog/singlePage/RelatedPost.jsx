"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState } from "react";

const RelatedPost = ({ relatedPostData, model }) => {
  const [posts, setPosts] = useState([-1]);
  useEffect(() => {
    const sendData = { goalIds: relatedPostData };
  
    if (model === "post") {
      const url =
        "https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-related-post";
      axios
        .post(url, sendData)
        .then((data) => {
          setPosts(data.data);
        })
        .catch((error) => console.log(error));
    } else {
      const url =
        "https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-related-product";
      axios
        .post(url, sendData)
        .then((data) => {
          setPosts(data.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between text-xl py-8">
        <h1 className="font-semibold">
          {model === "post" ? " مطالب مرتبط" : "محصولات مرتبط"}
        </h1>
      </div>

      {model === "post" ? (

        <div className="grid grid-cols-3 gap-4">

          {posts[0]!==-1 && (
            <>
            {posts.map((post, index) => {if(index<3) return (
           
              <div
                key={index}
                className="w-full min-h-52 shadow-light rounded-lg overflow-hidden"
              >
               
                <Link href={`/blog/${post.slug}`}>
          
                  <Image
                    width={300}
                    height={260}
                   
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full"
                  />
                
                </Link>
               
                <div className="p-2">
                  
                  {post.tags?.map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg p-3"> {post.title}</h2>
                </Link>
                <div className=" px-4 text-sm font-light line-clamp-3">
                  {post.shortDesc}
                </div>
                <div className="flex justify-between items-center m-3 border-t text-xs py-4">
                  <div className="flex justify-start bg-gray-200 py-1 px-2 rounded-lg">
                    {post.updatedAt}
                  </div>
                  <div className="flex justify-end items-center   bg-gray-200 py-1 px-2 rounded-lg">
                    {post.pageView}
                  </div>
                </div>
               
              </div>
            )})}

</>
          )}
        </div>
      ) : (
     <> {posts[0]!==-1 && (
      <div className="grid grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="w-full min-h-52 shadow-light rounded-lg overflow-hidden"
        >
          <Link href={`/shop/${post.slug}`}>
  
            <Image src={post.image} width={300}  height={260} className="w-full" alt="test"/>
         
          </Link>
          <div className="p-2">
            {post.tags?.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="bg-purple-100 text-purple-600 m-1 py-1 px-2 text-xs rounded-md transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-purple-200"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link href={`/shop/${post.slug}`}>
            <h2 className="text-lg p-3"> {post.title}</h2>
          </Link>
          <div className=" px-4 text-sm font-light line-clamp-3">
            {post.shortDesc}
          </div>
          <div className="flex justify-between items-center p-3">
            <div className="flex justify-start gap-4">
              <button>
                <CiSearch className="h-5 w-5" />
              </button>
              <button>
                <CiBookmark className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-end items-center gap-3">
              <Link href={`/shop/${post.slug}`}>
                <SlBasket className="h-5 w-5" />
              </Link >
              <p>{post.price} تومان</p>
            </div>
          </div>
        </div>
      ))}
    </div>

     )}
     </> 
      )}
    </div>
  );
};

export default RelatedPost;
