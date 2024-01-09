"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputElement from "../InputElement/InputElement";
import { toast } from "react-toastify";
import Link from "next/link";

const EditCommentForm = ({ data }) => {


  const router = useRouter();
  const [email, setEmail] = useState(data.goalComment.email);
  const [displayName, setDisplayName] = useState(data.goalComment.displayName);
  const [message, setMessage] = useState(data.goalComment.message);
  const [published, setPublished] = useState(data.goalComment.published);
  const [createdAt, setCreatedAt] = useState(data.goalComment.createdAt);
  const [updatedAt, setUpdatedAd] = useState(data.goalComment.updatedAt);
  const [typeOfModel,setTypeOfModel]=useState(data.goalComment.typeOfModel)
  const [parentId,setParentId]=useState(data.goalComment.parentId)
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
    message:message,
    email:email,
      published: published,
      parentId:parentId
    };

    axios
      .patch(
        `http://localhost:27017/api/update-comment/${data.goalComment._id}`,
        formData
      )
      .then((data) => {
        toast.success("نظر مورد نظر با موفقیت بروزرسانی شد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
       });
        router.push("/dashboard/comments");
  
      })
      .catch((error) => console.log(error));
  };



  


  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
      <h2> ویرایش پست </h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="py-5 child:py-5 mb-5">

        <InputElement
            inputType="text"
            label="نام  "
            id="body"
            state={displayName}
            setState={setDisplayName}
          />
          
          <InputElement
            inputType="text"
            label="ایمیل  "
            id="body"
            state={email}
            setState={setEmail}
          />

          <InputElement
            inputType="textarea"
            label="متن نظر "
            id="body"
            state={message}
            setState={setMessage}
          />

          <p>
            <span>تاریخ ایجاد</span>
            {createdAt}
          </p>
  <p>
    <span>تاریخ ویرایش</span>
    {updatedAt}
  </p>
<div>
 {typeOfModel==="post" ?
 ( 
  <p>
 <span>بلاگ : </span>
 <Link href={`/blog/${data.PostProduct.slug}`}   className="text-blue-600">{data.PostProduct.title}</Link>
 </p>
 )
  : (
    <p>
    <span>محصول : </span>
    <Link href={`/shop/${data.PostProduct.slug}`}  className="text-blue-600">{data.PostProduct.title}</Link>
    </p>
  )
  }
 
 
 </div>

          <div>
            <label htmlFor="published" className="cursor-pointer">
              وضعیت نمایش
            </label>
            <select
              id="published"
              className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3"
              value={published}
              onChange={(e) => setPublished(e.target.value)}
            >
              <option value={true}>انتشار</option>
              <option value={false}>پیش نویس</option>
            </select>
          </div>

      

         
        </div>

        <button className="bg-blue-600 text-white  py-3 px-5 rounded-lg shadow-md hover:bg-blue-900">
          ذخیره
        </button>
      </form>
    </div>
  );
};

export default EditCommentForm;
