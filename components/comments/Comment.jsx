"use client"
import { useState } from "react";
import InputElement from "../dashboard/post/InputElement/InputElement";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Comment = ({commentPorops}) => {

    const [comment, setComment] = useState("");
    const [auth, setAuth] = useState(Cookies.get("auth"));
    const router = useRouter();
    const sendCommentHandler = () => {
    if (auth === undefined || auth.length < 10) {
        Cookies.set("auth", "", { expires: 0 });
        router.push("/login");
      } else {
        const formData = {
          message: comment,
          src_id: commentPorops.src_id,
          parentId: "",
          typeOfModel: commentPorops.typeOfModel,
        };
        axios
          .post(`http://localhost:27017/api/new-comment`, formData, {
            headers: { auth: auth },
          })
          .then(data=>{
            setComment('')
          toast.success(" پیام شما ثبت شد و بعد از تایید نمایش داده خواهد شد" , {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          })
          .catch(error=>{
            
            toast.error(error.response.data.msg , {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    };
    return (
        <div className="bg-white h-auto rounded-lg shadow-light p-5 border-gray-700 mt-5">
        <div className='min-h-20'>
        <InputElement
        inputType="textarea"
        label=" متن نظر"
        id="body"
        state={comment}
        setState={setComment}
      />
      <div>
        <button
          onClick={sendCommentHandler}
          className="py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-800"
        >
          ارسال نظر
        </button>
      </div>
        </div>
    </div>
    );
};

export default Comment;