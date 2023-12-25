"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PostMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/posts" className={`${router==='/dashboard/posts' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/posts/create"  className={`${router==='/dashboard/posts/create' && 'border-b border-purple-600'} `} >ایجاد پست </Link>
                </div>
             
            </div>
    );
};

export default PostMenu;