"use client";
import Loading from "@/app/(root)/loading";
import CheckImage from "@/utils/checkImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [pageNumber, SetPageNumber] = useState(1);
  const [numbersOfBtn, setNumbersOfBtn] = useState([1]);

  useEffect(() => {
    getFetchData(pageNumber);
  }, [pageNumber]);

  const getFetchData = (pageNumber) => {
    setIsLoading(true);
    axios
      .get(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-all-category?pn=${pageNumber}`
      )
      .then((data) => {
        console.log(data);
        setCategory(data.data.GoalCategories);
        setNumbersOfBtn(data.data.AllCategories);

        const a = Math.ceil(data.data.AllCategories.length / 10);
        setNumbersOfBtn(Array.from({ length: a }, (value, index) => index + 1));
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const removeCategoryHandler = (id) => {
    

    const params = { goalId: id };

    axios
      .delete(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/delete-category`,
        { data: params }
      )
      .then((d) => {
        toast.success("اسلایدر مورد نظر با موفقیت حذف شد", {
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
              <th className="  ">تصویر</th>
            
              <th className="  ">وضعیت نمایش</th>
              <th className=" "> تاریخ</th>
              <th className="  "> تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {category.map((item, index) => (
              <tr key={index}>
                <td className="border border-slate-300 w-1/6">
                  <Image
                    src={
                      CheckImage(item.image)
                        ? item.image
                        : "/images/middle-banner/no-image.png"
                    }
                    width={200}
                    height={150}
                    alt={item.imageAlt}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </td>
          
                <td className="border border-slate-300 text-center ">
                  {item.situation == true ? (
                    <div className="bg-green-500 text-white py-2 px-3 inline-block rounded-lg">
                      روشن
                    </div>
                  ) : (
                    <div className="bg-red-500 text-white inline-block py-2 px-3 rounded-lg">خاموش</div>
                  )}
                </td>
                <td className="border border-slate-300 ">{item.date}</td>
                <td className="border border-slate-300 ">
                  <Link
                    className="bg-blue-600 text-white py-2 px-5 rounded-lg mx-3"
                    href={`category/${item._id}`}
                  >
                    edit
                  </Link>
                  <button
                    className="bg-red-600 text-white rounded-lg py-2 px-5 "
                    onClick={() => removeCategoryHandler(item._id)}
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

export default AllCategory;
