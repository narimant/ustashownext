"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Warning = ({ title, callBacklink }) => {
  const router = useRouter();
  const closeHandler = () => {
    if (callBacklink !== "") {
      router.push(callBacklink);
    }
  };
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="bg-yellow-100 border-yellow-200 rounded-lg py-5 w-2/3  px-5 flex justify-between items-center">
        <span className="text-yellow-600 text-center w-full">{title}
        
        </span>
        {callBacklink && <button onClick={closeHandler}>X</button>}
      </div>
    </div>
  );
};

export default Warning;
