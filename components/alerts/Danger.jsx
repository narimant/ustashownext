"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Danger = ({ title, callBacklink }) => {
  const router = useRouter();
  const closeHandler = () => {
    if (callBacklink !== "") {
      router.push(callBacklink);
    }
  };
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="bg-red-100 border-red-200 rounded-lg py-5 w-1/3 px-5 flex justify-between items-center">
        <span className="text-red-600">{title}</span>
        {callBacklink && <button onClick={closeHandler}>X</button>}
      </div>
    </div>
  );
};

export default Danger;
