"use client"

import Warning from "@/components/alerts/Warning";
import axios from "axios";
import Cookies from "js-cookie";

import Link from "next/link";
import { useEffect, useState } from "react";

const MyComments = () => {
    const [data, setData] = useState([-1]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const cookie = Cookies.get("auth");
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-part-of-user-data/comments", {
        headers: { auth: cookie },
      })
      .then((d) => {
    
        setData(d.data);

        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="loader-blue h-20 w-20  "></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-light p-5 m-5 pb-10">
          <h1 className="border-b font-bold text-2xl py-5 mb-5">
            نظرات من
          </h1>
        <div>
          {data.length > 0 ? (
            <div className=" ">
              {data.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-5">
                <div>
                    <Link href={`${item.typeOfModel==='post'? ('/blog/') : ('/shop/')}${item.src.slug}`} className="text-blue-600">{item.src.title}</Link>
                    <div className="px-5 text-sm py-2">متن پیام : {item.message}</div>
                    </div>
                    <div>
                        {item.published ? (<span className="py-2 px-3 bg-green-400 text-white rounded-lg">منتشر شده</span>):(<span lassName="py-2 px-3 bg-red-400 text-white rounded-lg">در انتظار تایید</span>)}
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <Warning title="آیتم مورد علاقه  برای  شما انتخاب نشده است ..." />
          )}
          </div>


        </div>
      )}
    </>
  );
};

export default MyComments;