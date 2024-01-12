"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MostViewPost = () => {
  const [posts, setPosts] = useState([-1]);
  useEffect(() => {
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-most-view/5")
      .then((data) => setPosts(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-white dark:bg-slate-600 p-5  rounded-lg shadow-light mt-5 ">
      <h3 className="text-xl font-semibold pb-4 pt-4">پربازدیدترین مطالب</h3>
      <div>
        <ul className=" *:border-dashed *:p-4 *:border-gray-500 *:border-b-slate-500 *:border-b last:*:border-none *:font-light">
          {
            
           posts[0]==-1 ? (<div className="p-12">در حال لود...</div>):
          posts.map((post, index) => (
            <li key={index} className="  hover:text-purple-600">
              <Link href={`/blog/${post.slug}`} >
                {post.title}
              </Link>
            </li>
          ))
    }
          
        </ul>
      </div>
    </div>
  );
};

export default MostViewPost;
