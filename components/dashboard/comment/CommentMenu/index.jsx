"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CommentMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/comments" className={`${router==='/dashboard/comments' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/comments/create"  className={`${router==='/dashboard/comments/create' && 'border-b border-purple-600'} `} >ایجاد نظر </Link>
                </div>
             
            </div>
    );
};

export default CommentMenu;