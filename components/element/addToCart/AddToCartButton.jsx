"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/appContext";
import React, { useEffect, useState } from "react";
import { TbBasketPlus } from "react-icons/tb";
import { TbBasketMinus } from "react-icons/tb";
import { toast } from "react-toastify";


const AddToCartButton = ({ productId, cartList }) => {
  const [loader, setLoader] = useState(false);
  const [userCookie, setUserCookie] = useState("");
const {cartNumber,setCartNumber}=useAppContext();

  const [findItem, setFindItem] = useState(false);

  useEffect(() => {
    setUserCookie(Cookies.get("auth"));

    if (Cookies.get("auth")) {
      if (cartList?.find((item) => item._id === productId)) {
        setFindItem(true);
      } else {
        setFindItem(false);
      }
    }
  }, []);

  const messageHandler = () => {
    toast.error("برای انجام ین عملیات ابتدا وارد حساب کاربریتان شوید", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const favoriteHandle = (id, method) => {
    setLoader(true);
    console.log(id, method);
    const myData = {
      productId: id,
      method: method,
    };
    axios
      .post("https://distracted-mcnulty-orq2ubkyw.liara.run/api/cart-manager", myData, {
        headers: { auth: userCookie },
      })
      .then((data) => {
        setFindItem(!findItem);
        setCartNumber(cartNumber+1)
      })
      .catch((error) => console.log(error));
  };

  if (userCookie) {
    return (
      <>
        {findItem ? (
          <button
            onClick={() => favoriteHandle(productId, "remove")}
            className="py-4 px-6 rounded-lg shadow-light text-white bg-red-300 flex justify-start gap-3 items-center text-lg font-dana"
          >
            <TbBasketMinus className=""  size={25}/>
            حذف از سبد خرید
          </button>
        ) : (
          <button
            onClick={() => favoriteHandle(productId, "push")}
            className="py-4 px-6 rounded-lg shadow-light text-white bg-purple-500 flex justify-start gap-3 items-center text-lg font-dana"
          >
            <TbBasketPlus className="" size={25}/>
            اضافه به سبد خرید
          </button>
        )}
      </>
    );
  } else {
    return (
      <button
        onClick={messageHandler}
        className="py-4 px-6 rounded-lg shadow-light text-white bg-purple-500 flex justify-start gap-3 items-center text-lg font-dana"
      >
        <TbBasketPlus className="" size={25}/>
        اضافه به سبد خرید
      </button>
    );
  }
};

export default AddToCartButton;
