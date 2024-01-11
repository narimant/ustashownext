"use client"

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputElement from "../dashboard/comment/InputElement/InputElement";
import axios from "axios";
import { toast } from "react-toastify";

const CommentReplyForm = ({replayData}) => {
    
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
              src_id: replayData.src_id,
              parentId: replayData._id,
              typeOfModel: replayData.typeOfModel,
            };
            axios
              .post(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/new-comment`, formData, {
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
        label={`پاسخ به نظر ${replayData.displayName}`}
        id="body"
        state={comment}
        setState={setComment}
      />
      <div>
        <button
          onClick={sendCommentHandler}
          className="py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-800"
        >
         پاسخ دادن
        </button>
      </div>
        </div>
    </div>
    );
};

export default CommentReplyForm;