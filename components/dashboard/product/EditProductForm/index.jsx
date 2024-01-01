"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputElement from "../InputElement/InputElement";
import { toast } from "react-toastify";

const EditProductForm = ({ data }) => {
  const tagsRef = useRef();
  const featuresRef=useRef();
 
  const router = useRouter();
  const [title, setTitle] = useState(data.title);
  const [relatedProduct, setRelatedProduct] = useState(data.relatedProducts);
  const [slug, setSlug] = useState(data.slug);
  const [image, setImage] = useState(data.image);
  const [imageAlt, setImageAlt] = useState(data.imageAlt);
  const [shortDesc, setShortDesc] = useState(data.shortDesc);
  const [body, setBody] = useState(data.body);
  const [mainFile, setMainFile] = useState(data.mainFile);
  const [price, setPrice] = useState(data.price);
  const [typeOfProduct, setTypeOfProduct] = useState(data.typeOfProduct);
  const [categories, setCategories] = useState(data.categories);
  const [features, setFeatures] = useState(data.features);
  // const seoTitleRef=useState();
  // const seoDescriptionRef=useState();
  const [tag, setTag] = useState(data.tags);
  const [published, setPublished] = useState(data.published);

  // TAG MANAGING

  const tagSuber = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let tagList = [...tag];
      const data = tagsRef.current.value;
      if (data.length > 0) {
       const find= tagList.find(element=>element===data)
       if(!find) {
          tagList = [...tag, data.replace(/\s+/g, "_").toLowerCase()];
          setTag(tagList);
        }
       
      }
      tagsRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTag(tag.filter((_, index) => index !== indexToRemove));
  };



  // features MANAGING
  const featureSuber = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let featureList = [...features];
      const data = featuresRef.current.value;
      if (data.length > 0) {
        featureList = [...features, data.toLowerCase()];
        setFeatures(featureList);
      }
      featuresRef.current.value = "";
    }
  };
  const featureDeleter = (indexToRemove) => {
    setFeatures(features.filter((_, index) => index !== indexToRemove));
  };



  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      slug: slug,
      mainFile:mainFile,
      image: image,
      imageAlt: imageAlt,
      price:price,
      shortDesc: shortDesc,
      body: body,
      relatedProducts: relatedProduct,
      typeOfProduct: typeOfProduct,
      pageView: 0,
      buyNumber:0,
      features:features,
      categories:categories,
      tags: tag,
      published: published,
    };

    axios
      .patch(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/update-product/${data._id}`,
        formData
      )
      .then((data) => {
        toast.success("پست مورد نظر با موفقیت ایجاد شد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //router.push("/dashboard/posts");
      })
      .catch((error) => console.log(error));
  };

  // get all posts for show and select related posts
  const [products, setProducts] = useState([]);
  const [category,setCategory]=useState([]);
  useEffect(() => {
    const peoductsUrl = "https://distracted-mcnulty-orq2ubkyw.liara.run/api/products";
    axios
      .get(peoductsUrl)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));


      const categoryUrl = "https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-all-category";
      axios
        .get(categoryUrl)
        .then((data) => {
          setCategory(data.data);
        })
        .catch((error) => console.log(error));

  }, []);
  const productRelatedHandler = (e) => {
    if (e.target.checked) {
      setRelatedProduct((preValue) => [...preValue, e.target.value]);
    } else {
      const copyRelatePost = [...relatedPost];
      const newRelPost = copyRelatePost.filter(
        (item) => item !== e.target.value
      );

      setRelatedProduct(newRelPost);
    }
  };

  const relateCategoryHandler = (e) => {
 
    if (e.target.checked) {
      setCategories((preValue) => [...preValue, e.target.value]);
    } else {
      const copyRelatePost = [...categories];
      const newRelPost = copyRelatePost.filter(
        (item) => item !== e.target.value
      );

      setCategories(newRelPost);
  };
}

  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
    <h2> ویرایش محصول </h2>
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="py-5 child:py-5 mb-5">
        <InputElement
          label="عنوان"
          id="title"
          state={title}
          setState={setTitle}
        />
        <InputElement
          label="اسلاگ پست"
          id="slug"
          direction="ltr"
          state={slug}
          setState={setSlug}
        />
        <InputElement
          inputType="textarea"
          label="متن کامل پست"
          id="body"
          state={body}
          setState={setBody}
        />

        <InputElement
          label="متن کوتاه پست"
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
        <InputElement
          label="لینک فایل فروش "
          id="mainFile"
          state={mainFile}
          setState={setMainFile}
        />
        <div>
          <InputElement
            label=" قیمت  "
            id="price"
            state={price}
            setState={setPrice}
          />

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


        <label htmlFor="published" className="cursor-pointer">
           نوع محصول
          </label>
          <select
            id="published"
            className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3"
            value={typeOfProduct}
            onChange={(e) => setTypeOfProduct(e.target.value)}
          >
            <option value="book">کتاب</option>
            <option value="app"> اپلکیشن</option>
            <option value="gr"> فایل گرافیکی</option>
          </select>


          <div className="tags flex flex-col gap-2">
          <h3> تگ ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                type="text"
                onKeyDown={tagSuber}
                ref={tagsRef}
                className=" text-sm outline-none focus:border-indigo-600 rounded border-2 border-zinc-700 bg-transparent w-full p-2"
                placeholder="تگ را وارد کنید و انتر بزنید..."
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {tag.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border border-indigo-900"
                  >
                    <i
                      className="text-indigo-500 flex items-center"
                      onClick={() => {
                        tagDeleter(index);
                      }}
                    >
                      <span className="text-zinc-400 text-xs">{t}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>   

        <div className="tags flex flex-col gap-2">
          <h3> ویژگی ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                type="text"
                onKeyDown={featureSuber}
                ref={featuresRef}
                className=" text-sm outline-none focus:border-indigo-600 rounded border-2 border-zinc-700 bg-transparent w-full p-2"
                placeholder="تگ را وارد کنید و انتر بزنید..."
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {features.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border border-indigo-900"
                  >
                    <i
                      className="text-indigo-500 flex items-center"
                      onClick={() => {
                        featureDeleter(index);
                      }}
                    >
                      <span className="text-zinc-400 text-xs">{t}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-auto ">
          <h4 className="py-5">انتخاب  محصولات مرتبط</h4>
          <div className="overflow-y-scroll min-h-52 h-full bg-gray-50 border border-gray-200 rounded-lg p-5">
            {products.length > 0 &&
              products.map((relatedProductitem, index) => (
                <div className="flex gap-2 py-2" key={index}>
                  <span>
                    <input
                      type="checkbox"
                      checked={relatedProduct.includes(relatedProductitem._id)}
                      onChange={productRelatedHandler}
                      value={relatedProductitem._id}
                    />
                  </span>
                  <p>{relatedProductitem.title}</p>
                </div>
              ))}
          </div>
        </div>



        


        <div className="w-full h-auto ">
          <h4 className="py-5">انتخاب  دسته بندی </h4>
          <div className="overflow-y-scroll min-h-52 h-full bg-gray-50 border border-gray-200 rounded-lg p-5">
            {category.length > 0 &&
              category.map((relatedCategory, index) => (
                <div className="flex gap-2 py-2" key={index}>
                  <span>
                    <input
                      type="checkbox"
                      checked={categories.includes(relatedCategory._id)}
                      onChange={relateCategoryHandler}
                      value={relatedCategory._id}
                    />
                  </span>
                  <p>{relatedCategory.title}</p>
                </div>
              ))}
          </div>
        </div>


      </div>

      <button className="bg-blue-600 text-white  py-3 px-5 rounded-lg shadow-md hover:bg-blue-900">
        ذخیره
      </button>
    </form>
  </div>
  );
};

export default EditProductForm;
