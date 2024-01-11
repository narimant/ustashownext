"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import "react-toastify/dist/ReactToastify.css"; 
import { Toast, ToastContainer, toast } from "react-toastify";
import InputElement from "../../post/InputElement/InputElement";
import Cookies from "js-cookie";
const CreateCategoryForm = () => {


  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [situation, setSituation] = useState(false);

  const auth=Cookies.get('auth')


 

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title:title,
      slug:slug,
      image:image,
      imageAlt:imageAlt,
      shortDesc:shortDesc,
      situation:situation
    };

    axios
      .post(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/new-category`,
        formData,{headers:{auth:auth}}
      )
      .then((data) => {
        toast.success("دستهبندی مورد نظر با موفقیت ایجاد شد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
       });
        router.push("/dashboard/category");
      })
      .catch((error) => console.log("error"));
  };



  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
      <h2> یجاد دسته بندی جدید</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="py-5 child:py-5 mb-5">
          <InputElement
            label="عنوان"
            id="title"
            state={title}
            setState={setTitle}
          />
          <InputElement
            label="اسلاگ دسته بندی"
            id="slug"
            direction="ltr"
            state={slug}
            setState={setSlug}
          />
      

          <InputElement
            label="متن کوتاه دسته بندی"
            id="shorDesc"
            state={shortDesc}
            setState={setShortDesc}
          />
          <InputElement
            label="لینک تصویر"
            id="imageUl"
            state={image}
            setState={setImage}
            direction="ltr"
          />
          <InputElement
            label="آلت تصویر"
            id="imageAlt"
            state={imageAlt}
            setState={setImageAlt}
          />

          <div>
            <label htmlFor="situation" className="cursor-pointer">
              وضعیت نمایش
            </label>
            <select
              id="situation"
              className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
            >
              <option value={true}>نمایش</option>
              <option value={false}> عدم نمایش</option>
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

export default CreateCategoryForm;
