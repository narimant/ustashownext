"use client";
import Loading from "@/app/(root)/loading";
import CheckImage from "@/utils/checkImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MiddleBannerAll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [banners, setBanners] = useState([]);
  const [pageNumber, SetPageNumber] = useState(1);
  const [numbersOfBtn, setNumbersOfBtn] = useState([1]);

  useEffect(() => {
    getFetchData(pageNumber);
  }, [pageNumber]);

  const getFetchData = (pageNumber) => {
    setIsLoading(true);
    axios
      .get(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/middle-baners?pn=${pageNumber}`
      )
      .then((data) => {
        setBanners(data.data.GoalMidBans);
        setNumbersOfBtn(data.data.AllMidBans);

        const a = Math.ceil(data.data.AllMidBans.length / 10);
        setNumbersOfBtn(Array.from({ length: a }, (value, index) => index + 1));
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  const removeBannerHandler = (id) => {
    const params = { goalId: id };

    axios
      .delete(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/delete-middle-baners`,
        { data: params }
      )
      .then((d) => {
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
              <th className="  ">لینک</th>
              <th className="  ">وضعیت نمایش</th>
              <th className=" "> تاریخ</th>
              <th className="  "> تنظیمات</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((item, index) => (
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
                <td className="border border-slate-300 ">{item.link}</td>
                <td className="border border-slate-300 text-center ">
                  {item.situation === "true" ? (
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
                    href={`banners/${item._id}`}
                  >
                    edit
                  </Link>
                  <button
                    className="bg-red-600 text-white rounded-lg py-2 px-5 "
                    onClick={() => removeBannerHandler(item._id)}
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

export default MiddleBannerAll;
