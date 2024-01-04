"use client";
import Loading from "@/app/(root)/loading";
import CheckImage from "@/utils/checkImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllUsers= () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageNumber, SetPageNumber] = useState(1);
  const [numbersOfBtn, setNumbersOfBtn] = useState([1]);

  useEffect(() => {
    getFetchData(pageNumber);
  }, [pageNumber]);

  const getFetchData = (pageNumber) => {
    setIsLoading(true);
    axios
      .get(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/users?pn=${pageNumber}`
      )
      .then((data) => {
        setPosts(data.data.GolUsers);
        setNumbersOfBtn(data.data.AllUsersNum);

        const a = Math.ceil(data.data.AllUsersNum.length / 10);
        setNumbersOfBtn(Array.from({ length: a }, (value, index) => index + 1));
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const removePostHandler = (id) => {
    

    axios
      .delete(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/delete-user/${id}`
      )
      .then((d) => {
        toast.success("کاربر مورد نظر با موفقیت حذف شد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
       });
        getFetchData(pageNumber);
      })
      .catch((e) => console.log(e));
  };

  return (

    <div className="bg-white rounded-lg shadow-light w-full p-5 ">
     
        {isLoading ? (
        <Loading />
      ) : (
        <table className="border-collapse  border-slate-400 w-full">
          <thead>
            <tr className=" border-b child:py-5">
             
            
              <th className="  ">نام نمایشی کاربر</th>
              <th className=" "> ایمیل کاربر</th>
              <th className="  "> تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr key={index}>
              
          
                <td className="border border-slate-300 text-center ">
                  {item.displayName }
                </td>
                <td className="border border-slate-300 ">{item.email}</td>
                <td className="border border-slate-300 ">
                  <Link
                    className="bg-blue-600 text-white py-2 px-5 rounded-lg mx-3"
                    href={`users/${item._id}`}
                  >
                    edit
                  </Link>
                  <button
                    className="bg-red-600 text-white rounded-lg py-2 px-5 "
                    onClick={() => removePostHandler(item._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-center items-cente gap-3 mt-5">
        {numbersOfBtn.map((item, index) => (
          <button
            onClick={() => SetPageNumber(item)}
            key={index}
            className={`py-2 px-4 bg-blue-400 rounded-full shadow-light text-white hover:bg-blue-600 ${
              pageNumber === +item && "bg-blue-700"
            }`}
          >
            {" "}
            {item}
          </button>
        ))}
      </div>
     
    
    </div>
  );
};

export default AllUsers;
