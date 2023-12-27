"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CategoryMenu = () => {
   
    const router=usePathname();

    return (
        <div className='w-full'>
                <div className='child:py-2 child:px-3 child:ml-5 py-5'>
                    <Link href="/dashboard/category" className={`${router==='/dashboard/category' && 'border-b border-purple-600'} `} >همه </Link>
                    <Link href="/dashboard/category/create"  className={`${router==='/dashboard/category/create' && 'border-b border-purple-600'} `} >ایجاد دسته بندی </Link>
                </div>
             
            </div>
    );
};

export default CategoryMenu;