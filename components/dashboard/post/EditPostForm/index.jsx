"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InputElement from "../InputElement/InputElement";
import { toast } from "react-toastify";

const EditPostForm = ({ data }) => {
  const tagsRef = useRef();
  const [relatedPosts, setRelatedPosts] = useState(data.relatedPosts);
  const router = useRouter();
  const [title, setTitle] = useState(data.title);

  const [slug, setSlug] = useState(data.slug);
  const [image, setImage] = useState(data.image);
  const [imageAlt, setImageAlt] = useState(data.imageAlt);
  const [shortDesc, setShortDesc] = useState(data.shortDesc);
  const [body, setBody] = useState(data.body);
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
        tagList = [...tag, data.replace(/\s+/g, "_").toLowerCase()];
        setTag(tagList);
      }
      tagsRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTag(tag.filter((_, index) => index !== indexToRemove));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      slug: slug,
      image: image,
      imageAlt: imageAlt,
      shortDesc: shortDesc,
      body: body,
      relatedPosts: relatedPosts,
      type: "post",
      pageView: 0,
      tags: tag,
      published: published,
    };

    axios
      .patch(
        `https://distracted-mcnulty-orq2ubkyw.liara.run/api/update-post/${data._id}`,
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
        router.push("/dashboard/posts");
  
      })
      .catch((error) => console.log("error"));
  };

  // get all posts for show and select related posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postUrl = "https://distracted-mcnulty-orq2ubkyw.liara.run/api/posts";
    axios
      .get(postUrl)
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const postRelatedHandler = (e) => {
    if (e.target.checked) {
      setRelatedPosts((preValue) => [...preValue, e.target.value]);
    } else {
      const copyRelatePost = [...relatedPosts];
      const newRelPost = copyRelatePost.filter(
        (item) => item !== e.target.value
      );

      setRelatedPosts(newRelPost);
    }
  };


  return (
    <div className="rounded-lg p-5 bg-white shadow-light">
      <h2> ویرایش پست </h2>
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

          <div>
            <label htmlFor="published" className="cursor-pointer">
              وضعیت نمایش
            </label>
            <select
              id="published"
              className="bg-gray-100 rounded-lg w-full outline-none py-3 px-3"
              value={published.toString()}
              onChange={(e) => setPublished(e.target.value)}
            >
              <option value={true}>انتشار</option>
              <option value={false}>پیش نویس</option>
            </select>
          </div>

          <div className="tags flex flex-col gap-2">
            <h3>برچسب ها</h3>
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

          <div className="w-full h-auto ">
            <h4 className="py-5">انتخاب پست های مرتبط</h4>
            <div className="overflow-y-scroll min-h-52 h-full bg-gray-50 border border-gray-200 rounded-lg p-5">
              {posts.length > 0 &&
                posts.map((relPost, index) => (
                  <div className="flex gap-2 py-2" key={index}>
                    <span>
                      <input
                        type="checkbox"
                        onChange={postRelatedHandler}
                        checked={relatedPosts.includes(relPost._id)}
                        value={relPost._id}
                      />
                    </span>
                    <p>{relPost.title}</p>
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

export default EditPostForm;
