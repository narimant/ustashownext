"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaReply } from "react-icons/fa";
import CommentReplyForm from './CommentReplyForm';
import Image from 'next/image';
const ReplayCommentData = ({parent_id}) => {
    const [replayData,setReplayData]=useState([-1]);
    const [showReplay,setShowReplay]=useState(false);
    const [commentForm,setCommentForm]=useState(false)
  
   useEffect(()=>{

            axios.get(`https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-comment-children/${parent_id}`)
            .then(data=>{
             
             setReplayData(data.data)
            
            }).catch(error=>{
                  console.log(error);
                 
                })
        },[showReplay])


        return (
        <div>
            {/* {(replayData[0]!==-1 && replayData.length >0) ?
            (
                    <div className='flex justify-items-center items-center'>
                        <div className='loader-blue h-6 w-6'></div>
                        </div>
            )
            :
            ( */}
                <div>
                    
                    {
                             replayData.map((comment,index)=>(
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
                                            <button className=' hover:text-blue-600 ' onClick={(e)=>setCommentForm(!commentForm)}><FaReply /></button></h3>
                                        <div className='mt-5'>{comment.message}</div>
                                        <div>{comment.replayCount>0 && (
                                            <button onClick={(e)=>setShowReplay(!showReplay)}>نمایش پاسخ</button>
                                             )}
                                             
                                             {showReplay && (
                                                <>
                                                <ReplayCommentData parentId={comment._id} />
                                                </>
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
                </div>
            {/* ) 
            } */}
        </div>
    );
};

export default ReplayCommentData;