"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputElement from "../InputElement/InputElement";
import { toast } from "react-toastify";
const auth=Cookies.get('auth')

const EditUserForm = ({ data }) => {
  const [displayName,setDisplayName]=useState(data.displayName)
  const [email,setEmail]=useState(data.email)

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      displayName:displayName,
      email:email
    };

    axios
      .patch(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/update-user/${data._id}`,{headers:{auth:auth}},
        formData
      )
      .then((data) => {
        toast.success("پست مورد نظر با موفقیت بروزرسانی شد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push("/dashboard/users");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
      <h2> ویرایش کاربر </h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="py-5 child:py-5 mb-5"></div>

        <InputElement label="نما نمایشی"  state={displayName} setState={setDisplayName} />
        <InputElement label="ایمیل "  state={email} setState={setEmail} />
        
      

        <button className="bg-blue-600 text-white  py-3 px-5 rounded-lg shadow-md hover:bg-blue-900">
          ذخیره
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
