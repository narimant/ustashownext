"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import toFormUrlEncoded from "@/utils/toUrlEncoded";
import { useRouter } from "next/navigation";
import axios from "axios";

const ShopSide = ({ url }) => {
  const [order, setOrder] = useState("");
  const [maxNumber, setMaxsNumber] = useState();
  const [minNumber, setMinNumber] = useState(0);
  const [type, setType] = useState("");
  const [categories, setCategories] = useState([-1]);
  const [selectCat, setSelectCat] = useState([]);
  const [searchInput,setSearchInput]=useState('');
  const router = useRouter();
  const searchHandler=(e)=>{
     const url=`/shop?keyword=${searchInput}`;
     setSearchInput('')
     router.push(url);
  }
  const searchInputHandler=(e)=>{
   
    if(e.key === "Enter")
    {
      const url=`/shop?keyword=${searchInput}`;
      setSearchInput('')
      router.push(url);
    }
  }
  useEffect(() => {
    if (url) {
      setOrder(url.orderBy);
      setMinNumber(url.min);
      setMaxsNumber(url.max);
      setType(url.type);
      setSelectCat(url.categories ? url.categories.split(',') : []);
      
    }

    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-all-category")
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);


  const orderHandler = () => {
    if (order) {
      url.orderBy = order;
      let toUrlEncoded = toFormUrlEncoded(url);
      router.push(`/shop?${toUrlEncoded}`);
    }
  };

  const typeofHandler = () => {
    if (type) {
      url.type = type;
      let toUrlEncoded = toFormUrlEncoded(url);
      router.push(`/shop?${toUrlEncoded}`);
    }
  };

  const priceSubmitHandler = () => {
    if (minNumber || maxNumber) {
      url.min = minNumber;
      url.max = maxNumber;
      let toUrlEncoded = toFormUrlEncoded(url);
      router.push(`/shop?${toUrlEncoded}`);
    }
  };

  const clearFilterHandler = () => {
    setOrder("");
    setMaxsNumber("");
    setMinNumber("");
    setType("");
    setSelectCat([]);
    setCategories([-1]);
    axios
      .get("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-all-category")
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
    router.push("/shop");
  };

  const selectcategoryHandler = (e) => {
    
    if(e.target.checked){
     
      setSelectCat([...selectCat, e.target.value])
    
    }else{
      setSelectCat((prevData)=>{
        return prevData.filter((item)=>item!==e.target.value)})
    }

  };

  const categoriesHandler = () => {

    url.categories = selectCat.toString();
    let toUrlEncoded = toFormUrlEncoded(url);
    router.push(`/shop?${toUrlEncoded}`);
  };

  return (
    <div>
      {/* -----search section----- */}
      <div className="bg-white dark:bg-slate-700  py-2 px-3 shadow-light rounded-lg relative mb-5">
        <input
          type="text"
          placeholder="در بین محصولات جست و جو کنید"
          className="w-full bg-gray-100 rounded-lg py-4 px-4 outline-none text-gray-700 dark:bg-transparent dark:border dark:border-slate-600"
          onChange={(e)=>setSearchInput(e.target.value)}
              onKeyDown={searchInputHandler}
        />
        <button onClick={searchHandler}>
          <IoIosSearch className="absolute top-6 left-4 w-6 h-6" />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-light py-5 px-3 mb-5 dark:bg-slate-600">
        <button
          className="w-full bg-green-600 text-white py-2  rounded-lg inline-block hover:bg-green-800 "
          onClick={clearFilterHandler}
        >
          پاک کردن تمام فیلترها
        </button>
      </div>

      {/* categories */}
      <div className="bg-white rounded-lg shadow-light py-5 px-3 mb-5 dark:bg-slate-600">
        <h2 className="text-lg"> انتخاب دسته بندی</h2>
        <div className="py-2">
          {categories[0] !== -1 &&
            categories.data.map((category, index) => (
              <div className="py-2 flex items-center gap-5" key={index}>
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  onChange={selectcategoryHandler}
                  value={category.slug}
                  checked={selectCat.includes(category.slug)}
                />

                <label>{category.title} </label>
              </div>
            ))}

          <button
            className="w-full bg-blue-600 text-white py-2  rounded-lg inline-block hover:bg-blue-800 mt-5"
            onClick={categoriesHandler}
          >
            ثبت
          </button>
        </div>
      </div>

      {/* order by */}

      {/* <div className="bg-white rounded-lg shadow-light py-5 px-3 ">
        <h2 className="text-lg">مرتب سازی</h2>
        <div className="py-2">
          <div className="py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              onChange={(e) => setOrder(e.target.value)}
              name="orderBy"
              value={"price"}
              checked={order === "price"}
            />
            <label>بر اساس قیمت</label>
          </div>
          <div className=" py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="orderBy"
              onChange={(e) => setOrder(e.target.value)}
              value={"byNumber"}
              checked={order === "byNumber"}
            />
            <label>بر اساس جدیدترین</label>
          </div>
          <div className="py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="orderBy"
              checked={order === "pageView"}
              value={"pageView"}
              onChange={(e) => setOrder(e.target.value)}
            />
            <label>بر اساس پر بازدیدترین</label>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2  rounded-lg inline-block hover:bg-blue-800 mt-5"
            onClick={orderHandler}
          >
            ثبت
          </button>
        </div>
      </div> */}

      {/*  type of */}
      <div className="bg-white rounded-lg shadow-light py-5 px-3 mt-5 dark:bg-slate-600">
        <h2 className="text-lg">مرتب سازی</h2>
        <div className="py-2">
          <div className="py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              onChange={(e) => setType("app")}
              name="type"
              value={type}
            
            />
            <label>اپلکیشن ها </label>
          </div>
          <div className=" py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="type"
              onChange={(e) => setType("book")}
              value={type}
             
            />
            <label>کتاب </label>
          </div>
          <div className="py-2 flex items-center gap-5">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="radio"
              name="type"
              value={type}
              onChange={(e) => setType("gr")}
            />
            <label> فایل گرافیکی </label>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2  rounded-lg inline-block hover:bg-blue-800 mt-5"
            onClick={typeofHandler}
          >
            ثبت
          </button>
        </div>
      </div>

      {/* price */}
      {/* <div className="bg-white rounded-lg shadow-light py-5 px-3 mt-5">
        <h2 className="text-lg"> مرتب سازی بر اساس قیمت</h2>
        <div className="py-2">
          <input
            type="number"
            value={minNumber}
            placeholder="کمتررین قیمت"
            onChange={(e) => setMinNumber(e.target.value)}
            className="w-full bg-gray-100 rounded-lg py-3 px-4 outline-none transition-all duration-200 ease-in-out  text-gray-700"
          />
          <input
            type="number"
            value={maxNumber}
            placeholder="بیشترین قیمت"
            onChange={(e) => setMaxsNumber(e.target.value)}
            className="mt-2 w-full bg-gray-100 rounded-lg py-3 px-4 outline-none transition-all duration-200 ease-in-out   text-gray-700"
          />
          <button
            className="w-full bg-blue-600 text-white py-2  rounded-lg inline-block hover:bg-blue-800 mt-5"
            onClick={priceSubmitHandler}
          >
            ثبت
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ShopSide;
