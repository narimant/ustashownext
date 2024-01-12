"use client";
import { useState } from "react";
import ShopSide from ".";
import { MdClose } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
const MobileFilter = ({ searchParams }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex w-full py-5 mb-5 justify-start items-center gap-5 border-b dark:border-slate-600 border-gray-200">
      <span><BsFilterRight size={25}/></span>
        <button onClick={() => setShowModal(true)}>فیلترها</button>
      </div>
      <div
        className={`${
          showModal ? "fixed" : "hidden"
        } z-30 inset-0 bg-slate-800   lg:hidden p-5 overflow-y-scroll`}
      >
        <div className="flex justify-start gap-5 py-5">
          <button onClick={() => setShowModal(false)}>
            <MdClose size={25} />
          </button>
           
          <span>فیلتر ها</span>
        </div>
        <ShopSide url={searchParams} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default MobileFilter;
