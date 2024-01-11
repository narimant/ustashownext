"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Warning from '../alerts/Warning';
import { FaReply } from "react-icons/fa";
import Image from 'next/image';
import CommentReplyForm from './CommentReplyForm';
import ReplayCommentData from './ReplayCommentData';
import { IoClose } from "react-icons/io5";
const CommentList = ({commentPorops}) => {
    const [data,setData]=useState([-1])
    const [loader,setLoader]=useState(false);
    const [commentForm,setCommentForm]=useState(false)
    const [count,setCount]=useState(0)
    const [showReplay,setShowReplay]=useState(false);
    useEffect(()=>{
        setLoader(true)
        axios.get(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-model-comments/${commentPorops.src_id}`)
        .then(data=>{
            
            setLoader(false)
            setData(data.data)
        }).catch(error=>{
                setLoader(false)
             
            })


            axios.get(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/comment-count/${commentPorops.src_id}`)
            .then(data=>setCount(data.data))
            .catch(error=>console.log(error))
    },[])

    return (
        <div className="bg-white h-auto rounded-lg shadow-light p-5 border-gray-700 mt-5">
        <h3 className="w-full text-xl font-medium relative"><span>نظرات</span> <span className=' py-1 px-2  border-b-red-400 border-b absolute  text-xs font-extralight   '>{count}</span></h3>
            {
            loader==true? 
            (
            <div className='flex justify-center items-center '>
                <div className='loader-blue h-6 w-6'></div>
                </div>
            )
            :
            (
            <div>
                {
                    data.length > 0 ? (
                    <>
                        {
                            data.map((comment,index)=>(
                                <div key={index} className='bg-gray-100 rounded-lg p-5 mb-5 '>
                                    <div className='flex justify-start items-start gap-5'>
                                        <div className='w-20'>
                                            <Image src="/images/user.png" width={100} height={100}  alt='user icon' className='rounded-full h-20 w-20'/>
                                        </div>
                                        <div className='flex-1'>
                                        <h3 className='flex justify-between items-center'>
                                            <span className='flex flex-col'>
                                               <span>{comment.displayName}</span> 
                                               <span className='text-xs font-extralight'>{comment.createdAt}</span>
                                            </span> 
                                            <button className=' hover:text-blue-600 ' onClick={(e)=>setCommentForm(!commentForm)}>{commentForm ? (<IoClose size={25} />) : (<FaReply />)}</button></h3>
                                        <div className='mt-5'>{comment.message}</div>
                                        <div>{comment.replayCount>0 && (
                                            <button onClick={(e)=>setShowReplay(!showReplay)}>نمایش پاسخ</button>
                                             )}
                                            
                                             {showReplay && (
                                                <ReplayCommentData parent_id={comment._id} />
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        commentForm && (

                                            <div>
                                                        <CommentReplyForm replayData={comment}/>
                                            </div>
                                        )
                                    }
             

                                    </div>
                            ))
                        }
                    </>
                    ):(<Warning title="هنوز نظری برای این پست ارسال نشده است" />)
                }
                </div>)
            }
        </div>
    );
};

export default CommentList;