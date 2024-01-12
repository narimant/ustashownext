"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Danger from "../alerts/Danger";
import { useAppContext } from "@/context/appContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const CartMainPage = ({ userData, userCookie }) => {
  const [cartData, setCartData] = useState([-1]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartNumber, setCartNumber } = useAppContext();
  const [productIds, setProductIds] = useState([]);
const router=useRouter();
  const getFetchData = () => {
    setCartData([-1]);
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-user-data/", {
        headers: { auth: userCookie.value },
      })
      .then((data) => {
        setCartData(data.data.cart);
        setCartNumber(data.data.cart.length);
        let totalPrice = 0;
        let ids = [];
        if (data.data.cart.length > 0) {
          data.data.cart.map((item) => {
            totalPrice += Number(item.price);
            ids = [...ids, item._id];
          });
          setProductIds(ids);
          
          setTotalPrice(totalPrice);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFetchData();
   
  }, []);

  const removeProduct = (id) => {
    const myData = {
      productId: id,
      method: "remove",
    };
    axios
      .post("https://distracted-mcnulty-orq2ubkyw.liara.run/api/cart-manager", myData, {
        headers: { auth: userCookie.value },
      })
      .then((data) => {
        getFetchData();
      })
      .catch((error) => console.log(error));
  };

  const paymentHandler = () => {
    const formData = {
      amount: Number(totalPrice),
      products: productIds,
    };
    axios.post("https://distracted-mcnulty-orq2ubkyw.liara.run/api/new-payment", formData, {
      headers:{auth: userCookie.value},
    }).then(data=>{
 
     
        toast.success("     در حال انتقال لطفا کمی صبر کنید " , {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push(data.data.link)
      
    }).catch(error=>console.log(error));
  };

  return (
    <div className="container dark:bg-slate-600 mx-auto bg-white shadow-light rounded-lg  p-5 mt-5">
      <h1 className="text-xl border-b p-5 mb-5">جزییات سبد خرید شما</h1>
      {cartData[0] === -1 ? (
        <div className="flex justify-center items-center">
          <div className="loader-blue h-10 w-10 my-10"></div>
        </div>
      ) : cartData.length > 0 ? (
        <div className="w-10/12 lg:w-1/2 mx-auto flex flex-col gap-5">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b last:border-none"
            >
              <div className="flex justify-start items-center gap-5">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  className="rounded-lg w-auto"
                  alt={item.imageAlt}
                />
                <div className="">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>
                    <span>قیمت</span>
                    {item.price}
                  </p>
                </div>
              </div>
              <button onClick={() => removeProduct(item._id)}>
                <FaRegTrashAlt size={25} title="remove" />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <span className="font-semibold">مجموع قیمت :</span>
            <span className="py-2 px-3 border-b  rounded-lg">
              {totalPrice} تومان{" "}
            </span>
          </div>
          <div>
            <button
              onClick={paymentHandler}
              className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-800"
            >
              پرداخت
            </button>
          </div>
        </div>
      ) : (
        <Danger title="سبد خرید شما خالی است" />
      )}
    </div>
  );
};

export default CartMainPage;
