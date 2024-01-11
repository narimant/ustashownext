"use client";
import axios from "axios";
import Cookies from "js-cookie";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UseInfo = () => {
  const [data, setData] = useState([-1]);
  const cookie = Cookies.get("auth");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
  const updateHandler = () => {
    const formData = { displayName, password };
    if (displayName === data.displayName || displayName === "") {
      toast.error("نام نمایش یا خالی است یا تعییر نکرده است", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (password === "") {
      toast.error(" فیلد رمز عبور خالی است", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    axios
      .patch(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/update-mini-user/${data._id}`,
        formData
      )
      .then((data) => {
     
      })
      .catch((error) => {
        toast.error(error.response.data.msg, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  };
  useEffect(() => {
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-part-of-user-data/info", {
        headers: { auth: cookie },
      })
      .then((d) => {
        setData(d.data);
        setDisplayName(d.data.displayName);

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
            جزییات حساب کاربری
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 ">
              <img src="/images/user.png" className="rounded-full h-24 w-24" />
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <span className="font-bold">نام نمایش شما</span>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-gray-100 rounded-lg py-4 px-4 outline-none"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <span className="font-bold"> ایمیل شما</span>
              <p className="bg-gray-100 rounded-lg py-4 px-4 cursor-not-allowed">
                {data.email}
              </p>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <span className="font-bold"> تاریخ ثبت نام</span>
              <p className="bg-gray-100 rounded-lg py-4 px-4 cursor-not-allowed">
                {" "}
                {data.createdAt}
              </p>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <span className="font-bold"> تاریخ بروزرسانی</span>
              <p className="bg-gray-100 rounded-lg py-4 px-4 cursor-not-allowed">
                {data.updatedAt}
              </p>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <span className="font-bold"> رمز عبور</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 rounded-lg py-4 px-4 outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end items-center mt-5">
            <button
              className="bg-green-400 hover:bg-green-600 text-white rounded-lg py-4 px-4"
              onClick={updateHandler}
            >
              ثبت اطلاعات
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UseInfo;
