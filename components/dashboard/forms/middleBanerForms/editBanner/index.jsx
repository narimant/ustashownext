"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const EditBannerForm = ({ data }) => {

const URL="https://distracted-mcnulty-orq2ubkyw.liara.run/api/update-middle-baners";

  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [situation, setSituation] = useState(false);
  const [link, setLink] = useState("");
  const router=useRouter();  
  const auth=Cookies.get('auth')
  useEffect(() => {
    setImage(data.image);
    setImageAlt(data.imageAlt);
    setSituation(data.situation);
    setLink(data.link);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const fromData={
      bannerId:data._id,
      image,
      imageAlt,
      situation,
      link
    }
    axios.patch(URL,fromData,{headers:{auth:auth}}).then(d=>{
      router.push('/dashboard/banners');
   
    }
      ).catch(e=>console.log('error'))
  };
  return (
    <div>
      <div className="rounded-lg p-5 bg-white shadow-light">
        <h2>آپدیت بنر</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="py-5 child:py-5">
            <div>
              <label htmlFor="image_addres" className="cursor-pointer">
                آدرس عکس
              </label>
              <input
              value={image}
              onChange={(e)=>setImage(e.target.value)}
                type="text"
                className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 ltr "
                id="image_addres"
              />
            </div>

            <div>
              <label htmlFor="image_alt" className="cursor-pointer">
                آلت عکس
              </label>
              <input
                  onChange={(e)=>setImageAlt(e.target.value)}
              value={imageAlt}
                type="text"
                className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 "
                id="image_alt"
              />
            </div>

            <div>
              <label htmlFor="link_addres" className="cursor-pointer">
                لینک
              </label>
              <input
                  onChange={(e)=>setLink(e.target.value)}
              value={link}
                type="text"
                className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 "
                id="link_addres"
              />
            </div>

            <div>
              <label htmlFor="image_addres" className="cursor-pointer">
                وضعیت نمایش    
              </label>
         
              <select     onChange={(e)=>setSituation(e.target.value)} className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 " defaultValue={situation} >
                <option value={true} >روشن</option>
                <option value={false}>خاموش</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white  py-3 px-5 rounded-lg shadow-md hover:bg-blue-900">
            ذخیره
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBannerForm;
