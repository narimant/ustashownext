"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Danger from "../alerts/Danger";
import { useAppContext } from "@/context/appContext";
const CartMainPage = ( {userData,userCookie} ) => {
  const [cartData, setCartData] = useState([-1]);
  const [newData,setNewData]=useState([-1])
  const [totalPrice,setTotalPrice]=useState(0)
const {cartNumber,setCartNumber}=useAppContext();

  useEffect(() => {
    setTotalPrice(0)
   if(newData[0]!==-1)
   {
   
    setCartData(newData);
   }else
   {
  
    setCartData(userData.cart);
   }
   setCartNumber(cartData.length)
  cartData[0]!== -1 && cartData.map(item=>setTotalPrice(prev=>prev+Number(item.price)))
  

   
  }, [newData,cartData]);

  const removeProduct=(id)=>{
 

    const myData = {
        productId: id,
        method: "remove",
      };
    axios
    .post("http://localhost:27017/api/cart-manager", myData, {
      headers: { auth: userCookie.value },
    })
    .then((data) => {
        const newcart=[...cartData];
       const a= newcart.filter(item=>item._id!==id);
  
        setNewData(a)
    })
    .catch((error) => console.log(error));
   
  }

  return (
    <div className="container mx-auto bg-white shadow-light rounded-lg  p-5 mt-5">
      <h1 className="text-xl border-b p-5 mb-5">جزییات سبد خرید شما</h1>
      {
        cartData[0]===-1 ? (
            <div className="flex justify-center items-center">
                <div className="loader-blue h-10 w-10 my-10">
                    </div>
                </div>
        ):cartData.length>0 ?
        (
            <div className="w-1/2 mx-auto flex flex-col gap-5">
            {cartData.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b last:border-none">
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
                <button onClick={()=>removeProduct(item._id)}>
                <FaRegTrashAlt size={25} title="remove" />
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center">
                <span className="font-semibold">مجموع قیمت :</span>
                <span className="py-2 px-3 bg-green-600 text-white rounded-lg" >{totalPrice} تومان </span>
                </div>
          </div>
        )
        :
  (
  <Danger title="سبد خرید شما خالی است" />
  )
      }
    
    </div>
  );
};

export default CartMainPage;
