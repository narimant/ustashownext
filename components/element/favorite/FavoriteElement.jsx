"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
const FavoriteElement = ({ productId, favoriteList }) => {
  const [loader, setLoader] = useState(false);
  const [userCookie, setUserCookie] = useState("");

  const [findItem, setFindItem] = useState(false);

  useEffect(() => {
    setUserCookie(Cookies.get("auth"));

    if (Cookies.get("auth")) {
      if (favoriteList?.find((item) => item._id === productId)) {
        setFindItem(true);
      } else {
        setFindItem(false);
      }
    }
  }, []);

  const messageHandler=()=>{
    toast.error("برای انجام ین عملیات ابتدا وارد حساب کاربریتان شوید", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
   });
  }

  const favoriteHandle = (id, method) => {
    setLoader(true);

    const myData = {
      productId: id,
      method: method,
    };
    axios
      .post("https://distracted-mcnulty-orq2ubkyw.liara.run/api/favorite-products", myData, {
        headers: { auth: userCookie },
      })
      .then((data) => setFindItem(!findItem))
      .catch((error) => console.log(error));
  };

  if (userCookie) {
    return (
      <>
        {findItem ? (
          <button onClick={() => favoriteHandle(productId, "remove")}>
            <FaBookmark className="h-5 w-5 text-blue-600" />
          </button>
        ) : (
          <button onClick={() => favoriteHandle(productId, "push")}>
            <CiBookmark className="h-5 w-5 text-blue-600" />
          </button>
        )}
      </>
    );
  } else {
    return (
      <button onClick={messageHandler}>
        <CiBookmark className="h-5 w-5 text-blue-600" />
      </button>
    );
  }
};

export default FavoriteElement;
