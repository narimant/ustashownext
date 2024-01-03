"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const RegisterForm = () => {

  const [loader,setLoader]=useState(false);
  const router=useRouter();

  const formSubmiter = (e) => {
    setLoader(true);
    const formData = {
      displayName: watch("displayName"),
      email: watch("email"),
      password: watch("password"),
      rePassword: watch("rePassword"),
    };
    const url="http://localhost:27017/api/new-user"
  axios.post(url,formData)
  .then(data=>{
    Cookies.set("auth",data.data.auth)
    setLoader(false);
    router.push('/')
  })
  .catch(error=>{
    setLoader(false);
    toast.error(error.response.data.msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
   });
  })
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  return (
    <div className="container mx-auto flex justify-center items-center p-8">
      <div className="bg-white rounded-lg shadow-light w-96 h-auto flex justify-center items-center flex-col ">
        <div className="my-5">
          <Link href="/">
            <Image src="/images/logo.png"  width={120} height={60} alt="logo" priority={true}  />
          </Link>
        </div>
        <h3 className="text-2xl text-center py-3">عضویت</h3>
        <p className="text-center">
            قبلا ثبت نام کرده اید ؟ 
            <Link href="/login" className="px-2 text-blue-600">وارد شوید</Link>
            </p>
        <form
          onSubmit={handleSubmit(formSubmiter)}
          className="container mx-auto flex justify-center flex-col items-center p-5 gap-5"
        >
          <div className="w-full">
            <input
              autoComplete="off"
              type="text"
              placeholder="نام  نمایشی "
              className="w-full p-4 bg-gray-100 rounded-lg outline-none"
              {...register("displayName", {
                required: true,
                maxLength: 20,
                minLength: 6,
              })}
            />
            {errors.displayName && errors.displayName.type == "maxLength" && (
              <div className="text-rose-500 text-sm">
                نام کاربری باید کمتر از 20 کاراکتر باشد
              </div>
            )}
            {errors.displayName && errors.displayName.type == "required" && (
              <div className="text-rose-500 text-sm">نام کاربری الزامی است</div>
            )}
            {errors.displayName && errors.displayName.type == "minLength" && (
              <div className="text-rose-500 text-sm">
                نام کاربری باید بیشتر از 5 کاراکتر باشد
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              autoComplete="off"
              type="email"
              placeholder="ایمیل"
              className="w-full p-4 bg-gray-100 rounded-lg outline-none"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            {errors.email && errors.email.type == "required" && (
              <div className="text-rose-500 text-sm">نام کاربری الزامی است</div>
            )}

            {errors.email && errors.email.type == "pattern" && (
              <div className="text-rose-500 text-sm">فرمت ایمیل صحیح نیست</div>
            )}
          </div>

          <div className="w-full">
            <input
              autoComplete="off"
              type="password"
              placeholder="رمز عبور"
              className="w-full p-4 bg-gray-100 rounded-lg outline-none"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 6,
              })}
            />
            {errors.password && errors.password.type == "maxLength" && (
              <div className="text-rose-500 text-sm">
                رمز عبور باید کمتر از 20 کاراکتر باشد
              </div>
            )}
            {errors.password && errors.password.type == "required" && (
              <div className="text-rose-500 text-sm">رمز عبور الزامی است</div>
            )}
            {errors.password && errors.password.type == "minLength" && (
              <div className="text-rose-500 text-sm">
                رمز عبور باید بیشتر از 5 کاراکتر باشد
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              autoComplete="off"
              type="password"
              placeholder="تکرار رمز عبور"
              className="w-full p-4 bg-gray-100 rounded-lg outline-none"
              {...register("rePassword", {
                required: true,
                validate: (val) => val == watch("password"),
              })}
            />

            {errors.rePassword && errors.rePassword.type == "required" && (
              <div className="text-rose-500 text-sm">
                تکرار رمز عبور الزامی است
              </div>
            )}

            {errors.rePassword && errors.rePassword.type == "validate" && (
              <div className="text-rose-500 text-sm">
                تکرار رمز عبور صحیح نیست
              </div>
            )}
          </div>

          <button
            className="bg-blue-500 text-white rounded-lg transition-all duration-500  hover:bg-blue-600 py-3 px-4 w-full"
            type="submit"
          >
       {loader ? (<span className="loader h-6 w-6"></span>) : ( <span>   ورود</span>) }  
          </button>
        </form>
      
      </div>
    </div>
  );
};

export default RegisterForm;
