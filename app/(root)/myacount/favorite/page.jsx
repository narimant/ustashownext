"use client";

import Warning from "@/components/alerts/Warning";
import SlideSection from "@/components/sliders/ProductSlider/SlideSection";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Favorite = () => {
  const [data, setData] = useState([-1]);
  const cookie = Cookies.get("auth");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:27017/api/get-part-of-user-data/favorite", {
        headers: { auth: cookie },
      })
      .then((d) => {
        setData(d.data.favoriteProducts);

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
            محصولات مورد علاقه
          </h1>
        <div>
          {data.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {data.map((item, index) => (
                <SlideSection
                  key={index}
                  data={item}
                  userFavoriteProduct={data}
                />
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

export default Favorite;
