"use client"

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const CreateBannerForm = () => {
  const router=useRouter();
    const imageUrlRef=useRef();
    const imageAltRef=useRef();
    const imageLinkRef=useRef();
    const imageSetuationRef=useRef();
    const auth=Cookies.get('auth')
    const submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            image: imageUrlRef.current.value,
            imageAlt: imageAltRef.current.value,
            situation: imageSetuationRef.current.value,
            link: imageLinkRef.current.value,
        }
       
        axios.post(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/new-middle-baners`,formData,{headers:{auth:auth}}).then(data=>{router.push('/dashboard/banners')}).catch(error=>console.log(error))
    }
  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
      <h2>بنر جدید</h2>
      <form onSubmit={(e)=>submitHandler(e)}>
        <div className="py-5 child:py-5">
        <div>
        <label htmlFor="image_addres" className="cursor-pointer">
            آدرس عکس
          </label>
          <input
          ref={imageUrlRef}
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
            ref={imageAltRef}
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
            ref={imageLinkRef}
            type="text"
            className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 "
            id="link_addres"
          />
        </div>

        <div>
        <label htmlFor="image_addres" className="cursor-pointer">
          وضعیت نمایش
          </label>
         <select   ref={imageSetuationRef} className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3 ">
            <option value={true}>روشن</option>
            <option value={false}>خاموش</option>
         </select>
        </div>
       
        </div>
        <button className="bg-blue-600 text-white  py-3 px-5 rounded-lg shadow-md hover:bg-blue-900">ذخیره</button>
      </form>
    </div>
  );
};

export default CreateBannerForm;
